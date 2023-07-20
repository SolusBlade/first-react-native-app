import { StyleSheet, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import { ImageBackground } from "react-native";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/slice";

import colors from "../config/colors";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { updateProfile } from "firebase/auth";
import { useToast } from "react-native-toast-notifications";

export default function Avatar({ setImage, image }) {
	const dispatch = useDispatch();
	const toast = useToast();

	const auth = FIREBASE_AUTH;

	const deleteImage = () => {
		// console.log("Delete Avatar");
		setImage(null);
		dispatch(updateUser({ avatar: null }));
	};

	const pickImage = async () => {
		// console.log("Avatar Add");
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 1,
		});

		if (!result.canceled) {
			setImage(result.assets[0].uri);
			const user = auth.currentUser;
			console.log("user / Avatr change", user);

			// якщо такий користувач знайдений
			if (user) {
				// оновлюємо його профайл
				try {
					const response = await updateProfile(user, update);
					console.log("response/Avatar", response / Avatar);
				} catch (error) {
					console.log(error.message);

					toast.show("Sign Up failed: " + error.message, {
						type: "warning",
					});
				}

				dispatch(updateUser({ avatar: result.assets[0].uri }));
			}
		}
	};

	return (
		<View style={styles.wrap}>
			<View style={styles.avatar}>
				<ImageBackground
					source={{ uri: image }}
					resizeMode="cover"
					style={styles.image}
				/>
			</View>
			<TouchableOpacity
				style={styles.iconWrap}
				onPress={image ? () => deleteImage() : () => pickImage()}
			>
				<MaterialCommunityIcons
					style={styles.icon}
					name={image ? "close-circle-outline" : "plus-circle-outline"}
					color={image ? colors.gray : colors.accent}
					size={25}
				/>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	wrap: {
		position: "absolute",
		top: -60,
		backgroundColor: colors.transparent,
		width: 132,
		height: 120,
		alignSelf: "center",
	},
	avatar: {
		width: 120,
		height: 120,
		backgroundColor: colors.bgInput,
		borderRadius: 16,
		overflow: "hidden",
	},
	iconWrap: {
		position: "absolute",
		right: 0,
		bottom: 14,
	},
	icon: {
		backgroundColor: colors.white,
		borderRadius: 10,
	},
	image: {
		flex: 1,
		justifyContent: "center",
	},
});
