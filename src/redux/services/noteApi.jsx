import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const noteApi = createApi({
    reducerPath: 'noteApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_SERVER_URL}),
    tagTypes: ['Note'],
    endpoints: (builder) => ({
        allNotes: builder.query({
            query: (token) => ({
                url: '/note/',
                headers: {
                    'x-auth-token': token
                }
            }),
            providesTags: ['Note'],
        }),
        videoNotes: builder.query({
            query: ({ token, videoId }) => ({
                url: `/note/video?id=${videoId}`,
                headers: {
                    'x-auth-token': token
                }
            }),
            providesTags: ['Note'],
        }),
    }),
});

export const { useAllNotesQuery, useVideoNotesQuery } = noteApi;