import React from 'react';
import './Deletestaff.scss';

Deletestaff.propTypes = {
    
};

function Deletestaff(props) {
    return (
        <div className="delete-staff">
            <span className="delete-title">XÓA NHÂN VIÊN</span>
            <div className="delete-infor">
                <div className="col">
                    <span>Tên nhân viên:</span><br/>
                    <input type="text" readOnly name="nameofstaff" className="form-text" value={props.name}/><br/>
                    <span>Chức vụ:</span><br/>
                    <select className="selection" name="position" readOnly>
                        <option class="selection" value="1">Kế toán</option>
                        <option class="selection" value="2">Lễ tân</option>
                        <option class="selection" value="3">Tài xế</option>
                        <option class="selection" value="4">Lơ xe</option>
                    </select><br/>
                    <span>Số điện thoại:</span><br/>
                    <input type="text" readOnly name="phonenumber" className="form-text" value={props.phonenumber}/><br/>
                    <span>Địa chỉ email:</span><br/>
                    <input type="text" readOnly name="emailaddress" className="form-text" value={props.emailaddress}/><br/>
                </div>
                <div className="col">
                    <span>Ngày sinh:</span><br/>
                    <input type="text" readOnly name="date-of-birth" className="form-text" value={props.dateofbirth}/><br/>
                    <span>Giới tính:</span><br/>
                    <select className="selection" name="gender">
                        <option value="1">Nam</option>
                        <option value="0">Nữ</option>
                        <option value="2">Khác</option>
                    </select><br/>
                    <span>Username:</span><br/>
                    <input type="text" readOnly name="username" className="form-text" value={props.username}/><br/>
                    <span>Mật khẩu:</span><br/>
                    <input type="password" readOnly name="password" className="form-text" value={props.password}/><br/>
                </div>
                <div className="clear"></div>
            </div>
            <div className="delete-button-area">
                <button className="button">Quay lại</button>
                
                <button className="button">Xóa nhân viên</button>
            </div>
        </div>
    );
}

export default Deletestaff;