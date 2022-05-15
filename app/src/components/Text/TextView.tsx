import React from 'react';
import styles from './TextStyles';
import {Text, TextStyle} from 'react-native';

interface TextProps {
  style?: TextStyle;
  children?: any;
  variation?: 'h1' | 'h2' | 'h3' | 'mini';
  color?: string;
}

const TextView: React.FC<TextProps> = ({style, children, variation, color}) => {
  return (
    <>
      <Text
        style={[
          styles.base,
          variation ? styles[variation] : null,
          {color: color},
          style,
        ]}>
        {children}
      </Text>
    </>
  );
};

export default TextView;
