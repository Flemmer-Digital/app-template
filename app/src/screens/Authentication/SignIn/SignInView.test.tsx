import { render as testRender } from '@testing-library/react-native'
import SignInView from './SignInView';
import React from 'react';

const render = () => testRender(<SignInView authenticator={{}} navigation={{}} />)

it('renders and shows sign in text', () => {
  const { getByText } = render()
  expect(getByText('Sign In')).toBeTruthy();
});
