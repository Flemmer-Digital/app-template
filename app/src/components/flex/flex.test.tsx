import Flex, {FlexProps} from './flexView';
import Text from '../text';
import {render as testRender} from '@testing-library/react-native';
import React from 'react';

const render = (props: Partial<FlexProps>) =>
  testRender(
    <Flex
      direction="row"
      justifyContent="center"
      alignItems="center"
      children={<Text>text</Text>}
      {...props}
    />,
  );

describe('Flex', () => {
  it('Renders', () => {
    const {getByTestId} = render({direction: 'row'});
    expect(getByTestId('flex')).toBeTruthy();
  });

  it('Renders and style prop changes style', () => {
    let {getByTestId} = render({style: {width: 100}, direction: 'row'});
    let styledFlex = getByTestId('flex');

    expect(styledFlex.props.style.width).toEqual(100);

    ({getByTestId} = render({style: {width: 25}}));

    styledFlex = getByTestId('flex');
    expect(styledFlex.props.style.width).toEqual(25);
  });

  it('Renders with children', () => {
    const {getByText} = render({
      direction: 'row',
      children: <Text>Styled Text</Text>,
    });
    expect(getByText('Styled Text')).toBeTruthy();
  });
});
