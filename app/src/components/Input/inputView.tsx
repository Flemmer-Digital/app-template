import React from 'react';
import styles from './inputStyles';
import Flex from '../Flex';
import Text from '../Text';
import themeSettings from 'app/src/config/themeSettings';
import {TextInput, ViewStyle, TextStyle} from 'react-native';

export interface InputProps {
  containerStyle?: ViewStyle;
  placeholder?: string;
  labelStyle?: TextStyle;
  label?: string;
  value: string;
  onChangeText: (e: string) => void;
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
          placeholder={placeholder}
          placeholderTextColor={themeSettings.text.primaryTinted}
          value={value}
          onChangeText={e => onChangeText(e)}
          editable={!disabled}
          style={styles.input}
        />
        {icon}
      </Flex>
    </Flex>
  );
};

export default Input;
