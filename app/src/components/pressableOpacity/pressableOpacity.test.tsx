import PressableOpacity, { PressableOpacityProps } from './pressableOpacityView';
import { render as testRender } from '@testing-library/react-native';
import { Text } from 'react-native';
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
