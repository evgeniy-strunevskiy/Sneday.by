import { ICommentsTypes, ICommentTypes } from './../../types/commentsTypes';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ICommentsTypes = {
  comments: [],
  isLoading: false,
  error: null,
};

const  commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    commentsFetching(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    commentsFetchingSuccess(state, action: PayloadAction<ICommentTypes[]>) {
      state.isLoading = false;
      state.comments = action.payload;
    },
    commentsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  commentsFetching,
  commentsFetchingSuccess,
  commentsFetchingError,
} = commentsSlice.actions;
export default commentsSlice.reducer;
