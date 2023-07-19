import React from "react";
import {
	ImageBackground,
	Platform,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from "react-native";
import LogOut from "../assets/log-out.png";
import colors from "../config/colors";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather, AntDesign } from "@expo/vector-icons";

export default function GoBackBtn() {
	const navigation = useNavigation();

	const onPress = () => {
		navigation.goBack();
	};

	return (
		<Pressable onPress={onPress} style={styles.btn}>
			{({ pressed }) => (
				<AntDesign
					name="arrowleft"
					style={[
						styles.icon,
						{
							backgroundColor: pressed ? colors.bgInput : colors.white,
							color: pressed ? colors.accentDark : colors.gray,
						},
					]}
					size={pressed ? 22 : 24}
				/>
			)}
		</Pressable>
	);
}

const styles = StyleSheet.create({
	btn: {
		alignSelf: "flex-start",
		paddingHorizontal: 16,
	},
	icon: {},
});
