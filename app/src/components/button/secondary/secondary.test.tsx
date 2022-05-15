import React from 'react';
import Secondary, {SecondaryProps} from './Secondary';
import {render as testRender} from '@testing-library/react-native';

const render = (props?: Partial<SecondaryProps>) =>
  testRender(<Secondary text="text" onPress={() => {}} {...props} />);

it('renders correctly', () => {
  const {getByText} = render();
  expect(getByText('text')).toBeTruthy();
});
