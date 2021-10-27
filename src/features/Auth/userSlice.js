import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
  },
});

const { actions, reducer } = counterSlice;
export const { increase, decrease } = actions;
export default reducer;
