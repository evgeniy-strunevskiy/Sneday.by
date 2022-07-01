import React, { FC } from "react";
import styles from "./SearchList.module.scss";
import classnames from "classnames/bind";
import { VegetableItemTypes } from "../types/vegetablesListTypes";
import { SearchItem } from "./SearchItem";

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
        <SearchItem key={vegetable.id} vegetable={vegetable} sendVegetable={sendVegetable} />
      ))}
    </ul>
  );
};
