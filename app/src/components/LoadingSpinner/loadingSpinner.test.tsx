import LoadingSpinner, { LoadingSpinnerProps } from './loadingSpinnerView';
import { render as testRender } from '@testing-library/react-native';
import React from 'react';

const render = (props?: Partial<LoadingSpinnerProps>) => testRender(<LoadingSpinner {...props} />);

it('renders', () => {
  const { getByTestId } = render();
  expect(getByTestId('spinner')).toBeTruthy();
});
