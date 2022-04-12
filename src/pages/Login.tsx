import React, { FC } from 'react'
import classNames from 'classnames/bind'
import styles from './Login.module.scss';

const cl = classNames.bind(styles)

export const Login: FC = () => {
  return (
    <div className={cl('login')} >Login</div>
  )
}
