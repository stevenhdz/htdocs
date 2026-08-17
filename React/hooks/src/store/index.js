import { configureStore } from '@reduxjs/toolkit';
import sharedReducer from './sharedSlice';

export const store = configureStore({
  reducer: {
    shared: sharedReducer,
  },
});