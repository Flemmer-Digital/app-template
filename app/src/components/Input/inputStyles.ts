import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const vh = height / 100;
export const vw = width / 100;

const inputStyles = StyleSheet.create({
  container: {
    width: '80%',
    height: 80,
  },
  inputContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    paddingLeft: 10,
  },
  input: {
    height: '100%',
    width: '100%',
  },
  label: {
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 12,
  },
});

export default inputStyles;
