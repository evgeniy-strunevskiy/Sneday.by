import React, { FC } from "react";
import classNames from "classnames/bind";
import styles from "./MapRow.module.scss";
import { rowsTypes } from "../types/sectionsTypes";
import { MapSection } from "./MapSection"

const cl = classNames.bind(styles);

interface IMapRowPropsTypes {
  rows: rowsTypes;
}

export const MapRow: FC<IMapRowPropsTypes> = ({ rows }) => {
  return (
    <div className={cl("rows")}>
      {Object.entries(rows).map(([key, section]) => (
        <MapSection key={key} section={section} />
      ))}
    </div>
  );
};
