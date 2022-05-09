import React, { FC } from 'react'
import styles from './Close.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cl = classNames.bind(styles);


export const Close: FC = () => {
  return (
    <Link to='/' className={cl('close')} ></Link>
  )
}
