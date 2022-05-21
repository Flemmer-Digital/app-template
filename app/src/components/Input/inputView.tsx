import React from 'react';
import styles from './inputStyles';
import Flex from '../Flex';
import Text from '../Text';
import themeSettings from 'app/src/config/themeSettings';
import {
  TextInput,
  ViewStyle,
  TextStyle,
  KeyboardTypeOptions,
} from 'react-native';

export interface InputProps {
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  placeholder?: string;
  disabled?: boolean;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  multiLine?: boolean;
}

const Input: React.FC<InputProps> = ({
  containerStyle,
  labelStyle,
  label,
  icon,
  value,
  onChangeText,
  iconPosition,
  placeholder,
  disabled,
  secureTextEntry,
  keyboardType, //defaults to normal keyboard
  multiLine,
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
          placeholder={placeholder}
          placeholderTextColor={themeSettings.text.primaryTinted}
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          editable={!disabled}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          multiline={multiLine}
          textAlignVertical="top"
        />
        {icon}
      </Flex>
    </Flex>
  );
};

export default Input;
