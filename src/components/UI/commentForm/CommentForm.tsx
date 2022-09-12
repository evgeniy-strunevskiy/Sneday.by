import React, { FC } from "react";
import styles from "./CommentForm.module.scss";
import classNames from "classnames/bind";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputForm } from "../InputForm/InputForm";
import { TextAreaForm } from "../textareaForm/TextAreaForm";
import { ICommentFormTypes } from "../../../types/commentFormTypes";
import { PointsServer } from "../../../api/PointsServer";

const cl = classNames.bind(styles);

interface ICommentFormPropsTypes {
  setVisible(modal: boolean): void;
  fetchComments(): void;
}

const EmailSchema = yup.object().shape({
  email: yup.string().email("Введите email").required("Обязательно"),
  name: yup.string().required("Напишите имя"),
  comment: yup.string().required("Напишите комментарий"),
});

export const CommentForm: FC<ICommentFormPropsTypes> = ({setVisible, fetchComments}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ICommentFormTypes>({ resolver: yupResolver(EmailSchema) });

  const onSubmit = async (data: ICommentFormTypes) => {
    const today = new Date();
    const login = localStorage.getItem("auth");

    const comment = {
      id: Date.now(),
      date: today.toLocaleString(),
      name: data.name,
      email: data.email,
      content: data.comment,
      login: login,
    };
    await PointsServer.addComment(comment);
    fetchComments()
    setVisible(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cl("comment-form")}>
      <ul className={cl("comment-form_list")}>
        <li className={cl("comment-form_item")}>
          <InputForm
            name={"email"}
            label={"Почта"}
            register={register}
            placeholder={"Введите email..."}
            error={errors.email?.message}
          />
        </li>
        <li className={cl("comment-form_item")}>
          <InputForm
            name={"name"}
            label={"Имя"}
            register={register}
            placeholder={"Введите имя..."}
            error={errors.name?.message}
          />
        </li>
        <li className={cl("comment-form_item")}>
          <TextAreaForm
            name={"comment"}
            label={"Комментарий"}
            register={register}
            placeholder={"Пиши, не спеши..."}
            error={errors.comment?.message}
          />
        </li>
      </ul>
      <button className={cl("comment-form_btn")}>Написать комментарий</button>
    </form>
  );
};
