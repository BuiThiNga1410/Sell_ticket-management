import React from 'react';
import './Formupdatebusroute.scss';

Formupdatebusroute.propTypes = {
    
};

function Formupdatebusroute(props) {
    return (
        <div className="form-update-bus-route">
            <p className="update-route-title">CẬP NHẬT TUYẾN XE</p>
            <div className="form-input">
                <span>Tên tuyến xe:</span><br/>
                <input type="text" required name="name-of-route" className="form-text" value={props.nameofroute}/><br/>
                <span>Điểm xuất phát:</span><br/>
                <input type="text" required name="starting-point" className="form-text" value={props.startingpoint}/><br/>
                <span>Đích đến: </span><br/>
                <input type="text" required name="destination" className="form-text" value={props.destination}/><br/>
                <span>Giá vé:</span><br/>
                <input type="text" required name="price" className="form-text" value={props.price}/><br/>
            </div>
            <div className="button-area button-of-update-route">
                    <button className="button">Quay lại</button> 
                    <button className="button">Cập nhật</button>
            </div>
        </div>
    );
}

export default Formupdatebusroute;