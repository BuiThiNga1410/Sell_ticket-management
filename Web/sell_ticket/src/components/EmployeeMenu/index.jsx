import { faBook, faFolderMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './EmployeeMenu.scss';

function EmployeeMenu(props) {
  return (
    <div className="menu-div">
      <h3 className="menu-title">Trang nhân viên</h3>
      <ul className="menu-list">
        <li className="menu-item item-parent">
          <FontAwesomeIcon icon={faBook} color="orange"/>Quản lý khách hàng
          <ul className="item-list">
            <li className="menu-item"><a className="menu-item__link" href="/"> Xem thông tin khách hàng</a></li>
            <li className="menu-item"><a className="menu-item__link" href="/">Thêm khách hàng</a></li>
            <li className="menu-item"><a className="menu-item__link" href="/">Cập nhật thông tin khách hàng</a></li>
            <li className="menu-item"><a className="menu-item__link" href="/">Xóa khách hàng</a></li>
          </ul>
        </li>
        <li className="menu-item"><FontAwesomeIcon icon={faFolderMinus} color="orange"/>Thông tin chi tiêu</li>
      </ul>
    </div>
  );
}

export default EmployeeMenu;