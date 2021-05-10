import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import myaxios from '../../../../app/api';

import './Purchase.scss';

Purchase.propTypes = {

};

function Purchase(props) {
  const [tickets, setTickets] = useState([]);
  let user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    myaxios.get(`tickets/search?userId=${user.maNd}`)
      .then((response) => {
        setTickets(response.data);
        console.log("tickets", tickets);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])
  return (
    <div>
      <p className="purchase-title">Đơn hàng của bạn</p>
      <div className="table-purchase">
        <table className="my-table" border="1">
          <tr className="my-table-row">
            <td className="my-table-title my-table-item_center">
              Mã Vé
            </td>
            <td className="my-table-title my-table-item_center">
              Giá tiền
            </td>
            <td className="my-table-title my-table-item_center">
              Biển số xe
            </td>
            <td className="my-table-title my-table-item_center">
              Ngày xuất bến
            </td>
          </tr>
          {tickets.map((ticket) => {
            return (
              <tr className="my-table-row">
                <td className="my-table-item my-table-item_center">
                  {ticket.maVe}
                </td>
                <td className="my-table-item my-table-item_center">
                  {ticket.donGia}
                </td>
                <td className="my-table-item my-table-item_center">
                  {ticket.bienSoXe}
                </td>
                <td className="my-table-item my-table-item_center">
                  {ticket.ngayXuatBen}
                </td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  );
}

export default Purchase;