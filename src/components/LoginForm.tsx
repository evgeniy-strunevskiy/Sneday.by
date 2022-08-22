import { FC } from "react";
import classNames from "classnames/bind";
import styles from "./LoginForm.module.scss";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputForm } from "./UI/InputForm/InputForm";
import { Button } from "./UI/button/Button";
import { ILoginInterface } from "../types/loginTypes";
import { useAppDispatch } from "../hooks/redux";
import { setLogin } from "../store/middleware/login";

const cl = classNames.bind(styles);

interface ILoginFormPropsTypes {
  fromPage: string;
}
const EmailSchema = yup.object().shape({
  email: yup.string().email("Введите верный email").required("Обязательно"),
  password: yup
    .number()
    .positive()
    .integer()
    .typeError("Должно быть числом")
    .required("Обязательно"),
});

export const LoginForm: FC<ILoginFormPropsTypes> = ({ fromPage }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginInterface>({ resolver: yupResolver(EmailSchema) });

  const onSubmit = (data: ILoginInterface) => {
    dispatch(setLogin(data));
    navigate(fromPage);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cl("login-form")}>
      <div className={cl("login-form_row")}>
        <InputForm
          name={"email"}
          label={"Email"}
          register={register}
          placeholder={"Введите email..."}
          error={errors.email?.message}
        />
      </div>
      <div className={cl("login-form_row")}>
        <InputForm
          name={"password"}
          label={"Пароль"}
          register={register}
          placeholder={"Введите пароль..."}
          error={errors.password?.message}
        />
      </div>
      <div className={cl("login-form_row")}>
        <Button>Войти</Button>
      </div>
      {/* <div className={cl("login-form_row", "login-form_row__center")}>
        <NewUser text={'Новый пользователь?'} account={'Регистрация'} link={'/registration'} />
      </div> */}
    </form>
  );
};
