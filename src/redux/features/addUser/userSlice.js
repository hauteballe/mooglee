import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthorized: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    add: (state, action) => {
      state.username = action.payload;
      state.isAuthorized = Boolean(state.username);
    },
  },
});

export const { add } = userSlice.actions;

export default userSlice.reducer;
