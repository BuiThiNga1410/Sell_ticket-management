import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Formupdatebus from "../components/Formupdatebus/Formupdatebus";
import Formaddbus from "../components/Formaddbus/Formaddbus";
import Formaddbusroute from "../components/Formaddbusroute/Formaddbusroute";
import Formaddstaff from "../components/Formaddstaff/Formaddstaff";
import Formupdatestaff from "../components/Formupdatetaff/Formupdatestaff";
import Home from "../components/Home/Home";
import Formupdatebusroute from "../components/Formupdatebusroute/Formupdatebusroute";
import Datastaff from "../components/Datastaff/Datastaff";
import Databusroute from "../components/Databusroute/Databusroute";
import Databus from "../components/Databus/Databus";
import DataBusTrip from "../components/DataBusTrip/DataBusTrip";
import FormInforAccount from "../components/FormInforAccount/FormInforAccount";
import FormAddBusStation from "../components/FormAddBusStation/FormAddBusStation";
import FormAddBusTrip from "../components/FormAddBusTrip/FormAddBusTrip";
import DataRevenues from "../components/DataRevenues/DataRevenues";
import ChangePassword from "../components/ChangePassword/ChangePassword";
DieuHuongURL.propTypes = {};

function DieuHuongURL(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Route exact path="/admin/home" component={Home} />

      <Route exact path="/staff" component={Datastaff} />
      <Route exact path="/staff/account/add" component={FormInforAccount} />
      <Route exact path="/staff/update/:id" component={Formupdatestaff} />

      <Route exact path="/busroute" component={Databusroute} />
      <Route exact path="/busroute/add" component={Formaddbusroute} />
      <Route exact path="/busroute/update/:id" component={Formupdatebusroute} />

      <Route exact path="/bus" component={Databus} />
      <Route exact path="/bus/add" component={Formaddbus} />
      <Route exact path="/bus/update/:id" component={Formupdatebus} />

      <Route exact path="/bustrip" component={DataBusTrip} />

      <Route exact path="/busstation/add" component={FormAddBusStation} />
      <Route exact path="/bustrip/add" component={FormAddBusTrip} />

      <Route exact path="/revenues" component={DataRevenues} />

      <Route exact path="/password/change" component={ChangePassword}/>
    </div>
  );
}

export default DieuHuongURL;