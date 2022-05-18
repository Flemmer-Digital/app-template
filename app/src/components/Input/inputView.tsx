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
  onChangeText: (e: string) => void;
  textInputProps?: TextInputProps;
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  containerStyle,
  labelStyle,
  textInputProps,
  label,
  onChangeText,
  icon,
}) => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      style={[styles.container, containerStyle]}>
      <Text style={{...styles.label, ...labelStyle}}>{label}</Text>
      <Flex
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        style={styles.inputContainer}>
        <TextInput
          testID="input"
          placeholderTextColor={themeSettings.text.primaryTinted}
          onChangeText={onChangeText}
          style={styles.input}
          {...textInputProps}
        />
        {icon}
      </Flex>
    </Flex>
  );
};

export default Input;
