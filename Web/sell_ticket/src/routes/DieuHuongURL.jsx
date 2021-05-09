import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
DieuHuongURL.propTypes = {};

function DieuHuongURL(props) {
  return (
    <div>
      <Route exact path="/" component={Home} />

      <Route exact path="/staff" component={Datastaff} />
      <Route exact path="/staff/add" component={Formaddstaff} />
      <Route exact path="/staff/update/:id" component={Formupdatestaff} />

      <Route exact path="/busroute" component={Databusroute} />
      <Route exact path="/busroute/add" component={Formaddbusroute} />
      <Route exact path="/busroute/update/:id" component={Formupdatebusroute} />

      <Route exact path="/bus" component={Databus} />
      <Route exact path="/bus/add" component={Formaddbus} />
      <Route exact path="/bus/update/:id" component={Formupdatebus} />
    </div>
  );
}

export default DieuHuongURL;
