import React, { FC } from "react";
import styles from "./Range.module.scss";
import classNames from "classnames/bind";
import { Input } from "./UI/input/Input";

const cl = classNames.bind(styles);

interface IRangePropsTypes {
  step: number;
  weight: number;
  handleRange(e: React.ChangeEvent<HTMLInputElement>): void;
  isItemCart: boolean;
  isDisable: boolean;
}

export const Range: FC<IRangePropsTypes> = ({
  step,
  handleRange,
  isItemCart,
  weight,
  isDisable,
}) => {
  return (
    <div className={cl("range", { range__disable: isDisable })}>
      <div className={cl("field")}>
        <Input
          type="range"
          min="100"
          max="5000"
          value={step}
          onChange={handleRange}
          step="100"
          disabled={isDisable}
        />
        <div className={cl("value")}>
          <div className={cl("value_order")}>{weight}</div>
          <div className={cl("value_unit")}>кг.</div>
        </div>
      </div>
    </div>
  );
};
