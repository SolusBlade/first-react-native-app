import { useEffect, useState } from "react";
import {
	Alert,
	ImageBackground,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	Pressable,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useToast } from "react-native-toast-notifications";

import colors from "../config/colors";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import DeleteBtn from "../components/DeleteBtn";
import Container from "../components/Container";

const initialState = {
	image: null,
	title: "",
	place: "",
};

export default function CreatePostsScreen() {
	const toast = useToast();

	const navigation = useNavigation();

	const [state, setState] = useState(initialState);
	const [isFocused, setIsFocused] = useState(null);

	// console.log("fcous", isFocused);

	const deleteImage = () => {
		setState((prevState) => ({ ...prevState, image: null }));
	};

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.canceled) {
			setState((prevState) => ({ ...prevState, image: result.assets[0].uri }));
		}
	};

	const submit = (data) => {
		const { image, title, place } = state;

		if (!image || !title || !place) {
			toast.show("Please fill all the fields", {
				type: "warning",
			});

			return;
		}

		navigation.navigate("Home", {
			screen: "Profile",
			params: { state },
		});

		console.log("state", state);
		setIsFocused(null);
		setState(initialState);
	};

	const deletePost = () => {
		setState(initialState);
	};

	return (
		<Container
			keyboardOffset={-190}
			style={{ justifyContent: "space-between" }}
		>
			<Pressable style={styles.imgInputContainer} onPress={() => pickImage()}>
				<View style={styles.imgContainer}>
					{state.image && (
						<ImageBackground
							style={styles.image}
							source={{ uri: state.image }}
						/>
					)}
				</View>
				<View
					style={[
						styles.cameraIconWrap,
						{ backgroundColor: state.image ? colors.offWhite : colors.white },
					]}
				>
					<Entypo
						name="camera"
						size={24}
						style={styles.cameraIcon}
						color={state.image ? colors.white : colors.gray}
					/>
				</View>

				<Text style={styles.loadText}>
					{state.image ? "Редагувати фото" : "Завантажте фото"}
				</Text>
				{state.image && (
					<Entypo
						style={styles.deleteIcon}
						onPress={() => deleteImage()}
						name="circle-with-cross"
						size={24}
						color={colors.gray}
					/>
				)}
			</Pressable>

			<AppTextInput
				icon="pencil"
				onChangeText={(text) =>
					setState((prevState) => ({ ...prevState, title: text }))
				}
				onFocus={() => setIsFocused("title")}
				placeholder="Назва..."
				style={
					isFocused === "title" ? { borderBottomColor: colors.accent } : null
				}
				value={state.title}
			/>

			<AppTextInput
				icon="location"
				onChangeText={(text) =>
					setState((prevState) => ({ ...prevState, place: text }))
				}
				onFocus={() => setIsFocused("place")}
				placeholder="Місцевість..."
				style={
					isFocused === "place" ? { borderBottomColor: colors.accent } : null
				}
				value={state.place}
			/>

			<AppButton text="Опублікувати" onPress={submit} iconPost />

			<DeleteBtn onPress={deletePost} />
		</Container>
	);
}

const styles = StyleSheet.create({
	imgInputContainer: {
		gap: 8,
	},
	imgContainer: {
		width: "100%",
		height: 240,
		borderRadius: 8,
		overflow: "hidden",
		backgroundColor: colors.bgInput,
	},

	image: {
		flex: 1,
	},
	cameraIconWrap: {
		position: "absolute",
		top: 90,
		left: 140,

		width: 60,
		height: 60,
		borderRadius: 30,
	},
	cameraIcon: {
		position: "absolute",
		top: 18,
		left: 18,
	},
	deleteIcon: {
		position: "absolute",
		bottom: 6,
		right: 6,
	},
	loadText: {
		fontSize: 16,
		fontFamily: "Roboto-Regular",
		color: colors.gray,
		lineHeight: 19,
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
