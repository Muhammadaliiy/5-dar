import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, { payload }) => { },
        logOut: (state, { payload }) => { },
    }
});

export const { logOut, login } = userSlice.actions;
export default userSlice.reducer;
