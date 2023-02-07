import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: {}
    },

    reducers: {
        loadUserData: (state, action) => {
            console.log("payload", action.payload[0]);
            state.userData = action.payload;
        }
    },
})

export const { loadUserData } = userSlice.actions;
export const userInfo = (state) => state.user.userData;
export default userSlice.reducer;