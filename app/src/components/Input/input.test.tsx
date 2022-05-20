import Input, {InputProps} from './inputView';
import {render as testRender, fireEvent} from '@testing-library/react-native';
import React from 'react';
import Text from '../Text';

const onChangeText = jest.fn();

const render = (props?: Partial<InputProps>) =>
  testRender(
    <Input label="email" onChangeText={onChangeText} value={''} {...props} />,
  );

it('renders with icon', () => {
  const {getByText} = render({icon: <Text>Test</Text>});
  expect(getByText('Test')).toBeTruthy();
});

it('can change text', () => {
  const {getByTestId} = render();
  const input = getByTestId('input');
  fireEvent.changeText(input, 'Testing');
  expect(onChangeText).lastCalledWith('Testing');
});

it('can be disabled', () => {
  const dontChangeText = jest.fn();
  const {getByTestId} = render({disabled: true, onChangeText: dontChangeText});
  const input = getByTestId('input');
  fireEvent.changeText(input, 'Disabled');
  expect(onChangeText).not.toHaveBeenCalled();
});

it('can be secure', () => {
  const {getByTestId} = render({
    secureTextEntry: true,
  });
  const input = getByTestId('input');
  expect(input.props.secureTextEntry).toBe(true);
});

it('can be multiline', () => {
  const {getByTestId} = render({
    multiLine: true,
  });
  const input = getByTestId('input');
  expect(input.props.multiline).toBe(true);
});
