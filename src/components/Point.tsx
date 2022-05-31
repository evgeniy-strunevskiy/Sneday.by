import classNames from 'classnames/bind';
import { FC } from 'react'
import { useAppSelector } from '../hooks/redux';
import { PointTypes } from '../types/pointsTypes';
import styles from './Point.module.scss';

const cl = classNames.bind(styles);

interface PointComponentTypes {
  point: PointTypes;
}

export const Point: FC<PointComponentTypes> = ({point}) => {
  const isbusy = !point.isBusy;
  let price = null;
  const {vegetable} = useAppSelector(state => state.searchMap)
  
  if (vegetable) {
    point.vegetables.map((item) =>
    item.title === vegetable ? price = item.price : null
    );
  }
  
  return (
    <div className={cl("point", {point_busy: isbusy}, {point_price: price})}>
      {price ? `${price}т.` :  point.id} 
    </div>
  )
}
