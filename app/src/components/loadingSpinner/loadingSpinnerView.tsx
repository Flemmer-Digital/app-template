import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './loadingSpinnerStyles';

interface LoadingspinnerProps {
  color?: string;
  size?: 'small' | 'large';
  fullscreen?: boolean;
  style: any;
  loading: boolean;
}

const Loadingspinner: React.FC<LoadingspinnerProps> = ({
  color,
  size,
  fullscreen,
  style,
  loading,
}) => {
  const fullscreenStyle = fullscreen ? styles.fullscreen : {};
  const fullScreenSpinner = fullscreen ? styles.fullScreenSpinner : {};
  return (
    <>
      {loading && (
        <View style={[fullscreenStyle, style]}>
          <ActivityIndicator color={color} size={size} style={fullScreenSpinner} />
        </View>
      )}
    </>
  );
};

export default Loadingspinner;
