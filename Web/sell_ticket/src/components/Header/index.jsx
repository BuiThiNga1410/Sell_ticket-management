import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Header.scss';
import { useSelector } from 'react-redux';

Header.propTypes = {

};
function Header(props) {
  const user = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : {};
  const name = user.maNd ? user.Email.split("@")[0] : "";
  const handleLogOut = () => {
    localStorage.setItem('user', '{}');
    window.location.href = '/login';
  }
  return (
    <div className="div-header">
      <div className="container header">
        <img className="header-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS69D9FzUs5f4XRrGWMRiwIooyI0zYCB5ZC-w&usqp=CAU" alt="logo"></img>
        <ul className="header-list">
          {user.vaitro === 2 && (
            <li className="header-item">
            <p className="header-link">Quản lý vé xe</p>
            <div className="header-item__menu">
              <ul className="header-menu-listItem">
                <li className="header-menu-item"><a className="header-menu-link" href="/qlTicket">Xem vé xe</a></li>
                <li className="header-menu-item"><a className="header-menu-link" href="/qlTicket">Cập nhật vé xe</a></li>
                <li className="header-menu-item"><a className="header-menu-link" href="/qlTicket/add">Thêm vé xe</a></li>
              </ul>
            </div>
          </li>
          )}
          <li className="header-item">
            <a className="header-link" href="/ticket/trip-list">Chuyến xe</a>
          </li>
          {user.vaitro === 2 && (
            <li className="header-item">
            <p className="header-link">Quản lý khách hàng</p>
            <div className="header-item__menu">
              <ul className="header-menu-listItem">
                <li className="header-menu-item"><a className="header-menu-link" href="/customer">Xem khách hàng</a></li>
                <li className="header-menu-item"><a className="header-menu-link" href="/customer">Cập nhật khách hàng</a></li>
                <li className="header-menu-item"><a className="header-menu-link" href="/customer/add">Thêm khách hàng</a></li>
              </ul>
            </div>
          </li>
          )}
          {user.maNd
            ? (<div className="header-group-right">
                <a href='/account' className="user-name">Xin chào {name}</a>
                <button className="btn btn-primary" type="button" onClick={handleLogOut}>Đăng xuất</button>
              </div>
            )
            : (<div className="header-group-right">
              <li className="header-item"><a href="/login" className="btn btn-primary">Đăng nhập</a></li>
              <li className="header-item"><a href="sign-up" className="btn btn-primary">Đăng kí</a></li>
            </div>)
          }
        </ul>
      </div>
    </div>
  );
}

export default Header;