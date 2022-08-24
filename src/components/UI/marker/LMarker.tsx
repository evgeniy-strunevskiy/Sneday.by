import { Marker } from "@react-google-maps/api";
import React, { FC } from "react";
import { ICenter } from "../../../types/center";
import styles from "./LMarker.module.scss";
import classNames from "classnames/bind";

const cl = classNames.bind(styles);

interface ILMarkerPropsTypes {
  position: ICenter;
}

export const LMarker: FC<ILMarkerPropsTypes> = ({ position }) => {
  return (
    <Marker
      label={{
        text: 'Овощной рынок "Cнедай"',
        fontSize: "15px",
        color: "#90c527",
        className: cl("marker-text"),
      }}
      position={position}
      icon={{ url: "/image/marker.png" }}
    />
  );
};
