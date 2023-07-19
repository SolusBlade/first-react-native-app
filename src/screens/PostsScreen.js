import { StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import UserInfo from "../components/UserInfo";
import ImageCard from "../components/ImageCard";
import Container from "../components/Container";

import colors from "../config/colors";

export default function PostsScreen() {
	const navigation = useNavigation();

	const handleCommentPress = () => {
		navigation.navigate("Home", {
			screen: "Comments",
		});
	};

	const {
		params: {
			email = "solus@mail.ua",
			login = "Solus Blade",
			uri = "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FMyApp-4131bc3f-d962-4fcb-b707-650a1d72e688/ImagePicker/b0660409-0694-4fc6-86dc-6c39f42cd969.jpeg",
		},
	} = useRoute();
	return (
		<Container style={{ gap: 32 }}>
			<UserInfo login={login} email={email} uri={uri} />
			<ImageCard onPress={() => handleCommentPress()} />
			<ImageCard />
		</Container>
	);
}

const styles = StyleSheet.create({});
