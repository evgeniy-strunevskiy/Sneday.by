import React, { FC } from 'react'
import styles from './Menu.module.scss'
import classNames from 'classnames/bind'
import {ReactComponent as User} from '../assets/icons/user.svg'
import {ReactComponent as Heart} from '../assets/icons/heart.svg'
import { Price } from './UI/price/Price'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { removeLogin } from '../store/middleware/login'

const cl = classNames.bind(styles);

interface MenuPropsTypes {
  isActive: boolean;
  setFalseActive: () => void;
}

export const Menu: FC<MenuPropsTypes> = ({setFalseActive, isActive }) => {
  const dispatch = useAppDispatch()
  const {login} = useAppSelector(state => state.login)

  const setActive = ({isActive}: {isActive: boolean}) => isActive ? cl('menu_link', 'menu_link_active') :cl('menu_link')

  const handleLogin = () => {
    setFalseActive();
    dispatch(removeLogin());
    
  }

  return (
    <nav className={cl('menu', {active: isActive})}>
      <ul className={cl('menu_list')}>
        <li className={cl('menu_item')} onClick={setFalseActive} >
        <NavLink to='/' className={setActive}>
          Главная
        </NavLink>
        </li>
        <li className={cl('menu_item')} onClick={setFalseActive} >
        <NavLink to='cart' className={setActive}>
          Корзина
        </NavLink>
        </li>
        <li className={cl('menu_item')} onClick={setFalseActive}>
        <NavLink to='favorites' className={setActive}>
            Избранное
        </NavLink>
        </li>
        {
          login
          ? <li className={cl('menu_item')} onClick={handleLogin}>
            <NavLink to='/' className={cl('menu_login')}>Выйти</NavLink>
            </li>
          : <li className={cl('menu_item')} onClick={setFalseActive}>
            <NavLink to='login' className={cl('menu_login')}>Войти</NavLink>
            </li>
        }
      </ul>
    </nav>
  )
}
