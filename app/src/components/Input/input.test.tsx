import Input, {InputProps} from './inputView';
import {render as testRender, fireEvent} from '@testing-library/react-native';
import React from 'react';
import Text from '../Text';

const onChangeText = jest.fn();

const render = (props?: Partial<InputProps>) =>
  testRender(<Input textInputProps={{onChangeText}} {...props} />);

it('renders with icon', () => {
  const {getByText} = render({label: 'Email', icon: <Text>Test</Text>});
  expect(getByText('Test')).toBeTruthy();
});

it('can change text', () => {
  const {getByTestId} = render();
  const input = getByTestId('input');
  fireEvent.changeText(input, 'Testing');
  expect(onChangeText).lastCalledWith('Testing');
});

it('can be disabled', () => {
  const {getByTestId} = render({
    textInputProps: {editable: false},
  });
  const input = getByTestId('input');
  expect(input.props.editable).toBe(false);
});

it('can be secure', () => {
  const {getByTestId} = render({
    textInputProps: {secureTextEntry: true},
  });
  const input = getByTestId('input');
  expect(input.props.secureTextEntry).toBe(true);
});
