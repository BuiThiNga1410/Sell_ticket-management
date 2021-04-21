import React from 'react';
import './Formaddbus.scss';

Formaddbus.propTypes = {
    
};

function Formaddbus(props) {
    const submitForm=(event) =>{
        event.preventDefault();
    }
    return (
        <div className="form-add-bus">
            <p className="add-bus-title">THÊM XE</p>
            <form>
                <div className="form-input">
                    <span>Tên chủ xe:</span><br/>
                    <input type="text" required name="bus-owner" className="form-text"/><br/>
                    <span>Số điện thoại:</span><br/>
                    <input type="text" required name="phone-number" className="form-text"/><br/>
                    <span>Dòng xe:</span><br/>
                    <input type="text" required name="type-of-bus" className="form-text"/><br/>
                    <span>Số chỗ:</span><br/>
                    <input type="text" required name="number-of-seats" className="form-text"/><br/>
                    <span>Loại xe:</span><br/>
                    <input type="text" required name="type" className="form-text"/><br/>
                    <span>Biển số xe:</span><br/>
                    <input type="text" required name="number-plate" className="form-text"/><br/>
                </div>
                <div className="button-add-bus">
                        <button className="button">Quay lại</button>
                        <button type="reset" className="button">Reset</button>
                        <button type="submit" onClick={(event)=>this.submitForm(event)} className="button">Thêm xe</button>
                </div>
            </form>
        </div>
    );
}

export default Formaddbus;