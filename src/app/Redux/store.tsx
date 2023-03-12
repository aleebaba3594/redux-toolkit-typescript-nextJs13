"use client";

import { configureStore } from "@reduxjs/toolkit";
// import slice files
import counterReducer from "./Features/counter/counterSlice";
import nameReducer from "./Features/name/nameSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    name: nameReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
