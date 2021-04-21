import React from 'react';
import PropTypes from 'prop-types';
import Search from '../Search/Search';
import Busroutetable from '../Busroutetable/Busroutetable';
Databusroute.propTypes = {
    
};

function Databusroute(props) {
    return (
        <div>
            <div className="searchForm">
                <h1 className="title-table">DANH SÁCH TUYẾN XE</h1>
                <div className="container">
                    <div className="row">
                        <Search/>
                        <Busroutetable/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Databusroute;