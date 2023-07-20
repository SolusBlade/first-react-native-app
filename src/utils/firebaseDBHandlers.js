import {
	collection,
	addDoc,
	getDocs,
	doc,
	setDoc,
	updateDoc,
	query,
	where,
} from "firebase/firestore";
import { FIREBASE_DB } from "../../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const db = FIREBASE_DB;

export const addUserToDB = async ({ email, login, avatar }) => {
	console.log("adduser params", email, login, avatar);
	try {
		const docRef = doc(collection(db, "users"));

		await setDoc(docRef, { login, email, avatar, posts: [] });

		console.log("Document written with ID: ", docRef.id);
		return { id: docRef.id, login, email, avatar, posts: [] };
	} catch (e) {
		console.error("Error adding document: ", e);
	}
};

export const findUserDB = async (email) => {
	let data;

	const usersRef = collection(db, "users");

	const q = query(usersRef, where("email", "==", email));
	const querySnapshot = await getDocs(q);
	console.log("snapshot / findUserDB", querySnapshot);
	querySnapshot.forEach((doc) => {
		data = doc.data();
	});
	console.log("data", data);
	return data;
};

// findUserDB("anna.bazdyreva@gmail.com");

export const getUserDB = async () => {
	const querySnapshot = await getDocs(collection(db, "users"));
	const users = querySnapshot.map((doc) => ({ id: doc.id, data: doc.data() }));

	return users;
};

export const updateAvatarUserDB = async (avatar) => {
	const userDocRef = doc(db, "users", user.email);
};

