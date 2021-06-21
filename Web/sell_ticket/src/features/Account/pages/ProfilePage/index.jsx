import React from 'react';
import PropTypes from 'prop-types';
import AccountMenu from '../../components/AccountMenu';
import Profile from '../../components/Profile';
import './ProfilePage.scss';

ProfilePage.propTypes = {

};

function ProfilePage(props) {
  return (
    <div className="profilePage">
      <AccountMenu/>
      <Profile/>
    </div>
  );
}

export default ProfilePage;