import React from 'react';
import { render as testRender } from '@testing-library/react-native';
import Text from './Text';
import Header from './Header';

const render = () =>
  testRender(
    <Text>
      <Header variation="h1">Hello World - H1</Header>
      <Text>Hello World</Text>
    </Text>,
  );

it('renders and shows text', () => {
  const { getByText } = render();
  expect(getByText('Hello World')).toBeTruthy();
  expect(getByText('Hello World - H1')).toBeTruthy();
});
