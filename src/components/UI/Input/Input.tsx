import React, { FC, InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";
import classNames from "classnames/bind";

const cl = classNames.bind(styles);

interface IInputPropsTypes extends InputHTMLAttributes<HTMLInputElement> {
}

export const Input: FC<IInputPropsTypes> = ({
  name,
  type,
  className,
  placeholder,
  value,
  onChange,
  onBlur,
  min,
  max,
  step,
  disabled,
}) => {
  return (
    <input
      type={type}
      className={cl(className)}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
    />
  );
};
