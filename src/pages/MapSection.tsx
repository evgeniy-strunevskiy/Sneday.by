import { FC } from "react";
import classNames from "classnames/bind";
import styles from "./MapRow.module.scss";
import { PointTypes } from "../types/pointsTypes";
import { Point } from "../components/Point";

const cl = classNames.bind(styles);

interface MapSectionComponentTypes {
  section: PointTypes[];
}

export const MapSection: FC<MapSectionComponentTypes> = ({ section }) => {
  return (
    <div className={cl("section")}>
      {section.map((point) => (
        <Point key={point.id} point={point} />
      ))}
    </div>
  );
};
