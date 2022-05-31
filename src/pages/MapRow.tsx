import React, { FC } from "react";
import classNames from "classnames/bind";
import styles from "./MapRow.module.scss";
import { MapSection } from "./MapSection";
import { rowsTypes } from "../types/sectionsTypes";

const cl = classNames.bind(styles);

interface MapRowTypes {
  rows: rowsTypes;
}

export const MapRow: FC<MapRowTypes> = ({ rows }) => {
  return (
    <div className={cl("rows")}>
      {Object.entries(rows).map(([key, section]) => (
        <MapSection key={key} section={section} />
      ))}
    </div>
  );
};
