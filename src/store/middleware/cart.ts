import { PointsServer } from './../../api/PointsServer';
import { AppDispatch } from "./../store";
import { cartFetching, cartFetchingSuccess } from "../slices/cartSlice";

export const getCart =
  () => async (dispatch: AppDispatch) => {
    try {
      dispatch(cartFetching(true));
      const response = await PointsServer.getCart()
      dispatch(cartFetchingSuccess(response));
      dispatch(cartFetching(false));
    } catch (error) {
      console.log((error as Error).message);
    } finally {
      dispatch(cartFetching(false));
    }
  };
