import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PURGE} from 'redux-persist';

export interface Home {
  homeData: Array<object>;
}

const initialState: Home = {
  homeData: [],
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setHomeData: (state, action: PayloadAction<Array<object>>) => {
      state.homeData = action.payload;
    },
    resetHomeSlice: () => initialState,
  },
});

export const {setHomeData, resetHomeSlice} = homeSlice.actions;
export default homeSlice.reducer;
