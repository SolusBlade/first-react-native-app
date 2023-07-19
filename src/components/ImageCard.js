import React from "react";
import { ImageBackground, TouchableWithoutFeedback } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";
import { FontAwesome5, SimpleLineIcons } from "@expo/vector-icons";
import AppImageBackground from "./AppImageBackground";

export default function ImageCard({ onPress }) {
	return (
		<View style={styles.container}>
			<AppImageBackground source={require("../assets/images/bg4.jpg")} />

			<Text style={styles.title}>ImageCard</Text>
			<View style={styles.infoContainer}>
				<TouchableWithoutFeedback onPress={onPress}>
					<View style={styles.infoWrap} onPress={onPress}>
						<FontAwesome5 name="comment" size={24} color={colors.gray} />
						<Text style={styles.infoText}>55</Text>
					</View>
				</TouchableWithoutFeedback>
				<View style={styles.infoWrap}>
					<SimpleLineIcons name="location-pin" size={24} color={colors.gray} />
					<Text style={[styles.infoText, { textDecorationLine: "underline" }]}>
						Ivano-Frankivs'k Region, Ukraine
					</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		gap: 8,
		backgroundColor: colors.white,
	},
	title: {
		fontSize: 16,
		fontFamily: "Roboto-Medium",
		color: colors.black,
		lineHeight: 24,
	},
	infoContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		height: 24,
	},
	infoWrap: {
		flexDirection: "row",
		gap: 6,
	},
	infoText: {
		fontSize: 16,
		fontFamily: "Roboto-Regular",
		color: colors.black,
		lineHeight: 24,
	},
});
