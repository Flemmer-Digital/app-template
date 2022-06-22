import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export const vh = height / 100;
export const vw = width / 100;

const checkboxStyles = StyleSheet.create({
  container: {
    width: '90%',
    height: 40,
    paddingHorizontal: 10,
  },
  flexContainer: {
    height: '100%',
  },
  box: {
    width: 30,
    height: 30,
    borderRadius: 7.5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
  },
  label: {
    fontSize: 16,
  },
});

export default checkboxStyles;
