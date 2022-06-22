import React from 'react';
import styles from './containerStyles';
import { KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';

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
        style={[styles.safeArea, { backgroundColor: backgroundColor }]}
        testID="safe-area"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <>
            {hasKeyboardAvoidingView ? (
              <KeyboardAvoidingView
                behavior="padding"
                testID="containerAvoidingView"
                keyboardVerticalOffset={headerHeight}
              >
                <>{children}</>
              </KeyboardAvoidingView>
            ) : (
              children
            )}
          </>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </>
  );
};

export default Container;
