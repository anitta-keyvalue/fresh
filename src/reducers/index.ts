import {combineReducers} from 'redux';

import baseApi from '../api/api';
import homeReducer from '../screens/home/homeSlice';
import notificationReducer from '../screens/details/notificationSlice';

const rootReducer = combineReducers({
  home: homeReducer,
  notification: notificationReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export default rootReducer;
