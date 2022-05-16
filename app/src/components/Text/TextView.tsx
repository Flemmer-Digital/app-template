import React from 'react';
import styles from './TextStyles';
import {Animated, Text, TextStyle} from 'react-native';

interface TextProps {
  style?: TextStyle;
  children?: any;
  variation?: 'h1' | 'h2' | 'h3' | 'mini';
  color?: string;
}

const TextView: React.FC<TextProps> = ({style, children, variation, color}) => {
  const AnimatedText = Animated.createAnimatedComponent(Text);
  return (
    <>
      <AnimatedText
        style={[
          styles.base,
          variation ? styles[variation] : null,
          {color: color},
          style,
        ]}>
        {children}
      </AnimatedText>
    </>
  );
};

export default TextView;
