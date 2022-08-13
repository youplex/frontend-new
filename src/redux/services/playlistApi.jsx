import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const playlistApi = createApi({
    reducerPath: 'playlistApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_SERVER_URL}),
    tagTypes: ['Playlist'],
    endpoints: (builder) => ({
        playlist: builder.query({
            query: (token) => ({
                url: '/playlist/',
                headers: {
                    'x-auth-token': token
                }
            }),
            providesTags: ['Playlist'],
        }),
    }),
});

export const { usePlaylistQuery } = playlistApi;