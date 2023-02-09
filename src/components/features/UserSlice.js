import { createSlice } from "@reduxjs/toolkit";
import dbService from '../../services/dbUtils'

export const userSlice = createSlice({
    name: 'userData',
    initialState: {
        userData: [],
        isLoading: true,
    },

    reducers: {
        loadUserData: (state, action) => {
            state.userData = action.payload;
        },
        isLoading(state, action){
            state.isLoading = action.payload
        }
    },
})

export const fetchSingleUser = (endpoint) => {
   
    return async (dispatch) => {
        const user = await dbService.getSingleUser(endpoint);
        console.log("user: ", user);
        dispatch(loadUserData(user));
    }
}

export const { loadUserData, isLoading } = userSlice.actions;
export const userInfo = (state) => state.user.userData;
export default userSlice.reducer;