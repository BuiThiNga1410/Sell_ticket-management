import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './Menubar.scss';


function Menubar(props) {
    return (
        <div className="menu-bar">
            <ul className="nav">
                <li>
                    <NavLink to="/">Quản lý khách hàng</NavLink>
                    <ul className="subnav">
                        <li>
                            <Link to="/staff">Danh sách khách hàng</Link>
                        </li>
                        <li>
                            <Link to="/staff/add">Thêm khách hàng</Link>
                        </li>
                        
                    </ul>
                </li>
                <li>
                    <NavLink to="/staff">Quản lý nhân viên</NavLink>
                    <ul className="subnav">
                        <li>
                            <Link to="/staff">Danh sách nhân viên</Link>
                        </li>
                        <li>
                            <Link to="/staff/add">Thêm nhân viên</Link>
                        </li>
                        
                    </ul>
                </li>
                <li>
                    <a href="#">Thông tin báo cáo doanh thu</a>
                    <ul className="subnav">
                        <li><a href="#">Báo cáo doanh thu theo ngày</a></li>
                        <li><a href="#">Báo cáo doanh thu theo tháng</a></li>
                        <li><a href="#">Báo cáo doanh thu theo năm</a></li>
                    </ul>
                </li>
                <li>
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
                <li>
                    <Link to="/bus">Quản lý xe</Link>
                    <ul className="subnav">
                        <li><Link to="/bus">Danh sách xe</Link></li>
                        <li><Link to="/bus/add">Thêm xe</Link></li>
                        
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Menubar;