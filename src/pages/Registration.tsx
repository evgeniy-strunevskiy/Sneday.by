import React, { FC } from 'react'
import classNames from 'classnames/bind'
import styles from './Registration.module.scss'
import { useLocation } from 'react-router'
import { Close } from '../components/UI/Input/close/Close'
import { RegistrationForm } from '../components/RegistrationForm'

const cl = classNames.bind(styles)

type RegistrationState = {
  from: {
    path: string;
  }
}

export const Registration: FC = () => {
  const location = useLocation();
  const from = (location.state as RegistrationState)?.from.path;
  const fromPage = from || '/';

  return (
    <div className={cl("registration")}>
      <div className={cl("registration_content")}>
      <div className={cl("registration_close")}>
        <Close />
      </div>
        <h3 className={cl("registration_title")}>Регистрация</h3>
        <RegistrationForm fromPage={fromPage} />
      </div>
    </div>
  );
}
