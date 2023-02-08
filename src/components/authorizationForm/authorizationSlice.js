import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    authorizationStatus: false,
    login: 'info@liis.su',
    password: '11111111'
}

const authorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        // authorizationTrue: state => {state.authorization = true},
        authorizationFalse: state => {state.authorizationStatus = false},
        authorizationTrue: (state, action) => {
            state.authorizationStatus = true;
            state.login = action.payload.login;
            state.password = action.payload.password;
        }
    }
})

const {actions, reducer} = authorizationSlice;

export default reducer;
export const {
    authorizationTrue,
    authorizationFalse
} = actions;