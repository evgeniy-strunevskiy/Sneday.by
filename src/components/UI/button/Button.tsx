import React, { FC } from 'react'
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cl = classNames.bind(styles);

export const Button: FC = ({children}) => {
  return (
    <button className={cl('button')} >{children}</button>
  )
}
