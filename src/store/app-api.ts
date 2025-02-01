import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://ec2-16-171-239-43.eu-north-1.compute.amazonaws.com:9000" }), // Change this to your API
  endpoints: (builder) => ({
    getClients: builder.query({
      query: () => "/clients", // Update this endpoint as needed
    }),
  }),
});

export const { useGetClientsQuery } = appApi;
