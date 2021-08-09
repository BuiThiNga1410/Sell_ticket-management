import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReactLoading from "react-loading";

import "./ChangePassword.scss";
import axios from "axios";

function ChangePassword() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm();
  let user = JSON.parse(localStorage.getItem("user"));
  const password = watch("newPassword");
  const [status, setStatus] = useState();
  const [isLoading, setLoading] = useState(false);

  const handleChangePass = (data) => {
    setLoading(true);
    setStatus(null);
    const oldPass = data.oldPassword;
    const newPass = data.newPassword;
    axios
      .put(`https://qlbvxk.herokuapp.com/api/accounts/${user.maNd}`, {
        MatKhauCu: oldPass,
        MatKhau: newPass,
      })
      .then(() => {
        setLoading(false);
        setStatus({
          isSuccess: true,
          message: "Change password successfully",
        });

        setTimeout(() => {
          setStatus(null);
          reset();
        }, 2000);
      })
      .catch((error) => {
        setLoading(false);
        setStatus({
          isSuccess: false,
          message: "Old password is invalid",
        });
        throw error;
      });
  };
  console.log("status", status);
  return (
    <div className="change-pass-page">
      <div class="change-pass">
        <div className="form-changePass">
          <form className="form" onSubmit={handleSubmit(handleChangePass)}>
            <p className="form-title">Thay đổi mật khẩu</p>
            <div className="form-group">
              <label className="form-label" htmlFor="oldPassword">
                Mật khẩu cũ
              </label>
              <input
                type="password"
                placeholder="Mật khẩu cũ"
                name="oldPassword"
                id="oldPassword"
                className="form-input"
                {...register("oldPassword", {
                  required: "This filed is required",
                })}
              />
              {errors.oldPassword && (
                <p className="text-error">{errors.oldPassword.message}</p>
              )}
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="newPassword">
                Mật khẩu mới
              </label>
              <input
                type="password"
                placeholder="Mật khẩu mới"
                name="newPassword"
                id="newPassword"
                className="form-input"
                {...register("newPassword", {
                  required: "This filed is required",
                  minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters",
                  },
                })}
              />
              {errors.newPassword && (
                <p className="text-error">{errors.newPassword.message}</p>
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
                    value === password || "Password do not match",
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
                  <span className="txt-mg-right">Xác nhận</span>
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

export default ChangePassword;
