import React from 'react';
import styles from './containerStyles';
import {KeyboardAvoidingView, SafeAreaView} from 'react-native';

interface ContainerProps {
  backgroundColor?: string;
  children?: React.ReactNode;
  hasKeyboardAvoidingView?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  backgroundColor,
  children,
  hasKeyboardAvoidingView,
}) => {
  return (
    <>
      <SafeAreaView
        style={[styles.safeArea, {backgroundColor: backgroundColor}]}
        testID="safe-area">
        <>
          {hasKeyboardAvoidingView ? (
            <KeyboardAvoidingView
              behavior="position"
              testID="containerAvoidingView">
              <>{children}</>
            </KeyboardAvoidingView>
          ) : (
            children
          )}
        </>
      </SafeAreaView>
    </>
  );
};

export default Container;
