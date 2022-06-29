import React, { FC } from 'react'
import styles from './Menu.module.scss'
import classNames from 'classnames/bind'
import {ReactComponent as User} from '../assets/icons/user.svg'
import {ReactComponent as Heart} from '../assets/icons/heart.svg'
import { Price } from './UI/price/Price'
import { Link } from 'react-router-dom'
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

  const handleLogin = () => {
    setFalseActive();
    dispatch(removeLogin());
    
  }

  return (
    <nav className={cl('menu', {active: isActive})}>
      <ul className={cl('menu_list')}>
        <li className={cl('menu_item')} onClick={setFalseActive} >
        <Link to='cart' className={cl('menu_link')}>
          <Price />
        </Link>
        </li>
        <li className={cl('menu_item')} onClick={setFalseActive} >
        <Link to='orders' className={cl('menu_link')}>
          <User className={cl('menu_icon', 'menu_icon__user')}/>
        </Link>
        </li>
        <li className={cl('menu_item')} onClick={setFalseActive}>
        <Link to='favorites' className={cl('menu_link')}>
            <Heart className={cl('menu_icon')}/>
        </Link>
        </li>
        {
          login
          ? <li className={cl('menu_item', 'menu_item__login')} onClick={handleLogin}>
            <Link to='/' className={cl('menu_link')}>Выйти</Link>
            </li>
          : <li className={cl('menu_item', 'menu_item__login')} onClick={setFalseActive}>
            <Link to='login' className={cl('menu_link')}>Войти</Link>
            </li>
        }
      </ul>
    </nav>
  )
}
