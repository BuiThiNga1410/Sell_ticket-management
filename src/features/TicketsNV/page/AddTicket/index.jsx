import React, { useEffect, useState } from 'react';
import './AddTicket.scss'
import myaxios from '../../../../app/api';

AddTicket.propTypes = {

};

function AddTicket(props) {
  const [customers, setCustomers] = useState([]);
  const [busTrips, setBusTrips] = useState([]);
  useEffect(() => {
    myaxios.get('/customers')
    .then((res) => {
      setCustomers(res.data);
      console.log(customers)
    })
    .catch((error) => {
      console.log(error);
    })
    
    myaxios.get('/bustrips')
    .then((res) => {
      setBusTrips(res.data);
      console.log(customers)
    })
    .catch((error) => {
      console.log(error);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="container">
      <p className="text-title">THÊM VÉ XE</p>
      <form>
        <div class="form-group row">
          <label for="customerId" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <select class="form-control" id="customerId">
              {customers.map((customer) => {
                return (
                  <option value={customer.maNd}>{customer.email}</option>
                )
              })}
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="seatId" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <select class="form-control" id="seatId">
              {busTrips.map((busTrip) => {
                return (
                  <option>{busTrip}</option>
                )
              })}
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="busTripId" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <select class="form-control" id="busTripId"></select>
          </div>
        </div>
        <div class="form-group row">
          <label for="note" class="col-sm-2 col-form-label">Ghi chú</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="note"></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTicket;
