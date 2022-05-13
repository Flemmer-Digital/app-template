import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const vh = height / 100;
export const vw = width / 100;

const inputStyles = StyleSheet.create({
  container: {
    width: '80%',
    maxHeight: 100,
  },
  inputContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
  },
  input: {},
});

export default inputStyles;
