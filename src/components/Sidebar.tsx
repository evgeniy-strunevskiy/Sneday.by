import React, { FC } from "react";
import styles from "./Sidebar.module.scss";
import classnames from "classnames/bind";
import { Stock } from "./Stock";
import { Marketer } from "./Marketer";

const cl = classnames.bind(styles);

interface ISidebarPropsTypes {}

export const Sidebar: FC<ISidebarPropsTypes> = () => {
  return (
    <aside className={cl("sidebar")}>
      <Stock />
      <Marketer />
    </aside>
  );
};
