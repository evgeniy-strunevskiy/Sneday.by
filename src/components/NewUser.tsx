import React, { FC } from "react";
import styles from "./NewUser.module.scss";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";

const cl = classnames.bind(styles);

interface NewUserPropsTypes {
  text: string;
  account: string;
  link: string;
}

export const NewUser: FC<NewUserPropsTypes> = ({ text, account, link }) => {
  return (
    <div className={cl("new-user")}>
      <span>{text} </span>
      <Link className={cl("new-user_registration-btn")} to={link}>
        {account}
      </Link>
    </div>
  );
};
