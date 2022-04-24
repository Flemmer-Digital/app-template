import LoadingSpinner from './loadingSpinnerView';
import { render as testRender } from '@testing-library/react-native';
import React from 'react';

const render = (props: any) => testRender(<LoadingSpinner testID="spinner" />);

it('renders', () => {
  const { getByTestId } = render({ loading: false });
  expect(getByTestId('spinner')).toBeTruthy();
});
