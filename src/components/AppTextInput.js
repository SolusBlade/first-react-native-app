import { TextInput, View } from "react-native";
import { Entypo, FontAwesome5, SimpleLineIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { StyleSheet } from "react-native";

export default function AppTextInput({
	icon,
	onChangeText,
	style,
	value,
	...otherProps
}) {
	return (
		<View style={[styles.container, style]}>
			<Entypo style={styles.icon} name={icon} size={24} color={colors.gray} />
			<TextInput
				style={styles.input}
				onChangeText={onChangeText}
				{...otherProps}
			>
				{value}
			</TextInput>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		paddingVertical: 12,
		width: "100%",
		borderBottomColor: colors.borderInput,
		borderBottomWidth: 1,
	},
	input: {
		color: colors.black,
		fontFamily: "Roboto-Regular",
		fontSize: 16,
	},
	icon: {
		marginRight: 12,
		// position: "absolute",
		// bottom: 12,
		// left: 0,
	},
});
