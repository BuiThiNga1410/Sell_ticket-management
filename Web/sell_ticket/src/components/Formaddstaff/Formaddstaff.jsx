import React from 'react';
import './Formaddstaff.scss';

Formaddstaff.propTypes = {
    
};

function Formaddstaff(props) {
    
    return (
        <div className="form-add-staff">
            <span className="add-title">THÊM NHÂN VIÊN</span>
            <div className="form-staff">
                <div className="col">
                    <span>Tên nhân viên:</span><br/>
                    <input type="text" required name="nameofstaff" className="form-text"/><br/>
                    <span>Chức vụ:</span><br/>
                    <select className="selection" name="position">
                    <option class="selection" value="1">Kế toán</option>
                            <option class="selection" value="2">Lễ tân</option>
                            <option class="selection" value="3">Tài xế</option>
                            <option class="selection" value="4">Lơ xe</option>
                    </select><br/>
                    <span>Số điện thoại:</span><br/>
                    <input type="text" required name="phonenumber" className="form-text"/><br/>
                    <span>Địa chỉ email:</span><br/>
                    <input type="text" required name="emailaddress" className="form-text"/><br/>
                </div>
                <div className="col">
                    <span>Ngày sinh:</span><br/>
                    <input className="birthday" id="today" type="date"/><br/>
                    <span>Giới tính:</span><br/>
                    <select className="selection" name="gender">
                        <option value="1">Nam</option>
                        <option value="0">Nữ</option>
                        <option value="2">Khác</option>
                    </select><br/>
                    <span>Username:</span><br/>
                    <input type="text" required name="username" className="form-text"/><br/>
                    <span>Mật khẩu:</span><br/>
                    <input type="password" required name="password" className="form-text"/><br/>
                </div>
                <div className="clear"></div>
            </div>
            <div className="button-area">
                <button className="button">Quay lại</button>
                <button className="button">Reset</button>
                <button type="submit" className="button">Thêm nhân viên</button>
            </div>
        </div>
    );
}

export default Formaddstaff;