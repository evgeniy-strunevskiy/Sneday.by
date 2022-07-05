import React, { FC } from "react";
import { ReactComponent as Heart } from "../assets/icons/heart.svg";
import classNames from "classnames/bind";
import styles from "./CardFavorite.module.scss";

const cl = classNames.bind(styles);

interface CardFavoritePropsTypes {
  isFavorite: boolean;
  handleFavorites(): void;
}

export const CardFavorite: FC<CardFavoritePropsTypes> = ({
  handleFavorites,
  isFavorite,
}) => {
  return (
    <button onClick={handleFavorites} className={cl("card_favorite")}>
      <Heart
        className={cl("card_favoriteIcon", {
          card_favoriteIcon__active: isFavorite,
        })}
      />
    </button>
  );
};
