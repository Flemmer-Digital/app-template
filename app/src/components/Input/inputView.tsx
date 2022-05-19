import React from 'react';
import styles from './inputStyles';
import Flex from '../Flex';
import Text from '../Text';
import themeSettings from 'app/src/config/themeSettings';
import {TextInput, ViewStyle, TextStyle, TextInputProps} from 'react-native';

export interface InputProps {
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  label?: string;
  textInputProps?: TextInputProps;
  value: string;
  onChangeText: (text: string) => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Input: React.FC<InputProps> = ({
  containerStyle,
  labelStyle,
  textInputProps,
  label,
  icon,
  value,
  onChangeText,
  iconPosition,
}) => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      style={{...styles.container, ...containerStyle}}>
      <Text style={{...styles.label, ...labelStyle}}>{label}</Text>
      <Flex
        direction={iconPosition === 'right' ? 'row' : 'row-reverse'}
        justifyContent="flex-start"
        alignItems="center"
        style={styles.inputContainer}>
        <TextInput
          testID="input"
          placeholderTextColor={themeSettings.text.primaryTinted}
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          {...textInputProps}
        />
        {icon}
      </Flex>
    </Flex>
  );
};

export default Input;
