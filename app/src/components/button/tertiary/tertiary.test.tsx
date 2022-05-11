import React from 'react';
import Tertiary, {TertiaryProps} from './tertiary';
import {render as testRender} from '@testing-library/react-native';

const render = (props: Partial<TertiaryProps>) =>
  testRender(<Tertiary text="text" onPress={() => {}} {...props} />);

it('renders correctly', () => {
  const {getByText} = render({text: 'text'});
  expect(getByText('text')).toBeTruthy();
});
