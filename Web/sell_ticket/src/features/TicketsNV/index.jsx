import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-bootstrap/esm/Switch';
import { Route, useRouteMatch } from 'react-router';
import ViewTicket from './page/ViewTicket';

TicketNV.propTypes = {
  
};

function TicketNV(props) {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.url} component={ViewTicket} />
    </Switch>
  );
}

export default TicketNV;