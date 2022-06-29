import { PointsServer } from "../../api/PointsServer";
import { cartFetching } from "../slices/cartSlice";
import { AppDispatch } from "../store";
import { getCart } from "./cart";

export const removeFromCart =
(cartItem: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(cartFetching(true));
      await PointsServer.removeFromCart(cartItem);
      dispatch(getCart())
      dispatch(cartFetching(false));
    } catch (error) {
      console.log((error as Error).message);
    } finally {
      dispatch(cartFetching(false));
    }
  };

