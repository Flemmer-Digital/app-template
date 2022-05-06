import React from 'react';
import styles from './buttonStyles';
import Flex from '../flex';
import PressableOpacity from '../pressableOpacity';
import Text from '../Text';
import { ViewStyle } from 'react-native';

interface ButtonProps {
  style?: ViewStyle;
  onPress: () => void;
  text: React.ReactNode | string;
  icon: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
}

const Button: React.FC<ButtonProps> = () => {
  return (
    <PressableOpacity>
      <Flex direction="row" justifyContent="space-around" alignItems="center">
        <Text>Button</Text>
      </Flex>
    </PressableOpacity>
  );
};

export default Button;
