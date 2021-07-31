import React, { useState } from 'react';
import myaxios from '../../../../app/api';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import ReactLoading from 'react-loading';

function AddCustomer() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();

  const handleAdd = (data) => {
    setLoading(true);
    myaxios.post("/accounts/3", {
      "Email": data.email,
      "MatKhau": data.password,
    })
      .then((response) => {
        myaxios.put(`customers/${response.data.maNd}`, {
          "TenNd": data.name,
          "Sdt": data.sdt,
          "Cmnd": data.cmnd,
          "DiaChi": data.address,
          "NgaySinh": data.dob.split("T")[0]
        })
          .then((res) => {
            setLoading(false);
            window.location.href = "/customer";
          })
          .catch((error) => {
            setLoading(false)
            console.log(error);
          })
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }

  return (
    <div className="container my-form">
      <form className="form" onSubmit={handleSubmit(handleAdd)}>
        <h4 className="form-title">THÊM KHÁCH HÀNG</h4>
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
                value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Email is invalid'
              }
            })}
          />
          {errors.email && <p className="text-error">{errors.email.message}</p>}
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="password">Password</label>
          <input
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
          <label className="form-label" htmlFor="name">Tên khách hàng</label>
          <input
            type="text"
            placeholder="name"
            name="name"
            id="name"
            className="form-input"
            {...register("name", {
              required: "This filed is required",
              pattern: {
                value: /\D+$/,
                message: 'Name is invalid'
              }
            })}
          />
          {errors.name && <p className="text-error">{errors.name.message}</p>}
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="sdt">Số điện thoại</label>
          <input
            type="text"
            placeholder="sdt"
            name="sdt"
            id="sdt"
            className="form-input"
            {...register("sdt", {
              required: "This filed is required",
              pattern: {
                value: /^\d+$/,
                message: 'Phone number is invalid'
              }
            })}
          />
          {errors.sdt && <p className="text-error">{errors.sdt.message}</p>}
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="cmnd">CMND</label>
          <input
            type="text"
            placeholder="cmnd"
            name="cmnd"
            id="cmnd"
            className="form-input"
            {...register("cmnd", {
              required: "This filed is required",
              pattern: {
                value: /^\d+$/,
                message: 'CMND is invalid'
              }
            })}
          />
          {errors.cmnd && <p className="text-error">{errors.cmnd.message}</p>}
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="dob">Ngày sinh</label>
          <input
            type="date"
            placeholder="dob"
            name="dob"
            id="dob"
            className="form-input"
            {...register("dob", {
              required: "This filed is required",
            })}
          />
          {errors.dob && <p className="text-error">{errors.dob.message}</p>}
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="address">Địa chỉ</label>
          <input
            type="text"
            placeholder="address"
            name="address"
            id="address"
            className="form-input"
            {...register("address", {
              required: "This filed is required",
              maxLength: {
                value: 255,
                message: 'Address do not more than 500 characters'
              }
            })}
          />
          {errors.address && <p className="text-error">{errors.address.message}</p>}
        </div>
        <div className="form-btn">
          <button
            className="btn-submit"
            type="submit"
            disabled={isLoading}
          >
            <span className="f-center-y">
              <span className="txt-mg-right">Thêm mới</span>
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
          <input
            className="btn btn-outline-secondary"
            value="Hủy"
            type="button"
            onClick={() => { history.push("/customer") }}
          />
        </div>
      </form>
    </div>
  );
}

export default AddCustomer;