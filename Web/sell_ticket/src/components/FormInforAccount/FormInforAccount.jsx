import React, { useState } from "react";
import "./FormInforAccount.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
import ReactLoading from "react-loading";
import { useHistory } from "react-router";

FormInforAccount.propTypes = {};

function FormInforAccount(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm();
  let user = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();
  const confirmPassword = watch("password");
  const [status, setStatus] = useState();
  const [isLoading, setLoading] = useState(false);

  const handleChangePass = (data) => {
    setLoading(true);
    setStatus(null);
    let email = data.userName;
    let password = data.password;
    axios
      .post("https://qlbvxk.herokuapp.com/api/accounts/2", {
        email: email,
        MatKhau: password,
      })
      .then((res) => {
        if (res.data.maNd) {
          let acc = {
            maNd: res.data.maNd,
          };
          localStorage.setItem("acc", JSON.stringify(acc));
          history.push("/staff");
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log("status", status);
  return (
    <div className="change-pass-page">
      <div class="change-pass">
        <div className="form-changePass">
          <form className="form" onSubmit={handleSubmit(handleChangePass)}>
            <p className="form-title">THÔNG TIN TÀI KHOẢN</p>
            <div className="form-group">
              <label className="form-label" htmlFor="userName">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                name="userName"
                id="userName"
                className="form-input"
                {...register("userName", {
                  required: "This filed is required",
                })}
              />
              {errors.userName && (
                <p className="text-error">{errors.userName.message}</p>
              )}
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Mật khẩu mới
              </label>
              <input
                type="password"
                placeholder="Mật khẩu"
                name="password"
                id="password"
                className="form-input"
                {...register("password", {
                  required: "This filed is required",
                  minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-error">{errors.password.message}</p>
              )}
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="confirm-password">
                Xác nhận mật khẩu
              </label>
              <input
                type="password"
                placeholder="Xác nhận mật khẩu"
                name="confirm-password"
                id="confirm-password"
                className="form-input"
                {...register("confirmPassword", {
                  required: "This filed is required",
                  minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters",
                  },
                  validate: (value) =>
                    value === confirmPassword || "Password do not match",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-error">{errors.confirmPassword.message}</p>
              )}
            </div>
            {!!status && (
              <p
                className={`txt-center ${
                  status.isSuccess ? "txt-success" : "text-error"
                }`}
              >
                {status.message}
              </p>
            )}
            <div className="form-btn">
              <button className="btn-submit" type="submit" disabled={isLoading}>
                <span className="f-center-y">
                  <span className="txt-mg-right">Cấp tài khoản</span>
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
    </div>
  );
}

export default FormInforAccount;