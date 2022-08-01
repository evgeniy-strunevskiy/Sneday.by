import React, { FC } from "react";
import { ReactComponent as Heart } from "../assets/icons/heart.svg";
import classNames from "classnames/bind";
import styles from "./CardFavorite.module.scss";

const cl = classNames.bind(styles);

interface ICardFavoritePropsTypes {
  isFavorite: boolean;
  handleFavorites(): void;
  isDisable: boolean;
}

export const CardFavorite: FC<ICardFavoritePropsTypes> = ({
  handleFavorites,
  isFavorite,
  isDisable,
}) => {
  return (
    <div  className={cl("card_favorite", {
      card_favorite__disable: isDisable,
    })}>
      <button
        onClick={handleFavorites}
        disabled={isDisable}
        className={cl("card_favorite-btn")}
      >
        <Heart
          className={cl("card_favoriteIcon", {
            card_favoriteIcon__active: isFavorite,
            card_favoriteIcon__disabled: isDisable,
          })}
        />
      </button>
    </div>
  );
};
