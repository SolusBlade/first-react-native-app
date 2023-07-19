import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";
import padding from "../utils/paddingsStyling";

export default function CommentContainer({ avatar, comment, info, author }) {
	return (
		<>
			<View
				style={[
					styles.container,
					{ flexDirection: author ? "row-reverse" : "row" },
				]}
			>
				<View style={styles.avatarContainer}>
					{avatar && (
						<ImageBackground
							source={avatar}
							resizeMode="cover"
							style={styles.avatar}
						/>
					)}
				</View>
				<View
					style={[
						styles.commentContainer,
						{ alignItems: author ? "flex-start" : "flex-end" },
					]}
				>
					<View>
						<Text numberOfLines={4} style={styles.comment}>
							{comment}
						</Text>
					</View>
					<View>
						<Text numberOfLines={1} style={styles.commentInfo}>
							{info}
						</Text>
					</View>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 16,
		backgroundColor: colors.white,
	},
	avatarContainer: {
		height: 28,
		width: 28,
		borderRadius: 14,
		overflow: "hidden",
	},
	avatar: {
		flex: 1,
	},
	commentContainer: {
		gap: 8,
		width: 310,
		...padding(16),

		backgroundColor: colors.bgInput,
		borderRadius: 6,
	},
	comment: {
		fontSize: 13,
		fontFamily: "Roboto-Regular",
		color: colors.black,
	},
	commentInfo: {
		fontSize: 10,
		fontFamily: "Roboto-Regular",
		color: colors.gray,
	},
});
