import React from 'react';
import PropTypes from 'prop-types';

import './Account.scss';
import Profile from '../../components/Profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import ChangePass from '../../components/ChangePass';
import Purchase from '../../components/Purchase';

Account.propTypes = {

};


function Account(props) {

  const handleChangePass = () => {
    document.getElementsByClassName("changePass")[0].setAttribute("style", "display: block");
    document.getElementsByClassName("profile")[0].setAttribute("style", "display: none");
    document.getElementsByClassName("purchase")[0].setAttribute("style", "display: none");
    document.getElementsByClassName("account-info")[0].setAttribute("style", "display: block");
  }
  const handleClickPurchase = () => {
    document.getElementsByClassName("changePass")[0].setAttribute("style", "display: none");
    document.getElementsByClassName("profile")[0].setAttribute("style", "display: none");
    document.getElementsByClassName("purchase")[0].setAttribute("style", "display: block");
  }

  const handleClickProfile = () => {
    document.getElementsByClassName("changePass")[0].setAttribute("style", "display: none");
    document.getElementsByClassName("profile")[0].setAttribute("style", "display: block");
    document.getElementsByClassName("purchase")[0].setAttribute("style", "display: none");
  }
  return (
    <div className="container account">
      <div className="account-menu">
        <div className="account-avt" />
        <p className="account-name">NgaBui1410</p>
        <div className="menu-item" >
          <div className="my-account"><FontAwesomeIcon icon={faUserCircle} color="orange" />
            <p className="my-account-title">Tài khoản của tôi</p>
          </div>
          <div className="account-info">
            <p className="account-item" onClick={handleClickProfile}>Thông tin tài khoản</p>
            <p className="account-item" onClick={handleChangePass}>Đổi mật khẩu</p>
          </div>
        </div>
        <div className="my-account" onClick={handleClickPurchase}><FontAwesomeIcon icon={faBook} color="blue" /><p className="my-account-title">Đơn mua</p></div>
      </div>
      <div className="profile"><Profile /></div>
      <div className="changePass"><ChangePass /></div>
      <div className="purchase"><Purchase /></div>
    </div>
  );
}

export default Account;