import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './loadingSpinnerStyles';

interface LoadingspinnerProps {
  color?: string;
  size?: 'small' | 'large';
  fullscreen?: boolean;
  style: any;
}

const Loadingspinner: React.FC<LoadingspinnerProps> = ({ color, size, fullscreen, style }) => {
  const fullscreenStyle = fullscreen ? styles.fullscreen : {};
  const fullScreenSpinner = fullscreen ? styles.fullScreenSpinner : {};
  return (
    <>
      <View style={[fullscreenStyle, style]}>
        <ActivityIndicator color={color} size={size} style={fullScreenSpinner} />
      </View>
    </>
  );
};

export default Loadingspinner;
