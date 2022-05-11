import React from 'react';
import styles from './buttonStyles';
import Flex from '../flex';
import PressableOpacity from '../pressableOpacity';
import Text from '../Text';
import LoadingSpinner from '../loadingSpinner';
import {ViewStyle, TextStyle} from 'react-native';

export interface ButtonProps {
  style?: ViewStyle | Array<ViewStyle | undefined>;
  onPress: () => void;
  text?: React.ReactNode | string;
  textStyle?: TextStyle;
  disabled?: boolean;
  loading?: boolean;
  loadingColor?: string;
  loadingText?: string;
}

const Button: React.FC<ButtonProps> = ({
  style,
  onPress,
  text,
  disabled,
  loading,
  loadingText,
  loadingColor,
  textStyle,
}) => {
  return (
    <PressableOpacity
      onPress={!disabled ? onPress : () => {}}
      style={[styles.container, style]}
      disabled={disabled}>
      <Flex direction="row" justifyContent="space-around" alignItems="center">
        {loading ? (
          <>
            <LoadingSpinner
              size={'small'}
              style={{position: 'absolute', left: '15%'}}
              color={loadingColor}
            />
            <Text style={textStyle}>{loadingText}</Text>
          </>
        ) : (
          <>
            <Text style={textStyle}>{text}</Text>
          </>
        )}
      </Flex>
    </PressableOpacity>
  );
};

export default Button;
