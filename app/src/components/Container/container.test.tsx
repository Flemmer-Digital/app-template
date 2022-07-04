import Container, { ContainerProps } from './container';
import { render as testRender, fireEvent } from '@testing-library/react-native';
import React from 'react';
import Primary from '../Button/primary/index';

const onPress = jest.fn();

const render = (props?: Partial<ContainerProps>) =>
  testRender(
    <Container {...props}>
      <Primary onPress={onPress} text="Button" />
    </Container>,
  );

it('renders container', () => {
  const { getByTestId, getByText } = render({ hasKeyboardAvoidingView: true });
  expect(getByText('Button')).toBeTruthy();
  expect(getByTestId('containerAvoidingView')).toBeTruthy();
});

it('removes keybordAvoiding View', () => {
  const { queryByTestId } = render();
  expect(queryByTestId('containerAvoidingView')).toBeFalsy();
});

it('does not block buttons', () => {
  const { getByText } = render({ hasKeyboardAvoidingView: true });
  fireEvent.press(getByText('Button'));
  expect(onPress).toHaveBeenCalled();
});
