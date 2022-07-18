import { FC } from "react";
import classNames from "classnames/bind";
import styles from "./RegistrationForm.module.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputForm } from "./UI/InputForm/InputForm";
import { Button } from "./UI/button/Button";
import { NewUser } from "./NewUser";

const cl = classNames.bind(styles);

interface IRegistrationInterface {
  email: string;
  password: string;
}

interface IRegistrationFormPropsTypes {
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

export const RegistrationForm: FC<IRegistrationFormPropsTypes> = ({ fromPage }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IRegistrationInterface>({ resolver: yupResolver(EmailSchema) });

  const onSubmit = (data: IRegistrationInterface) => {
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
        <NewUser text={'Есть аккаунт?'} account={'Войти'} link={'/login'} />
      </div>
    </form>
  );
};
