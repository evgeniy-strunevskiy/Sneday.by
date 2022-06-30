import { FC } from 'react'
import { Route, Routes } from 'react-router';
import { RequireAuth } from '../hoc/RequireAuth';
import { useAppSelector } from '../hooks/redux';
import { privateRoutes, publicRoutes } from '../router/routes';
import { Loader } from './UI/loader/Loader';
import { Wrapper } from './Wrapper';

export const Router: FC = () => {

  const {isLoading} = useAppSelector(state => state.login)

  const privatePages = privateRoutes.map((route) => (
    route.path === 'index'
    ? <Route key={route.path} index element={<RequireAuth><route.element /></RequireAuth>} />
    : <Route key={route.path} path={route.path} element={<RequireAuth><route.element /></RequireAuth>} />
  ));
  const publicPages = publicRoutes.map((route) => (
    route.path === 'index'
    ? <Route key={route.path} index element={<route.element />} /> 
    : <Route key={route.path} path={route.path} element={<route.element />} /> 
  ));

  if(isLoading) {
    return <Loader />
  }

  return (
    <Routes>
      <Route path='/' element={<Wrapper />}>
        {privatePages}
        {publicPages}
      </Route>
    </Routes>
  );
}
