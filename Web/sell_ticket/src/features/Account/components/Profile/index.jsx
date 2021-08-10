import React, { useState } from 'react';
import myaxios from '../../../../app/api';

import './Profile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { useForm } from 'react-hook-form';
import ReactLoading from 'react-loading';

function Profile(props) {
  const { register, formState: { errors }, handleSubmit } = useForm();
  let user = JSON.parse(localStorage.getItem('user'));
  const [isLoading, setLoading] = useState(false);

  const handleChangeInfo = (data) => {
    setLoading(true);
    const name = data.name;
    const sdt = data.sdt;
    const cmnd = data.cmnd;
    const address = data.address;
    const birthday = data.dob;
    const url = user.vaitro === 2 ? `staffs/${user.maNd}` : `customers/${user.maNd}`;
    myaxios.put(url, {
      "TenNd": name,
      "Sdt": sdt,
      "Cmnd": cmnd,
      "DiaChi": address,
      "NgaySinh": birthday,
    })
      .then((response) => {
        setLoading(false);
        document.getElementsByClassName("overlay")[0].setAttribute("style", "display: flex");
        console.log(response.data);
        let newUser = {
          "maNd": user.maNd,
          "Email": user.Email,
          "tenNd": name,
          "sdt": sdt,
          "cmnd": cmnd,
          "diaChi": address,
          "ngaySinh": birthday,
          "vaitro": user.vaitro,
        }
        localStorage.setItem('user', JSON.stringify(newUser));
        setTimeout(() => {
          document.getElementsByClassName("overlay")[0].setAttribute("style", "display: none");
        }, 2000)
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      })
  }
  return (
    <div className="profile-page">
      <div className="profile">
        <div className="form-profile">
          <form className="form" onSubmit={handleSubmit(handleChangeInfo)}>
            <p className="form-title">THÔNG TIN CÁ NHÂN</p>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Họ và tên</label>
              <input
                type="text"
                placeholder="name"
                name="name"
                id="name"
                defaultValue={user.tenNd}
                className="form-input"
                {...register("name", {
                  required: "This filed is required",
                  pattern: {
                    value: /^\D+$/,
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
                defaultValue={user.sdt}
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
                defaultValue={user.cmnd}
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
                defaultValue={user.ngaySinh?.split('T')[0]}
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
                defaultValue={user.diaChi}
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
                  <span className="txt-mg-right">Update</span>
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
      <div className="overlay">
        <div className="notification">
          <p className="notifi-label">Lưu thông tin thành công</p>
          <FontAwesomeIcon icon={faCheckCircle} color="green" size="2x" />
        </div>
      </div>
    </div>
  );
}

export default Profile;