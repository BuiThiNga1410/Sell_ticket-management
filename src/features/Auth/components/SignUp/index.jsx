import React, { useState } from "react";

import "./SignUp.scss";
import myaxios from "../../../../app/api";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

function SignUp () {
  const { register, formState: { errors }, handleSubmit, watch } = useForm();
  const password = watch("password");
  const [isLoading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    let email = data.email;
    let pass = data.password;
    myaxios
    .post("/accounts/3", {
      Email: email,
      MatKhau: pass,
    })
    .then(() => {
      setLoading(false);
      window.location.href = "/login";
    })
    .catch((error) => {
      setLoading(false);
      document
      .querySelector(".invalid")
      .setAttribute("style", "display: block");
      console.log(error);
    });
  };

  return (
    <div className="signup">
      <div className="form">
        <p className="form-title">Đăng kí tài khoản</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              placeholder="Nhập Email"
              name="email"
              id="email"
              className="form-input"
              {...register("email", {
                required: "This filed is required",
                pattern: {
                  value: /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Email is invalid'
                }
              })}
            />
            {errors.email && <p className="text-error">{errors.email.message}</p>}
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              className="form-input"
              {...register("password", {
                required: "This filed is required",
                minLength: {
                  value: 6,
                  message: 'Password must have at least 6 characters'
                }
              })}
            />
            {errors.password && <p className="text-error">{errors.password.message}</p>}
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="confirm-password">Confirm password</label>
            <input
              type="password"
              placeholder="Confirm password"
              name="confirm-password"
              id="confirm-password"
              className="form-input"
              {...register("confirmPassword", {
                required: "This filed is required",
                minLength: {
                  value: 6,
                  message: 'Password must have at least 6 characters'
                },
                validate: value => value === password || 'Password do not match'
              })}
            />
            {errors.confirmPassword && <p className="text-error">{errors.confirmPassword.message}</p>}     
          </div>
          <p className="redirect">Do you want to <Link to="/login">Login</Link> ?</p>
          <p className="invalid">Email already used</p>
          <div className="form-btn">
            <button
              className="btn-submit"
              type="submit"
              disabled={isLoading}
            >
              <span className="f-center-y">
                  <span className="txt-mg-right">Register</span>
                  {isLoading && (
                    <ReactLoading
                      type={"spokes"}
                      color={"#ffffff"}
                      height={24}
                      width={24}
                    />
                  )}
                </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignUp;
