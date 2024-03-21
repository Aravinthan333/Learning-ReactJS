import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    name: "test1",
    designation: "MBBS",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: 2,
    name: "test2",
    designation: "MD",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
];

const postsSlice = createSlice({
  name: "poosts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, designation, userId }) {
        return {
          payload: {
            id: nanoid(),
            name,
            designation,
            date: new Date().toISOString(),
            userId,
          },
        };
      },
    },
  },
});

export const { addPost } = postsSlice.actions;
export const selectAllPosts = (state) => state.po0sts;
export default postsSlice.reducer;
