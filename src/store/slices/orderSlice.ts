import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOrdersTypes } from '../../types/orderTypes';

const initialState: IOrdersTypes = {
  order: [],
  isLoading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    orderFetching(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    orderFetchingSuccess(state, action: PayloadAction<[]>) {
      state.isLoading = false;
      state.order = action.payload;
    },
    orderFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  orderFetching,
  orderFetchingSuccess,
  orderFetchingError,
} = orderSlice.actions;
export default orderSlice.reducer;