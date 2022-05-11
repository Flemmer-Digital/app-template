import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../../config/themeSettings';
const {width, height} = Dimensions.get('window');
export const vh = height / 100;
export const vw = width / 100;

const primaryStyles = StyleSheet.create({
  textStyle: {
    color: '#fff',
    fontWeight: 'bold',
  },
  primary: {
    backgroundColor: theme.colors.primary,
  },
});

export default primaryStyles;
