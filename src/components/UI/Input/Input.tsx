import React, { FC, InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";
import classNames from "classnames/bind";

const cl = classNames.bind(styles);

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // name?: string;
  // type: string;
  // className?: string;
  // placeholder?: string;
  // value: string | number;
  // onChange(e: any): void;
  // onBlur?(e: any): void;
  // min?: string;
  // max?: string;
  // step?: string;
  // disabled?: boolean;
}

export const Input: FC<InputProps> = ({
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
