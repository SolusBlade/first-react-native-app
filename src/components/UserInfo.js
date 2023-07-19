import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

export default function UserInfo({ login, email, uri }) {
	return (
		<>
			<View style={styles.container}>
				<View style={styles.avatar}>
					<ImageBackground
						source={{ uri }}
						resizeMode="cover"
						style={styles.image}
					/>
				</View>
				<View>
					<Text style={styles.login}>{login}</Text>
					<Text style={styles.email}>{email}</Text>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 8,

		height: 60,
	},
	login: {
		fontSize: 13,
		fontFamily: "Roboto-Bold",
		color: colors.black,
	},
	email: {
		fontSize: 11,
		fontFamily: "Roboto-Regular",
		color: colors.black,
	},
	avatar: {
		height: 60,
		width: 60,
		borderRadius: 16,
		overflow: "hidden",
	},
	image: {
		flex: 1,
		justifyContent: "center",
	},
});
