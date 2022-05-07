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
  textColor?: string;
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
  textColor,
}) => {
  return (
    <PressableOpacity
      onPress={!disabled ? onPress : () => {}}
      style={styles.container}
      disabled={disabled}
    >
      <Flex direction="row" justifyContent="space-around" alignItems="center" style={style}>
        {loading ? (
          <>
            <LoadingSpinner
              size={'small'}
              style={{ position: 'absolute', left: '15%' }}
              color={loadingColor}
            />
            <Text color={textColor}>{loadingText}</Text>
          </>
        ) : (
          <>
            {icon}
            <Text color={textColor}>{text}</Text>
          </>
        )}
      </Flex>
    </PressableOpacity>
  );
};

export default Button;
