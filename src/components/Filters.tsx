import { FC } from "react";
import { IFiltersTypes } from "../types/filtersTypes";
import { Sort } from "./Sort";
import styles from "./Filters.module.scss";
import classNames from "classnames/bind";
import { Search } from "./Search";
import { sortArray, sortDefault } from "../data/data";

const cl = classNames.bind(styles);

interface FiltersPropsTypes {
  filter: IFiltersTypes;
  setFilter: (fitlter: IFiltersTypes) => void;
}

export const Filters: FC<FiltersPropsTypes> = ({ filter, setFilter }) => {
  return (
    <div className={cl("filters")}>
      <div className={cl("filters_sort")}>
        <Sort
          filter={filter}
          setFilter={setFilter}
          sortDefault={sortDefault}
          sortArray={sortArray}
        />
      </div>
      <div className={cl("filters_search")}>
        <Search filter={filter} setFilter={setFilter} />
      </div>
    </div>
  );
};
