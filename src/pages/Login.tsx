import { FC } from "react";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { LoginForm } from "../components/LoginForm";
import { Close } from "../components/UI/Input/close/Close";
import { useLocation } from "react-router";

const cl = classNames.bind(styles);


type LocationState = {
  from: {
    path: string;
  }
}

export const Login: FC = () => {
  const location = useLocation();
  const from = (location.state as LocationState)?.from.path;
  const fromPage = from || '/';

  return (
    <div className={cl("login")}>
      <div className={cl("login_content")}>
      <div className={cl("login_close")}>
        <Close />
      </div>
        <h3 className={cl("login_title")}>Войти</h3>
        <LoginForm fromPage={fromPage} />
      </div>
    </div>
  );
};
