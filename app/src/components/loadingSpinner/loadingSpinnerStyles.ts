import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export const vh = height / 100;
export const vw = width / 100;

const loadingSpinnerStyles = StyleSheet.create({
  fullscreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenSpinner: {
    width: vw * 30,
    height: vw * 30,
  },
});

export default loadingSpinnerStyles;
