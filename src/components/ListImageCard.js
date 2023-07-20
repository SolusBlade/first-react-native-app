import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import AppImageBackground from "./AppImageBackground";
import PressableWrap from "./PressableWrap";
import { TouchableHighlight } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

export default function ListImageCard({
	coords = { latitude: 50, longitude: 50 },
	image = "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FMyApp-4131bc3f-d962-4fcb-b707-650a1d72e688/ImagePicker/b0660409-0694-4fc6-86dc-6c39f42cd969.jpeg",
	onCommentPress,
	onLocationPress,
	onPress,
	place = "Ivano-Frankivs'k Region, Ukraine",
	renderRightActions,
	title = "Wonderful picture",
}) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight
				activeOpacity={0.7}
				onPress={onPress}
				underlayColor={colors.gray}
			>
				<View style={styles.container}>
					<AppImageBackground source={{ uri: image }} />

					<Text style={styles.title}>{title}</Text>
					<View style={styles.infoContainer}>
						<View style={styles.infoWrap}>
							<PressableWrap
								iconName="chatbubbles-outline"
								iconPressedName="chatbubbles-sharp"
								onPress={onCommentPress}
							/>
							<Text style={styles.infoText}>55</Text>
						</View>

						<View style={styles.infoWrap}>
							<PressableWrap
								iconName="location-outline"
								iconPressedName="location-sharp"
								onPress={onLocationPress}
							/>
							<Text
								style={[styles.infoText, { textDecorationLine: "underline" }]}
							>
								{place}
							</Text>
						</View>
					</View>
				</View>
			</TouchableHighlight>
		</Swipeable>
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
