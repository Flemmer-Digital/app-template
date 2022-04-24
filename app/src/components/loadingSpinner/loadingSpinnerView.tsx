import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './loadingSpinnerStyles';
import type { ViewStyle } from 'react-native';

export interface LoadingSpinnerProps {
  color?: string;
  size?: 'small' | 'large';
  fullscreen?: boolean;
  style?: ViewStyle;
  testID?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ color, size, fullscreen, style }) => {
  const containerStyle = fullscreen ? styles.fullscreen : {};
  const spinnerStyle = fullscreen ? styles.fullScreenSpinner : {};
  return (
    <View style={[containerStyle, style]} testID="spinner">
      <ActivityIndicator color={color} size={size} style={spinnerStyle} />
    </View>
  );
};

export default LoadingSpinner;
