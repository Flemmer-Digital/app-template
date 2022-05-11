import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export const vh = height / 100;
export const vw = width / 100;

const secondaryStyles = StyleSheet.create({
  textStyle: {
    color: 'blue',
  },
  secondary: {
    borderWidth: 1,
    borderColor: 'blue',
  },
});

export default secondaryStyles;
