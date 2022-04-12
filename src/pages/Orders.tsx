import React, { FC } from 'react'
import styles from './Orders.module.scss'
import classNames from 'classnames/bind'

const cl = classNames.bind(styles)

export const Orders: FC = () => {
  return (
    <div className={cl('orders')}>Orders</div>
  )
}
