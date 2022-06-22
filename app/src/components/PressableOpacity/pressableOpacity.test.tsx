import PressableOpacity, { PressableOpacityProps } from './pressableOpacityView';
import { render as testRender, fireEvent } from '@testing-library/react-native';
import React from 'react';
import TextView from '../Text';

const render = (props?: Partial<PressableOpacityProps>) =>
  testRender(
    <PressableOpacity {...props}>
      <TextView>pressableOpacity</TextView>
    </PressableOpacity>,
  );

it('renders', () => {
  const { getByText } = render();
  expect(getByText('pressableOpacity')).toBeTruthy();
});

it('runs function onPress', () => {
  const onPress = jest.fn();
  const { getByText } = render({ onPress });
  fireEvent.press(getByText('pressableOpacity'));
  expect(onPress).toHaveBeenCalled();
});

it('does not run function onPress when disabled', () => {
  const onPress = jest.fn();
  const { getByText } = render({ onPress, disabled: true });
  fireEvent.press(getByText('pressableOpacity'));
  expect(onPress).not.toHaveBeenCalled();
});
