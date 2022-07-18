import React, { FC } from "react";
import classNames from "classnames/bind";
import styles from "./CardBuy.module.scss";
import { ReactComponent as Cross } from "../assets/icons/cross.svg";


const cl = classNames.bind(styles);

interface ICardBuyPropsTypes {
  price: number;
  weight: number;
  isItemCart: boolean;
  isDisable: boolean;
  onAddToCart(): void;
}

export const CardBuy: FC<ICardBuyPropsTypes> = ({
  price,
  weight,
  isItemCart,
  isDisable,
  onAddToCart,
}) => {
  console.log(isItemCart)
  return (
    <div className={cl("cardbuy")}>
      <div className={cl("cardbuy_price")}>
        <div className={cl("cardbuy_price-text")}>Цена: </div>
        <div className={cl("cardbuy_sum")}>{price}&euro; кг.</div>
      </div>
      <button
        className={cl(
          "cardbuy_add",
          { cardbuy_add__true: isItemCart },
          { cardbuy_add__weight: !weight }
        )}
        disabled={isItemCart === true ? false : isDisable}
        onClick={onAddToCart}
      >
        <Cross className={cl('cross')}/>
      </button>
    </div>
  );
};
