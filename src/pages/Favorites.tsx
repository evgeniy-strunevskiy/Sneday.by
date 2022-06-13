import React, { FC, useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Favorites.module.scss'
import axios from 'axios'
import { idText } from 'typescript'

const cl = classNames.bind(styles)


export const Favorites: FC = () => {

  const [state, setState] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true)

  useEffect( () => {
    
    const fetching = async () => {
      const response = await axios.get("http://localhost:3001/points");
      console.log(response.data);
      setState(response.data);
      setLoading(false)
    }

    fetching()
  }, [])
  

  return (
    <div className={cl('favorites')}>
      {loading ? (<div>....</div>):(state.map((i: any) => <div key={i.id}>{
        i.vegetables.map((i:any) => <div>{i.id}</div>)
      }</div>)) }
    </div>
  )
}
