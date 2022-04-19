import React from 'react';
import {render as testRender} from '@testing-library/react-native';
import Text from './TextView';

const render = (props?: any) => testRender(<Text {...props}>Styled Text</Text>);

describe('TextView', () => {
  it('renders correctly', () => {
    const {getByText} = render();
    expect(getByText('Styled Text')).toBeTruthy();
  });
  it('Renders and Changes styles with style prop', () => {
    const {getByText} = render({style: {fontSize: 27}});
    const styledText = getByText('Styled Text');
    expect(
      styledText.props.style.filter((item: any) => item?.fontSize === 27)
        .length,
    ).toEqual(1);
  });
});
