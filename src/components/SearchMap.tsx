import React, { FC, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./SearchMap.module.scss";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { getVegetables } from "../store/middleware/vegetables";
import { getVegetableMap } from "../store/slices/searchMapSlice";
import { VegetableItemTypes } from "../types/vegetablesListTypes";
import { Input } from "./UI/input/Input";
import { SearchList } from "./SearchList";
import { SearchMapIcon } from "./SearchMapIcon";

const cl = classNames.bind(styles);

export const SearchMap: FC = () => {
  const dispatch = useAppDispatch();
  const { vegetables } = useAppSelector((state) => state.vegetables);
  const [searchMap, setSearchMap] = useState<string>("");
  const [sortedVegetables, setsortedVegetables] = useState<VegetableItemTypes[]>([]);

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

  function sendVegetable(vegetable: VegetableItemTypes) {
    dispatch(getVegetableMap(vegetable.name));
    setSearchMap(vegetable.name);
    setsortedVegetables([]);
  }

  function clearSearchMap() {
    setSearchMap("");
    dispatch(getVegetableMap(null));
    setsortedVegetables([]);
  }

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
      <SearchMapIcon searchMap={searchMap} clearSearchMap={clearSearchMap} />
      {sortedVegetables.length ? (
        <SearchList
          sortedVegetables={sortedVegetables}
          sendVegetable={sendVegetable}
        />
      ) : null}
    </div>
  );
};
