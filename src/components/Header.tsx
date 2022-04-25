import React, { FC, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Logo } from "./UI/logo/Logo";
import { Burger } from "./UI/burger/Burger";
import { Menu } from "./Menu";

const cl = classNames.bind(styles);

export const Header: FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  function setActive() {
    setIsActive(!isActive);
  };

  function setFalseActive() {
    if(isActive) {
      setIsActive(false);
    }
  };

  if (isActive) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <header className={cl("header")}>
      <div className={cl("header_container")}>
        <div className={cl("header_body")}>
          <Logo />
          <Burger setActive={setActive} isActive={isActive} />
          <Menu setFalseActive={setFalseActive} isActive={isActive} />
        </div>
      </div>
    </header>
  );
};
