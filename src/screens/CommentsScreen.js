import { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { useToast } from "react-native-toast-notifications";

import AppImageBackground from "../components/AppImageBackground";
import Container from "../components/Container";
import CommentContainer from "../components/CommentContainer";
import ArrowUpBtn from "../components/ArrowUpBtn";

import padding from "../utils/paddingsStyling";
import colors from "../config/colors";

export default function CommentsScreen() {
	const toast = useToast();
	const [message, setMessage] = useState("");

	const handleChange = (text) => {
		setMessage(text);
	};

	const submitMessage = () => {
		if (!message) {
			toast.show("You can't send empty comment", {
				type: "warning",
			});
			return;
		}
		console.log(message);
		setMessage("");
	};
	return (
		<Container style={{ gap: 24 }} keyboardOffset={-200}>
			<AppImageBackground source={require("../assets/images/bg4.jpg")} />
			<View style={styles.commentsContainer}>
				<CommentContainer
					avatar={require("../assets/images/bg4.jpg")}
					info="09 червня, 2020 | 08:40"
					comment="Really love your most recent photo. I’ve been trying to capture the
					same thing for a few months and would love some tips!"
				/>
				<CommentContainer
					avatar={require("../assets/avatar.png")}
					info="09 червня, 2020 | 08:40"
					comment="Really love your most recent photo. I’ve been trying to capture the
					same thing for a few months and would love some tips!"
					author
				/>
				<CommentContainer
					avatar={require("../assets/images/bg4.jpg")}
					info="09 червня, 2020 | 08:40"
					comment="Thank you! That was very helpful!"
				/>
			</View>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					onChangeText={handleChange}
					placeholder="Коментувати..."
					value={message}
				></TextInput>
				<ArrowUpBtn onPress={() => submitMessage()} />
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	commentsContainer: {
		gap: 24,
		width: "100%",
		height: 320,
	},
	inputContainer: {
		flexDirection: "row",
		...padding(8, 8, 8, 16),
		width: "100%",
		height: 50,
		backgroundColor: colors.bgInput,
		borderColor: colors.borderInput,
		bordermWidth: 1,
		borderRadius: 25,
	},
	input: {
		flexGrow: 1,
		color: colors.black,
		fontFamily: "Roboto-Regular",
		fontSize: 16,
		lineHeight: 19,
	},
});
