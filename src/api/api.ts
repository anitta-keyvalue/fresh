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
  baseUrl: 'https://ybfqyi6i6g.execute-api.ap-southeast-1.amazonaws.com/default/rj-demo/',
  prepareHeaders: async headers => {
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});




const customBaseQuery: BaseQueryFn = async (args, api, extraOptions) => {
  try {
    await mutex.waitForUnlock();
    // console.log('args', args);
    // console.log('api', api);
    let result: any = await baseQuery(args, api, extraOptions);
    // console.log('result', result);
    return result;
  } catch (error) {
    return error;
  }
};

const baseApi = createApi({
  baseQuery: customBaseQuery,
  endpoints: () => ({}),
  refetchOnMountOrArgChange: true,
  tagTypes: ['task'],
});

export default baseApi;
