import { FC } from "react";
import { NavLink, useMatch } from "react-router-dom";
import styles from "./CustomLink.module.scss";
import classNames from "classnames/bind";

const cl = classNames.bind(styles);

interface ICustomLinkPropsTypes {
  to: string;
}

export const CustomLink: FC<ICustomLinkPropsTypes> = ({
  children,
  to,
  ...props
}) => {
  const match = useMatch(to);

  return (
    <div className="">
      <NavLink
        to={to}
        {...props}
        className={match ? cl("link", "link__active") : cl("link")}
      >
        {children}
      </NavLink>
    </div>
  );
};
