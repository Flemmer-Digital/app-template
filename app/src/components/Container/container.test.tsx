import Container, { ContainerProps } from './container';
import { render as testRender, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';
import React from 'react';
import Primary from '../Button/primary/index';

const onPress = jest.fn();

const render = (props?: Partial<ContainerProps>) =>
  testRender(
    <Container {...props}>
      <Text>Test</Text>
      <Primary onPress={onPress} text="Button" />
    </Container>,
  );

it('renders container', () => {
  const { getByTestId } = render({ hasKeyboardAvoidingView: true });
  expect(getByTestId('safe-area')).toBeTruthy();
  expect(getByTestId('containerAvoidingView')).toBeTruthy();
});

it('removes keybordAvoiding View', () => {
  const { queryByTestId } = render();
  expect(queryByTestId('containerAvoidingView')).toBeNull();
});

it('does not block buttons', () => {
  const { getByText } = render({ hasKeyboardAvoidingView: true });
  fireEvent.press(getByText('Button'));
  expect(onPress).toHaveBeenCalled();
});
