import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../../config/themeSettings';
const {width, height} = Dimensions.get('window');
export const vh = height / 100;
export const vw = width / 100;

const secondaryStyles = StyleSheet.create({
  textStyle: {
    color: theme.colors.primary,
  },
  secondary: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
});

export default secondaryStyles;
