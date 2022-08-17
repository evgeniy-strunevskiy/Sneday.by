import { getFavorites } from './favorites';
import { PointsServer } from "../../api/PointsServer";

import { favoritesFetching } from "../slices/favoritesSlice";
import { AppDispatch } from "../store";
import { IFavoriteTypes } from '../../types/favoritesTypes';

export const addFavorite =
  (favorite: IFavoriteTypes) => async (dispatch: AppDispatch) => {
    try {
      dispatch(favoritesFetching(true));
      await PointsServer.addFavorite(favorite);
      dispatch(getFavorites())
      dispatch(favoritesFetching(false));
    } catch (error) {
      console.log((error as Error).message);
    } finally {
      dispatch(favoritesFetching(false));
    }
  };

