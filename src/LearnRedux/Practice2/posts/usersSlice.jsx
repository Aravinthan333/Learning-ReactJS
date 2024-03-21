import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", contact: "486745765478" },
  { id: "1", contact: "7457654746548" },
  { id: "2", contact: "8656874546873566" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
