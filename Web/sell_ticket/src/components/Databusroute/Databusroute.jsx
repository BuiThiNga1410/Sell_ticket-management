import React from "react";
import PropTypes from "prop-types";

import Busroutetable from "../Busroutetable/Busroutetable";
import Search_admin from "../Search_admin/Search_admin";

Databusroute.propTypes = {};

function Databusroute(props) {
  return (
    <div>
      <div className="searchForm">
        <h1 className="title-table">DANH SÁCH TUYẾN XE</h1>
        <div className="container">
          <div className="row">
            <Search_admin />
            <Busroutetable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Databusroute;
