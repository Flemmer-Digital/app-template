import Input, {InputProps} from './inputView';
import Text from '../text';
import {render as testRender} from '@testing-library/react-native';
import React from 'react';

const onChangeText = jest.fn();

const render = (props: Partial<InputProps>) =>
  testRender(<Input value={'Test'} onChangeText={onChangeText} {...props} />);

it('renders correctly', () => {
  const {getByText} = render({label: 'Email'});
  expect(getByText('Email')).toBeTruthy();
});
