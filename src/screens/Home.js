import {
	BottomTabBar,
	createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { AntDesign, Feather } from "@expo/vector-icons";

import ProfileScreen from "./ProfileScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import PostsScreen from "./PostsScreen";

import BottomTabIconsContainer from "../components/BottomTabIconsContainer";
import GoBackBtn from "../components/GoBackBtn";
import LogOutBtn from "../components/LogOutBtn";

import colors from "../config/colors";
import CommentsScreen from "./CommentsScreen";

const Tabs = createBottomTabNavigator();

<AntDesign name="delete" size={24} color="black" />;

export default function Home() {

	return (
		<Tabs.Navigator
			initialRouteName="Profile"
			
			screenOptions={({ route }) => ({
				tabBarStyle: {
					height: 60,
					borderTopColor: colors.gray,
					borderTopWidth: 1,
				},

				tabBarIcon: ({ focused, color, size }) => {
					if (route.name === "Profile") {
						return (
							<BottomTabIconsContainer focused={focused}>
								<Feather
									name="user"
									size={24}
									color={focused ? colors.white : colors.black08}
								/>
							</BottomTabIconsContainer>
						);
					} else if (route.name === "Create") {
						return (
							<BottomTabIconsContainer focused={focused}>
								<AntDesign
									name="plus"
									size={24}
									color={focused ? colors.white : colors.black08}
								/>
							</BottomTabIconsContainer>
						);
					} else if (route.name === "Posts") {
						return (
							<BottomTabIconsContainer focused={focused}>
								<AntDesign
									name="appstore-o"
									size={24}
									color={focused ? colors.white : colors.black08}
								/>
							</BottomTabIconsContainer>
						);
					}
				},
				tabBarShowLabel: false,
			})}
		>
			<Tabs.Screen
				name="Posts"
				component={PostsScreen}
				options={{
					title: "Публікації",
					headerStyle: {
						borderBottomWidth: 1,
						borderBottomColor: colors.gray,
					},
					headerTintColor: colors.gray,
					headerTitleAlign: "center",
					headerTitleStyle: {
						fontWeight: "medium",
						fontSize: 18,
						color: colors.black,
					},
					// headerTitleContainerStyle: {
					// 	marginLeft: 140,
					// },
					headerRight: () => <LogOutBtn style={{ top: 15 }} />,
				}}
			/>

			<Tabs.Screen
				name="Create"
				component={CreatePostsScreen}
				options={({ navigation, back }) => ({
					tabBarStyle: { display: "none" },
					title: "Створити публікацію",

					headerStyle: {
						borderBottomWidth: 1,
						borderBottomColor: colors.gray,
					},
					headerTintColor: colors.gray,
					headerTitleAlign: "center",
					headerTitleStyle: {
						fontWeight: "medium",
						fontSize: 18,
						color: colors.black,
					},
					// headerTitleContainerStyle: {
					// 	marginHorizontal: 40,
					// },
					headerLeft: () => {
						return (
							// back &&
							<GoBackBtn />
						);
					},
				})}
			/>

			<Tabs.Screen
				name="Comments"
				component={CommentsScreen}
				options={({ navigation, back }) => ({
					tabBarItemStyle: { display: "none" },
					tabBarStyle: { display: "none" },
					title: "Коментарі",

					headerStyle: {
						borderBottomWidth: 1,
						borderBottomColor: colors.gray,
					},
					headerTintColor: colors.gray,
					headerTitleAlign: "center",
					headerTitleStyle: {
						fontWeight: "medium",
						fontSize: 18,
						color: colors.black,
					},
					headerTitleContainerStyle: {
						marginHorizontal: 40,
					},
					headerLeft: () => {
						return (
							// back &&
							<GoBackBtn />
						);
					},
				})}
			/>

			<Tabs.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					headerShown: false,
				}}
			/>
		</Tabs.Navigator>
		// <View style={styles.container}>
		// 	<UserInfo login={login} email={email} />
		// 	<BottomTabBar />
		// </View>
	);
}
