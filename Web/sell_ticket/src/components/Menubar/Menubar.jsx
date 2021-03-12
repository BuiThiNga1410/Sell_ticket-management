import React from 'react';
import './Menubar.scss';


function Menubar(props) {
    return (
        <div className="menu-bar">
            <ul className="nav">
                <li><a href="#">Quản lý tài khoản cá nhân</a></li>
                <li>
                    <a href="#">Quản lý nhân viên</a>
                    <ul className="subnav">
                        <li><a href="#">Danh sách nhân viên</a></li>
                        <li><a href="#">Thêm nhân viên</a></li>
                        <li><a href="#">Xóa nhân viên</a></li>
                        <li><a href="#">Cập nhật thông tin nhân viên</a></li>
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
                    <a href="#">Quản lý tuyến xe</a>
                    <ul className="subnav">
                        <li><a href="#">Danh sách tuyến xe</a></li>
                        <li><a href="#">Thêm tuyến xe</a></li>
                        <li><a href="#">Xóa tuyến xe</a></li>
                        <li><a href="#">Cập nhật thông tin tuyến xe</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">Quản lý xe</a>
                    <ul className="subnav">
                        <li><a href="#">Danh sách xe</a></li>
                        <li><a href="#">Thêm xe</a></li>
                        <li><a href="#">Xóa xe</a></li>
                        <li><a href="#">Cập nhật thông tin xe</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Menubar;