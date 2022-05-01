import {render as testRender} from '@testing-library/react-native';
import SignInView from './SignInView';
import React from 'react';
import useAuthenticator from 'app/src/navigation/useAuthenticator';

const render = () =>
  testRender(<SignInView authenticator={useAuthenticator()} />);

it('renders and shows sign in text', () => {
  const {getByText} = render();
  expect(getByText('Sign In/Register')).toBeTruthy();
});
