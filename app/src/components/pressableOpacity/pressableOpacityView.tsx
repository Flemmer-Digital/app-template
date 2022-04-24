import React from 'react';
import { Pressable, Animated } from 'react-native';

interface PressableOpacityProps {
  onPress: () => void;
  style?: object;
  children: React.ReactNode;
  onLayout?: (e: object) => void;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const PressableOpacity = ({ children, style, onPress }: any) => {
  const animated = new Animated.Value(1);
  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.5,
      duration: 50,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <AnimatedPressable
      onPressIn={fadeIn}
      onPressOut={fadeOut}
      onPress={onPress}
      style={[{ opacity: animated }, style]}
    >
      {children}
    </AnimatedPressable>
  );
};

export default PressableOpacity;