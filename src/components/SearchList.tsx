import React, { FC } from "react";
import styles from "./SearchList.module.scss";
import classnames from "classnames/bind";
import { VegetableItemTypes } from "../types/vegetablesListTypes";

const cl = classnames.bind(styles);

interface SearchListPropTypes {
  sortedVegetables: VegetableItemTypes[];
  sendVegetable(vegetable: VegetableItemTypes): void;
}

export const SearchList: FC<SearchListPropTypes> = ({
  sortedVegetables,
  sendVegetable,
}) => {
  return (
    <ul className={cl("search_list")}>
      {sortedVegetables.map((vegetable) => (
        <li
          key={vegetable.id}
          className={cl("search_item")}
          onClick={() => sendVegetable(vegetable)}
        >
          {vegetable.name}
        </li>
      ))}
    </ul>
  );
};
