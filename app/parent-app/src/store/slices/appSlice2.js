import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: "This data comes from the global Redux store in the parent app, specifically from the appSlice2 for the child2 app.",
};

const appSlice2 = createSlice({
  name: 'app2',
  initialState,
  reducers: {
    updateMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { updateMessage } = appSlice2.actions;
export default appSlice2.reducer;
