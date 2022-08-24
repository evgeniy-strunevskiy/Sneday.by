import React, { FC } from "react";
import styles from "./Cards.module.scss";
import classNames from "classnames/bind";
import { Card } from "./Card";
import { IVegetablesTypes } from "../types/pointsTypes";

const cl = classNames.bind(styles);

interface ICardsPropsTypes {
  vegetables: IVegetablesTypes[];
}

export const Cards: FC<ICardsPropsTypes> = ({ vegetables }) => {
  return (
    <ul className={cl("cards")}>
      {vegetables.map((vegetable) => (
        <Card key={vegetable.id} vegetable={vegetable} />
      ))}
    </ul>
  );
};
