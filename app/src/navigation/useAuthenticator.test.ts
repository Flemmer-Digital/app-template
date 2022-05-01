import {act, renderHook} from '@testing-library/react-hooks';

import {authenticate} from 'src/modules/authentication/authenticate';

import useAuthenticator from './useAuthenticator';

jest.mock('@apollo/client');
jest.mock('modules/authentication/authenticate');
const mockAuthenticate = authenticate as jest.Mock;

it('it automatically starts a stored token authenticate on render', async () => {
  mockAuthenticate.mockResolvedValue({token: 'someToken'});

  const {result, waitForNextUpdate} = renderHook(() => useAuthenticator());

  expect(result.current.authenticated).toBe(false);
  expect(result.current.authenticating).toBe(true);
  expect(result.current.error).toBe(null);

  await waitForNextUpdate();

  expect(result.current.authenticated).toBe(true);
  expect(result.current.authenticating).toBe(false);
  expect(result.current.error).toBe(null);

  expect(mockAuthenticate).toHaveBeenCalledTimes(1);
  expect(mockAuthenticate).toHaveBeenCalledWith({storedTokenOnly: true});
});

it('handles an error on stored token authenticate', async () => {
  const error = new Error('an Auth error');
  mockAuthenticate.mockRejectedValue(error);

  const {result, waitForNextUpdate} = renderHook(() => useAuthenticator());

  expect(result.current.authenticated).toBe(false);
  expect(result.current.authenticating).toBe(true);
  expect(result.current.error).toBe(null);

  await waitForNextUpdate();

  expect(result.current.authenticated).toBe(false);
  expect(result.current.authenticating).toBe(false);
  expect(result.current.error).toBe('Error: an Auth error');

  expect(mockAuthenticate).toHaveBeenCalledTimes(1);
});

it('exposes a manual athenticate method that calls authenticate without token', async () => {
  mockAuthenticate.mockRejectedValue(new Error('an Auth error'));
  const {result, waitForNextUpdate} = renderHook(() => useAuthenticator());
  await waitForNextUpdate();

  expect(result.current.authenticated).toBe(false);
  expect(result.current.authenticating).toBe(false);
  expect(result.current.error).toBe('Error: an Auth error');

  expect(mockAuthenticate).toHaveBeenCalledTimes(1);
  mockAuthenticate.mockResolvedValue({token: 'someToken'});

  act(() => {
    result.current.authenticate();
  });

  await waitForNextUpdate();

  expect(result.current.authenticated).toBe(true);
  expect(result.current.authenticating).toBe(false);
  expect(result.current.error).toBe('Error: an Auth error'); // The error is not reset.

  expect(mockAuthenticate).toHaveBeenCalledTimes(2);
  expect(mockAuthenticate.mock.calls[0][0]).toEqual({storedTokenOnly: true});
  expect(mockAuthenticate.mock.calls[1][0]).toEqual({storedTokenOnly: false});
});

it('handles errors raised when manually authenticating', async () => {
  mockAuthenticate.mockRejectedValue(new Error('an Auth error'));
  const {result, waitForNextUpdate} = renderHook(() => useAuthenticator());
  await waitForNextUpdate();

  expect(result.current.authenticated).toBe(false);
  expect(result.current.authenticating).toBe(false);
  expect(result.current.error).toBe('Error: an Auth error');

  expect(mockAuthenticate).toHaveBeenCalledTimes(1);
  const error = new Error('a different Auth error');
  mockAuthenticate.mockRejectedValue(error);

  act(() => {
    result.current.authenticate();
  });

  await waitForNextUpdate();

  expect(result.current.authenticated).toBe(false);
  expect(result.current.authenticating).toBe(false);
  expect(result.current.error).toBe('Error: a different Auth error');

  expect(mockAuthenticate).toHaveBeenCalledTimes(2);
  expect(mockAuthenticate.mock.calls[0][0]).toEqual({storedTokenOnly: true});
  expect(mockAuthenticate.mock.calls[1][0]).toEqual({storedTokenOnly: false});
});

it('does not prevent access to the app if notification registration fails', async () => {
  mockAuthenticate.mockResolvedValue({token: 'someToken'});

  const {result, waitForNextUpdate} = renderHook(() => useAuthenticator());
  await waitForNextUpdate();

  expect(result.current.authenticated).toBe(true);
  expect(result.current.authenticating).toBe(false);
});
