import React, { FC } from "react";
import styles from "./OwnerLogo.module.scss";
import classnames from "classnames/bind";

const cl = classnames.bind(styles);

interface OwnerLogoPropsTypes {
  url: string;
}

export const OwnerLogo: FC<OwnerLogoPropsTypes> = ({ url }) => {
  return (
    <div className={cl("owner-logo")}>
      <img src={url} alt="Owner-logo" />
    </div>
  );
};
