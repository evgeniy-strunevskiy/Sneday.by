import { FC } from "react";
import classNames from "classnames/bind";
import styles from "./MapRow.module.scss";
import { IPointTypes } from "../types/pointsTypes";
import { Point } from "../components/Point";

const cl = classNames.bind(styles);

interface IMapSectionPropsTypes {
  section: IPointTypes[];
}

export const MapSection: FC<IMapSectionPropsTypes> = ({ section }) => {
  return (
    <div className={cl("section")}>
      {section.map((point) => (
        <Point key={point.id} point={point} />
      ))}
    </div>
  );
};
