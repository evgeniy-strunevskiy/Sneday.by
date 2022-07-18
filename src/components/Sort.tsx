import React, { FC } from "react";
import { IFiltersTypes, ISortArrayTypes } from "../types/filtersTypes";
import styles from "./Sort.module.scss";
import classNames from "classnames/bind";

const cl = classNames.bind(styles);

interface ISortPropsTypes {
  filter: IFiltersTypes;
  setFilter: (fitlter: IFiltersTypes) => void;
  sortDefault: string;
  sortArray: ISortArrayTypes[];
}

export const Sort: FC<ISortPropsTypes> = ({
  filter,
  setFilter,
  sortDefault,
  sortArray,
}) => {
  return (
    <select
      className={cl("sort_select")}
      value={filter.sort}
      onChange={(e) => setFilter({ ...filter, sort: e.target.value })}
    >
      <option value="" disabled>
        {sortDefault}
      </option>
      {sortArray.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
