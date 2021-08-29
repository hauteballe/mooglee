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
      localStorage.setItem('username', action.payload);
    },
    remove: () => {
      localStorage.removeItem('username');
      return {};
    },
  },
});

export const { add, remove } = userSlice.actions;

export default userSlice.reducer;
