import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './loadingSpinnerStyles';

interface LoadingspinnerProps {
  color?: string;
  size?: number;
  fullscreen?: boolean;
}

const Loadingspinner: React.FC<LoadingspinnerProps> = ({ color, size, fullscreen }) => {
  const fullscreenStyle = fullscreen ? styles.fullscreen : {};
  const fullScreenSpinner = fullscreen ? styles.fullScreenSpinner : {};
  return (
    <>
      <View style={fullscreenStyle}>
        <ActivityIndicator color={color} size={size} style={fullScreenSpinner} />
      </View>
    </>
  );
};

export default Loadingspinner;
