import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPointsTypes, IPointTypes } from "../../types/pointsTypes";

const initialState: IPointsTypes = {
  points: [],
  isLoading: false,
  error: null,
}


const pointsSlice = createSlice({
  name: "points",
  initialState,
  reducers: {
    pointsFetching(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    pointsFetchingSuccess(state, action: PayloadAction<IPointTypes[]>) {
      state.isLoading = false;
      state.points = action.payload
    },
    pointsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
});

export const { pointsFetching, pointsFetchingSuccess,pointsFetchingError } =
pointsSlice.actions;
export default pointsSlice.reducer;