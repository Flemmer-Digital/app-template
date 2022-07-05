import React from 'react';
import Checkbox, { CheckboxProps } from './checkbox';
import { render as testRender, fireEvent } from '@testing-library/react-native';

const setChecked = jest.fn();

const render = (props: Partial<CheckboxProps>) => {
  return testRender(<Checkbox checked={false} label="checkbox" onPress={setChecked} {...props} />);
};

it('renders correctly', () => {
  const { getByText } = render({});
  expect(getByText('checkbox')).toBeTruthy();
});

it('runs onPress when pressed', () => {
  const { getByText } = render({});
  fireEvent.press(getByText('checkbox'));
  expect(setChecked).toHaveBeenCalled();
});

it('does not run onPress if disabled', () => {
  const { getByText } = render({ disabled: true });
  fireEvent.press(getByText('checkbox'));
  expect(setChecked).not.toHaveBeenCalled();
});
