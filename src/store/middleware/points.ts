import { PointsServer } from './../../api/PointsServer';

import { AppDispatch } from "../store";
import { pointsFetching, pointsFetchingError, pointsFetchingSuccess } from '../slices/pointsSlice';

export const getPoints = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(pointsFetching(true));
    const response = await PointsServer.getAll();
    dispatch(pointsFetchingSuccess(response))
  } catch (error) {
    dispatch(pointsFetchingError('ошибка запроса торговых точек'))
  } finally {
    dispatch(pointsFetching(false));
  }
}

