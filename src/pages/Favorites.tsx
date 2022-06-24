import React, { FC } from "react";
import classNames from "classnames/bind";
import styles from "./Favorites.module.scss";
import { useAppSelector } from "../hooks/redux";
import { Cards } from "../components/Cards";
import { VegetablesTypes } from "../types/pointsTypes";

const cl = classNames.bind(styles);

export const Favorites: FC = () => {
  const { favorites } = useAppSelector((state) => state.favorites);
  const { points } = useAppSelector((state) => state.points);

  const favoritesCards: VegetablesTypes[] = [];

  favorites.forEach((favorite) => {
    points.forEach((item) =>
      item.vegetables.forEach((vegetable) => {
        if (vegetable.id === favorite.id) {
          favoritesCards.push(vegetable);
        }
      })
    );
  });

  return (
    <div className={cl("favorites")}>
      <div className={cl("favorites_container")}>
        <Cards vegetables={favoritesCards} />
      </div>
    </div>
  );
};
