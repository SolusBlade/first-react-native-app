import { StyleSheet, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../config/colors";

export default function DeleteBtn({ onPress }) {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [
				{
					backgroundColor: pressed ? colors.accent : colors.bgInput,
					transform: pressed ? "scale(0.95)" : "scale(1)",
				},
				styles.btn,
			]}
		>
			{({ pressed }) => (
				<FontAwesome5
					name="trash-alt"
					size={24}
					color={pressed ? colors.white : colors.gray}
				/>
			)}
		</Pressable>
	);
}
const styles = StyleSheet.create({
	btn: {
		paddingHorizontal: 23,
		paddingVertical: 8,
		borderRadius: 20,
		width: 70,
		alignSelf: "center",
	},
});
