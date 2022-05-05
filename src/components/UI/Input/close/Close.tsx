import React, { FC } from 'react'
import styles from './Close.module.scss';
import classNames from 'classnames/bind';

const cl = classNames.bind(styles);

interface CloseTypes {
  close: () => void;
}

export const Close: FC<CloseTypes> = ({close}) => {
  return (
    <div onClick={close} className={cl('close')} ></div>
  )
}
