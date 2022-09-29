import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const playlistApi = createApi({
  reducerPath: "playlistApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_SERVER_URL }),
  tagTypes: ["Playlist"],
  endpoints: (builder) => ({
    playlist: builder.query({
      query: (token) => ({
        url: "/playlist/",
        headers: {
          "x-auth-token": token,
        },
      }),
      providesTags: ["Playlist"],
      keepUnusedDataFor: 5,
    }),
    videos: builder.query({
      query: ({ token, playlistId, page = 1 }) => ({
        url: `/playlist/videos?id=${playlistId}&page=${page}`,
        headers: {
          "x-auth-token": token,
        },
      }),
      providesTags: ["Playlist"],
    }),
  }),
});

export const { usePlaylistQuery, useVideosQuery } = playlistApi;
