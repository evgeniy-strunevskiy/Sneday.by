import React, { FC } from 'react'
import classNames from 'classnames/bind'
import styles from './Favorites.module.scss'

const cl = classNames.bind(styles)


export const Favorites: FC = () => {
  return (
    <div className={cl('favorites')}>Favorites</div>
  )
}
