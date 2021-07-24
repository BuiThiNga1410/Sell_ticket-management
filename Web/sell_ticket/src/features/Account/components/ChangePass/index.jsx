import React, { useState } from 'react';
import myaxios from '../../../../app/api';
import { useForm } from 'react-hook-form';

import './ChangePass.scss';

function ChangePass() {
  const { register, formState: { errors }, handleSubmit, watch, reset } = useForm();
  let user = JSON.parse(localStorage.getItem('user'));
  const password = watch("newPassword");
  const [status, setStatus] = useState();

  const handleChangePass = (data) => {
    setStatus(null);
    const oldPass = data.oldPassword;
    const newPass = data.newPassword;
    myaxios.put(`/accounts/${user.maNd}`, {
      "MatKhauCu": oldPass,
      "MatKhau": newPass
    })
      .then(() => {
        setStatus({
          isSuccess: true,
          message: 'Change password successfully'
        });

        setTimeout(() => {
          setStatus(null);
          reset();
        }, 2000);
      })
      .catch((error) => {
        setStatus({
          isSuccess: false,
          message: 'Old password is invalid'
        });
        throw (error);
      })
  }
  console.log('status', status);
  return (
    <div className="change-pass-page">
      <div class="change-pass">
        <p className="form-changePass-label">Thay đổi mật khẩu</p>
        {!!status && (
          <p className={`${status.isSuccess ? 'txt-success' : 'text-error'}`}>{status.message}</p>
        )}
        <div className="form-changePass">
          <form onSubmit={handleSubmit(handleChangePass)}>
            <div className="form-group">
              <label className="form-label" htmlFor="oldPassword">Password</label>
              <input
                type="password"
                placeholder="Old password"
                name="oldPassword"
                id="oldPassword"
                className="form-input"
                {...register("oldPassword", {
                  required: "This filed is required",
                })}
              />
              {errors.oldPassword && <p className="text-error">{errors.oldPassword.message}</p>}
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="newPassword">Password</label>
              <input
                type="password"
                placeholder="New Password"
                name="newPassword"
                id="newPassword"
                className="form-input"
                {...register("newPassword", {
                  required: "This filed is required",
                  minLength: {
                    value: 6,
                    message: 'Password must have at least 6 characters'
                  }
                })}
              />
              {errors.newPassword && <p className="text-error">{errors.newPassword.message}</p>}
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
            <div className="form-btn">
              <input
                className="btn-submit"
                type="submit"
                value="Change password"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePass;