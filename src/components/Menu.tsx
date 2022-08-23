import React, { FC, useEffect, useState } from "react";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import { NavLink, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { removeLogin } from "../store/middleware/login";
import { getCart } from "../store/middleware/cart";

const cl = classNames.bind(styles);

interface IMenuPropsTypes {
  isActive: boolean;
  setFalseActive: () => void;
}

export const Menu: FC<IMenuPropsTypes> = ({ setFalseActive, isActive }) => {

  const location = useLocation();


  const dispatch = useAppDispatch();
  const { login } = useAppSelector((state) => state.login);
  const { cart } = useAppSelector((state) => state.cart);
  const [totalCart, setTotalCart] = useState<number>(0);


  const auth = localStorage.getItem('auth')

  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? cl("menu_link", "menu_link_active") : cl("menu_link");

  const handleLogin = () => {
    setFalseActive();
    dispatch(removeLogin());
  };


  useEffect(() => {
    const totalCartCount = cart.reduce((sum, item) => sum + 1, 0);
    setTotalCart(totalCartCount);
  }, [cart]);

  useEffect(() => {
    dispatch(getCart());
  },[])

  return (
    <nav className={cl("menu", { active: isActive })}>
      <ul className={cl("menu_list")}>
        <li className={cl("menu_item")} onClick={setFalseActive}>
          <NavLink to="/" className={setActive}>
            Главная
          </NavLink>
        </li>
        <li className={cl("menu_item")} onClick={setFalseActive}>
          <NavLink to="cart" className={setActive}>
            Корзина
          </NavLink>
          {
            totalCart > 0 && auth && <div className={cl("menu_cart-count")}>{totalCart}</div>
          }
        </li>
        <li className={cl("menu_item")} onClick={setFalseActive}>
          <NavLink to="favorites" className={setActive}>
            Избранное
          </NavLink>
        </li>
        <li className={cl("menu_item")} onClick={setFalseActive}>
          <NavLink to="comments" className={setActive}>
            Комментарии
          </NavLink>
        </li>
        {login ? (
          <li className={cl("menu_item")} onClick={handleLogin}>
            <NavLink to="/" className={cl("menu_login")}>
              Выйти
            </NavLink>
          </li>
        ) : (
          <li className={cl("menu_item")} onClick={setFalseActive}>
            <NavLink to="login" className={cl("menu_login")} state={{from: {path: location.pathname}}}>
              Войти
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
