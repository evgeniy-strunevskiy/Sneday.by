import { FC } from "react";
import classNames from "classnames/bind";
import styles from "./LoginForm.module.scss";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "./UI/Input/Input";
import { Button } from "./UI/button/Button";

const cl = classNames.bind(styles);

interface LoginInterface {
  email: string;
  password: string;
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

export const LoginForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginInterface>({ resolver: yupResolver(EmailSchema) });

  const onSubmit = (data: LoginInterface) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cl("login-form")}>
      <div className={cl("login-form_row")}>
        <Input
          name={"email"}
          label={"Email"}
          register={register}
          placeholder={'Введите email...'}
          error={errors.email?.message}
        />
      </div>
      <div className={cl("login-form_row")}>
        <Input
          name={"password"}
          label={"Пароль"}
          register={register}
          placeholder={'Введите пароль...'}
          error={errors.password?.message}
        />
      </div>
      <div className={cl("login-form_row")}>
      <Button>Войти</Button>
      </div>
      <div className={cl("login-form_row", "login-form_row__center" )}>
        <div className={cl("login-form_newUser")}>
          <span>Новый пользователь? </span>
          <Link
            className={cl("login-form_registration-btn")}
            to="/registration"
          >
            Регистрация
          </Link>
        </div>
      </div>
    </form>
  );
};
