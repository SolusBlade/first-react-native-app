import { StyleSheet, Pressable } from "react-native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function PressableWrap({
	iconName,
	iconPressedName,
	onPress,
	style,
}) {
	return (
		<Pressable onPress={onPress} style={style}>
			{({ pressed }) =>
				pressed ? (
					<Ionicons name={iconPressedName} size={24} color={colors.accent} />
				) : (
					<Ionicons name={iconName} size={24} color={colors.gray} />
				)
			}
		</Pressable>
	);
}
const styles = StyleSheet.create({
	btn: {
		// paddingHorizontal: 23,
		// paddingVertical: 8,
		// borderRadius: 20,
		// width: 70,
		// alignSelf: "center",
	},
	icon: {},
});
