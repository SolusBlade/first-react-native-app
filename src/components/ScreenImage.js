import { ImageBackground, StyleSheet } from "react-native";
import background from "../assets/background.png";

export default function ScreenImage() {
	return <ImageBackground style={styles} source={background} />;
}

const styles = StyleSheet.create({
	position: "absolute",
	width: "100%",
	height: "100%",
});
