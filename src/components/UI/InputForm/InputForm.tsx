import React, { FC, InputHTMLAttributes } from "react";
import styles from './InputForm.module.scss';
import classNames from 'classnames/bind'

const cl = classNames.bind(styles);

interface IInputFormPropsTypes extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string;
  register?: any;
  wrapperClass?: string;
  placeholder?: string;
  setLoginState?: () => void;
}

export const InputForm: FC<IInputFormPropsTypes> = ({
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
