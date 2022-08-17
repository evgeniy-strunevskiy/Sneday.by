import { PointsServer } from '../../api/PointsServer';
import { commentsFetching, commentsFetchingError, commentsFetchingSuccess } from '../slices/commentsSlice';

import { AppDispatch } from "../store";


export const getComments = (limit: number, page: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(commentsFetching(true));
    const response = await PointsServer.getComments(limit, page);
    dispatch(commentsFetchingSuccess(response))
    dispatch(commentsFetching(false));
  } catch (error) {
    dispatch(commentsFetchingError((error as Error).message))
  } finally {
    dispatch(commentsFetching(false));
  }
}

