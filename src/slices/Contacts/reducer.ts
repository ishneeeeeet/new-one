import { createSlice } from "@reduxjs/toolkit";

import { getUsers, addNewUser } from "./thunk";

interface ContactsStateType {
  users: Array<any>,
  userProfile: object,
  error?: string | object | null | undefined | unknown,
}
export const initialState: ContactsStateType = {
  users: [],
  userProfile: {},
  error: ''
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state: any, action: any) => {
      state.users = action.payload;
    })
    builder.addCase(getUsers.rejected, (state, action) => {
      state.error = action.payload || null;
    })
    builder.addCase(addNewUser.fulfilled, (state: any, action: any) => {
      state.users.push(action.payload);
    })
    builder.addCase(addNewUser.rejected, (state, action) => {
      state.error = action.payload || null;
    })
  },
});

export default contactsSlice.reducer;
