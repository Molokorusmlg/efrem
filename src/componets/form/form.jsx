import "./form.scss";
import { useForm } from "react-hook-form";

const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Registration Data:", data);
    postUser(data);
  };

  const postUser = (data) => {
    fetch("https://6750125869dc1669ec198aa9.mockapi.io/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        name: data.firstName,
        lastname: data.lastName,
        email: data.email,
        password: data.password,
      }),
    }).then((res) => res.json().finally(console.log("comlete")));
  };

  return (
    <div className="form__background">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__inputs">
          <div className="form__block__input">
            {errors.firstName && (
              <label
                htmlFor="firstName"
                className={`form__error ${errors.firstName ? "visible" : ""}`}
              >
                {errors.firstName.message}
              </label>
            )}
            <input
              className="form__input"
              placeholder="Имя"
              id="firstName"
              {...register("firstName", {
                required: "*First name is required",
              })}
            />
          </div>
          <div className="form__block__input">
            {errors.lastName && (
              <label
                htmlFor="lastName"
                className={`form__error ${errors.firstName ? "visible" : ""}`}
              >
                {errors.lastName.message}
              </label>
            )}
            <input
              className="form__input"
              placeholder="Фамилия"
              id="lastName"
              {...register("lastName", { required: "*Last name is required" })}
            />
          </div>
          <div className="form__block__input">
            {errors.email && (
              <label
                htmlFor="email"
                className={`form__error ${errors.firstName ? "visible" : ""}`}
              >
                {errors.email.message}
              </label>
            )}
            <input
              className="form__input"
              placeholder="Почта"
              id="email"
              {...register("email", {
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
                htmlFor="password"
                className={`form__error ${errors.firstName ? "visible" : ""}`}
              >
                {errors.password.message}
              </label>
            )}
            <input
              className="form__input"
              placeholder="Пароль"
              id="password"
              type="password"
              {...register("password", {
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
      </form>
    </div>
  );
};

export default MyForm;
