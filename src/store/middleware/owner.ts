import { PointsServer } from '../../api/PointsServer';
import { ownerFetching, ownerFetchingError, ownerFetchingSuccess } from '../slices/ownerSlice';

import { AppDispatch } from "../store";

export const getOwner = (id: string | undefined) => async (dispatch: AppDispatch) => {
  try {
    const response = await PointsServer.getOwner(id);
    dispatch(ownerFetchingSuccess(response))
  } catch (error) {
    dispatch(ownerFetchingError('ошибка запроса торговых точек'))
  } finally {
    dispatch(ownerFetching(false));
  }
}

