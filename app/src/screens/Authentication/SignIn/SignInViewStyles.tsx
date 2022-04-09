import { StyleSheet, Dimensions, ViewStyle } from "react-native"
const { width, height } = Dimensions.get("window");
const vh = height / 100;
const vw = width / 100;

const style = StyleSheet.create({
  outerContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		height: 80 * vh,
		width: 100 * vw,
  },
  text: {
	  borderColor: 'green',
		borderWidth: 1,
		padding: 10,
  }
});

export default style;
