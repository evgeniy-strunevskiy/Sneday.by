import React, { FC } from 'react'
import classNames from 'classnames/bind'
import styles from './About.module.scss'

const cl = classNames.bind(styles);

export const About: FC = () => {
  return (
    <div className={cl('about')} >About</div>
  )
}
