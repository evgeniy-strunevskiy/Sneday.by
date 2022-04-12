import React, { FC } from 'react'
import styles from './Products.module.scss'
import classNames  from 'classnames/bind'

const cl = classNames.bind(styles)

export const Products:FC = () => {
  return (
    <div className={cl('products')}>Products</div>
  )
}
