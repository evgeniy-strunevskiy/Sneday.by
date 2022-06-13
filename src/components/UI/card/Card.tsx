import React, { FC, useState } from "react";
import { ReactComponent as Heart } from "../../../assets/icons/heart.svg";
import classNames from "classnames/bind";
import styles from "./Card.module.scss";
import { VegetablesTypes } from "../../../types/pointsTypes";

const cl = classNames.bind(styles);

interface CardProps {
  vegetable: VegetablesTypes;
}

export const Card: FC<CardProps> = ({ vegetable }) => {
  const [state, setState] = useState<number>(100);
  const [order, setOrder] = useState<number>(0);

  const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setState(value);
    setOrder(value / 1000);
  };

  return (
    <li className={cl("card")}>
      <div className={cl("card_favorite")}>
        <Heart className={cl("card_favoriteIcon")} />
      </div>
      <div className={cl("card_image")}>
        <img src={vegetable.imgUrl} alt="vegetable" />
      </div>
      <h3 className={cl("card_vegetable")}>
        {vegetable.title}{" "}
        <span className={cl("card_name")}>"{vegetable.name}"</span>
      </h3>

      <div className={cl("range")}>
        <div className={cl("field")}>
          <input
            type="range"
            min="100"
            max="5000"
            value={state}
            onChange={handleRange}
            step="100"
          />
          <div className={cl("value")}>
            <div className={cl("value_order")}>{order}</div>
            <div className={cl("value_unit")}>кг.</div>
          </div>
        </div>
      </div>
      <div className={cl('card_buy')}>
        <div className={cl("card_price")}>
          <div className={cl("card_price-text")}>Цена:{" "}</div>
          <div className={cl("card_sum")}>{vegetable.price}&euro; кг.</div>
        </div>
        <div className={cl("card_add")}></div>
      </div>
    </li>
  );
};
