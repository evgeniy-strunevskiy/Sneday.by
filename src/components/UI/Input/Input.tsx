import React, { FC, InputHTMLAttributes } from 'react'
import styles from './Input.module.scss';
import classNames from 'classnames/bind'

const cl = classNames.bind(styles);

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const Input: FC<InputProps> = ({name}) => {
  return (
    <div className={cl("input-Wrapper")}>
      <input id={name} />
    </div>
  )
}
