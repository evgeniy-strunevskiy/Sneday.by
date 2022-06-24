import React, { FC } from "react";
import styles from "./Cards.module.scss";
import classNames from "classnames/bind";
import { Card } from "./UI/card/Card";
import { VegetablesTypes } from "../types/pointsTypes";

const cl = classNames.bind(styles);

interface CardsProps {
  vegetables: VegetablesTypes[];
}

export const Cards: FC<CardsProps> = ({ vegetables }) => {

  return (
    <ul className={cl("cards")}>
      {vegetables.map((vegetable) => (
        <Card key={vegetable.id} vegetable={vegetable} />
      ))}
    </ul>
  );
};
