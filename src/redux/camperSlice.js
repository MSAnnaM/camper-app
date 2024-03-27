import { createSlice } from '@reduxjs/toolkit';
import { getAllCards, getTotal } from './camperApi';

const handleFulfilled = (state, { payload }) => {
  state.adverts = [...payload];
  state.isLoading = false;
  state.error = null;
};

const cardsSlice = createSlice({
  name: 'card',
  initialState: {
    adverts: [],
    booking: [],
    favorites: [],
    total: 13,
    isLoading: false,
    error: null,
  },
  reducers: {
    addToFavorites: (state, { payload }) => {
      state.favorites.push(payload);
    },
    removeFromFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter(card => card._id !== payload);
    },
    book: (state, { payload }) => {
      state.booking.push(payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCards.fulfilled, handleFulfilled)
      .addCase(getTotal.fulfilled, (state, { payload }) => {
        state.total = payload.length;
        state.isLoading = false;
        state.error = null;
      });
  },
});
export const cardsReducer = cardsSlice.reducer;
export const { addToFavorites, removeFromFavorites, book } = cardsSlice.actions;
