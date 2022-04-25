import React, { FC } from 'react'
// import classNames from 'classnames/bind'
// import styles from './Router.module.scss'
import { Route, Routes } from 'react-router';
import { privateRoutes, publicRoutes } from '../router/routes';
import { Wrapper } from './Wrapper';

// const cl = classNames.bind(styles);

export const Router: FC = () => {
  const isAuth = false;

  const privatePages = privateRoutes.map((route) => (
    route.path === 'index'
    ? <Route key={route.path} index element={<route.element />} />
    : <Route key={route.path} path={route.path} element={<route.element />} />
  ));
  const publicPages = publicRoutes.map((route) => (
    route.path === 'index'
    ? <Route key={route.path} index element={<route.element />} /> 
    : <Route key={route.path} path={route.path} element={<route.element />} /> 
  ));

  return isAuth ? (
    <Routes>
      <Route path='/' element={<Wrapper />}>
        {privatePages}
      </Route>
    </Routes>
  ) : (
    <Routes>
      <Route path='/' element={<Wrapper />}>
        {publicPages}
      </Route>
    </Routes>
  );
}
