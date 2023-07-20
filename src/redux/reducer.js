
const postsInitState = [];
const userInitState = {};

export const postsReducer = (state = postsInitState, action) => {
	console.log("postsReducer state, action", state, action);
};

export const userReducer = (state = userInitState, action) => {
	console.log("userReducer state, action", state, action);
};

