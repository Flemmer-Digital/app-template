import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './loadingSpinnerStyles';
import type { ViewStyle } from 'react-native';

interface LoadingSpinnerProps {
  color?: string;
  size?: 'small' | 'large';
  fullscreen?: boolean;
  style?: ViewStyle;
  loading?: boolean;
  testID?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  color,
  size,
  fullscreen,
  style,
  loading,
  testID,
}) => {
  const fullscreenStyle = fullscreen ? styles.fullscreen : {};
  const fullScreenSpinner = fullscreen ? styles.fullScreenSpinner : {};
  return (
    <>
      {!loading && (
        <View style={[fullscreenStyle, style]} testID={testID}>
          <ActivityIndicator color={color} size={size} style={fullScreenSpinner} />
        </View>
      )}
    </>
  );
};

export default LoadingSpinner;
