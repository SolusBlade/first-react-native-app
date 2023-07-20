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
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useToast } from "react-native-toast-notifications";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";

import colors from "../config/colors";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import DeleteBtn from "../components/DeleteBtn";
import Container from "../components/Container";
import PressableWrap from "../components/PressableWrap";

const initialState = {
	image: null,
	title: "",
	place: "",
	coords: {},
};

export default function CreatePostsScreen() {
	const toast = useToast();

	const navigation = useNavigation();

	const [state, setState] = useState(initialState);
	const [isFocused, setIsFocused] = useState(null);

	const [hasPermission, setHasPermission] = useState(null);
	const [cameraRef, setCameraRef] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.back);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			await MediaLibrary.requestPermissionsAsync();
			await Location.requestForegroundPermissionsAsync();

			setHasPermission(status === "granted");

			let location = await Location.getCurrentPositionAsync({});

			const coords = {
				latitude: location.coords.latitude,
				longitude: location.coords.longitude,
			};

			setState((prevState) => ({ ...prevState, coords }));
		})();
	}, []);

	if (hasPermission === null) {
		return <View />;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	const takePhoto = async () => {
		if (cameraRef) {
			const { uri } = await cameraRef.takePictureAsync();
			await MediaLibrary.createAssetAsync(uri);

			setState((prevState) => ({ ...prevState, image: uri }));
			console.log("image", state.image);
		}
	};

	const changeCamera = () => {
		setType(
			type === Camera.Constants.Type.back
				? Camera.Constants.Type.front
				: Camera.Constants.Type.back
		);
	};

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
			screen: "Posts",
			params: { state },
		});

		// console.log("state", state);
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
			<View style={styles.imgInputContainer}>
				<Camera style={styles.camera} type={type} ref={setCameraRef}>
					<View style={styles.imgContainer}>
						{state.image && (
							<ImageBackground
								style={styles.image}
								source={{ uri: state.image }}
							/>
						)}
					</View>
					<TouchableOpacity
						onPress={takePhoto}
						style={[
							styles.cameraIconWrap,
							{
								backgroundColor: state.image ? colors.offWhite : colors.white,
							},
						]}
					>
						<Entypo
							name="camera"
							size={24}
							style={styles.cameraIcon}
							color={state.image ? colors.white : colors.gray}
						/>
					</TouchableOpacity>
				</Camera>

				<Text style={styles.loadText}>
					{state.image ? "Редагувати фото" : "Завантажте фото"}
				</Text>
				{state.image && (
					<PressableWrap
						iconName="camera-reverse-outline"
						iconPressedName="camera-reverse-sharp"
						onPress={changeCamera}
						style={styles.changeCameraIcon}
					/>
				)}
			</View>

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
	camera: {
		aspectRatio: 343 / 240,
		borderRadius: 8,
		overflow: "hidden",
		width: "100%",
		borderWidth: 1,
		borderColor: colors.gray,

		// backgroundColor: colors.bgInput,
	},

	imgContainer: {
		position: "absolute",
		bottom: 0,
		right: 0,
		backgroundColor: "red",
		borderWidth: 1,
		borderColor: colors.gray,

		width: 100,
		height: 70,
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
	changeCameraIcon: {
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
