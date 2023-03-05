import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import place from './places/slice'

export const store = configureStore({
  reducer: {
    place
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();