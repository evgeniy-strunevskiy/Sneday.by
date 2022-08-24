import React, { FC } from "react";
import styles from "./Modal.module.scss";
import classNames from "classnames/bind";
import { ReactComponent as Close } from "../../../assets/icons/close.svg";

const cl = classNames.bind(styles);

interface ModalPropsTypes {
  visible: boolean;
  setVisible(modal: boolean): void;
}

export const Modal: FC<ModalPropsTypes> = ({
  children,
  visible,
  setVisible,
}) => {
  const handleModal = () => {
    setVisible(false);
  };
  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div
      className={cl("modal", { modal__active: visible })}
      onClick={handleModal}
    >
      <div className={cl("modal_content")} onClick={(e) => e.stopPropagation()}>
        <>
          <Close className={cl("modal_close")} onClick={handleClose} />
          {children}
        </>
      </div>
    </div>
  );
};
