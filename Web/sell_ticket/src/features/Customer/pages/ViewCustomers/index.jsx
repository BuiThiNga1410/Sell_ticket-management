import React, { useEffect, useState } from 'react';
import Edit from '../../../../img/edit.svg';
import Trash from '../../../../img/trash-2.svg';
import myaxios from '../../../../app/api';
import './index.scss';
import { Link } from 'react-router-dom';

ViewCustomer.propTypes = {

};

function ViewCustomer(props) {
  const [customers, setCustomers] = useState([]);
  const [removeId, setRemoveId] = useState(0);
  useEffect(() => {
    myaxios.get('/customers')
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])
  const handleDeleteCustomer = (e, id) => {
    e.preventDefault();
    setRemoveId(id);
    document.getElementsByClassName("overlay")[0].setAttribute("style", "display: flex");
  }
  const handleCancel = () => {
    document.getElementsByClassName("overlay")[0].setAttribute("style", "display: none");
  }
  const handleRemove = () => {
    document.getElementsByClassName("overlay")[0].setAttribute("style", "display: none");
    myaxios.delete(`/accounts/${removeId}`)
      .then((response) => {
        const x = customers;
        setCustomers(x.filter((customer) => customer.maNd !== removeId))
      })
      .catch((error) => {
        console.log(error);
      })
  }
  const handleSearch = () => {
    const email = document.getElementsByClassName("search-input")[0].value;
    if(!email) {
      myaxios.get('/customers')
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      return;
    }
    myaxios.get(`customers/search?email=${email}`)
    .then((res) => {
      setCustomers([res.data]);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  return (
    <div className="container view-infor">
      <p className="text-title">THÔNG TIN KHÁCH HÀNG</p>
      <div className="flex-center search-form">
        <input type="search" className="search-input"></input>
        <button className="btn btn-primary" onClick={handleSearch}>Search</button>
      </div>
      <div className="table-scroll">
        <table className="table table-striped">
          <thead>
            <tr className="table-primary">
              <th className="text-center">Mã KH</th>
              <th className="text-center">Tên khách hàng</th>
              <th className="text-center">Số điện thoại</th>
              <th className="text-center">Email</th>
              <th className="text-center">Địa chỉ</th>
              <th className="text-center">Ngày sinh</th>
              <th className="text-center"><a href="/customer/add" className="btn btn-success">Thêm khách hàng</a></th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => {
              return (
                <tr>
                  <td className="text-center">{customer.maNd}</td>
                  <td className="text-center">{customer.tenNd}</td>
                  <td className="text-center">{customer.sdt}</td>
                  <td className="text-center">{customer.email}</td>
                  <td className="text-center">{customer.diaChi}</td>
                  <td className="text-center">{customer.ngaySinh && customer.ngaySinh.split("T")[0]}</td>
                  <td className="text-center">
                    <Link to={`/customer/edit/${customer.maNd}`}><img src={Edit} alt="edit" /></Link>
                    <button onClick={(e) => handleDeleteCustomer(e, customer.maNd)}>
                      <img src={Trash} alt="delete" />
                    </button>
                  </td>
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

export default ViewCustomer;