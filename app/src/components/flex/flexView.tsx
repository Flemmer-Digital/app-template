import React from 'react';
import styles from './flexStyles';
import Container from '../container';
import { View } from 'react-native';

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
  return <View style={styles.container}>{children}</View>;
};

export default Flex;
