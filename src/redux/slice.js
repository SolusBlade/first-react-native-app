import { createSlice } from "@reduxjs/toolkit";
import avatar from "../assets/images/avatar.jpg";

const userInitialState = {
	user: { name: null, email: null, avatar: avatar },
	isLoggedIn: false,
	isLoading: false,
	error: null,
};

const userSlice = createSlice({
	name: "user",
	initialState: userInitialState,
	reducers: {
		addUser(state, { payload }) {
			console.log("payload/ slice/addUser", payload);
			state.user = payload;
			state.isLoggedIn = true;
		},
		updateUser(state, { payload }) {
			console.log("payload / slice / UpdateUser", payload);
			state.user = { ...state.user, ...payload };
		},
		logoutUser(state, { payload }) {
			state.user = userInitialState;
		},
	},
});

const postsSlice = createSlice({
	name: "posts",
	initialState: [],
	reducers: {
		createPost(state, { payload }) {
			console.log("payload / PostsSlice / create", payload);

			state.posts.push(payload);
		},
		getPosts(state, { payload }) {
			console.log(" PostsSlice / get", state.posts);
			return state.posts;
		},
		deletePost(state, { payload }) {},
	},
});


const { actions: postsActions, reducer: postsReducer } = postsSlice;
export const { createPost, updatePost, deletePost } = postsActions;

const { actions: userActions, reducer: userReducer } = userSlice;
export const { addUser, getUser, updateUser, logoutUser } = userActions;

export { userReducer, postsReducer };
