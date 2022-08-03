import React, { FC, useEffect } from 'react'
import classNames from "classnames/bind";
import styles from "./Comments.module.scss";
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getComments } from '../store/middleware/comments';
import { Loader } from '../components/UI/loader/Loader';
import { CommentsList } from '../components/CommentsList';

const cl = classNames.bind(styles);

export const Comments:FC = () => {

  const dispatch = useAppDispatch();
  const {comments, isLoading} = useAppSelector(state => state.comments);

  console.log(comments);

  useEffect(() => {
    dispatch(getComments())
  },[])

  return (
    <div className={cl('comments')}>
      <div className={cl('comments_container')}>
      {isLoading ? <Loader /> : <CommentsList comments={comments} />}
        
      </div>
    </div>
  )
}
