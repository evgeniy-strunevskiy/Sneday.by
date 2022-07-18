import React, { FC } from "react";
import styles from "./OwnerLogo.module.scss";
import classnames from "classnames/bind";

const cl = classnames.bind(styles);

interface IOwnerLogoPropsTypes {
  url: string;
}

export const OwnerLogo: FC<IOwnerLogoPropsTypes> = ({ url }) => {
  return (
    <div className={cl("owner-logo")}>
      <img src={url} alt="Owner-logo" />
    </div>
  );
};
