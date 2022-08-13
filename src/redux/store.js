import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from './services/authSlice';
import { playlistApi } from './services/playlistApi';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        [playlistApi.reducerPath] : playlistApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
        .concat(playlistApi.middleware)
});
