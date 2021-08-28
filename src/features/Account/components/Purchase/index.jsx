import React, { useEffect, useState } from 'react';
import ReactLoading from "react-loading";
import { Link } from 'react-router-dom';
import myaxios from '../../../../app/api';
import Trash from '../../../../img/trash-2.svg';
import ConfirmDialog from '../../../../shared/partials/ConfirmDialog';

import './Purchase.scss';

const numberWithCommas = (x) => {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x))
    x = x.replace(pattern, "$1,$2");
  return x;

}

function Purchase() {
  const [tickets, setTickets] = useState();
  let user = JSON.parse(localStorage.getItem('user'));
  const [showConfirm, setShowConfirm] = useState(false);
  const [idDelete, setIdDelete] = useState();

  const handleDelete = () => {
    myaxios.delete(`tickets/${idDelete}`)
      .then(() => {
        setShowConfirm(false);
        setTickets(tickets.filter((ticket) => ticket.maVe !== +idDelete));
      })
      .catch((err) => {
        throw err;
      })
  }

  useEffect(() => {
    myaxios.get(`tickets/search?userId=${user.maNd}`)
      .then((response) => {
        setTickets(response.data.filter(ticket => ticket.trangThai === true));
      })
      .catch((error) => {
        console.log(error);
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {!!tickets ? (
        <div className="purchase-page">
          <p className="purchase-title">Đơn hàng của bạn</p>
          {tickets.length ? (
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
                    Đã thanh toán
                  </td>
                  <td className="my-table-title my-table-item_center">
                    Biển số xe
                  </td>
                  <td className="my-table-title my-table-item_center">
                    Ngày xuất bến
                  </td>
                  <td className="my-table-title my-table-item_center">
                    Đánh giá
                  </td>
                  <td className="my-table-title my-table-item_center">
                    Hủy vé
                  </td>
                </tr>
                {tickets.map((ticket) => {
                  return (
                    <tr className="my-table-row">
                      <td className="my-table-item my-table-item_center">
                        {ticket.maVe}
                      </td>
                      <td className="my-table-item my-table-item_center">
                        {numberWithCommas(ticket.donGia)}đ
                      </td>
                      <td className="my-table-item my-table-item_center">
                        {numberWithCommas(ticket.daThanhToan)}đ
                      </td>
                      <td className="my-table-item my-table-item_center">
                        {ticket.bienSoXe}
                      </td>
                      <td className="my-table-item my-table-item_center">
                        {ticket.ngayDi?.replace('T', ' ')}
                      </td>
                      <td className="my-table-item my-table-item_center">
                        {(new Date() - new Date(ticket.ngayDi)) > 0 && (
                          <>
                            {!ticket.danhGia  ? 
                              <Link to={`/reviews/add?kh=${user.maNd}&nx=${ticket.maNhaXe}&mv=${ticket.maVe}`}>Đánh giá</Link>
                              :
                              <Link className="review-link" to={`/reviews?id=${ticket.maVe}`}>Xem đánh giá</Link>
                            }
          
                          </>
                        )}
                      </td>
                      <td className="my-table-item my-table-item_center" 
                          onClick={() => {
                            setShowConfirm(true);
                            setIdDelete(+ticket.maVe);
                          }}
                      >
                        <img src={Trash} alt="delete" />
                      </td>
                    </tr>
                  )
                })}
              </table>
              {showConfirm && 
              <ConfirmDialog
                title="Bạn có chắc chắn muốn hủy vé"
                handleConfirm={handleDelete}
                handleCancel={() => setShowConfirm(false)}
              />}
            </div>

          )
            :
            (
              <div className="flex-column-center">
                <p className="notFound-label">Bạn chưa có đơn hàng nào</p>
                <img className="empty-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvjgLYJIALJMPJ0NSLOntspKgQZAqqRztMdpXCzaOO-VhVCuFyXtzFgwLyjM7rQmVzstM&usqp=CAU" alt="empty"></img>
                <a href="/" className="btn btn-primary">Mua ngay</a>
              </div>
            )
          }
        </div>

      )
        :
        (
          <div className="div-loading">
            <ReactLoading
              type={"spokes"}
              color={"#3785df"}
              height={50}
              width={50}
            />
          </div>
        )}
    </>
  );
}

export default Purchase;