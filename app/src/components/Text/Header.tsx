import React from 'react';
import styles from './TextStyles';
import { Text } from 'react-native';

interface HeaderProps {
  style?: any;
  children?: any;
  variation?: 'h1' | 'h2' | 'h3' | 'mini';
  color: string;
}

const Header: React.FC<HeaderProps> = ({ style, children, variation, color }) => {
  return (
    <>
      <Text style={[styles.base, variation ? styles[variation] : null, { color: color }, style]}>
        {children}
      </Text>
    </>
  );
};

export default Header;
