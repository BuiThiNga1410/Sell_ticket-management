import React, { useState } from "react";
import "./Formaddstaff.scss";

Formaddstaff.propTypes = {};

function Formaddstaff(props) {
  const [nameofstaff, setNameOfStaff] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [usename, setUsename] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    if (!validationPhoneNumber()) {
      alert("Số điện thoại không đúng");
    } else if (!validationEmail()) {
      alert("Địa chỉ Email không đúng");
    }
  };

  const handleNameOfStaffInput = (e) => {
    setNameOfStaff(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleUsername = (e) => {
    setUsename(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const validationPhoneNumber = () => {
    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if (vnf_regex.test(phonenumber)) return true;
    return false;
  };
  const validationEmail = () => {
    const re = /\S+@\S+\.\S+/;
    //Kiểm tra email
    if (re.test(email)) return true;
    return false;
  };
  return (
    <form action="" method="post">
      <div className="form-add-staff">
        <span className="add-title">THÊM NHÂN VIÊN</span>
        <div className="form-staff">
          <div className="col">
            <span>Tên nhân viên:</span>
            <br />
            <input
              type="text"
              required
              name="nameofstaff"
              onChange={handleNameOfStaffInput}
              className="form-text"
            />
            <br />
            <span>Chức vụ:</span>
            <br />
            <select className="selection" name="position">
              <option class="selection" value="1">
                Kế toán
              </option>
              <option class="selection" value="2">
                Lễ tân
              </option>
              <option class="selection" value="3">
                Nhân viên duyệt vé
              </option>
            </select>
            <br />
            <span>Số điện thoại:</span>
            <br />
            <input
              type="text"
              required
              name="phonenumber"
              onChange={handlePhoneNumber}
              className="form-text"
            />
            <br />
            <span>Địa chỉ email:</span>
            <br />
            <input
              type="email"
              required
              name="emailaddress"
              onChange={handleEmail}
              className="form-text"
            />
            <br />
          </div>
          <div className="col">
            <span>Ngày sinh:</span>
            <br />
            <input className="birthday" id="today" type="date" />
            <br />
            <span>Giới tính:</span>
            <br />
            <select className="selection" name="gender">
              <option value="1">Nam</option>
              <option value="0">Nữ</option>
              <option value="2">Khác</option>
            </select>
            <br />
            <span>Username:</span>
            <br />
            <input
              type="text"
              required
              name="username"
              onChange={handleUsername}
              className="form-text"
            />
            <br />
            <span>Mật khẩu:</span>
            <br />
            <input
              type="text"
              required
              name="password"
              onChange={handlePassword}
              className="form-text"
            />
            <br />
          </div>
          <div className="clear"></div>
        </div>
        <div className="button-area">
          <button className="button">Quay lại</button>
          <button className="button">Reset</button>
          <button type="submit" onClick={submitForm} className="button">
            Thêm nhân viên
          </button>
        </div>
      </div>
    </form>
  );
}

export default Formaddstaff;
