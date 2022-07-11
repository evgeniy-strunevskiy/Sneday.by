import React, { FC } from "react";
import styles from "./Banner.module.scss";
import classNames from "classnames/bind";

const cl = classNames.bind(styles);

export const Banner: FC = () => {
  return (
    <div className={cl("banner")}>
      <div className={cl("banner_image")}>
        <img src="./image/plate-2.png" alt="" />
      </div>
      <div className={cl("banner_content")}>
        <h1 className={cl("banner_title")}>Свежие овощи</h1>
        <ul className={cl("banner_list")}>
          <li className={cl("banner_item")}>Выбирай лучшую цену на карте</li>
          <li className={cl("banner_item")}>Делай заказы онлайн</li>
          <li className={cl("banner_item")}>Добавляй в избранное</li>
          <li className={cl("banner_item")}>Кушай, никого не слушай!</li>
        </ul>
      </div>
    </div>
  );
};
