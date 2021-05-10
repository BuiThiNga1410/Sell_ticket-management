import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ViewTicket.scss';
import myaxios from '../../../../app/api';

ViewTicket.propTypes = {

};

function ViewTicket(props) {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    myaxios.get('/tickets')
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  },[])
  return (
    <div className="container">
      <p className="text-title">THÔNG TIN VÉ XE</p>
      <table className="table table-condensed">
        <thead>
          <tr>
            <th>Mã Vé</th>
            <th>Tên khách hàng</th>
            <th>Số điện thoại</th>
            <th>Tên tuyến xe</th>
            <th>Ngày xuất bến</th>
            <th>Đơn giá</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>
          <tr>
            <td>Mary</td>
            <td>Moe</td>
            <td>mary@example.com</td>
          </tr>
          <tr>
            <td>July</td>
            <td>Dooley</td>
            <td>july@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ViewTicket;