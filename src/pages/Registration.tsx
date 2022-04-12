import React, { FC } from 'react'
import classNames from 'classnames/bind'
import styles from './Registration.module.scss'

const cl = classNames.bind(styles)

export const Registration: FC = () => {
  return (
    <div className={cl('registration')}>Registration</div>
  )
}
