import React from 'react';
import './Deletebusroute.scss';

Deletebusroute.propTypes = {
    
};

function Deletebusroute(props) {
    return (
        <div className="delete-bus-route">
            <p className="delete-route-title">XÓA TUYẾN XE</p>
            <div className="form-input">
                <span>Tên tuyến xe:</span><br/>
                <input type="text" readOnly name="name-of-route" className="form-text" value={props.nameofroute}/><br/>
                <span>Điểm xuất phát:</span><br/>
                <input type="text" readOnly name="starting-point" className="form-text" value={props.startingpoint}/><br/>
                <span>Đích đến: </span><br/>
                <input type="text" readOnly name="destination" className="form-text" value={props.destination}/><br/>
                <span>Giá vé:</span><br/>
                <input type="text" readOnly name="price" className="form-text" value={props.price}/><br/>
            </div>
            <div className="button-area button-of-delete-route">
                    <button className="button">Quay lại</button>
                    
                    <button className="button">Xóa tuyến xe</button>
            </div>
        </div>
    );
}

export default Deletebusroute;