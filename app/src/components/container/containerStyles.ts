import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const vh = height / 100;
export const vw = width / 100;

const containerStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default containerStyles;
