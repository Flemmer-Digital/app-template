import LoadingSpinner from './loadingSpinnerView';
import {render as testRender} from '@testing-library/react-native';
import React from 'react';

const render = (props: any) =>
  testRender(<LoadingSpinner testID="spinner" loading={props.loading} />);

it('renders and shows sign in text', () => {
  const {getByTestId} = render({loading: false});
  expect(getByTestId('spinner')).toBeTruthy();
});

it('dissapears when loading is true', () => {
  const {queryByTestId} = render({loading: true});
  expect(queryByTestId('spinner')).toBeFalsy();
});
