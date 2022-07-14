import React, { FC } from "react";
import styles from "./CartItem.module.scss";
import classNames from "classnames/bind";
import { ICartItemTypes } from "../types/cartTypes";
import { removeFromCart } from "../store/middleware/removingFromCart";
import { useAppDispatch } from "../hooks/redux";

const cl = classNames.bind(styles);

interface ICartItemPropsTypes {
  cartItem: ICartItemTypes;
}

export const CartItem: FC<ICartItemPropsTypes> = ({ cartItem }) => {

  const dispatch = useAppDispatch()

  const removeCartItem = () => {
    console.log('removeCartItem')

      dispatch(removeFromCart(cartItem.id));
  }

  return (
    <li key={cartItem.id} className={cl("cart-item")}>
      <div className={cl("cart-item_container", )}>
        <div className={cl("cart-item_image", "cart-item_el")}>
          <img src={cartItem.imgUrl} alt="vegetable" />
        </div>
        <div className={cl("cart-item_title", "cart-item_el")}>{cartItem.title} "{cartItem.name}"</div>
        <div className={cl("cart-item_weight", "cart-item_el")}>{cartItem.weight} кг.</div>
        <div className={cl("cart-item_price", "cart-item_el")}>{cartItem.price} &euro;</div>
        <div className={cl("cart-item_button", "cart-item_el")}>
          <button onClick={removeCartItem} className={cl("cart-item_delete-btn")} />
        </div>
      </div>
    </li>
  );
};
