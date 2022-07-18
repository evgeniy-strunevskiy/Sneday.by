import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPointTypes } from "../../types/pointsTypes";

const initialState: {owner: IPointTypes, isLoading: boolean, error: null | string} = {
  owner: {} as IPointTypes,
  isLoading: true,
  error: null,
}

const ownerSlice = createSlice({
  name: "owner",
  initialState,
  reducers: {
    ownerFetching(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    ownerFetchingSuccess(state, action: PayloadAction<IPointTypes>) {
      state.isLoading = false;
      state.owner = action.payload
    },
    ownerFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
});

export const { ownerFetching, ownerFetchingSuccess,ownerFetchingError } =
ownerSlice.actions;
export default ownerSlice.reducer;