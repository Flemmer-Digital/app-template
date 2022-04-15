import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export const vh = height / 100;
export const vw = width / 100;

const TextStyles = StyleSheet.create({
  base: {
    fontFamily: 'Arial',
    fontSize: 16,
    color: 'black',
  },
  // Headers
  h1: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  mini: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default TextStyles;
