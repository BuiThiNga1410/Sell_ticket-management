
import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './features/Ticket/pages/MainPage';
import Login from './features/Auth/components/Login';
import SignUp from './features/Auth/components/SignUp';
import Account from './features/Account';
import EmployeeMenu from './components/EmployeeMenu';
import Search from './components/Search';
import TicketNV from './features/TicketsNV';
import Customer from './features/Customer';

// Lazy load - Code splitting
const Ticket = React.lazy(() => import('./features/Ticket'));
function App() {
  return (
    <div className="ticket-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Redirect exact from="/" to="/ticket" />
            <Route path="/account" component={Account} />
            <Route path="/search" component={Search} />
            <Route path="/ticket" component={Ticket} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/menu" component={EmployeeMenu}/>
            <Route path="/qlTicket" component={TicketNV}/>
            <Route path="/customer/" component={Customer}/>
          </Switch>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
