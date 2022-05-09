import React, { FC, InputHTMLAttributes } from "react";
import styles from './Input.module.scss';
import classNames from 'classnames/bind'

const cl = classNames.bind(styles);

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string;
  register?: any;
  wrapperClass?: string;
  placeholder?: string;
  setLoginState?: () => void;
}

export const Input: FC<InputProps> = ({
  register,
  name,
  error,
  label,
  wrapperClass,
  ...rest
}) => {
  return (
    <>
      {label && <label className={cl('input_label')} htmlFor={name}>{label}:</label>}
      <input  className={cl('input_input')} {...register(name)} {...rest} />
      {error && <span className={cl('input_error')}>{error}</span>}
    </>
  );
};
