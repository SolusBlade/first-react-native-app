import { createSelector } from "@reduxjs/toolkit";

export const selectUser = (state) => state.user;
export const selectPosts = (state) => state.posts;

export const selectIsLoading = (state) => state.isLoading;
export const selectIsPostsExist = (state) => Boolean(state.posts.items.length);
