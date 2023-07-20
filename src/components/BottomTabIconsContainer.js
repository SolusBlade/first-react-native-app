import React from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";

import colors from "../config/colors";

export default function BottomTabIconsContainer({ children, focused, style }) {
	return (
		<View
			style={[
				styles.container,
				{ backgroundColor: focused ? colors.accent : colors.white },
				style,
			]}
		>
			{children}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 23,
		paddingVertical: 8,
		borderRadius: 20,
	},
});
