import React, { FC } from "react";
import styles from "./Price.module.scss";
import classNames from "classnames/bind";
import {ReactComponent as Cart} from '../../../assets/icons/cart.svg'

const cl = classNames.bind(styles);

export const Price: FC = () => {
  return (
    <div className={cl("price")}>
      <Cart className={cl("price_icon")} />
      <div className={cl("price_sum")}>24р 50к</div>
    </div>
  );
};
