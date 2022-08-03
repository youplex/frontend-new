import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: { user: {}, token : '' },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        logoutUser: (state, _) => {
            state.token = '';
            state.user = {};
        }
    }
});

export const { setToken, setUser, logoutUser } = authSlice.actions; 
