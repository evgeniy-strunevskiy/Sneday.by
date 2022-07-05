import React, { FC } from "react";
import classNames from "classnames/bind";
import styles from "./CardBuy.module.scss";

const cl = classNames.bind(styles);

interface CardBuyPropsTypes {
  price: number;
  isItemCart: boolean; 
  isDisable: boolean;
  onAddToCart(): void;
}

export const CardBuy: FC<CardBuyPropsTypes> = ({price, isItemCart, isDisable, onAddToCart}) => {
  return (
    <div className={cl("cardbuy")}>
      <div className={cl("cardbuy_price")}>
        <div className={cl("cardbuy_price-text")}>Цена: </div>
        <div className={cl("cardbuy_sum")}>{price}&euro; кг.</div>
      </div>
      <button
        className={cl("cardbuy_add", { cardbuy_add__true: isItemCart })}
        disabled={isItemCart === true ? false : isDisable}
        onClick={onAddToCart}
      />
    </div>
  );
};
