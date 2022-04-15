import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export const vh = height / 100;
export const vw = width / 100;

const TextStyles = StyleSheet.create({
  base: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#000',
  },
});

export default TextStyles;
