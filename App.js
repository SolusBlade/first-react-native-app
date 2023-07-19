import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
	Button,
	Keyboard,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SimpleLineIcons } from "@expo/vector-icons";
import { ToastProvider } from "react-native-toast-notifications";
import Home from "./src/screens/Home";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import colors from "./src/config/colors";
import LogOutBtn from "./src/components/LogOutBtn";

const MainStack = createStackNavigator();

export default function src() {
	const [fontsLoaded] = useFonts({
		"Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
		"Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
		"Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<ToastProvider
			placement="top"
			duration={2500}
			animationType="slide-in"
			animationDuration={550}
			warningColor={colors.accentDark}
			icon={
				<SimpleLineIcons
					name="speech"
					size={24}
					color={colors.white}
					style={{ paddingVertycal: 12, paddingHorizontal: 12 }}
				/>
			}
			textStyle={{ fontSize: 20 }}
			offset={200}
			swipeEnabled={true}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<SafeAreaView style={{ flex: 1 }}>
					<View style={styles.container}>
						<StatusBar style="auto" />
						<NavigationContainer>
							<MainStack.Navigator
								initialRouteName="Login"
								// initialRouteName="Home"
							>
								<MainStack.Screen
									name="Login"
									component={LoginScreen}
									options={{ headerShown: false }}
								/>
								<MainStack.Screen
									name="Register"
									component={RegisterScreen}
									options={{ headerShown: false }}
								/>
								<MainStack.Screen
									name="Home"
									component={Home}
									options={{
										headerShown: false,
										title: "Створити публікацію",
										headerStyle: {
											borderBottomWidth: 1,
											borderBottomColor: colors.gray,
										},
										headerTintColor: colors.gray,
										headerTitleStyle: {
											fontWeight: "medium",
											fontSize: 18,
											color: colors.black,
										},
										headerTitleContainerStyle: {
											marginHorizontal: 80,
										},
										headerRight: () => <LogOutBtn />,
									}}
								/>
							</MainStack.Navigator>
							{/* <WelcomeScreen /> */}
							{/* <PostsScreen /> */}
						</NavigationContainer>
					</View>
				</SafeAreaView>
			</TouchableWithoutFeedback>
		</ToastProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
