import React, { FC } from 'react'
import classNames from 'classnames/bind'
import styles from './Owner.module.scss'

const cl = classNames.bind(styles);

export const Owner: FC = () => {
  return (
    <div className={cl('owner')}>
      <div className={cl('owner_container')}>Owner</div>
    </div>
  )
}
