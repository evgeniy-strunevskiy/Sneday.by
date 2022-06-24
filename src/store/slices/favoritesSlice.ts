import { FavoritesTypes } from './../../types/favoritesTypes';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: FavoritesTypes = {
  favorites: [],
  isLoading: false,
  error: null,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    favoritesFetching(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    favoritesFetchingSuccess(state, action: PayloadAction<{id: number}[]>) {
      state.isLoading = false;
      state.favorites = action.payload;
    },
    favoritesFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  favoritesFetching,
  favoritesFetchingSuccess,
  favoritesFetchingError,
} = favoritesSlice.actions;
export default favoritesSlice.reducer;
