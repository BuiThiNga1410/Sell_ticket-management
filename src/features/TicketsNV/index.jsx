import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { Route, useRouteMatch } from 'react-router';
import ViewTicket from './page/ViewTicket';
import AddTicket from './page/AddTicket';

function TicketNV(props) {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.url} component={ViewTicket} />
      <Route path={`${match.url}/add`} component={AddTicket}/>
    </Switch>
  );
}

export default TicketNV;