import React, { FC } from 'react'
import styles from './Close.module.scss';
import classNames from 'classnames/bind';

const cl = classNames.bind(styles);

export const Close: FC = () => {
  return (
    <div className={cl('close')} ></div>
  )
}
