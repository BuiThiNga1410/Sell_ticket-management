import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS69D9FzUs5f4XRrGWMRiwIooyI0zYCB5ZC-w&usqp=CAU"
          alt="logo"
          className="header-logo"
        />
      </Link>
      <h1 className="header-title">HỆ THỐNG QUẢN LÝ BÁN VÉ DÀNH CHO ADMIN</h1>
      <ul className="header-list">
        <li className="header-item">
          <span>
            Chào
            <a href="#" className="link">
              Admin
            </a>
          </span>
        </li>
        <li className="header-item">
          <button className="header-button" onClick={handleLogOut}>
            Đăng xuất
          </button>
        </li>
      </ul>
    </div>
  );
}
export default Header_admin;
