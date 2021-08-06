import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Logo from '../../../src/img/logo.png';
import "./Header_admin.scss";
function Header_admin() {
  const handleLogOut = () => {
    localStorage.setItem("user", "{}");
    window.location.href = "/login";
  };
  return (
    <div className="Header">
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          className="header-logo"
        />
      </Link>
      <h1 className="header-title">HỆ THỐNG QUẢN LÝ BÁN VÉ DÀNH CHO ADMIN</h1>
      <ul className="header-list">
        <li className="header-admin-item">
          <span>
            Chào
            <a href="/password/change" className="link">
              Admin
            </a>
          </span>
        </li>
        <li className="header-admin-item">
          <button className="header-button" onClick={handleLogOut}>
            Đăng xuất
          </button>
        </li>
      </ul>
    </div>
  );
}
export default Header_admin;