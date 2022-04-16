import React from 'react';
import { render as testRender } from '@testing-library/react-native';
import Text from './Text';
import Header from './Header';

const render = () =>
  testRender(
    <Text>
      <Header variation="h1">Header</Header>
      <Text style={{ fontSize: 27 }}>Styled Text</Text>
    </Text>,
  );

describe('Text Component', () => {
  it('renders and shows text', () => {
    const { getByText } = render();
    const header = getByText('Header');
    const styledText = getByText('Styled Text');
    expect(header).toBeTruthy();
    expect(styledText).toBeTruthy();
  });

  it('changes styles with style prop', () => {
    const { getByText } = render();
    const styledText = getByText('Styled Text');
    expect(styledText.props.style[2].fontSize).toEqual(27);
  });
});
