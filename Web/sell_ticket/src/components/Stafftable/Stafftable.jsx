import React from 'react';
import  './Stafftable.scss';

Stafftable.propTypes = {
    
};

function Stafftable(props) {
    return (
        <div className="table-list-staff">
                <p className="text-of-list">DANH SÁCH NHÂN VIÊN</p>
                <button className="button addbutton">Thêm nhân viên</button>
                <table>
                  <thead>
                    <tr>
                      <th>Họ và tên</th>
                      <th>Tuổi</th>
                      <th>Giới tính</th>
                      <th>Username</th>
                      <th>Chức vụ</th>
                      <th>Cập nhật</th>
                      <th>Xóa</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-column="Name">Nguyễn Bảo Khang</td>
                      <td data-column="Age">21</td>
                      <td data-column="Gender">Nam</td>
                      <td data-column="Username">baokhangnguyen.thangthanh</td>
                      <td data-column="Position">Tài xế</td>
                      <td data-column="link"><a href="#">Cập nhật</a></td>
                      <td data-column="link"><a href="#">Xóa</a></td>
                    </tr>
                    <tr>
                      <td data-column="Name">Đỗ Bình An</td>
                      <td data-column="Age">23</td>
                      <td data-column="Gender">Nữ</td>
                      <td data-column="Username">binhando.thangthanh</td>
                      <td data-column="Position">Kế toán</td>
                      <td data-column="link"><a href="#">Cập nhật</a></td>
                      <td data-column="link"><a href="#">Xóa</a></td>
                    </tr>
                    <tr>
                      <td data-column="Name">Phạm Hùng</td>
                      <td data-column="Age">25</td>
                      <td data-column="Gender">Nam</td>
                      <td data-column="Username">phamhung.thangthanh</td>
                      <td data-column="Position">Tài xế</td>
                      <td data-column="link"><a href="#">Cập nhật</a></td>
                      <td data-column="link"><a href="#">Xóa</a></td>
                    </tr>
                    <tr>
                      <td data-column="Name">Lê Hồng Hà</td>
                      <td data-column="Age">23</td>
                      <td data-column="Gender">Nam</td>
                      <td data-column="Username">honghale.thangthanh</td>
                      <td data-column="Position">Lơ xe</td>
                      <td data-column="link"><a href="#">Cập nhật</a></td>
                      <td data-column="link"><a href="#">Xóa</a></td>
                    </tr>
                    <tr>
                      <td data-column="Name">Lê Nhật Tân</td>
                      <td data-column="Age">23</td>
                      <td data-column="Gender">Nam</td>
                      <td data-column="Username">nhattanle.thangthanh</td>
                      <td data-column="Position">Lơ xe</td>
                      <td data-column="link"><a href="#">Cập nhật</a></td>
                      <td data-column="link"><a href="#">Xóa</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
    );
}

export default Stafftable;