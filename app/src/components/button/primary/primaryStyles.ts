import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const vh = height / 100;
export const vw = width / 100;

const primaryStyles = StyleSheet.create({
  textStyle: {
    color: '#fff',
    fontWeight: 'bold',
  },
  primary: {
    backgroundColor: 'blue',
  },
});

export default primaryStyles;
