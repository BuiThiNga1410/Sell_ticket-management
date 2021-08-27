import "./App.css";

import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./features/Auth/components/Login";
import SignUp from "./features/Auth/components/SignUp";
import Account from "./features/Account";
import Search from "./components/Search";
import TicketNV from "./features/TicketsNV";
import Customer from "./features/Customer";
import Menubar from "./components/Menubar/Menubar";
import DieuHuongURL from "./routes/DieuHuongURL";
import HeaderAdmin from "./components/Header_admin/Header";
import Ticket from "./features/Ticket";
import SaleReport from "./components/SaleReport";
import FooterAdmin from "./components/Footer_admin/FooterAdmin";
import Payment from "./features/Ticket/pages/Payment/Payment";
import RatingPage from "./features/Ticket/pages/RatingPage";
import Reviews from "./features/Account/components/Purchase/Reviews";
import UpdateReview from "./features/Account/components/Purchase/UpdateReview";

// Lazy load - Code splitting
// const Ticket = React.lazy(() => import('./features/Ticket'));
function App() {
  const user = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user"))
    : {};
  return (
    <div className="ticket-app">
      <BrowserRouter>
      {user.vaitro ? (
        <div>
          {user.vaitro === 1 ? (
            <div>
              <HeaderAdmin />
              <Menubar />
              <DieuHuongURL />
              <FooterAdmin/>
            </div>
          ) : (
            <div className="App">
              <Header />
              <Switch>
                <Redirect exact from="/" to="/ticket" />
                <Route path="/account" component={Account} />
                <Route path="/search" component={Search} />
                <Route path="/ticket" component={Ticket} />
                <Route path="/login" component={Login} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/payment" component={Payment} />
                <Route path="/reviews/add" component={RatingPage} />
                <Route exact path="/reviews" component={Reviews} />
                <Route path="/reviews/edit" component={UpdateReview} />
                {user.vaitro === 2 && (
                  <div>
                    <Route path="/qlTicket" component={TicketNV} />
                    <Route path="/customer/" component={Customer} />
                    <Route path="/sale-report" component={SaleReport}/>
                  </div>
                )}
              </Switch>
              <Footer />
            </div>
            
          )}

          
        </div>
      ) : (
        <div>
          <Redirect exact from="/" to="/login" />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
        </div>
      )}
      </BrowserRouter>
    </div>
  );
}

export default App;