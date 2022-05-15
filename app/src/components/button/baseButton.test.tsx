import React from 'react';
import Button, {ButtonProps} from './baseButton';
import {render as testRender, fireEvent} from '@testing-library/react-native';

const render = (props: ButtonProps) =>
  testRender(<Button text="Button" {...props} />);

it('renders correctly with text', () => {
  const {getByText} = render({onPress: () => {}});
  expect(getByText('Button')).toBeTruthy();
});

it('runs onPress', () => {
  const onPress = jest.fn();
  const {getByText} = render({onPress});
  fireEvent.press(getByText('Button'));
  expect(onPress).toHaveBeenCalled();
});

it('does not run onPress if disabled', () => {
  const onPress = jest.fn();
  const {getByText} = render({onPress, disabled: true});
  fireEvent.press(getByText('Button'));
  expect(onPress).not.toHaveBeenCalled();
});
