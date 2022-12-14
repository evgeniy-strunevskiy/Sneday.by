import React, { FC } from "react";
import styles from "./Burger.module.scss";
import classNames from "classnames/bind";
import { IActiveTypes } from "../../../types/activeToggleTypes";

const cl = classNames.bind(styles);

export const Burger: FC<IActiveTypes> = ({ setActive, isActive }) => {
  return (
    <div className={cl("burger", { active: isActive })} onClick={setActive}>
      <span></span>
    </div>
  );
};
