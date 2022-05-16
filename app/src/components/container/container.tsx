import React from 'react';
import styles from './containerStyles';
import {KeyboardAvoidingView, SafeAreaView} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';

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
  let headerHeight;
  try {
    headerHeight = useHeaderHeight();
  } catch (e) {
    headerHeight = 10;
  }
  return (
    <>
      <SafeAreaView
        style={[styles.safeArea, {backgroundColor: backgroundColor}]}
        testID="safe-area">
        <>
          {hasKeyboardAvoidingView ? (
            <KeyboardAvoidingView
              behavior="padding"
              testID="containerAvoidingView"
              keyboardVerticalOffset={headerHeight}>
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
