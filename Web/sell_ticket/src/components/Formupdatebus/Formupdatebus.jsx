import React from 'react';
import './Formupdatebus.scss';

Formupdatebus.propTypes = {
    
};

function Formupdatebus(props) {
    return (
        <div className="form-update-bus">
            <p className="update-bus-title">CẬP NHẬT THÔNG TIN XE</p>
            <div className="form-input">
                <span>Tên chủ xe:</span><br/>
                <input type="text" required name="bus-owner" className="form-text" value={props.owner}/><br/>
                <span>Số điện thoại:</span><br/>
                <input type="text" required name="phone-number" className="form-text" value={props.phonenumber}/><br/>
                <span>Dòng xe:</span><br/>
                <input type="text" required name="type-of-bus" className="form-text" value={props.typeofbus}/><br/>
                <span>Số chỗ:</span><br/>
                <input type="text" required name="number-of-seats" className="form-text" value={props.numberofseats}/><br/>
                <span>Loại xe:</span><br/>
                <input type="text" required name="type" className="form-text" value={props.type}/><br/>
                <span>Biển số xe:</span><br/>
                <input type="text" required name="number-plate" className="form-text" value={props.numberplate}/><br/>
            </div>
            <div className="button-update-bus">
                    <button className="button">Quay lại</button>
                    
                    <button className="button">Cập nhật</button>
            </div>
        </div>
    );
}

export default Formupdatebus;