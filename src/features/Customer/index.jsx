import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import ViewCustomer from './pages/ViewCustomers';
import AddCustomer from './pages/AddCustomer';
import UpdateCustomer from './pages/UpdateCustomer';

function Customer(props) {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.url} component={ViewCustomer}/>
      <Route exact path={`${match.url}/add`} component={AddCustomer}/>
      <Route exact path={`${match.url}/edit/:customerId`} component={UpdateCustomer}/>
    </Switch>
  );
}

export default Customer;