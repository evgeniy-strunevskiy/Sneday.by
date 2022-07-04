import React, { FC } from 'react'
import styles from "./Range.module.scss";
import classNames from "classnames/bind";
import { Input } from './UI/input/Input';

const cl = classNames.bind(styles);

interface RangePropsTypes {
  step: number;
  weight: number ;
  handleRange(e: React.ChangeEvent<HTMLInputElement>): void; 
  isItemCart: boolean; 
}

export const Range: FC<RangePropsTypes> = ({step, handleRange, isItemCart, weight}) => {
  return (
    <div className={cl("range")}>
    <div className={cl("field")}>
      <Input
        type="range"
        min="100"
        max="5000"
        value={step}
        onChange={handleRange}
        step="100"
        disabled={isItemCart}
      />
      <div className={cl("value")}>
        <div className={cl("value_order")}>{weight}</div>
        <div className={cl("value_unit")}>кг.</div>
      </div>
    </div>
  </div>
  )
}
