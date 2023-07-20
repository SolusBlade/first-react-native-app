import { useState } from "react";
import {
	Text,
	View,
	TextInput,
	StyleSheet,
	KeyboardAvoidingView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { emailRules, loginRules, passwordRules } from "../utils/validateInputs";
import padding from "../utils/paddingsStyling";
import colors from "../config/colors";
import { addUserToDB } from "../utils/firebaseDBHandlers";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

import AppButton from "../components/AppButton";
import Title from "../components/Title";
import LinkText from "../components/LinkText";
import ScreenImage from "../components/ScreenImage";
import EyeToggle from "../components/EyeToggle";
import Avatar from "../components/Avatar";
import { ActivityIndicator } from "react-native";
import { useToast } from "react-native-toast-notifications";
import { addUser } from "../redux/slice";

// import { registerUser } from 'redux/auth/authOperations';

export default function RegisterScreen({ navigation }) {
	const dispatch = useDispatch();
	const toast = useToast();
	const auth = FIREBASE_AUTH;

	const [image, setImage] = useState(null);
	const [isSecure, setIsSecure] = useState(true);
	const [isFocused, setIsFocused] = useState(null);
	const [loading, setLoading] = useState(false);

	const defaultValues = {
		login: "",
		email: "",
		password: "",
	};

	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm(defaultValues);

	const toggleSecure = () => {
		isSecure === true ? setIsSecure(false) : setIsSecure(true);
	};

	const onFocus = (inputName) => {
		setIsFocused(inputName);
	};

	const onBlur = (inputName) => {
		setIsFocused(null);
	};

	const signUp = async ({ email, login, password }) => {
		console.log("Registration data", email, login, image);
		setLoading(true);
		try {
			const response = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = {
				email,
				login,
				avatar: image,
			};

			const newUser = await addUserToDB(user);
			console.log("newUser", newUser);
			dispatch(addUser(newUser));

			console.log("response Register", response);
			navigation.navigate("Home", {
				screen: "Profile",
				params: user,
			});
		} catch (error) {
			console.log(error.message);
			if (error.message === "Firebase: Error (auth/email-already-in-use).") {
				navigation.navigate("Login");
				toast.show("You already have an account, please, log in", {
					type: "warning",
				});
			} else {
				toast.show("Sign Up failed: " + error.message, {
					type: "warning",
				});
			}
		} finally {
			reset(defaultValues);
			setIsFocused(null);

			setLoading(false);
		}
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS == "ios" ? "padding" : "height"}
			keyboardVerticalOffset={-180}
			style={styles.container}
		>
			<ScreenImage />

			<View style={styles.formContainer}>
				<Avatar setImage={setImage} image={image} />
				<Title style={{ marginBottom: 32 }}>Реєстрація</Title>

				<View style={styles.inputWrap}>
					<Controller
						control={control}
						rules={loginRules}
						render={({ field: { onChange, value } }) => (
							<TextInput
								style={[styles.input, isFocused === "login" && styles.focused]}
								placeholder="Логін"
								onBlur={onBlur}
								onChangeText={onChange}
								onFocus={() => onFocus("login")}
								value={value}
							></TextInput>
						)}
						name="login"
					/>
					{errors.login && (
						<Text style={styles.error}>
							Логін містить від 2 до 100 символів кирилиці / латиниці.
						</Text>
					)}
				</View>

				<View style={styles.inputWrap}>
					<Controller
						control={control}
						rules={emailRules}
						render={({ field: { onChange, value } }) => (
							<TextInput
								style={[styles.input, isFocused === "email" && styles.focused]}
								placeholder="Адреса електронної пошти"
								onFocus={() => onFocus("email")}
								onBlur={onBlur}
								onChangeText={onChange}
								value={value}
							/>
						)}
						name="email"
					/>
					{errors.email && (
						<Text style={styles.error}>
							Email має бути валідним (my.good-email_new@mail.ua)
						</Text>
					)}
				</View>

				<View style={styles.inputWrap}>
					<Controller
						control={control}
						rules={passwordRules}
						render={({ field: { onChange, value } }) => (
							<TextInput
								style={[
									styles.input,
									isFocused === "password" && styles.focused,
								]}
								placeholder="••••••••••••"
								secureTextEntry={isSecure}
								onFocus={() => onFocus("password")}
								onBlur={onBlur}
								onChangeText={onChange}
								value={value}
							></TextInput>
						)}
						name="password"
					/>
					<EyeToggle
						onPress={toggleSecure}
						isSecure={isSecure}
						isFocused={isFocused === "password"}
					/>

					{errors.password && (
						<Text style={styles.error}>
							Пароль від 6 до 16 символів містить цифру та спецсимвол.
						</Text>
					)}
				</View>
				{loading ? (
					<ActivityIndicator size="large" color={colors.accent} />
				) : (
					<AppButton text="Зареєструватися" onPress={handleSubmit(signUp)} />
				)}

				<LinkText navigateTo={"login"} navigation={navigation} />
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-end",
	},
	formContainer: {
		...padding(92, 16, 78),
		width: "100%",
		alignItems: "center",

		backgroundColor: colors.white,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},
	inputWrap: {
		width: "100%",
	},
	input: {
		marginBottom: 16,
		...padding(16),
		width: "100%",
		height: 60,
		fontSize: 16,
		color: colors.black,
		backgroundColor: colors.bgInput,
		borderColor: colors.borderInput,
		borderWidth: 1,
		borderRadius: 8,
	},
	focused: {
		backgroundColor: colors.white,
		borderColor: colors.accent,
		borderWidth: 1,
	},
	error: {
		position: "absolute",
		bottom: 0,
		left: 16,
		fontSize: 12,
		color: "red",
	},
});
