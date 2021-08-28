import React from 'react';

import './AccountMenu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCalendarTimes } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import Avatar from '../../../../img/avatar.png';

function AccountMenu() {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="menu-div-account">
      <div className="center">
        <img src={user.imageUrl || Avatar} alt="avatar" className="account-avt" />
      </div>
      <p className="account-name">{user.tenNd || user.Email.split('@')[0]}</p>
      <ul className="menu-list"> 
        <li className="menu-item item-parent">
          <FontAwesomeIcon className="menu-icon" icon={faUserCircle} color="orange" />Tài khoản của tôi
          <ul className="item-list">
            <li className="menu-item"><a className="menu-item__link" href="/account/profile"> Tài khoản của tôi</a></li>
            <li className="menu-item"><a className="menu-item__link" href="/account/changePass">Đổi mật khẩu</a></li>
          </ul>
        </li>
        <li className="menu-item"><a className="menu-item__link" href="/account/purchase"><FontAwesomeIcon icon={faBook} color="orange" className="menu-icon" />Vé của tôi</a></li>
        <li className="menu-item"><a className="menu-item__link" href="/account/cancelTickets"><FontAwesomeIcon icon={faCalendarTimes} color="orange" className="menu-icon" />Vé đã hủy</a></li>
      </ul>
    </div>

  );
}

export default AccountMenu;
