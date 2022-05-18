import React from 'react';
import styles from './flexStyles';
import {Animated, LayoutChangeEvent, ViewStyle} from 'react-native';

export interface FlexProps {
  direction: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'space-between'
    | 'space-around';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  style?: ViewStyle;
  onLayout?: (event: LayoutChangeEvent) => void;
  children: React.ReactNode;
}

const Flex: React.FC<FlexProps> = ({
  direction,
  justifyContent,
  alignItems,
  alignContent,
  wrap,
  children,
  onLayout,
  style,
}) => {
  const directionIsRow = direction === ('row' || 'row-reverse');
  return (
    <Animated.View
      testID="flex"
      style={[
        {
          justifyContent: justifyContent,
          alignItems: alignItems,
          flexDirection: direction,
          alignContent: alignContent,
          flexWrap: wrap,
        },
        directionIsRow ? {width: '100%'} : {height: '100%'},
        style,
      ]}
      onLayout={onLayout}>
      {children}
    </Animated.View>
  );
};

export default Flex;
