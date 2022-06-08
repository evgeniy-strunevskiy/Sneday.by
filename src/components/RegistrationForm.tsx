import { FC } from "react";
import classNames from "classnames/bind";
import styles from "./RegistrationForm.module.scss";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputForm } from "./UI/InputForm/InputForm";
import { Button } from "./UI/button/Button";

const cl = classNames.bind(styles);

interface RegistrationInterface {
  email: string;
  password: string;
}

interface RegistrationFormTypes {
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

export const RegistrationForm: FC<RegistrationFormTypes> = ({ fromPage }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegistrationInterface>({ resolver: yupResolver(EmailSchema) });

  const onSubmit = (data: RegistrationInterface) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cl("registration-form")}>
      <div className={cl("registration-form_row")}>
        <InputForm
          name={"email"}
          label={"Email"}
          register={register}
          placeholder={"Введите email..."}
          error={errors.email?.message}
        />
      </div>
      <div className={cl("registration-form_row")}>
        <InputForm
          name={"password"}
          label={"Пароль"}
          register={register}
          placeholder={"Введите пароль..."}
          error={errors.password?.message}
        />
      </div>
      <div className={cl("registration-form_row")}>
        <Button>Зарегистрироваться</Button>
      </div>
      <div
        className={cl("registration-form_row", "registration-form_row__center")}
      >
        <div className={cl("registration-form_newUser")}>
          <span>Есть аккаунт? </span>
          <Link className={cl("registration-form_login-btn")} to="/login">
            Войти
          </Link>
        </div>
      </div>
    </form>
  );
};
