import React, { FC } from "react";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { LoginForm } from "../components/LoginForm";
import { Close } from "../components/UI/Input/close/Close";

const cl = classNames.bind(styles);

export const Login: FC = () => {
  return (
    <div className={cl("login")}>
      <div className={cl("login_content")}>
        <div className={cl("login_close")}>
          <Close />
        </div>
        <h3 className={cl("login_title")}>Войти</h3>
        <LoginForm />
      </div>
    </div>
  );
};
