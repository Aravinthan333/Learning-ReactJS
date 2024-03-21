import { configureStore } from "@reduxjs/toolkit";
import CounterSliceReducer from "./slice";
import PostsSliceReducer from "../Practice2/posts/postsSlice";
import usersSliceReducer from "../Practice2/posts/usersSlice";

export const store = configureStore({
  reducer: {
    cOunter: CounterSliceReducer,
    po0sts: PostsSliceReducer,
    users: usersSliceReducer,
  },
});
