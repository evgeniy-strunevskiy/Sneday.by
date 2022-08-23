import React, { FC } from 'react'
import { Navigate, useLocation } from 'react-router'
import { useAppSelector } from '../hooks/redux';

export const RequireAuth: FC = ({children}) => {
  const location = useLocation();
  const {login} = useAppSelector(state => state.login);
  if(!login) {
    return <Navigate to='/login' state={{from: {path: location.pathname}}} />
  }

  return (
    <>{children}</>
  )
}
