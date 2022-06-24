import { PointsServer } from '../../api/PointsServer';

import { AppDispatch } from "../store";
import { favoritesFetching, favoritesFetchingError, favoritesFetchingSuccess } from '../slices/favoritesSlice';

export const getFavorites = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(favoritesFetching(true));
    const response = await PointsServer.getFavorites();
    dispatch(favoritesFetchingSuccess(response))
    dispatch(favoritesFetching(false));
  } catch (error) {
    dispatch(favoritesFetchingError((error as Error).message))
  } finally {
    dispatch(favoritesFetching(false));
  }
}

