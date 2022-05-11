import React from 'react';
import styles from './secondaryStyles';
import Button from '../baseButton';
import { ViewStyle } from 'react-native';

export interface SecondaryProps {
  text: string;
  onPress: () => void;
  style?: ViewStyle;
}

const Secondary: React.FC<SecondaryProps> = ({ text, onPress, style }) => {
  return (
    <Button
      text={text}
      onPress={onPress}
      style={[styles.secondary, style]}
      textStyle={styles.textStyle}
    />
  );
};

export default Secondary;
