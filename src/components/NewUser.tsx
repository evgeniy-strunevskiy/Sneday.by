import React, { FC } from "react";
import styles from "./NewUser.module.scss";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";

const cl = classnames.bind(styles);

interface INewUserPropsTypes {
  text: string;
  account: string;
  link: string;
}

export const NewUser: FC<INewUserPropsTypes> = ({ text, account, link }) => {
  return (
    <div className={cl("new-user")}>
      <span>{text} </span>
      <Link className={cl("new-user_registration-btn")} to={link}>
        {account}
      </Link>
    </div>
  );
};
