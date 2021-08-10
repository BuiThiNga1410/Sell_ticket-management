import React, { useState, useEffect } from 'react';
import {Bar} from 'react-chartjs-2';
import './BarChart.scss'
import Loading from "../../shared/partials/Loading";

function BarChart() {

    const [data, setData] = useState({});
    function handleSubmit(e) {
      e.preventDefault();
      const year = document.getElementById("year").value;
        const fetchPrices = async () => {
          const res = await fetch(`https://qlbvxk.herokuapp.com/api/revenues/year?year=${year}`)
          const data = await res.json()
          console.log(data);
          setData({
            labels: data.map((crypto) => "Tháng"+ " "+crypto.thang.split("-")[1]),
            datasets: [
              {
                label: "Doanh thu",
                data: data.map((crypto) => crypto.doanhThu),
                backgroundColor: [
                  "#50AF95",
                ]
              }
            ]
          });
        };
        fetchPrices()
      
    }


    return (
        <div >
          <h1 className="title-chart">BIỂU ĐỒ DOANH THU NĂM</h1>
          <div className="chart">
          <form className="my-form-chart">
          <div className="input-group">
                <span className="input-group-text">Năm: </span>
                <input
                  type="text"
                  id="year"
                  className="form-control my-search-form__input"
                />
              </div>
              <button
                className="btn btn-primary button-revenues"
                onClick={handleSubmit}
              >
                Tìm kiếm
              </button>
          </form>
          </div>
            <Bar
            data={data}
            options={{
                title:{
                display:true,
                fontSize:10
                },
                legend:{
                display:true,
                position:'right'
                }
            }}
        />

        </div>
    )
}

export default BarChart;