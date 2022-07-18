import React, { FC } from 'react'
import styles from './CartList.module.scss'
import classNames from 'classnames/bind'
import { ICartItemTypes } from '../types/cartTypes'
import { CartItem } from './CartItem'

const cl = classNames.bind(styles)

interface ICartListPropsTypes {
  cart: ICartItemTypes[]
}

export const CartList: FC<ICartListPropsTypes> = ({cart}) => {

  return (
      <ul className={cl('cart_list')}>
        {
          cart.map(cartItem => (
            <CartItem key={cartItem.id} cartItem={cartItem}/>
          ))
        }
      </ul>
  )
}
