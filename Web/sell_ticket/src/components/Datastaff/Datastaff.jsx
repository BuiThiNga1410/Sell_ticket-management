import React from 'react';
import PropTypes from 'prop-types';
import Stafftable from '../Stafftable/Stafftable';
import Search from '../Search/Search';
import './Datastaff.scss';
import {useState} from 'react';
import axios from 'axios';

Datastaff.propTypes = {
    
};

function Datastaff(props) {
    let [responseData, setResponseData] = useState('');
  const fetchData = React.useCallback(() => {
    axios.get("http://f42d7f9c985f.ngrok.io/api/bustrips")
    .then((response) => {
      setResponseData(response.data);
      console.log(response.data);
      
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
  React.useEffect(() => {
    fetchData()
  }, [fetchData])
    return (
        <div>
            <div className="searchForm">
                <h1 className="title-table">DANH SÁCH NHÂN VIÊN</h1>
                <div className="container">
                    <div className="row">
                        <Search/>
                        <Stafftable/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Datastaff;