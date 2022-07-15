import React, { FC } from 'react'
import styles from "./Marketer.module.scss";
import classnames from "classnames/bind";

const cl = classnames.bind(styles);

interface IMarketerPropsTypes {}

export const Marketer: FC<IMarketerPropsTypes> = () => {
  return (
    <div className={cl("marketer")}>
    <h3 className={cl("marketer_best")}>Лучший продавец</h3>
    <div className={cl("marketer_image")}>
      <img src={"./image/marketer.png"} alt="marketer" />
    </div>
    <div className={cl("marketer_content")}>
      <h3 className={cl("marketer_name")}>Джанни Родари</h3>
      <div className={cl("marketer_text")}>
        "На этом свете вполне можно жить в мире. Для всех на земле есть
        место – и для медведей, и для луковиц."
      </div>
    </div>
  </div>
  )
}
