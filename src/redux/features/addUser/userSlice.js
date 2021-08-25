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
    },
  },
});

export const { add } = userSlice.actions;

export default userSlice.reducer;
