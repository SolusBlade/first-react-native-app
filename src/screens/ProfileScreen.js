import { Text, View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

import padding from "../utils/paddingsStyling";
import colors from "../config/colors";

import UserInfo from "../components/UserInfo";
import ScreenImage from "../components/ScreenImage";
import Title from "../components/Title";
import ImageCard from "../components/ImageCard";
import Avatar from "../components/Avatar";
import LogOutBtn from "../components/LogOutBtn";

export default function ProfileScreen() {
	
	return (
		<View style={styles.container}>
			<ScreenImage />

			<View style={styles.formContainer}>
				<LogOutBtn />
				<Avatar
					style={{ top: 22 }}
					image={
						"file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FMyApp-4131bc3f-d962-4fcb-b707-650a1d72e688/ImagePicker/b0660409-0694-4fc6-86dc-6c39f42cd969.jpeg"
					}
				/>
				<Title>Solus Blade</Title>

				<ImageCard />
				{/* <ImageCard /> */}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-end",
	},
	formContainer: {
		gap: 32,

		marginTop: 150,
		paddingHorizontal: 16,

		...padding(92, 16, 78),
		width: "100%",
		// alignItems: "center",

		backgroundColor: colors.white,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},
});
