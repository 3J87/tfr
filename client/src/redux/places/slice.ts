import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { deletePlace, fetchPlaces, updateRating } from './asyncActions';
import { Place, Status, PlaceSliceState } from './types';

const initialState: PlaceSliceState = {
  items: [],
  status: Status.LOADING,
};

const placeSlice = createSlice({
  name: 'place',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Place[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlaces.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchPlaces.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchPlaces.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });

    builder.addCase(deletePlace.pending, (state, action) => {
      state.status = Status.LOADING;
    });

    builder.addCase(deletePlace.fulfilled, (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.status = Status.SUCCESS;
    });

    builder.addCase(deletePlace.rejected, (state, action) => {
      state.status = Status.ERROR;
    });

    builder.addCase(updateRating.pending, (state, action) => {
      state.status = Status.LOADING;
    });

    builder.addCase(updateRating.fulfilled, (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          let res = item
          res.rating = action.payload.rating
          return res
        }
        return item
      })
      state.status = Status.SUCCESS;
    });

    builder.addCase(updateRating.rejected, (state, action) => {
    });
  },
});

export const { setItems } = placeSlice.actions;

export default placeSlice.reducer;