import Container from './container';
import { render as testRender, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';
import React from 'react';
import Primary from '../Button/primary/index';

const onPress = jest.fn();

const render = (props: any) =>
  testRender(
    <Container hasKeyboardAvoidingView={props.hasKAV}>
      <Text>Test</Text>
      <Primary onPress={onPress} text="Button" />
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

it('does not block buttons', () => {
  const { getByText } = render({ hasKAV: false });
  fireEvent.press(getByText('Button'));
  expect(onPress).toHaveBeenCalled();
});
