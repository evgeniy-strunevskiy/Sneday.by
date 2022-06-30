import { FC } from "react";
import styles from "./Filters.module.scss";
import classNames from "classnames/bind";
import { IFiltersTypes } from "../types/filtersTypes";

const cl = classNames.bind(styles);

interface FiltersPropsTypes {
  filter: IFiltersTypes;
  setFilter: (fitlter: IFiltersTypes) => void;
}

export const Filters: FC<FiltersPropsTypes> = ({filter, setFilter}) => {

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, search: e.target.value });
  };

  return (
    <div className={cl("filters")}>
      <div className={cl("filters_sort")}>
        <select
          className={cl("filters_select")}
          value={filter.sort}
          onChange={(e) => setFilter({ ...filter, sort: e.target.value })}
        >
          <option value="" disabled>
            {"Cортировка"}
          </option>
          {[
            { name: "По названию", value: "title" },
            { name: "По цене ↑", value: "maxPrice" },
            { name: "По цене ↓", value: "minPrice" },
          ].map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <div className={cl("filters_search")}>
        <input
          type="text"
          className={cl("filters_input")}
          placeholder={"Поиск..."}
          value={filter.search}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};
