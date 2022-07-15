import React, { FC } from 'react'
import styles from "./Stock.module.scss";
import classnames from "classnames/bind";

const cl = classnames.bind(styles);

interface IStockPropsTypes {}

export const Stock: FC<IStockPropsTypes> = () => {
  return (
    <div className={cl("stock")}>
    <h1 className={cl("stock_title")}>Акция</h1>
    <p className={cl("stock_text")}>
      Приведи друга на рынок и получи скидку{" "}
    </p>
    <div className={cl("stock_percent")}>10%</div>
  </div>
  )
}
