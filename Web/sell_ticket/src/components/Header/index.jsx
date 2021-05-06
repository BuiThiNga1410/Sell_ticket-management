import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Header.scss';
import { useSelector } from 'react-redux';

Header.propTypes = {

};
function Header(props) {
  const user = JSON.parse(localStorage.getItem('user'));
  const name = user.Email.split("@")[0];
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
            <a className="header-link" href="https://www.quora.com/Where-can-I-find-HTML-CSS-website-templates-Not-Bootstrap">Chính sách</a>
            <div className="header-item__menu">
              <ul className="header-menu-listItem">
                <li className="header-menu-item"><a className="header-menu-link" href="#S">Bùi Thị Nga</a></li>
                <li className="header-menu-item"><a className="header-menu-link" href="#r">Lê Phương Nga</a></li>
                <li className="header-menu-item"><a className="header-menu-link" href="#y">Lê Phương Lanm</a></li>
                <li className="header-menu-item"><a className="header-menu-link" href="#i">Nguyễn Ý Nga</a></li>
              </ul>
            </div>
          </li>
          <li className="header-item"><a className="header-link" href="https://vov.vn/xa-hoi/chum-anh-ben-xe-lon-nhat-nuoc-san-sang-hoat-dong-784923.vov">Quản lý xe</a></li>
          {user
            ? <a href='/account' className="user-name">Xin chào {name}</a>
            : (<div className="header-group-right">
              <li className="header-item"><button className="my-btn-primary">Đăng nhập</button></li>
              <li className="header-item"><button className="my-btn-primary">Đăng kí</button></li>)
            </div>)
          }
        </ul>
      </div>
    </div>
  );
}

export default Header;