import React, { FC } from "react";
import styles from "./MapHelp.module.scss";
import classNames from "classnames/bind";

const cl = classNames.bind(styles);

export const MapHelp: FC = () => {
  return (
    <div className={cl("map-help_footer")}>
      <ul className={cl("map-help_explanations")}>
        <li className={cl("map-help_explanation")}>
          <div className={cl("map-help_circle", "map-help_circle__gold")} />
          <div className={cl("map-help_explanationText")}>Цена товара</div>
        </li>
        <li className={cl("map-help_explanation")}>
          <div className={cl("map-help_circle", "map-help_circle__white")} />
          <div className={cl("map-help_explanationText")}>
            Товар отсутствует/не выбран
          </div>
        </li>
        <li className={cl("map-help_explanation")}>
          <div className={cl("map-help_circle", "map-help_circle__gray")} />
          <div className={cl("map-help_explanationText")}>Торговая точка свободна</div>
        </li>
      </ul>
    </div>
  );
};
