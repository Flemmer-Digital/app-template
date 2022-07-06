import React from 'react';
import styles from './buttonStyles';
import Flex from '../../Flex';
import PressableOpacity from '../../PressableOpacity';
import Text from '../../Text';
import { ViewStyle, TextStyle } from 'react-native';

export interface ButtonProps {
  style?: ViewStyle;
  onPress: () => void;
  text: React.ReactNode | string;
  textStyle?: TextStyle;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ style, onPress, text, disabled, textStyle }) => {
  return (
    <PressableOpacity onPress={onPress} style={[styles.container, style]} disabled={disabled}>
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={styles.textContainer}
      >
        <Text style={textStyle}>{text}</Text>
      </Flex>
    </PressableOpacity>
  );
};

export default Button;
