import React from "react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";
import "./Menubar.scss";

function Menubar(props) {
  const path = useLocation().pathname;
  console.log('path', path)

  return (
    <div className="menu-bar">
      <ul className="nav">
        <li className={path.includes('/staff') ? 'active' : ''}>
          <NavLink to="/staff">Quản lý nhân viên</NavLink>
          <ul className="subnav">
            <li>
              <Link to="/staff">Danh sách nhân viên</Link>
            </li>
            <li>
              <Link to="/staff/account/add">Cấp tài khoản</Link>
            </li>
          </ul>
        </li>
        <li className={path.includes('/bustrip') ? 'active' : ''}>
          <a href="/bustrip">Quản lý chuyến xe</a>
          <ul className="subnav">
            <li>
              <a href="/bustrip">Danh sách chuyến xe</a>
            </li>
            <li>
              <a href="/bustrip/add">Thêm chuyến xe</a>
            </li>
          </ul>
        </li>
        <li className={path.includes('/busroute') ? 'active' : ''}>
          <Link to="/busroute">Quản lý tuyến xe</Link>
          <ul className="subnav">
            <li>
              <Link to="/busroute">Danh sách tuyến xe</Link>
            </li>
            <li>
              <Link to="busroute/add">Thêm tuyến xe</Link>
            </li>
          </ul>
        </li>
        <li className={path === '/bus' ? 'active' : ''}>
          <Link to="/bus">Quản lý xe</Link>
          <ul className="subnav">
            <li>
              <Link to="/bus">Danh sách xe</Link>
            </li>
            <li>
              <Link to="/bus/add">Thêm xe</Link>
            </li>
          </ul>
        </li>
        <li className={path.includes('/review') ? 'active' : ''}>
          <Link to="/review">Quản lý đánh giá</Link>
          <ul className="subnav">
            <li>
              <Link to="/review">Chi tiết đánh giá</Link>
            </li>
          </ul>
        </li>
        <li className={path.includes('/revenues') ? 'active' : ''}>
          <Link to="/revenues">Quản lý báo cáo</Link>
          <ul className="subnav">
            <li>
              <Link to="/revenues">Báo cáo doanh thu</Link>
            </li>
            <li>
              <Link to="/revenues/chart">Biểu đồ doanh thu</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Menubar;