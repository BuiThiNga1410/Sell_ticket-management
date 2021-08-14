import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import myaxios from '../../../../app/api';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import ReactLoading from 'react-loading';

function UpdateCustomer() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { customerId } = useParams();
  const [customer, setCustomer] = useState();
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    myaxios.get(`/customers/${customerId}`)
      .then((response) => {
        setCustomer(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleUpdate = (data) => {
    setLoading(true);
    myaxios.put(`/customers/${customerId}`, {
      "TenNd": data.name,
      "Sdt": data.sdt,
      "Cmnd": data.cmnd,
      "DiaChi": data.address,
      "NgaySinh": data.dob.split("T")[0]
    })
      .then(() => {
        setLoading(false);
        setTimeout(() => {
          window.location.href = "/customer";
        }, 2000);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      })
  }
  return (
    <>
      {!!customer && (
        <div className="container my-form">
          <form className="form" onSubmit={handleSubmit(handleUpdate)}>
            <h4 className="form-title">CHỈNH SỬA THÔNG TIN KHÁCH HÀNG</h4>
            <div className="form-group">
              <label className="form-label" htmlFor="id">Mã khách hàng</label>
              <input
                readOnly
                name="id"
                id="id"
                value={customer.maNd}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Tên khách hàng</label>
              <input
                type="text"
                placeholder="name"
                name="name"
                id="name"
                defaultValue={customer.tenNd}
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
                defaultValue={customer.sdt}
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
                defaultValue={customer.cmnd}
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
                defaultValue={customer.ngaySinh?.split("T")[0]}
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
                defaultValue={customer.diaChi}
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
              <input
                className="btn btn-outline-secondary"
                value="Hủy"
                type="button"
                onClick={() => { history.push("/customer") }}
              />
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default UpdateCustomer;