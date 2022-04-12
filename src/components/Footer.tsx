import React, { FC } from 'react'
import classNames from 'classnames/bind'
import styles from './Footer.module.scss'

const cl = classNames.bind(styles);

export const Footer: FC = () => {
  return (
    <footer className={cl('footer')}>footer</footer>
  )
}
