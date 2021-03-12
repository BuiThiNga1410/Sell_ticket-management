import React from 'react';
import './Deletebus.scss';

Deletebus.propTypes = {
    
};

function Deletebus(props) {
    return (
        <div className="delete-bus">
            <p className="delete-bus-title">XÓA XE</p>
            <div className="form-input">
                <span>Tên chủ xe:</span><br/>
                <input type="text" readOnly name="bus-owner" className="form-text" value={props.owner}/><br/>
                <span>Số điện thoại:</span><br/>
                <input type="text" readOnly name="phone-number" className="form-text" value={props.phonenumber}/><br/>
                <span>Dòng xe:</span><br/>
                <input type="text" readOnly name="type-of-bus" className="form-text" value={props.typeofbus}/><br/>
                <span>Số chỗ:</span><br/>
                <input type="text" readOnly name="number-of-seats" className="form-text" value={props.numberofseats}/><br/>
                <span>Loại xe:</span><br/>
                <input type="text" readOnly name="type" className="form-text" value={props.type}/><br/>
                <span>Biển số xe:</span><br/>
                <input type="text" readOnly name="number-plate" className="form-text" value={props.numberplate}/><br/>
            </div>
            <div className="button-delete-bus">
                    <button className="button">Quay lại</button>
                    
                    <button className="button">Xóa xe</button>
            </div>
        </div>
    );
}

export default Deletebus;