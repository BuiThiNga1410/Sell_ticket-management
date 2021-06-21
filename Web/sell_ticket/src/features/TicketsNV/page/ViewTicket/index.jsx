import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ViewTicket.scss';
import myaxios from '../../../../app/api';

ViewTicket.propTypes = {

};

function ViewTicket(props) {
  const [tickets, setTickets] = useState([]);
  const [removeId, setRemoveId] = useState(0);
  useEffect(() => {
    myaxios.get('/tickets')
      .then((response) => {
        setTickets(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])
  const handleDeleteTicket = (e, id) => {
    e.preventDefault();
    setRemoveId(id);
    document.getElementsByClassName("overlay")[0].setAttribute("style", "display: flex");
  }
  const handleCancel = () => {
    document.getElementsByClassName("overlay")[0].setAttribute("style", "display: none");
  }
  const handleRemove = () => {
    document.getElementsByClassName("overlay")[0].setAttribute("style", "display: none");
    myaxios.delete(`/tickets/${removeId}`)
      .then((response) => {
        const x = tickets;
        setTickets(x.filter((ticket) => ticket.maVe !== removeId))
      })
      .catch((error) => {
        console.log(error);
      })
  }
  const handleSearch = () => {
    const id = document.getElementsByClassName("search-input")[0].value;
    if (!id) {
      myaxios.get('/tickets')
        .then((response) => {
          setTickets(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
      return;
    }
    myaxios.get(`/tickets/${id}`)
      .then((res) => {
        setTickets([res.data]);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return (
    <div className="container view-infor">
      <p className="text-title">THÔNG TIN VÉ XE</p>
      <div className="flex-center search-form">
        <input type="search" className="search-input"></input>
        <button className="btn btn-primary" onClick={handleSearch}>Search</button>
      </div>
      <div className="table-scroll">
        <table className="table table-striped">
          <thead>
            <tr className="table-primary">
              <th className="text-center">Mã Vé</th>
              <th className="text-center">Tên khách hàng</th>
              <th className="text-center">Số điện thoại</th>
              <th className="text-center">Tên tuyến xe</th>
              <th className="text-center">Ngày xuất bến</th>
              <th className="text-center">Đơn giá</th>
              <th className="text-center"><a href="/ticket/trip-list" className="btn btn-primary">Thêm vé</a></th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => {
              return (
                <tr>
                  <td className="text-center">{ticket.maVe}</td>
                  <td className="text-center">{ticket.tenKh}</td>
                  <td className="text-center">{ticket.sdt}</td>
                  <td className="text-center">{ticket.tenTuyenXe}</td>
                  <td className="text-center">{ticket.ngayXuatBen}</td>
                  <td className="text-center">{ticket.donGia}</td>
                  <td className="text-center"><button class="btn btn-danger" onClick={(e) => handleDeleteTicket(e, ticket.maVe)}>Xóa vé</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="overlay">
        <div className="remove-content">
          <p className="remove-lable">Bạn có chắc chắn muốn xóa khách hàng này?</p>
          <div className="actions">
            <button className="btn btn-secondary" onClick={handleCancel}>Hủy</button>
            <button className="btn btn-danger" onClick={handleRemove}>Xóa</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewTicket;