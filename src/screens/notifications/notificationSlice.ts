import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PURGE} from 'redux-persist';

export interface Home {
  homeData: Array<object>;
}

const initialState: Home = {
  homeData: [],
};

export const NotificationSlice = createSlice({
  name: 'Notification',
  initialState,
  reducers: {
    setHomeData: (state, action: PayloadAction<Array<object>>) => {
      state.homeData = action.payload;
    },
    resetHomeSlice: () => initialState,
  },
});

export const {setHomeData, resetHomeSlice} = NotificationSlice.actions;
export default NotificationSlice.reducer;
