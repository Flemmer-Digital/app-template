import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const vh = height / 100;
export const vw = width / 100;

const buttonStyles = StyleSheet.create({
  container: {
    width: '80%',
    height: 50,
    borderRadius: 20,
  },
});

export default buttonStyles;
