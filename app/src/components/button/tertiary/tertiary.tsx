import React from 'react';
import styles from './tertiaryStyles';
import Button from '../baseButton';
import {ViewStyle} from 'react-native';

export interface TertiaryProps {
  text: string;
  onPress: () => void;
  style?: ViewStyle;
  disabled?: boolean;
}

const Tertiary: React.FC<TertiaryProps> = ({
  text,
  onPress,
  style,
  disabled,
}) => {
  return (
    <Button
      text={text}
      onPress={onPress}
      style={{...styles.tertiary, ...style}}
      textStyle={styles.textStyle}
      disabled={disabled}
    />
  );
};

export default Tertiary;
