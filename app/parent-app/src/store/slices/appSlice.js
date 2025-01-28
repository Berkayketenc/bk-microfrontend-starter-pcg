import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: "This data comes from the global Redux store in the parent app, specifically from the appSlice for the child1 app.",
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { updateMessage } = appSlice.actions;
export default appSlice.reducer;
