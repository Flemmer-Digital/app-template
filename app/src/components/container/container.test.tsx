import Container from './container';
import { render as testRender } from '@testing-library/react-native';
import React from 'react';

const render = () => testRender(<Container />);

it('renders container', () => {
  const { getByTestId } = render();
  expect(getByTestId('safe-area')).toBeTruthy();
});
