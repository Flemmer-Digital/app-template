import React from 'react';
import styles from './primaryStyles';
import Button from '../baseButton';

export interface PrimaryProps {
  text: string;
  onPress: () => void;
}

const Primary: React.FC<PrimaryProps> = ({text, onPress}) => {
  return <Button text={text} onPress={onPress} />;
};

export default Primary;
