import React, { FC } from 'react'
import styles from './Menu.module.scss'
import classNames from 'classnames/bind'
import {ReactComponent as User} from '../assets/icons/user.svg'
import {ReactComponent as Heart} from '../assets/icons/heart.svg'
import { Price } from './UI/price/Price'
import { Link } from 'react-router-dom'

const cl = classNames.bind(styles);

interface MenuPropsTypes {
  isActive: boolean;
  setFalseActive: () => void;
}

export const Menu: FC<MenuPropsTypes> = ({setFalseActive, isActive }) => {
  console.log(isActive)
  return (
    <nav className={cl('menu', {active: isActive})}>
      <ul className={cl('menu_list')}>
        <li className={cl('menu_item')} onClick={setFalseActive} >
        <Link to='orders' className={cl('menu_link')}>
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
        <li className={cl('menu_item')} onClick={setFalseActive}>
          <Link to='login' className={cl('menu_link')}>Войти</Link>
        </li>
      </ul>
    </nav>
  )
}
