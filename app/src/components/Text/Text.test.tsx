import React from 'react';
import { render as testRender } from '@testing-library/react-native';
import Text from './TextView';

const render = () => testRender(<Text style={{ fontSize: 27 }}>Styled Text</Text>);

describe('Text Component', () => {
  it('renders and shows text', () => {
    const { getByText } = render();
    const styledText = getByText('Styled Text');
    expect(styledText).toBeTruthy();
  });

  it('Changes styles with style prop', () => {
    const { getByText } = render();
    const styledText = getByText('Styled Text');
    expect(styledText.props.style.filter((item: any) => item?.fontSize === 27)).toBeTruthy();
  });
});
