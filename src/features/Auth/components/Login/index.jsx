import React, { useState } from "react";

import "./Login.scss";
import myaxios from "../../../../app/api";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

function Login() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [isLoading, setLoading] = useState(false);

  const handleLogin = (data) => {
    setLoading(true);
    let email = data.email;
    let pass = data.password;
    myaxios
      .post("/accounts/validate", {
        Email: email,
        MatKhau: pass,
      })
      .then((response) => {
        setLoading(false);
        if (response.data.maNd) {
          let user = {
            ...response.data,
            Email: email,
          };
          localStorage.setItem("user", JSON.stringify(user));
          if (response.data.vaitro === 1) window.location.href = "/admin/home";
          else window.location.href = "/";
        } else {
          document
          .querySelector(".invalid")
          .setAttribute("style", "display: block");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  return (
    <div className="login">
      <div className="form-login">
        <p className="login-title">Login to your account</p>
        <form onSubmit={handleSubmit(handleLogin)}>
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
                // minLength: {
                //   value: 6,
                //   message: 'Password must have at least 6 characters'
                // }
              })}
            />
            {errors.password && <p className="text-error">{errors.password.message}</p>}
            <p className="redirect">Do you want <Link to="/sign-up">Register account</Link> ?</p>
            <p className="invalid">Invalid login information</p>
            <div className="form-btn">
              <button
                className="btn-submit"
                type="submit"
                disabled={isLoading}
              >
                <span className="f-center-y">
                  <span className="txt-mg-right">Login</span>
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
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
