import React from "react";
import {
	Dimensions,
	ImageBackground,
	StyleSheet,
	Text,
	View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import colors from "../config/colors";
import Container from "../components/Container";
import { useRoute } from "@react-navigation/native";

export default function MapScreen({ route }) {
	// const {
	// 	params: { coords },
	// } = useRoute();
	const { latitude, longitude, place } = route.params;

	return (
		<Container style={[styles.container, { alignItems: "center" }]}>
			<MapView
				style={styles.mapStyle}
				region={{
					latitude,
					longitude,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
				mapType="standard"
				minZoomLevel={15}
				// onMapReady={() => console.log("Map is ready")}
				// onRegionChange={() => console.log("Region change")}
			>
				<Marker
					title={place}
					coordinate={{ latitude, longitude }}
					// description="Hello"
				/>
			</MapView>
		</Container>
	);
}

const styles = StyleSheet.create({
	mapStyle: {
		width: "100%",
		height: "100%",
	},
});
