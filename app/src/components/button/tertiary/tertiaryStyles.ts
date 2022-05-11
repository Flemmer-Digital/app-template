import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../../config/themeSettings';
const {width, height} = Dimensions.get('window');
export const vh = height / 100;
export const vw = width / 100;

const tertiaryStyles = StyleSheet.create({
  textStyle: {
    color: theme.colors.primary,
  },
  // placeholder for any styles that could be added later
  // for demonstration there are no styles needed (hence empty)
  tertiary: {},
});

export default tertiaryStyles;
