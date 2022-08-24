import React, { FC } from "react";
import styles from "./CardVegetable.module.scss";
import clasnames from "classnames/bind";

const cl = clasnames.bind(styles);

interface ICardVegetablePropsTypes {
  title: string;
  name: string;
}

export const CardVegetable: FC<ICardVegetablePropsTypes> = ({
  title,
  name,
}) => {
  return (
    <h3 className={cl("card_vegetable")}>
      {title} <span className={cl("card_name")}>"{name}"</span>
    </h3>
  );
};
