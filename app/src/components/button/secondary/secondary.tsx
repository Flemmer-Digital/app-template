import React from 'react';
import styles from './secondaryStyles';
import Button from '../baseButton';
import {ViewStyle} from 'react-native';

export interface SecondaryProps {
  text: string;
  onPress: () => void;
  style?: ViewStyle;
  disabled?: boolean;
}

const Secondary: React.FC<SecondaryProps> = ({
  text,
  onPress,
  style,
  disabled,
}) => {
  return (
    <Button
      text={text}
      onPress={onPress}
      style={[styles.secondary, style]}
      textStyle={styles.textStyle}
      disabled={disabled}
    />
  );
};

export default Secondary;
