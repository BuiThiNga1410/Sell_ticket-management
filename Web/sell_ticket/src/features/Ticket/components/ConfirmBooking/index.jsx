import React from 'react';
import PropTypes from 'prop-types';

import './ConfirmBooking.scss';

ConfirmBooking.propTypes = {

};

function ConfirmBooking(props) {
  return (
    <div className="confirm-booking">
      <form className="form-search-confirm">
        <input className="input-search-confirm" type="text" />
        <input className="search-confirm-button" type="submit" value="Tìm kiếm" />
      </form>
      <div className="table-confirm">
        <table className="my-table" border="1">
          <tr className="my-table-row">
            <th><p className="my-table-title">Tên tài khoản</p></th>
            <th><p className="my-table-title">Số điện thoại</p></th>
            <th><p className="my-table-title">Ngày đặt</p></th>
            <th><p className="my-table-title">Đã xác nhận</p></th>
            <th><p className="my-table-title">Chi tiết</p></th>
          </tr>

          <tr className="my-table-row">
            <th><p className="my-table-item">Bùi Thị Nga</p></th>
            <th><p className="my-table-item">0376755120</p></th>
            <th><p className="my-table-item">14/02/2020</p></th>
            <th><p className="my-table-item my-table-item_center"><input type="checkbox" /></p></th>
            <th><p className="my-table-item my-table-item_center"><a href="/viewInfBooking">Xem</a></p></th>
          </tr>

          <tr className="my-table-row">
            <th><p className="my-table-item">Nguyễn Ánh Lan</p></th>
            <th><p className="my-table-item">0376752380</p></th>
            <th><p className="my-table-item">17/08/2020</p></th>
            <th><p className="my-table-item my-table-item_center"><input type="checkbox" /></p></th>
            <th><p className="my-table-item my-table-item_center"><a href="/viewInfBooking">Xem</a></p></th>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default ConfirmBooking;