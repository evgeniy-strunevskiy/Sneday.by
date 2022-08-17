import React, { FC, useState } from 'react'
import styles from './Pagination.module.scss'
import classNames from 'classnames/bind'

const cl = classNames.bind(styles);

interface IPaginationPropsTypes {
  totalPages:  number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>
}

export const Pagination:FC<IPaginationPropsTypes> = ({totalPages, page, setPage}) => {
  let [portionNumber, setPortionNumber] = useState<number>(1);

  const portionSize = 3;

  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  let PortionCount = Math.ceil(totalPages / portionSize);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={cl('pagination')}>
      {portionNumber > 1 && (
        <button
        className={cl('pagination-btn')}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          назад
        </button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              className={cl(
                { 'pagination-item_active': page === p },
                'pagination-item'
              )}
              key={p}
              onClick={(e) => {
                setPage(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {PortionCount > portionNumber && (
        <button
          className={cl('pagination-btn')}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          вперед
        </button>
      )}
    </div>
  );
}
