import React, { FC, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Comments.module.scss";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { getComments } from "../store/middleware/comments";
import { Loader } from "../components/UI/loader/Loader";
import { CommentsList } from "../components/CommentsList";
import { Pagination } from "../components/UI/pagination/Pagination";
import { Modal } from "../components/UI/modal/Modal";
import { CommentForm } from "../components/UI/commentForm/CommentForm";

const cl = classNames.bind(styles);

export const Comments: FC = () => {
  const dispatch = useAppDispatch();
  const { comments, totalCount, isLoading } = useAppSelector(
    (state) => state.comments
  );
  const [modal, setModal] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [limit] = useState<number>(5);
  const [page, setPage] = useState<number>(1);

  function toggleModal(modal: boolean)  {
    setModal(modal)
  }

  const getPageCount = (totalCount: string | null, limit: number) => {
    return Math.ceil(Number(totalCount) / limit);
  };

  useEffect(() => {
    dispatch(getComments(limit, page));
    setTotalPages(getPageCount(totalCount, limit));
  }, [totalCount, limit, page]);

  return (
    <div className={cl("comments")}>
      <div className={cl("comments_container")}>
        <button className={cl("comments_btn")} onClick={() => toggleModal(true)}>Написать комментарий</button>
        {modal && <Modal visible={modal} setVisible={toggleModal} ><CommentForm  /></Modal>}
        {isLoading ? (
          <Loader />
          ) : (
            <>
            <CommentsList comments={comments} />
          </>
        )}
        <Pagination totalPages={totalPages} setPage={setPage} page={page} />
      </div>
    </div>
  );
};
