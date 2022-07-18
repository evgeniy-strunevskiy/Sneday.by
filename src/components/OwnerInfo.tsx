import React, { FC } from "react";
import styles from "./OwnerInfo.module.scss";
import classNames from "classnames/bind";
import { IPointTypes } from "../types/pointsTypes";
import { Socials } from "./UI/socials/Socials";
import { OwnerLogo } from "./UI/ownerLogo/OwnerLogo";
import { OwnerInfoContent } from "./OwnerInfoContent";

const cl = classNames.bind(styles);

interface IOwnerInfoPropTypes {
  owner: IPointTypes;
}

export const OwnerInfo: FC<IOwnerInfoPropTypes> = ({ owner }) => {
  return (
    <div className={cl("owner-info")}>
      <div className={cl("onwer-info_main")}>
        <OwnerLogo url={owner.logoUrl} />
        <Socials />
      </div>
      <OwnerInfoContent owner={owner} />
    </div>
  );
};
