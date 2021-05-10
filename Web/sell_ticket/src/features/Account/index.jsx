import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router';

import ProfilePage from './pages/ProfilePage';
import ChangePassPage from './pages/ChangePassPage';
import AccountMenu from './components/AccountMenu';
import PurchasePage from './pages/PurchasePage';

Account.propTypes = {

};

function Account(props) {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.url} component={ProfilePage} />
      <Redirect exact from = {match.url} to = {`${match.url}/profile`}/>
      <Route path={`${match.url}/profile`} component={ProfilePage} />
      <Route path={`${match.url}/changePass`} component={ChangePassPage} />
      <Route path={`${match.url}/purchase`} component={PurchasePage} />
    </Switch>
  );
}

export default Account;