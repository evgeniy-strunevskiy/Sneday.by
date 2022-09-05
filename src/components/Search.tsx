import React, { FC } from "react";
import styles from "./Search.module.scss";
import classNames from "classnames/bind";
import { IFiltersTypes } from "../types/filtersTypes";
import { Input } from "./UI/myInput/Input";

const cl = classNames.bind(styles);

interface ISearchPropsTypes {
  filter: IFiltersTypes;
  setFilter: (fitlter: IFiltersTypes) => void;
}

export const Search: FC<ISearchPropsTypes> = ({ filter, setFilter }) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, search: e.target.value });
  };

  return (
    <Input
      type="text"
      className={cl("search_input")}
      placeholder={"Поиск..."}
      value={filter.search}
      onChange={handleSearch}
    />
  );
};
