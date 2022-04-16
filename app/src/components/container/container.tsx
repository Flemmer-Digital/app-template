import React from 'react';
import styles from './containerStyles';
import { KeyboardAvoidingView, SafeAreaView } from 'react-native';

interface ContainerProps {
  backgroundColor?: string;
  children?: React.ReactNode;
  showSafeArea?: boolean;
  useKeyboardAvoidingView?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  backgroundColor,
  children,
  showSafeArea,
  useKeyboardAvoidingView,
}) => {
  return (
    <>
      <SafeAreaView
        style={[styles.safeArea, { backgroundColor: backgroundColor }]}
        testID="safe-area"
      >
        {useKeyboardAvoidingView ? (
          <KeyboardAvoidingView
            style={{ backgroundColor: showSafeArea ? 'red' : 'transparent' }}
            behavior="position"
          >
            <>{children}</>
          </KeyboardAvoidingView>
        ) : (
          { children }
        )}
      </SafeAreaView>
    </>
  );
};

export default Container;
