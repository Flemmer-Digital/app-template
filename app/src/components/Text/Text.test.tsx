import React from 'react';
import {render as testRender} from '@testing-library/react-native';
import Text from './TextView';

const render = (props?: any) => testRender(<Text {...props}>Styled Text</Text>);

describe('TextView', () => {
  it('renders correctly', () => {
    const {getByText} = render();
    expect(getByText('Styled Text')).toBeTruthy();
  });

  it('Renders and style prop changes style', () => {
    let {getByText} = render({style: {fontSize: 27}});
    let styledText = getByText('Styled Text');
    expect(styledText.props.style.fontSize).toEqual(27);

    ({getByText} = render({style: {fontSize: 25}}));

    styledText = getByText('Styled Text');
    expect(styledText.props.style.fontSize).toEqual(25);
  });
});
