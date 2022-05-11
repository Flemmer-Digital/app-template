import React from 'react';
import styles from './primaryStyles';
import Button from '../baseButton';
import {ViewStyle} from 'react-native';

export interface PrimaryProps {
  text: string;
  onPress: () => void;
  style?: ViewStyle;
  disabled?: boolean;
}

const Primary: React.FC<PrimaryProps> = ({text, onPress, style, disabled}) => {
  return (
    <Button
      text={text}
      onPress={onPress}
      style={[styles.primary, style]}
      textStyle={styles.textStyle}
      disabled={disabled}
    />
  );
};

export default Primary;
