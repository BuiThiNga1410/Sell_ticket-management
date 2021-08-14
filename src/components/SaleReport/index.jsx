import React, { useState } from 'react';
import myaxios from '../../app/api';
import './SaleReport.scss';
import ReactLoading from 'react-loading';

import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

function SaleReport() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);
  const [status, setStatus] = useState();

  function handleSaleReport(data) {
    setLoading(true);
    setStatus(null);
    myaxios.get(`/bustrips/revenue?date=${data.date}`)
      .then((res) => {
        if (!res.data.length) {
          setStatus({
            isSuccess: false,
            message: "Không có chyến xe nào xuất phát vào ngày bạn chọn",
          });
          setLoading(false)
          return;
        }
        myaxios.post('/revenues', {
          "Ngay": data.date,
          "SoVe": res.data.reduce((sum, ve) => {
            return sum + ve.veDaBan;
          }, 0),
          "TongDoanhThu": res.data.reduce((money, ve) => {
            return money + ve.thanhTien;
          }, 0) - data.petrolMoney - data.roadTolls,
          "GhiChu": data.note,
        })
          .then(() => {
            setLoading(false);
            setStatus({
              isSuccess: true,
              message: "Báo cáo đã được ghi lại",
            });
          })
          .catch((error) => {
            setLoading(false);
            setStatus({
              isSuccess: false,
              message: "Sale report failed",
            });
            console.log(error);
          })
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      })
  }
  return (
    <div className="container report-wrap">
      <form className="form" onSubmit={handleSubmit(handleSaleReport)}>
        <h2 className="text-center form-title">BÁO CÁO DOANH THU</h2>
        <div class="form-group">
          <label className="form-label" for="date">Ngày</label>
          <input
            type="date"
            class="form-control"
            id="date"
            {...register("date", {
              required: "This filed is required",
            })}
          />
          {errors.date && <p className="text-error">{errors.date.message}</p>}
        </div>
        <div class="form-group">
          <label className="form-label" for="petrol-money">Tiền xăng</label>
          <input
            class="form-control"
            id="petrol-money"
            type="number"
            {...register("petrolMoney", {
              required: "This filed is required",
              pattern: {
                value: /^\d+$/,
                message: 'Petrol money must be number'
              }
            })}
          />
          {errors.petrolMoney && <p className="text-error">{errors.petrolMoney.message}</p>}
        </div>
        <div class="form-group">
          <label className="form-label" for="road-tolls">Tiền phí đường bộ</label>
          <input
            class="form-control"
            id="road-tolls"
            type="number"
            {...register("roadTolls", {
              required: "This filed is required",
              pattern: {
                value: /^\d+$/,
                message: 'Road tolls must be number'
              }
            })}
          />
          {errors.roadTolls && <p className="text-error">{errors.roadTolls.message}</p>}
        </div>
        <div class="form-group">
          <label className="form-label" for="note">Ghi chú</label>
          <input
            class="form-control"
            id="note"
            {...register("note")}
          />
        </div>
        {!!status && (
          <p className={`txt-center ${status.isSuccess ? "txt-success" : "text-error"}`}>
            {status.message}
          </p>
        )}
        <div className="form-btn">
          <button className="btn btn-primary btn-submit" type="submit" disabled={isLoading}>
            <span className="f-center-y">
              <span className="txt-mg-right">Save</span>
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
            onClick={() => { history.push("/") }}
          />
        </div>
      </form>
    </div>
  );
}

export default SaleReport;