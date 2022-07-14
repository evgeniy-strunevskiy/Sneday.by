import React, { FC } from "react";
import styles from "./Socials.module.scss";
import classNames from "classnames/bind";
import { ReactComponent as Telegram } from "../../../assets/icons/telegram.svg";
import { ReactComponent as Twitter } from "../../../assets/icons/twitter.svg";
import { ReactComponent as Viber } from "../../../assets/icons/viber.svg";

const cl = classNames.bind(styles);

const networks = [
  { 
    Telegram: (Telegram as React.ElementType),
    url: "http://localhost:3000/" ,
    id: 1
    },
    {
      Telegram: (Viber as React.ElementType),
      url: "http://localhost:3000/",
      id: 3
    },
    {
      Telegram: (Twitter as React.ElementType),
      url: "http://localhost:3000/",
      id: 2
     },
];

interface SocialPropsTypes {}

export const Socials: FC<SocialPropsTypes> = () => {
  return (
    <div className={cl("socials")}>
      <ul className={cl("socials_list")}>
        {networks.map((network) => (
          <li key={network.id}>
            <a href={network.url} className={cl("socials_link")}>
              <network.Telegram  className={cl("socials_icon")} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
