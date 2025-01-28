import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/appSlice.js';
import appReducer2 from './slices/appSlice2.js';

const store = configureStore({
  reducer: {
    app: appReducer,
    app2:  appReducer2,
  },
});

export default store;
