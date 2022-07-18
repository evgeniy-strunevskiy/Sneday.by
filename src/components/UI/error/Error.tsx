import React, { FC } from 'react'
import styles from './Error.module.scss';
import classNames from 'classnames/bind';

const cl = classNames.bind(styles)

interface IErrorPropsTypes {
  error: string
}

export const Error: FC<IErrorPropsTypes> = ({error}) => {
  return (
    <div className={cl('error')} >Произошла ошибка:{error}</div>
  )
}
