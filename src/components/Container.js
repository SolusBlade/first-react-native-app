import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	TouchableWithoutFeedback,
} from "react-native";

import colors from "../config/colors";

export default function Container({ children, keyboardOffset, style }) {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<KeyboardAvoidingView
				behavior={Platform.OS == "ios" ? "padding" : "height"}
				keyboardVerticalOffset={keyboardOffset}
				style={[styles.container, style]}
			>
				{children}
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		paddingVertical: 24,
		backgroundColor: colors.white,
	},

	image: {
		flex: 1,
	},
});
