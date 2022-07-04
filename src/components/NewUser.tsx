import React, { FC } from 'react'
import styles from './NewUser.module.scss'
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cl = classnames.bind(styles);

interface NewUserPropsTypes {

}

export const NewUser: FC<NewUserPropsTypes> = () => {
  return (
    <div className={cl("new-user")}>
    <span>Новый пользователь? </span>
    <Link
      className={cl("new-user_registration-btn")}
      to="/registration"
    >
      Регистрация
    </Link>
  </div>
  )
}
