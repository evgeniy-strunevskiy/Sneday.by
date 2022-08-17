import { ICommentsTypes, ICommentTypes } from './../../types/commentsTypes';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IResponse {
  data: ICommentTypes[];
  totalCount: string;
}

const initialState: ICommentsTypes = {
  totalCount: null,
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
    commentsFetchingSuccess(state, action: PayloadAction<IResponse>) {
      state.isLoading = false;
      state.comments = action.payload.data;
      state.totalCount = action.payload.totalCount;
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
