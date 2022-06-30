import React, { FC } from "react";
import classNames from "classnames/bind";
import styles from "./Loader.module.scss";

const cl = classNames.bind(styles);

export const Loader: FC = () => {
  return (
    <div className={cl("lds-ripple")}>
      <div />
      <div />
    </div>
  );
};
