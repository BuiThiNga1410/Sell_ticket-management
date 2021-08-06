import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Logo from '../../../src/img/logo.png';

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
        <Link to='/'>
          <img className="logo" src={Logo} alt="logo"></img>
        </Link>
        <ul className="header-list">
          <li className="header-item">
            <a className="header-link" href="/ticket/trip-list">Chuyến xe</a>
          </li>
          {user.vaitro === 2 && (
            <>
              <li className="header-item">
                <a href="/qlTicket" className="header-link">Quản lý vé xe</a>
                <div className="header-item__menu">
                  <ul className="header-menu-listItem">
                    <li className="header-menu-item"><a className="header-menu-link" href="/qlTicket">Xem vé xe</a></li>
                    <li className="header-menu-item"><a className="header-menu-link" href="/qlTicket">Cập nhật vé xe</a></li>
                    <li className="header-menu-item"><a className="header-menu-link" href="/qlTicket/add">Thêm vé xe</a></li>
                  </ul>
                </div>
              </li>
              <li className="header-item">
                <a className="header-link" href="/sale-report">Báo cáo doanh thu</a>
              </li>
              <li className="header-item">
                <a href="/customer" className="header-link">Quản lý khách hàng</a>
                <div className="header-item__menu">
                  <ul className="header-menu-listItem">
                    <li className="header-menu-item"><a className="header-menu-link" href="/customer">Xem khách hàng</a></li>
                    <li className="header-menu-item"><a className="header-menu-link" href="/customer">Cập nhật khách hàng</a></li>
                    <li className="header-menu-item"><a className="header-menu-link" href="/customer/add">Thêm khách hàng</a></li>
                  </ul>
                </div>
              </li>
            </>
          )}
          {user.maNd
            ? (<div className="header-group-right header-item">
              <a href='/account' className="header-link user-name">Xin chào {name}</a>
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