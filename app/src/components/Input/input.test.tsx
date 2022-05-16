import Input, {InputProps} from './inputView';
import {render as testRender} from '@testing-library/react-native';
import React from 'react';
import Text from '../Text';

const onChangeText = jest.fn();

const render = (props: Partial<InputProps>) =>
  testRender(<Input value={'Test'} onChangeText={onChangeText} {...props} />);

it('renders correctly', () => {
  const {getByText} = render({label: 'Email'});
  expect(getByText('Email')).toBeTruthy();
});

it('renders with icon', () => {
  const {getByText} = render({label: 'Email', icon: <Text>Test</Text>});
  expect(getByText('Test')).toBeTruthy();
});
