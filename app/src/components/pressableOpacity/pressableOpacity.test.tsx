import PressableOpacity from './pressableOpacityView';
import { render as testRender } from '@testing-library/react-native';
import { Text } from 'react-native';
import React from 'react';
import TextView from '../Text';

const render = (props: any) =>
  testRender(
    <PressableOpacity style={props.styles}>
      <TextView>pressableOpacity</TextView>
    </PressableOpacity>,
  );

it('renders', () => {
  const { getByText } = render({});
  expect(getByText('pressableOpacity')).toBeTruthy();
});
