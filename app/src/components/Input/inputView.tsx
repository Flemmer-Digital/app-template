import React from 'react';
import styles from './inputStyles';
import Flex from '../Flex';
import Text from '../Text';
import {TextInput, ViewStyle, TextStyle} from 'react-native';

export interface InputProps {
  containerStyle?: ViewStyle;
  placeholder?: string;
  labelStyle?: TextStyle;
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  disabled?: boolean;
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  containerStyle,
  labelStyle,
  placeholder,
  label,
  value,
  onChangeText,
  disabled,
  icon,
}) => {
  return (
    <Flex
      direction="column"
      justifyContent="space-around"
      alignItems="flex-start"
      style={[styles.container, containerStyle]}>
      <Text variation="mini" color="white" style={labelStyle}>
        {label}
      </Text>
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="black"
          value={value}
          onChangeText={onChangeText}
          editable={!disabled}
          style={styles.input}
        />
        {icon}
      </Flex>
    </Flex>
  );
};

export default Input;
