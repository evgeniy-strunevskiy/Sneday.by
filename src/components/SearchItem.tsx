import React, { FC } from "react";
import { IVegetableItemTypes } from "../types/vegetablesListTypes";
import styles from "./SearchItem.module.scss";
import classnames from "classnames/bind";

const cl = classnames.bind(styles);

interface ISearchItemPropsTypes {
  vegetable: IVegetableItemTypes;
  sendVegetable(vegetable: IVegetableItemTypes): void;
}

export const SearchItem: FC<ISearchItemPropsTypes> = ({
  vegetable,
  sendVegetable,
}) => {
  return (
    <li className={cl("search_item")} onClick={() => sendVegetable(vegetable)}>
      {vegetable.name}
    </li>
  );
};
