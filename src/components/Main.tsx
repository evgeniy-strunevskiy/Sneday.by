import React, { FC } from 'react'
import classNames from 'classnames/bind'
import styles from './Main.module.scss'

const cl = classNames.bind(styles);

export const Main:FC = ({children}) => {
  return (
    <main className={cl('main')} >
      {children}
    </main>
  )
}
