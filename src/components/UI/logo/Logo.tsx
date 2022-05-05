import React, { FC } from 'react';
import classNames from 'classnames/bind';
import styles from './Logo.module.scss'
import { Link } from 'react-router-dom';

const cl = classNames.bind(styles)

export const Logo: FC = () => {
  return (
    <Link className={cl('logo')} to='/'>
        <div className={cl('logo_text')}>Chabor.by</div>
    </Link>
  );
};