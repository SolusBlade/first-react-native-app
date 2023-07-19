import { useState } from "react";
import {
	Text,
	View,
	TextInput,
	StyleSheet,
	KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

import { emailRules, loginRules, passwordRules } from "../utils/validateInputs";
import padding from "../utils/paddingsStyling";
import colors from "../config/colors";

import ButtonEl from "../components/AppButton";
import Title from "../components/Title";
import LinkText from "../components/LinkText";
import ScreenImage from "../components/ScreenImage";
import EyeToggle from "../components/EyeToggle";
import Avatar from "../components/Avatar";

export default function RegisterScreen() {
	const [image, setImage] = useState(null);
	const [isSecure, setIsSecure] = useState(true);
	const [isFocused, setIsFocused] = useState(null);

	const navigation = useNavigation();

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

	const onSubmit = (data) => {
		console.log("Registration data", data);
		reset(defaultValues);
		setIsFocused(null);

		navigation.navigate("Home", {
			screen: "Profile",
			params: { email: data.email, login: data.login, uri: image },
		});
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

				<ButtonEl text="Зареєструватися" onPress={handleSubmit(onSubmit)} />

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
