import React, { FC } from "react";
import classNames from "classnames/bind";
import styles from "./MapSquare.module.scss";
import { MapRow } from "./MapRow";
import { SectionsTypes } from "../types/sectionsTypes";
import { SearchMap } from "../components/SearchMap";
import { MapHelp } from "./MapHelp";

const cl = classNames.bind(styles);

interface MapSquareTypes {
  sections: SectionsTypes;
}

export const MapSquare: FC<MapSquareTypes> = ({ sections }) => {

  return (
    <div className={cl("square")}>
      <div className={cl("square_head")}>
        <h1 className={cl("square_title")}>Карта рынка</h1>
        <SearchMap />
      </div>
      <div className={cl("square_container")}>
        {Object.entries(sections).map(([key, rows]) => (
          <MapRow key={key} rows={rows} />
        ))}
      </div>
      <MapHelp />
    </div>
  );
};
