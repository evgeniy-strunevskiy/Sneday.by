import React, { FC } from 'react'
import { ICommentTypes } from '../types/commentsTypes'
import classNames from "classnames/bind";
import styles from "./Comment.module.scss";

const cl = classNames.bind(styles);


interface ICommentPropsTypes {
  comment: ICommentTypes;
}

export const Comment:FC<ICommentPropsTypes> = ({comment}) => {
  return (
    <li className={cl('comment-item')}>
      <div className={cl('comment')}>
        <div className={cl('comment_image')}>
          <img className={cl('comment_img')} src={comment.imgUrl} alt={'comment pic'} />
        </div>
        <div className={cl('comment_info')}>
          <div className={cl('comment_date')}>{comment.date}</div>
          <div className={cl('comment_name')}>{comment.name}</div>
          <div className={cl('comment_content')}>{comment.content}</div>
        </div>
      </div>
    </li>
  )
}
