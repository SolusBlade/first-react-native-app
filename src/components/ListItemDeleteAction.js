import { StyleSheet, View } from "react-native";
import DeleteBtn from "./DeleteBtn";
import colors from "../config/colors";

export default function ListItemDeleteAction({ onPress }) {
	return (
		<View style={styles.container}>
			<DeleteBtn onPress={onPress} inSlide />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.accent,
		width: 70,
		alignItems: "center",
		justifyContent: "center",
	},
});
