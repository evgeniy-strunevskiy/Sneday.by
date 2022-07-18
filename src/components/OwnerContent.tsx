import React, { FC, useState } from "react";
import styles from "./OwnerContent.module.scss";
import classNames from "classnames/bind";
import { useAppSelector } from "../hooks/redux";
import { useItems } from "../hooks/useItems";
import { Cards } from "../components/Cards";
import { Filters } from "../components/Filters";
import { IFiltersTypes } from "../types/filtersTypes";
import { OwnerInfo } from "../components/OwnerInfo";

const cl = classNames.bind(styles);

export const OwnerContent: FC = () => {
  const { owner } = useAppSelector((state) => state.owner);

  const [filter, setFilter] = useState<IFiltersTypes>({
    sort: "",
    search: "",
  });

  const sortedAndSearchedPosts = useItems(
    owner.vegetables,
    filter.search,
    filter.sort
  );

  return (
    <div className={cl("owner_content")}>
      <OwnerInfo owner={owner} />
      <Filters filter={filter} setFilter={setFilter} />
      <Cards vegetables={sortedAndSearchedPosts} />
    </div>
  );
};
