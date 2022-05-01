import React from 'react';
import styles from './flexStyles';
import Container from '../container';
import { Animated } from 'react-native';

interface FlexProps {
  direction: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  children: React.ReactNode;
}

const Flex: React.FC<FlexProps> = ({ direction, justify, align, wrap, children }) => {
  return (
    <Animated.View
      style={[
        { justifyContent: justify, alignItems: align, flexDirection: direction },
        direction === 'row' || 'row-reverse' ? { width: '100%' } : { height: '100%' },
        styles.container,
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default Flex;
