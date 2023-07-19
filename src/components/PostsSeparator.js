import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

export default function PostsSeparator() {
	return <View style={styles.separator} />;
}
const styles = StyleSheet.create({
	separator: {
		width: "100%",
		height: 32,
		backgroundColor: colors.white,
	},
});
