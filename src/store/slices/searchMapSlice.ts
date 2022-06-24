import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {searchMap: string, vegetable: string | null} = {
  searchMap: '',
  vegetable: null,
}

const searchMapSlice = createSlice({
  name: "vegetables",
  initialState,
  reducers: {
    getSearchMap(state, action: PayloadAction<string>) {
      state.searchMap = action.payload;
    },
    getVegetableMap(state, action: PayloadAction<string | null>) {
      state.vegetable = action.payload;
    },
  },
});

export const {getSearchMap, getVegetableMap} =
searchMapSlice.actions;
export default searchMapSlice.reducer;