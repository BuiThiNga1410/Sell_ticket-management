import React from "react";
import PropTypes from "prop-types";
import Search_admin from "../Search_admin/Search_admin";
import Bustable from "../Bustable/Bustable";
Databus.propTypes = {};

function Databus(props) {
  return (
    <div>
      <div className="searchForm">
        <h1 className="title-table">DANH SÁCH XE</h1>
        <div className="container">
          <div className="row">
            <Search_admin />
            <Bustable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Databus;
