import { getFavorites } from './favorites';
import { PointsServer } from "../../api/PointsServer";

import { favoritesFetching } from "../slices/favoritesSlice";
import { AppDispatch } from "../store";

export const addFavorite =
  (favorite: {id: number}) => async (dispatch: AppDispatch) => {
    try {
      dispatch(favoritesFetching(true));
      console.log('addFavorite')
      await PointsServer.addFavorite(favorite);
      dispatch(getFavorites())
      dispatch(favoritesFetching(false));
    } catch (error) {
      console.log((error as Error).message);
    } finally {
      dispatch(favoritesFetching(false));
    }
  };

