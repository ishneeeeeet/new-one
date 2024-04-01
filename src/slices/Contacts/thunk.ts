import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    getUsers as getUsersApi,
    addNewUser as addNewUserApi
} from "../../helpers/fakebackend_helper";

export const getUsers = createAsyncThunk("contacts/getUsers", async () => {
    try {
        const response = getUsersApi();
        return response;
    } catch (error) {
        return error;
    }
});

export const addNewUser = createAsyncThunk("contacts/addNewUser", async (user: any) => {
    try {
        const response = addNewUserApi(user);
        return response;
    } catch (error) {
        return error;
    }
});