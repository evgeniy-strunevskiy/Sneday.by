import { PointsServer } from './../../api/PointsServer';

import { AppDispatch } from "../store";
import { vegetablesFetching, vegetablesFetchingSuccess, vegetablesFetchingError  } from '../slices/vegetablesSlice';

export const getVegetables = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(vegetablesFetching(true));
    const response = await PointsServer.getVegetables();
    dispatch(vegetablesFetchingSuccess(response))
  } catch (error) {
    dispatch(vegetablesFetchingError('ошибка запроса торговых точек'))
  } finally {
    dispatch(vegetablesFetching(false));
  }
}

