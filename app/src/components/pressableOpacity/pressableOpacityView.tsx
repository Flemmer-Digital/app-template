import React from 'react';
import {Pressable, Animated, ViewStyle} from 'react-native';

export interface PressableOpacityProps {
  onPress: () => void;
  style?: ViewStyle;
  children: React.ReactNode;
  disabled?: boolean;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const PressableOpacity = ({children, style, onPress, disabled}: any) => {
  const animated = new Animated.Value(1);
  const opacity = disabled ? 0.5 : animated;
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
      onPressIn={!disabled ? fadeIn : undefined}
      onPressOut={fadeOut}
      onPress={onPress}
      style={[{opacity: opacity, overflow: 'hidden'}, style]}>
      {children}
    </AnimatedPressable>
  );
};

export default PressableOpacity;
