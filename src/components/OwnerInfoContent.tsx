import React, { FC } from "react";
import { PointTypes } from "../types/pointsTypes";
import styles from './OwnerInfoContent.module.scss';
import classnames from 'classnames/bind';

const cl = classnames.bind(styles);

interface OwnerInfoContentPropsTypes {
  owner: PointTypes;
}

export const OwnerInfoContent: FC<OwnerInfoContentPropsTypes> = ({ owner }) => {
  return (
    <div className={cl("owner-info-content")}>
      <h1 className={cl("owner-info-content_name")}>{owner.owner}</h1>
      <div className={cl("owner-info-content_title")}>
        <div className={cl("owner-info-content_title-text")}>
          владелец торговой точки номер:
        </div>
        <div className={cl("owner-info-content_id")}>{owner.id}</div>
      </div>
      <div className={cl("owner-info-content_license")}>лицензия: не нужна</div>
    </div>
  );
};
