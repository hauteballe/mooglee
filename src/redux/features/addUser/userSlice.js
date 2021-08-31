import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: localStorage.getItem('username'),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    add: (state, action) => {
      state.username = action.payload;
    },
    remove: () => {
      return {};
    },
  },
});

export const { add, remove } = userSlice.actions;

export default userSlice.reducer;
