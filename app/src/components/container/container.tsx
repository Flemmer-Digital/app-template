import React from 'react';
import styles from './containerStyles';
import { KeyboardAvoidingView, SafeAreaView } from 'react-native';

interface ContainerProps {
  backgroundColor?: string;
  children?: React.ReactNode;
  useKeyboardAvoidingView?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  backgroundColor,
  children,
  useKeyboardAvoidingView,
}) => {
  return (
    <>
      <SafeAreaView
        style={[styles.safeArea, { backgroundColor: backgroundColor }]}
        testID="safe-area"
      >
        {useKeyboardAvoidingView ? (
          <KeyboardAvoidingView behavior="position">
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
