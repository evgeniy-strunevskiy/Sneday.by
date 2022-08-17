import React, { FC } from 'react'
import classNames from "classnames/bind";
import styles from "./CommentsList.module.scss";
import { ICommentTypes } from '../types/commentsTypes';
import { Comment } from './Comment';

const cl = classNames.bind(styles);

interface ICommentsListPropsTypes {
  comments: ICommentTypes[];
}

export const CommentsList:FC<ICommentsListPropsTypes> = ({comments}) => {
  return (
    <ul className={cl('comments-list')}>
      {comments.map(com => <Comment key={com.id} comment={com} />)}
    </ul>
  )
}
