import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const getAccessToken = (): string => {
//     const token = localStorage.getItem("access_token")
//     return token ? token : ""
// }

const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER_URL,
    //* uncomment if you will need add authorization later
    // prepareHeaders: (headers) => {
    //     headers.set("Authorization", getAccessToken())
    //     return headers
    // }
  }),
  endpoints: (builder) => ({
    demo: builder.query<Array<number>, string>({
      query: () => {
        return {
          url: "/",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useDemoQuery } = mainApi;

export default mainApi