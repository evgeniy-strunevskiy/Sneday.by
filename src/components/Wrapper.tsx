import React, { FC } from "react";
import classNames from "classnames/bind";
import styles from "./Wrapper.module.scss";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router";

const cl = classNames.bind(styles);

export const Wrapper: FC = () => {
  return (
    <div className={cl("wrapper")}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
