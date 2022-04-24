import Container from './container';
import { render as testRender } from '@testing-library/react-native';
import { Text } from 'react-native';
import React from 'react';

const render = (props: any) =>
  testRender(
    <Container hasKeyboardAvoidingView={props.hasKAV}>
      <Text>Test</Text>
    </Container>,
  );

it('renders container', () => {
  const { getByTestId } = render({ hasKAV: true });
  expect(getByTestId('safe-area')).toBeTruthy();
  expect(getByTestId('containerAvoidingView')).toBeTruthy();
});

it('removes keybordAvoiding View', () => {
  const { queryByTestId } = render({ hasKAV: false });
  expect(queryByTestId('containerAvoidingView')).toBeNull();
});
