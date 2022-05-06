import React from 'react';
import styles from './buttonStyles';
import Flex from '../flex';
import PressableOpacity from '../pressableOpacity';
import Text from '../Text';
import LoadingSpinner from '../loadingSpinner';
import { ViewStyle } from 'react-native';

export interface ButtonProps {
  style?: ViewStyle;
  onPress: () => void;
  text?: React.ReactNode | string;
  icon?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  loadingColor?: string;
  loadingText?: string;
}

const Button: React.FC<ButtonProps> = ({
  style,
  onPress,
  text,
  icon,
  disabled,
  loading,
  loadingText,
  loadingColor,
}) => {
  return (
    <PressableOpacity onPress={onPress} style={styles.container}>
      <Flex direction="row" justifyContent="space-around" alignItems="center" style={style}>
        {loading ? (
          <>
            <LoadingSpinner
              size={'small'}
              style={{ position: 'absolute', left: '15%' }}
              color={loadingColor}
            />
            <Text>{loadingText}</Text>
          </>
        ) : (
          <Text>{text}</Text>
        )}
      </Flex>
    </PressableOpacity>
  );
};

export default Button;
