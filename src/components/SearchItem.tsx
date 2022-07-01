import React, { FC } from "react";
import { VegetableItemTypes } from "../types/vegetablesListTypes";
import styles from "./SearchItem.module.scss";
import classnames from "classnames/bind";

const cl = classnames.bind(styles);

interface SearchItemPropsTypes {
  vegetable: VegetableItemTypes;
  sendVegetable(vegetable: VegetableItemTypes): void;
}

export const SearchItem: FC<SearchItemPropsTypes> = ({
  vegetable,
  sendVegetable,
}) => {
  return (
    <li className={cl("search_item")} onClick={() => sendVegetable(vegetable)}>
      {vegetable.name}
    </li>
  );
};
