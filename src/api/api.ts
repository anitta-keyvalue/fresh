import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';
import {Mutex} from 'async-mutex';
// import {QueryReturnValue} from '@reduxjs/toolkit/dist/query/baseQueryTypes';

import {clearStore} from '../store';

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: Config.BASE_URL,
  prepareHeaders: async headers => {
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});




const customBaseQuery: BaseQueryFn = async (args, api, extraOptions) => {
  try {
    await mutex.waitForUnlock();
    let result: any = await baseQuery(args, api, extraOptions);
    return result;
  } catch (error) {
    return error;
  }
};

const baseApi = createApi({
  baseQuery: customBaseQuery,
  endpoints: () => ({}),
  refetchOnMountOrArgChange: true,
  tagTypes: [],
});

export default baseApi;
