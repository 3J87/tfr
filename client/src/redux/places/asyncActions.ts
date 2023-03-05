import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Place, updateRatingProps } from './types';


export const fetchPlaces = createAsyncThunk<Place[]>(
  'place/fetchPlaceStatus',
  async () => {
    const { data } = await axios.get<Place[]>(`http://localhost:3000/places`);

    return data;
  },
);

export const deletePlace = createAsyncThunk<number, number>(
  'place/deletePlace',
  async (id) => {
    const { data } = await axios.delete<number>(`http://localhost:3000/places/${id}`);
    return id;
  }
)

export const updateRating = createAsyncThunk<updateRatingProps, updateRatingProps>(
  'place/updateRating',
  async (params) => {
    const { id, rating } = params;

    await axios.patch<number>(`http://localhost:3000/places/${id}`, { rating });
    return params
  }
)