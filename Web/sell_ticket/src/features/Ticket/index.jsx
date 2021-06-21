import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import MainPage from './pages/MainPage';
import TripListPage from './pages/TripListPage';
import RatingPage from './pages/RatingPage';
import Booking from './pages/Booking';
import ConfirmBooking from './components/ConfirmBooking';
import ViewInfBooking from './components/ViewInfBooking';
Ticket.propTypes = {

};

function Ticket(props) {

  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />
      <Route path={`${match.url}/trip-list`} component={TripListPage} />
      <Route path={`${match.url}/rating`} component={RatingPage} />
      <Route path={`${match.url}/booking`} component={Booking} />
      <Route path={`${match.url}/confirm`} component={ConfirmBooking} />
      <Route path={`${match.url}/view-inf`} component={ViewInfBooking} />
    </Switch>
  );
}

export default Ticket;