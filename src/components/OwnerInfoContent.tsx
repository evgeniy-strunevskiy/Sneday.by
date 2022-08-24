import React, { FC } from "react";
import { IPointTypes } from "../types/pointsTypes";
import styles from "./OwnerInfoContent.module.scss";
import classnames from "classnames/bind";

const cl = classnames.bind(styles);

interface IOwnerInfoContentPropsTypes {
  owner: IPointTypes;
}

export const OwnerInfoContent: FC<IOwnerInfoContentPropsTypes> = ({
  owner,
}) => {
  return (
    <div className={cl("owner-info-content")}>
      <h1 className={cl("owner-info-content_name")}>{owner.owner}</h1>
      <div className={cl("owner-info-text")}>
        <div className={cl("owner-info-text_title")}>
          владелец торговой точки номер: {owner.id}
        </div>
        <div className={cl("owner-info-text_license")}>лицензия: не нужна</div>
        <div className={cl("owner-info-text_tel")}>
          номер телефона: {owner.tel}
        </div>
      </div>
    </div>
  );
};
