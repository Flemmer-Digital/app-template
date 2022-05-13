import Input, {InputProps} from './inputView';
import Text from '../text';
import {render as testRender} from '@testing-library/react-native';
import React from 'react';

const render = (props: Partial<InputProps>) => testRender(<Input {...props} />);

it('renders correctly', () => {
  const {getByText} = render({label: 'Email'});
  expect(getByText('Email')).toBeTruthy();
});
