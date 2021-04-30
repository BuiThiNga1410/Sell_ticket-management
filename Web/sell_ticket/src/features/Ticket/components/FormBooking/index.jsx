import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormControl, FormGroup, FormLabel, FormText, InputGroup } from 'react-bootstrap';
import FormFileInput from 'react-bootstrap/esm/FormFileInput';

FormBooking.propTypes = {

};

function FormBooking(props) {
  return (
    <Form>
      <FormGroup controlId="name">
        <FormLabel>Họ tên</FormLabel>
        <FormControl placeholder="Nhập họ tên" />
        <p className="text-error"></p>
      </FormGroup>

      <FormGroup controlId="phone">
        <FormLabel>Số điện thoại</FormLabel>
        <InputGroup className="mb-2">
          <FormControl as="select" placeholder="(VN)+84" >
            <option>Default select</option>
          </FormControl>
          <FormControl placeholder="Nhập số điện thoại" />
          <p className="text-error"></p>
        </InputGroup>

      </FormGroup>

      <FormGroup controlId="email">
        <FormLabel>Email</FormLabel>
        <FormControl placeholder="Nhập Email của bạn" />
        <p className="text-error"></p>
      </FormGroup>

      <FormGroup controlId="note">
        <FormLabel>Ghi chú</FormLabel>
        <FormControl placeholder="Nhập vào yêu cầu của bạn" />
        <FormText className="policy" >Bằng việc bấm nút Đặt chỗ, bạn đã đồng ý với Chính sách bảo mật thông tin và Quy chế của Nhà xe</FormText>
      </FormGroup>
    </Form >
  );
}

export default FormBooking;