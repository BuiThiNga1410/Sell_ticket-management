import React from 'react';
import PropTypes from 'prop-types';

import './Purchase.scss';

Purchase.propTypes = {

};

function Purchase(props) {
  return (
    <div>
      <p className="purchase-title">Đơn hàng của bạn</p>
      <div className="table-purchase">
        <table className="my-table" border="1">
          <tr className="my-table-row">
            <td className="my-table-title my-table-item_center">
              Mã chuyến đi
            </td>
            <td className="my-table-title my-table-item_center">
              Thời gian đặt vé
            </td>
            <td className="my-table-title my-table-item_center">
              Giá tiền
            </td>
            <td className="my-table-title my-table-item_center">
              Trạng thái
            </td>
            <td className="my-table-title my-table-item_center">
              Chi tiết
            </td>
          </tr>

          <tr className="my-table-row">
            <td className="my-table-item my-table-item_center">
              CD0002
            </td>
            <td className="my-table-item my-table-item_center">
              15:30 15/3/2020
            </td>
            <td className="my-table-item my-table-item_center">
              300.000đ
            </td>
            <td className="my-table-item my-table-item_center">
              Đã thanh toán
            </td>
            <td className="my-table-title my-table-item_center">
              <a href="/">Chi tiết</a>
            </td>
          </tr>

          <tr className="my-table-row">
            <td className="my-table-item my-table-item_center">
              CD00087
            </td>
            <td className="my-table-item my-table-item_center">
              5:20 1/1/2020
            </td>
            <td className="my-table-item my-table-item_center">
              400.000đ
            </td>
            <td className="my-table-item my-table-item_center">
              Chờ xác nhận
            </td>
            <td className="my-table-title my-table-item_center">
              <a href="/">Chi tiết</a>
            </td>
          </tr>

          <tr className="my-table-row">
            <td className="my-table-item my-table-item_center">
              CD0002
            </td>
            <td className="my-table-item my-table-item_center">
              8:30 15/8/2020
            </td>
            <td className="my-table-item my-table-item_center">
              150.000đ
            </td>
            <td className="my-table-item my-table-item_center">
              Đã thanh toán
            </td>
            <td className="my-table-title my-table-item_center">
              <a href="/">Chi tiết</a>
            </td>
          </tr>

          <tr className="my-table-row">
            <td className="my-table-item my-table-item_center">
              CD0004
            </td>
            <td className="my-table-item my-table-item_center">
              15:10 11/9/2020
            </td>
            <td className="my-table-item my-table-item_center">
              200.000đ
            </td>
            <td className="my-table-item my-table-item_center">
              Chờ xác nhận
            </td>
            <td className="my-table-title my-table-item_center">
              <a href="/">Chi tiết</a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Purchase;