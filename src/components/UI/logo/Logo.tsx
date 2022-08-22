import React, { FC } from "react";
import classNames from "classnames/bind";
import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as LogoSvg } from "../../../assets/icons/logo-3.svg";

const cl = classNames.bind(styles);

export const Logo: FC = () => {
  return (
    <Link className={cl("logo")} to="/">
      <div className={cl("logo_image")}>
        <LogoSvg className={cl("logo_icon")} />
        <div className={cl("logo_text")}>Sneday.by</div>
      </div>
      {/* <div className={cl("logo_title")}>Овощной рынок "Снедай"</div>
      <div className={cl("logo_address")}>Брест, набережная Франциска Скорины</div> */}
    </Link>
  );
};
