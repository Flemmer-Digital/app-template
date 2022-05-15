import React from 'react';
import styles from './buttonStyles';
import Flex from '../flex';
import PressableOpacity from '../pressableOpacity';
import Text from '../Text';
import {ViewStyle, TextStyle} from 'react-native';

export interface ButtonProps {
  style?: ViewStyle;
  onPress: () => void;
  text: React.ReactNode | string;
  textStyle?: TextStyle;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  style,
  onPress,
  text,
  disabled,
  textStyle,
}) => {
  return (
    <PressableOpacity
      onPress={!disabled ? onPress : () => {}}
      style={[styles.container, style]}
      disabled={disabled}>
      <Flex direction="row" justifyContent="space-around" alignItems="center">
        <Text style={textStyle}>{text}</Text>
      </Flex>
    </PressableOpacity>
  );
};

export default Button;
