import React, { FC } from "react";
import classNames from "classnames/bind";
import styles from "./Wrapper.module.scss";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router";
import { Main } from "./Main";

const cl = classNames.bind(styles);

export const Wrapper: FC = () => {

  return (
    <div className={cl("wrapper")}>
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </div>
  );
};
