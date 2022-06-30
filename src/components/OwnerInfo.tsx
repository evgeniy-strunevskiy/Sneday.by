import React, { FC } from "react";
import styles from "./OwnerInfo.module.scss";
import classNames from "classnames/bind";
import { ReactComponent as Telegram } from '../assets/icons/telegram.svg'
import { ReactComponent as Twitter } from '../assets/icons/twitter.svg'
import { ReactComponent as Viber } from '../assets/icons/viber.svg'
import { ReactComponent as Instagram } from '../assets/icons/instagram.svg'
import { PointTypes } from "../types/pointsTypes";

const cl = classNames.bind(styles);

interface OwnerInfoPropTypes {
  owner: PointTypes;
}

export const OwnerInfo: FC<OwnerInfoPropTypes> = ({owner}) => {
  return (
    <div className={cl("owner-info")}>
      <div className={cl("owner-info_main")}>
        <div className={cl("owner-info_logo")}>
          <img src="./image/owner-1.jpg" alt="" />
        </div>
        <div className={cl("social")}>
          <ul className={cl("social_list")}>
            <li className={cl("social_item")}>
              <a href="http://localhost:3000/" className={cl("social_link")}>
                <Telegram />
              </a>
            </li>
            <li className={cl("social_item")}>
              <a href="http://localhost:3000/" className={cl("social_link")}>
                <Twitter />
              </a>
            </li>
            <li className={cl("social_item")}>
              <a href="http://localhost:3000/" className={cl("social_link")}>
                <Viber />
              </a>
            </li>
            <li className={cl("social_item")}>
              <a href="http://localhost:3000/" className={cl("social_link")}>
                <Instagram />
              </a>
            </li>
          </ul>
        </div>
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
