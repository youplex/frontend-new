import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from './services/authSlice';
import { playlistApi } from './services/playlistApi';
import { noteApi } from "./services/noteApi";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        [playlistApi.reducerPath] : playlistApi.reducer,
        [noteApi.reducerPath]: noteApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
        .concat(playlistApi.middleware)
        .concat(noteApi.middleware)
});
