import React, { FC } from "react";
import styles from "./Cards.module.scss";
import classNames from "classnames/bind";
import { Card } from "./Card";
import { VegetablesTypes } from "../types/pointsTypes";

const cl = classNames.bind(styles);

interface CardsPropsTypes {
  vegetables: VegetablesTypes[];
}

export const Cards: FC<CardsPropsTypes> = ({ vegetables }) => {

  return (
    <ul className={cl("cards")}>
      {vegetables.map((vegetable) => (
        <Card key={vegetable.id} vegetable={vegetable} />
      ))}
    </ul>
  );
};
