import { useState } from "react";
import {
	Text,
	View,
	TextInput,
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

import { emailRules, passwordRules } from "../utils/validateInputs";
import padding from "../utils/paddingsStyling";
import colors from "../config/colors";

import ButtonEl from "../components/AppButton";
import Title from "../components/Title";
import LinkText from "../components/LinkText";
import ScreenImage from "../components/ScreenImage";
import EyeToggle from "../components/EyeToggle";

export default function LoginScreen() {
	const [isSecure, setIsSecure] = useState(true);
	const [isFocused, setIsFocused] = useState(null);
	const navigation = useNavigation();

	const defaultValues = {
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
			screen: "Posts",

			params: { email: data.email },
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
				<Title style={{ marginBottom: 32 }}>Увійти</Title>

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

				<ButtonEl text="Увійти" onPress={handleSubmit(onSubmit)} />

				<LinkText navigateTo={"register"} navigation={navigation} />
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
		...padding(32, 16, 78),
		width: "100%",

		alignItems: "center",
		backgroundColor: colors.white,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},
	inputWrap: {
		position: "relative",
		width: "100%",
	},
	input: {
		marginBottom: 16,

		...padding(16),
		width: "100%",
		height: 60,
		fontSize: 16,
		fontFamily: "Roboto-Regular",

		color: colors.black,

		backgroundColor: colors.bgInput,
		borderWidth: 1,

		borderColor: colors.borderInput,
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
		color: colors.error,
	},
});
