import React from 'react';
import './Formaddbusroute.scss';

Formaddbusroute.propTypes = {
    
};

function Formaddbusroute(props) {
    return (
        <div className="form-add-bus-route">
            <p className="add-route-title">THÊM TUYẾN XE</p>
            <div className="form-input">
                <span>Tên tuyến xe:</span><br/>
                <input type="text" required name="name-of-route" className="form-text"/><br/>
                <span>Điểm xuất phát:</span><br/>
                <input type="text" required name="starting-point" className="form-text"/><br/>
                <span>Đích đến: </span><br/>
                <input type="text" required name="destination" className="form-text"/><br/>
                <span>Giá vé:</span><br/>
                <input type="text" required name="price" className="form-text"/><br/>
            </div>
            <div className="button-area button-of-add-route">
                    <button className="button">Quay lại</button>
                    <button className="button">Reset</button>
                    <button className="button">Thêm tuyến xe</button>
            </div>
        </div>
    );
}

export default Formaddbusroute;