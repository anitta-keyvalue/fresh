import baseApi from "../../api/api";

const homeApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => ({
        url: `products`,
        method: "GET",
      }),
    }),
  }),
});

export const { useLazyGetTasksQuery } = homeApis;
