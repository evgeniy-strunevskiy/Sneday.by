import React, { FC } from 'react'
import classNames from 'classnames/bind'
import styles from './NoteFound.module.scss'

const cl = classNames.bind(styles);

export const NoteFound: FC = () => {
  return (
    <div className={cl('notefound')} >NoteFound</div>
  )
}
