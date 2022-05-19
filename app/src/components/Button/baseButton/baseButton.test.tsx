import React from 'react';
import Button, {ButtonProps} from './baseButton';
import {render as testRender, fireEvent} from '@testing-library/react-native';

const onPress = jest.fn();

const render = (props?: Partial<ButtonProps>) =>
  testRender(<Button text="Button" onPress={onPress} {...props} />);

it('renders correctly with text', () => {
  const {getByText} = render();
  expect(getByText('Button')).toBeTruthy();
});

it('runs onPress', () => {
  const {getByText} = render({onPress});
  fireEvent.press(getByText('Button'));
  expect(onPress).toHaveBeenCalled();
});

it('does not run onPress if disabled', () => {
  const {getByText} = render({onPress, disabled: true});
  fireEvent.press(getByText('Button'));
  expect(onPress).not.toHaveBeenCalled();
});
