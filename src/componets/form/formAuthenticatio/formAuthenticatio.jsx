import { useForm } from "react-hook-form";
import { useState } from "react";
import cn from "classnames";

function AuthenticatioForm() {
  const resetData = () => {
    reset();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    getUser(data);
  };

  const getUser = (data) => {
    console.log(123, data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__inputs">
        <div className="form__block__input">
          {errors.email && (
            <label
              htmlFor="emailsign"
              className={`form__error ${errors.firstName ? "visible" : ""}`}
            >
              {errors.email.message}
            </label>
          )}
          <input
            className="form__input"
            placeholder="Почта"
            id="emailsign"
            {...register("emailsign", {
              required: "*Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "*Invalid email address",
              },
            })}
          />
        </div>
        <div className="form__block__input">
          {errors.password && (
            <label
              htmlFor="passwordsign"
              className={`form__error ${errors.firstName ? "visible" : ""}`}
            >
              {errors.password.message}
            </label>
          )}
          <input
            className="form__input"
            placeholder="Пароль"
            id="passwordsign"
            type="password"
            {...register("passwordsign", {
              required: "*Password is required",
              minLength: {
                value: 8,
                message: "*Password must be at least 8 characters",
              },
            })}
          />
        </div>
      </div>
      <button className="form__button" type="submit">
        Sumbit
      </button>
      <button onClick={resetData} className="form__button" type="reset">
        Clear
      </button>
    </form>
  );
}
export default AuthenticatioForm;
