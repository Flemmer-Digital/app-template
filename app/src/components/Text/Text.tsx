import React from 'react';
import styles from './TextStyles';
import { Text } from 'react-native';

interface TextProps {
  style?: any;
  children?: any;
}

const CustomText: React.FC<TextProps> = ({ style, children }) => {
  return (
    <>
      <Text style={[styles.base, style]}>{children}</Text>
    </>
  );
};

export default CustomText;
