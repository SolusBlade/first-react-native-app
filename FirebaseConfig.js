import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCiZdN-WiSsq3VsSAok4EGs5M5roTm3XBw",
	authDomain: "hanna-app-react-native-2ac8c.firebaseapp.com",
	databaseURL:
		"https://hanna-app-react-native-2ac8c-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "hanna-app-react-native-2ac8c",
	storageBucket: "hanna-app-react-native-2ac8c.appspot.com",
	messagingSenderId: "1080014665719",
	appId: "1:1080014665719:web:c102cf9ed1770549b4a0f2",
	measurementId: "G-1HM943J05G",
};

const FIREBASE_APP = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

