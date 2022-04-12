import React, { FC } from 'react'
import styles from './Map.module.scss'
import classNames from 'classnames/bind';

const cl = classNames.bind(styles)

export const Map: FC = () => {
  return (
    <div className={cl('map')} >Map</div>
  )
}
