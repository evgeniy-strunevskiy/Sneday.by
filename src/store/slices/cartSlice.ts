import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartItemTypes, ICartTypes } from '../../types/cartTypes';

const initialState: ICartTypes = {
  cart: [],
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartFetching(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    cartFetchingSuccess(state, action: PayloadAction<ICartItemTypes[]>) {
      state.isLoading = false;
      state.cart = action.payload;
    },
    cartFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  cartFetching,
  cartFetchingSuccess,
  cartFetchingError,
} = cartSlice.actions;
export default cartSlice.reducer;