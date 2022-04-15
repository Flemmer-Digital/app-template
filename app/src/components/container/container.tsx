import React from 'react';
import styles from './containerStyles';
import { KeyboardAvoidingView, SafeAreaView } from 'react-native';

interface ContainerProps {
  backgroundColor?: string;
  children?: React.ReactNode;
  showSafeArea?: boolean;
}

const Container: React.FC<ContainerProps> = ({ backgroundColor, children, showSafeArea }) => {
  return (
    <>
      <SafeAreaView
        style={[styles.safeArea, { backgroundColor: backgroundColor }]}
        testID="safe-area"
      >
        <KeyboardAvoidingView
          style={{ backgroundColor: showSafeArea ? 'red' : 'transparent' }}
          behavior="position"
        >
          <>{children}</>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export default Container;
