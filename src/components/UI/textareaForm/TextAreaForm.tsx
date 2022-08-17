import React, { FC, InputHTMLAttributes } from "react";
import styles from './TextAreaForm.module.scss';
import classNames from 'classnames/bind'

const cl = classNames.bind(styles);

interface ITextAreaFormPropsTypes extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string;
  register?: any;
  wrapperClass?: string;
  placeholder?: string;
  setLoginState?: () => void;
}

export const TextAreaForm: FC<ITextAreaFormPropsTypes> = ({
  register,
  name,
  error,
  label,
  wrapperClass,
  ...rest
}) => {

  return (
    <>
      {label && <label className={cl('textarea_label')} >{label}:</label>}
      <textarea  className={cl('textarea_textarea')} {...register(name)} {...rest} />
      {error && <span className={cl('textarea_error')}>{error}</span>}
    </>
  );
};
