import React from 'react';
import styles from './TextStyles';
import { Text } from 'react-native';

interface TextProps {
  style?: any;
  children?: any;
  color?: string;
}

const CustomText: React.FC<TextProps> = ({ style, children, color }) => {
  return (
    <>
      <Text style={[styles.base, { color: color }, style]}>{children}</Text>
    </>
  );
};

export default CustomText;
