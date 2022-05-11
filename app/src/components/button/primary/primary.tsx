import React from 'react';
import styles from './primaryStyles';
import Button from '../baseButton';
import {ViewStyle} from 'react-native';

export interface PrimaryProps {
  text: string;
  onPress: () => void;
  customStyle?: ViewStyle;
}

const Primary: React.FC<PrimaryProps> = ({text, onPress, customStyle}) => {
  return (
    <Button
      text={text}
      onPress={onPress}
      style={[styles.primary, customStyle]}
      textStyle={styles.textStyle}
    />
  );
};

export default Primary;
