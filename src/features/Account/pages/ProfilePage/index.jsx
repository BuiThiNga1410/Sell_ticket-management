import React from 'react';
import AccountMenu from '../../components/AccountMenu';
import Profile from '../../components/Profile';
import './ProfilePage.scss';

function ProfilePage(props) {
  return (
    <div className="container profilePage">
      <AccountMenu/>
      <Profile/>
    </div>
  );
}

export default ProfilePage;