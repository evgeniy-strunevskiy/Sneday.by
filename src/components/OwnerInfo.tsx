import React, { FC } from "react";
import styles from "./OwnerInfo.module.scss";
import classNames from "classnames/bind";
import { PointTypes } from "../types/pointsTypes";
import { Socials } from "./UI/socials/Socials";
import { OwnerLogo } from "./UI/ownerLogo/OwnerLogo";

const cl = classNames.bind(styles);

interface OwnerInfoPropTypes {
  owner: PointTypes;
}

export const OwnerInfo: FC<OwnerInfoPropTypes> = ({ owner }) => {
  return (
    <div className={cl("owner-info")}>
      <div className={cl("owner-info_main")}>
        <OwnerLogo url={owner.logoUrl} />
        <Socials />
      </div>
      <div className={cl("owner-info_name")}>
        <h1 className={cl("owner-info_owner")}>{owner.owner}</h1>
        <div className={cl("owner-info_title")}>
          <div className={cl("owner-info_title-text")}>
            владелец торговой точки номер:
          </div>
          <div className={cl("owner-info_id")}>{owner.id}</div>
        </div>
        <div className={cl("owner-info_license")}>лицензия: не нужна</div>
      </div>
    </div>
  );
};
