import React, { FC, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./SearchMap.module.scss";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { getVegetables } from "../store/middleware/vegetables";
import { getVegetableMap } from "../store/slices/searchMapSlice";
import { VegetableItemTypes } from "../types/vegetablesListTypes";
import { ReactComponent as Close } from "../assets/icons/close.svg";
import { ReactComponent as Search } from "../assets/icons/search.svg";
import { Input } from "./UI/input/Input";

const cl = classNames.bind(styles);

export const SearchMap: FC = () => {
  const dispatch = useAppDispatch();
  const { vegetables } = useAppSelector((state) => state.vegetables);
  const [searchMap, setSearchMap] = useState<string>("");
  const [sortedVegetables, setsortedVegetables] = useState<
    VegetableItemTypes[]
  >([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let matches: VegetableItemTypes[] = [];
    if (e.target.value.length >= 2) {
      matches = vegetables.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
    }
    setSearchMap(e.target.value);
    setsortedVegetables(matches);
  };

  const sendVegetable = (vegetable: VegetableItemTypes) => {
    dispatch(getVegetableMap(vegetable.name));
    setSearchMap(vegetable.name);
    setsortedVegetables([]);
  };

  const clearSearchMap = () => {
    setSearchMap("");
    dispatch(getVegetableMap(null));
    setsortedVegetables([]);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setsortedVegetables([]);
    }, 200);
    dispatch(getVegetableMap(null));
  };

  useEffect(() => {
    dispatch(getVegetables());
  }, []);

  return (
    <div className={cl("search")}>
      <Input
        className={"search_input"}
        type="text"
        placeholder="Поиск овощей..."
        value={searchMap}
        onChange={handleSearch}
        onBlur={handleBlur}
      />
      {searchMap ? (
        <button className={cl("search_btn")} onClick={clearSearchMap}>
          <Close className={cl("search_closeIcon")} />
        </button>
      ) : (
        <button className={cl("search_btn")} onClick={clearSearchMap}>
          <Search className={cl("search_searchIcon")} />
        </button>
      )}
      {sortedVegetables.length ? (
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
      ) : null}
    </div>
  );
};
