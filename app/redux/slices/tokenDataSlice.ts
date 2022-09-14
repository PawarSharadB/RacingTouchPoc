import {
  createSlice,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

const tokenDataSlice = createSlice({
  name: 'token',
  initialState: {
    token: [],
  },
  reducers: {
    fetchTokenData: (state, action) => {
      return {
        token: action.payload,
      };
    },
  },
});

export const { fetchTokenData } = tokenDataSlice.actions;
