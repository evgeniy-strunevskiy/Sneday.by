import { ICartItemTypes } from './../../types/cartTypes';
import { PointsServer } from './../../api/PointsServer';
import { AppDispatch } from "./../store";
import { cartFetching } from "../slices/cartSlice";
import { getCart } from './cart';

export const addToCart =
  (cartItem: ICartItemTypes) => async (dispatch: AppDispatch) => {
    try {
      dispatch(cartFetching(true));
      await PointsServer.addToCart(cartItem)
      dispatch(getCart())
      dispatch(cartFetching(false));
    } catch (error) {
      console.log((error as Error).message);
    } finally {
      dispatch(cartFetching(false));
    }
  };
