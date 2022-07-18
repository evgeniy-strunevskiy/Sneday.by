import React, { FC } from "react";
import { ReactComponent as Close } from "../assets/icons/close.svg";
import { ReactComponent as Search } from "../assets/icons/search.svg";
import classNames from "classnames/bind";
import styles from "./SearchMapIcon.module.scss";
const cl = classNames.bind(styles);

interface ISearchMapIconPropsTypes {
  searchMap: string;
  clearSearchMap(): void;
}

export const SearchMapIcon: FC<ISearchMapIconPropsTypes> = ({searchMap, clearSearchMap}) => {
  return (
    <>
      {searchMap ? (
        <button className={cl("search_btn")} onClick={clearSearchMap}>
          <Close className={cl("search_closeIcon")} />
        </button>
      ) : (
        <button className={cl("search_btn")} onClick={clearSearchMap}>
          <Search className={cl("search_searchIcon")} />
        </button>
      )}
    </>
  );
};
