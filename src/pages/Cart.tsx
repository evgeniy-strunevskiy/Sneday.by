import React, { FC } from "react";
import styles from "./Cart.module.scss";
import classNames from "classnames/bind";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { CartList } from "../components/CartList";
import { removeFromCart } from "../store/middleware/removingFromCart";
import { ReactComponent as Box } from "../assets/icons/box.svg";

const cl = classNames.bind(styles);

export const Cart: FC = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);

  const totalPrice = cart.reduce((sum, obj) => Number(obj.price) + sum, 0);
  const totalWeight = cart.reduce((sum, obj) => Number(obj.weight) + sum, 0);

  const onClickOrder = async () => {
    const order = {
      date: Date.now(),
      totalWeight,
      totalPrice,
    };
    console.log(order);
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];
      dispatch(removeFromCart(item.id));
    }
  };

  return (
    <div className={cl("cart")}>
      <div className={cl("cart_container")}>
        {cart.length ? (
          <div className={cl("cart_busy")}>
            <h1 className={cl("cart_title")}>Moя корзина</h1>
            <CartList cart={cart} />
            <div className={cl("cart_total")}>
              <div className={cl("cart_total-content")}>
                <h2 className={cl("cart_total-text")}>Итого </h2>
                <div className={cl("cart_total-dash")} />
                <div className={cl("cart_total-weight")}>
                  {" "}
                  {totalWeight.toFixed(1)} кг.
                </div>
                <div className={cl("cart_total-price")}>
                  {" "}
                  {totalPrice.toFixed(1)} &euro;
                </div>
              </div>
              <button onClick={onClickOrder} className={cl("cart_total-btn")}>
                Оформить заказ
              </button>
            </div>
          </div>
        ) : (
          <div className={cl("cart_empty")}>
            <Box className={cl("cart_icon")} />
            <h2 className={cl("cart_empty-text")}>Корзина пуста...</h2>
          </div>
        )}
      </div>
    </div>
  );
};
