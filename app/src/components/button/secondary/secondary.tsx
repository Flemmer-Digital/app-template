import React from 'react';
import styles from './secondaryStyles';
import Button from '../baseButton';

export interface SecondaryProps {
  text: string;
  onPress: () => void;
}

const Secondary: React.FC<SecondaryProps> = ({text, onPress}) => {
  return <Button text={text} onPress={onPress} />;
};

export default Secondary;
