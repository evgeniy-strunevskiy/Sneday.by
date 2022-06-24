import { PointsServer } from './../../api/PointsServer';

import { AppDispatch } from "../store";
import { pointsFetching, pointsFetchingError, pointsFetchingSuccess } from '../slices/pointsSlice';

export const getPoints = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(pointsFetching(true));
    const response = await PointsServer.getAll();
    dispatch(pointsFetchingSuccess(response))
  } catch (error) {
    console.log((error as Error).message)
    dispatch(pointsFetchingError((error as Error).message))
  } finally {
    dispatch(pointsFetching(false));
  }
}

