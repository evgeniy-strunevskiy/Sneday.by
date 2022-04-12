import React, { FC } from 'react'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'

const cl = classNames.bind(styles);

export const Header: FC = () => {
  return (
    <header className={cl('header')}>
      <div className={cl('header_container')}>
        header
      </div>
    </header>
  )
}
