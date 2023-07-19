import { StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../config/colors";
import padding from "../utils/paddingsStyling";

export default function ArrowUpBtn({ onPress }) {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [
				{
					backgroundColor: pressed ? colors.accentDark : colors.accent,
					transform: pressed ? "scale(0.95)" : "scale(1)",
				},
				styles.btn,
			]}
		>
			<AntDesign name="arrowup" size={14} color={colors.white} />
		</Pressable>
	);
}
const styles = StyleSheet.create({
	btn: {
		...padding(10),
		borderRadius: 20,
		alignSelf: "center",
	},
});
