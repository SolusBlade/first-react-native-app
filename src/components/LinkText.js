import { StyleSheet, Text } from "react-native";
import colors from "../config/colors";

function LinkText({ navigateTo, navigation }) {
	const handleRegisterPress = () => {
		// console.log("Зареєструватися link pressed");
		navigation.navigate("Register");
	};
	const handleLoginPress = () => {
		// console.log("Увійти link pressed");
		navigation.navigate("Login");
	};

	if (navigateTo === "login") {
		return (
			<Text style={styles.text}>
				Вже є акаунт?{" "}
				<Text style={styles.textLink} onPress={handleLoginPress}>
					Увійти
				</Text>
			</Text>
		);
	}

	if (navigateTo === "register") {
		return (
			<Text style={styles.text}>
				Немає акаунту?{" "}
				<Text style={styles.textLink} onPress={handleRegisterPress}>
					Зареєструватися
				</Text>
			</Text>
		);
	}
}

export default LinkText;

const styles = StyleSheet.create({
	text: {
		fontFamily: "Roboto-Regular",
		fontSize: 16,
		color: colors.textAccent,
	},
	textLink: {
		textDecorationLine: "underline",
	},
});
