import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import myaxios from '../../app/api';
import './SaleReport.scss';
SaleReport.propTypes = {

};

function SaleReport(props) {
  const [date, setDate] = useState(null);
  const [petrolMoney, setPetrolMoney] = useState(0);
  const [roadTolls, setRoadTolls] = useState(0);
  const [note, setNote] = useState("");
 
  function handleChange(e) {
    let value = e.target.value;
    switch(e.target.id) {
      case "date":
        setDate(value);
        break;
      case "petrol-money":
        setPetrolMoney(+value);
        break;
      case "road-tolls":
        setRoadTolls(+value);
        break;
      case "note":
        setNote(value);
        break;
      default:
        break;
    }
  }

  function handleSaleReport (e) {
    e.preventDefault();
    myaxios.get(`/bustrips/revenue?date=${date}`)
    .then((res) => {
      if(!res.data.length) {
        alert("Không có chyến xe nào xuất phát vào ngày bạn chọn");
        return;
      }
      myaxios.post('/revenues', {
        "Ngay" : date,
        "SoVe" : res.data.reduce((sum, ve) => {
          return sum + ve.veDaBan;
        }, 0),
        "TongDoanhThu" : res.data.reduce((money, ve) => {
          return money + ve.thanhTien;
        }, 0) - petrolMoney - roadTolls,
        "GhiChu" : note,
      })
      .catch((error) => {
        console.log(error);
      })
    }) 
    .catch((error) => {
      console.log(error);
    })
  }
  return (
    <div className="container report-wrap">
      <h2 className="text-center report-title">Báo cáo doanh thu</h2>
      <form>
        <div class="form-group">
          <label for="date">Ngày</label>
          <input type="date" class="form-control" id="date" onChange={handleChange}/>
        </div>
        <div class="form-group">
          <label for="petrol-money">Tiền xăng</label>
          <input class="form-control" id="petrol-money" type="number" onChange={handleChange}/>
        </div>
        <div class="form-group">
          <label for="road-tolls">Tiền phí đường bộ</label>
          <input class="form-control" id="road-tolls" type="number" onChange={handleChange}/>
        </div>
        <div class="form-group">
          <label for="note">Ghi chú</label>
          <input class="form-control" id="note" onChange={handleChange}/>
        </div>
        <div className="flex-center">
          <button className="btn btn-primary" onClick={handleSaleReport}>Lưu thông tin</button>
        </div>
      </form>
    </div>
  );
}

export default SaleReport;