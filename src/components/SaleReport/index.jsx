import React, { useRef, useState } from 'react';
import myaxios from '../../app/api';
import './SaleReport.scss';
import ReactLoading from 'react-loading';

import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

function SaleReport() {
  const { register, formState: { errors }, handleSubmit, setError, clearErrors } = useForm();
  const history = useHistory();
  const petrol= useRef(0);
  const roadToll = useRef(0);
  const [isLoading, setLoading] = useState(false);
  const [status, setStatus] = useState();
  const detailRevenue = useRef();
  const [isError, setIsError] = useState(false);

  const handleChangeOverview = () => {
    document.getElementById('note').value = '';
    if (detailRevenue.current) {
      document.getElementById('note').value = 'Số vé: ' + detailRevenue.current.numberTicket + '  Tiền vé: ' + detailRevenue.current.money;
    }
    if (petrol.current) {
      // eslint-disable-next-line no-useless-concat
      document.getElementById('note').value += `${detailRevenue.current ? '\n' : ''}` + 'Tiền xăng: ' + petrol.current;
    }
    if (roadToll.current) {
      // eslint-disable-next-line no-useless-concat
      document.getElementById('note').value += `${petrol.current ? '  ' : ''}` + 'Tiền phí đi đường: ' + roadToll.current;
    }
  }

  const getDetailRevenue = (e) => {
    const date = e.target.value;
    myaxios.get(`/tickets/revenue?date=${date}`)
      .then(res => {
        if (!res.data.length) {
          setIsError(true);
          detailRevenue.current = null;
          setError('date', { message: 'Không có chuyến xe nào xuất phát vào ngày này'});
          handleChangeOverview();
          return;
        }
        setIsError(false);
        clearErrors('date');
        let numberTicket = 0;
        const money = res.data.reduce((sum, item) => {
          numberTicket += item.veDaBan;
          return sum + item.veDaBan * item.loaiGia;
        }, 0);
        detailRevenue.current = {
          numberTicket: numberTicket,
          money: money,
        };
        handleChangeOverview();
      })
      .catch(err => {
        throw err;
      })

  }

  function handleSaleReport(data) {
    setLoading(true);
    setStatus(null);
 
    console.log('note', document.getElementById("note").value);
    myaxios.post('/revenues', {
      "Ngay": data.date,
      "SoVe": detailRevenue?.current?.numberTicket,
      "TongDoanhThu": detailRevenue?.current?.money - data.petrolMoney - data.roadTolls,
      "GhiChu": document.getElementById("note").value,
    })
      .then((res) => {
        setLoading(false);
        console.log(res.data)
        setStatus({
          isSuccess: true,
          message: "Báo cáo đã được ghi lại",
        });
      })
      .catch((error) => {
        setLoading(false);
        setStatus({
          isSuccess: false,
          message: "Đã xảy ra lỗi",
        });
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
            onChange={(e) => {
              getDetailRevenue(e);
            }}
          />
          {errors.date && <p className="text-error">{errors.date.message}</p>}
        </div>
        <div class="form-group">
          <label className="form-label" for="petrol-money">Tiền xăng</label>
          <input
            class="form-control"
            id="petrol-money"
            {...register("petrolMoney", {
              required: "This filed is required",
              pattern: {
                value: /^[.\d]+$/,
                message: 'Petrol money must be number'
              }
            })}
            onBlur={(e) => {
              petrol.current = e.target.value;
              handleChangeOverview();
            }}
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
            onBlur={(e) => {
              roadToll.current = e.target.value;
              handleChangeOverview();
            }}
          />
          {errors.roadTolls && <p className="text-error">{errors.roadTolls.message}</p>}
        </div>
        <div class="form-group">
          <label className="form-label" for="note">Ghi chú</label>
          <textarea
            class="form-control"
            id="note"
            {...register("note")}
            readOnly
          />
        </div>
        {!!status && (
          <p className={`txt-center ${status.isSuccess ? "txt-success" : "text-error"}`}>
            {status.message}
          </p>
        )}
        <div className="form-btn">
          <button className="btn btn-primary btn-submit" type="submit" disabled={isLoading || isError}>
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