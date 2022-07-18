import React, { FC } from 'react'
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cl = classNames.bind(styles);

interface IButtonPropsTypes {}

export const Button: FC<IButtonPropsTypes> = ({children}) => {
  return (
    <button className={cl('button')} >{children}</button>
  )
}
