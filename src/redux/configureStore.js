import { configureStore } from '@reduxjs/toolkit';
import nobelSlice from './space/nobelSlice';
import laureatesSlice from './space/laureatesSlice';

const store = configureStore({
  reducer: {
    nobel: nobelSlice,
    laureates: laureatesSlice,
  },
});

export default store;
