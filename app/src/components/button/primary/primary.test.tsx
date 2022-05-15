import React from 'react';
import Primary, {PrimaryProps} from './primary';
import {render as testRender} from '@testing-library/react-native';

const render = (props?: Partial<PrimaryProps>) =>
  testRender(<Primary text="text" onPress={() => {}} {...props} />);

it('renders correctly', () => {
  const {getByText} = render();
  expect(getByText('text')).toBeTruthy();
});
