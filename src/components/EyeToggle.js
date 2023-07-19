import React from "react";
import { Feather } from "@expo/vector-icons";
import { Pressable } from "react-native";
import colors from "../config/colors";
import { StyleSheet } from "react-native";

export default function EyeToggle({ onPress, isSecure, isFocused }) {
	return (
		<Pressable style={styles.eyeContainer} onPress={onPress}>
			{isSecure === true && (
				<Feather
					name="eye"
					size={24}
					color={isFocused ? colors.accent : colors.gray}
				/>
			)}
			{isSecure === false && (
				<Feather
					name="eye-off"
					size={24}
					color={isFocused ? colors.accent : colors.gray}
				/>
			)}
		</Pressable>
	);
}

const styles = StyleSheet.create({
	eyeContainer: {
		position: "absolute",
		top: 16,
		right: 16,
	},
});
