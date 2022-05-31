import { VegetableItemTypes } from './../../types/vegetablesListTypes';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {VegetablesListTypes} from '../../types/vegetablesListTypes'

const initialState: VegetablesListTypes = {
  vegetables: [],
  isLoading: false,
  error: null,
}


const vegetablesSlice = createSlice({
  name: "vegetables",
  initialState,
  reducers: {
    vegetablesFetching(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    vegetablesFetchingSuccess(state, action: PayloadAction<VegetableItemTypes[]>) {
      state.isLoading = false;
      state.vegetables = action.payload
    },
    vegetablesFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
});

export const { vegetablesFetching, vegetablesFetchingSuccess, vegetablesFetchingError } =
vegetablesSlice.actions;
export default vegetablesSlice.reducer;