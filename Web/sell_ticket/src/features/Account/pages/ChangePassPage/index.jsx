import React from 'react';
import PropTypes from 'prop-types';
import AccountMenu from '../../components/AccountMenu';
import ChangePass from '../../components/ChangePass';
import './ChangePassPage.scss';

ChangePassPage.propTypes = {

};

function ChangePassPage(props) {
  return (
    <div className="ChangePassPage">
      <AccountMenu/>
      <ChangePass/>
    </div>
  );
}

export default ChangePassPage;