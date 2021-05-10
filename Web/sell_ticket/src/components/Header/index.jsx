import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Header.scss';
import { useSelector } from 'react-redux';

Header.propTypes = {

};
function Header(props) {
  const user = JSON.parse(localStorage.getItem('user'));
  const name = user ? user.Email.split("@")[0] : "";
  console.log(name);
  return (
    <div className="div-header">
      <div className="container header">
        <img className="header-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS69D9FzUs5f4XRrGWMRiwIooyI0zYCB5ZC-w&usqp=CAU" alt="logo"></img>
        <ul className="header-list">
          <li className="header-item">
            <a className="header-link" href="https://www.quora.com/Where-can-I-find-HTML-CSS-website-templates-Not-Bootstrap">Vé xe tết</a>
          </li>
          <li className="header-item">
            <a className="header-link" href="https://www.quora.com/Where-can-I-find-HTML-CSS-website-templates-Not-Bootstrap">Quản lý vé xe</a>
            <div className="header-item__menu">
              <ul className="header-menu-listItem">
                <li className="header-menu-item"><a className="header-menu-link" href="#S">Xem vé xe</a></li>
                <li className="header-menu-item"><a className="header-menu-link" href="#r">Xóa vé xe</a></li>
                <li className="header-menu-item"><a className="header-menu-link" href="#y">Cập nhật vé xe</a></li>
                <li className="header-menu-item"><a className="header-menu-link" href="#i">Thêm vé xe</a></li>
              </ul>
            </div>
          </li>
          <li className="header-item"><a className="header-link" href="https://vov.vn/xa-hoi/chum-anh-ben-xe-lon-nhat-nuoc-san-sang-hoat-dong-784923.vov">Quản lý xe</a></li>
          {user
            ? <a href='/account' className="user-name">Xin chào {name}</a>
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