import React, { useEffect, useState } from 'react';
import Edit from '../../../../img/edit.svg';
import Trash from '../../../../img/trash-2.svg';
import myaxios from '../../../../app/api';
import './index.scss';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';

function ViewCustomer(props) {
  const [customers, setCustomers] = useState();
  const [removeId, setRemoveId] = useState(0);
  const [isLoading, setLoading] = useState(false);

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
    setLoading(true);
    const email = document.getElementsByClassName("search-input")[0].value;
    if (!email) {
      myaxios.get('/customers')
        .then((response) => {
          setLoading(false);
          setCustomers(response.data);
        })
        .catch((error) => {
          setLoading(false);
          setCustomers([]);
          console.log(error);
        })
      return;
    }
    myaxios.get(`customers/search?email=${email}`)
      .then((res) => {
        setLoading(false);
        setCustomers([res.data]);
      })
      .catch((error) => {
        setLoading(false);
        setCustomers([]);
        console.log(error);
      })
  }
  return (
    <>
      {!!customers ? (
        <div className="container view-infor">
          <p className="text-title">THÔNG TIN KHÁCH HÀNG</p>
          <div className="flex-center search-form">
            <input type="search" className="search-input" placeholder="Email" />
            <button disabled={isLoading} className="btn btn-primary" onClick={handleSearch}>
              <span className="f-center-y">
                <span className="txt-mg-right">Search</span>
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
          </div>
          {!!customers.length ? (
            <>
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
            </>
          )
            :
            (
              <div className="notFound">
                <img className="notFound-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuW_Gkd6eDbGQ7X3JmDZKbSX8q8TZLOPEdv-lMLjICH_OEfS4MVRDAoFP3fsvQU1lV7Ac&usqp=CAU" alt="not found" />
                <p className="notFound-label">Nothing in here</p>
              </div>
            )}
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

export default ViewCustomer;