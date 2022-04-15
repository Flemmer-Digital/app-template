import React from 'react';
import styles from './TextStyles';
import { Text } from 'react-native';

interface HeaderProps {
  style?: any;
  children?: any;
}

const Header: React.FC<HeaderProps> = ({ style, children }) => {
  return (
    <>
      <Text style={style}>{children}</Text>
    </>
  );
};

export default Text;
