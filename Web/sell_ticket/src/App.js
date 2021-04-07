
import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './features/Ticket/pages/MainPage';
import Login from './features/Auth/components/Login';
import SignUp from './features/Auth/components/SignUp';
import Account from './features/Account';
import EmployeeMenu from './components/EmployeeMenu';

// Lazy load - Code splitting
const Ticket = React.lazy(() => import('./features/Ticket'));
function App() {
  return (
    <div className="ticket-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/ticket" />
            <Route path="/account" component={Account} />

            <Route path="/ticket" component={Ticket} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/menu" component={EmployeeMenu}/>
          </Switch>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
