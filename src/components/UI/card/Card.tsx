import React, { FC } from "react";
import { ReactComponent as Heart } from "../../../assets/icons/heart.svg";
import classNames from "classnames/bind";
import styles from "./Card.module.scss";
import { VegetablesTypes } from "../../../types/pointsTypes";

const cl = classNames.bind(styles);

interface CardProps {
  vegetable: VegetablesTypes;
}

export const Card: FC<CardProps> = ({ vegetable }) => {


  
  return (
    <li className={cl("card")}>
      <div className={cl("card_content")}>
        <div className={cl("card_image")}>
          <img src={vegetable.imgUrl} alt="vegetable" />
        </div>
        <div className={cl("card_description")}>
          <div className={cl("card_vegetable")}>
            {vegetable.title}{" "}
            <span className={cl("card_name")}>"{vegetable.name}"</span>
          </div>
          <div className={cl("card_price")}>
            Цена:{" "}
            <span className={cl("card_sum")}>{vegetable.price}&euro; кг.</span>
          </div>
        </div>
      </div>
      <div className={cl("card_actions")}>
        <div className={cl("card_favorite")}>
          <Heart className={cl("card_favoriteIcon")} />
        </div>
        <div className={cl("card_add")}></div>
      </div>
    </li>
  );
};
