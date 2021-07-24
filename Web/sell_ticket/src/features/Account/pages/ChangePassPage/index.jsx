import React from 'react';
import AccountMenu from '../../components/AccountMenu';
import ChangePass from '../../components/ChangePass';
import './ChangePassPage.scss';

ChangePassPage.propTypes = {

};

function ChangePassPage(props) {
  return (
    <div className="container ChangePassPage">
      <AccountMenu/>
      <ChangePass/>
    </div>
  );
}

export default ChangePassPage;