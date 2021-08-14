import React from 'react';
import { Form, FormControl, FormGroup, FormLabel, InputGroup } from 'react-bootstrap';

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
            <option>+(84)</option>
          </FormControl>
          <FormControl placeholder="Nhập số điện thoại" />
          <p className="text-error"></p>
        </InputGroup>

      </FormGroup>
      <FormGroup controlId="note">
        <FormLabel>Ghi chú</FormLabel>
        <FormControl as="textarea" placeholder="Nhập vào yêu cầu của bạn" />
      </FormGroup>
    </Form >
  );
}

export default FormBooking;