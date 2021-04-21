import React from 'react';
import './Bustable.scss';

Bustable.propTypes = {
    
};

function Bustable(props) {
    return (
        <div className="table-list">
            
            <button className="button addbusbutton">Thêm xe</button>
            <table>
                <thead>
                    <tr>
                        <th>Chủ xe</th>
                        <th>SĐT</th>
                        <th>Dòng xe</th>
                        <th>Số chỗ</th>
                        <th>Loại xe</th>
                        <th>Biển số xe</th>
                        <th>Cập nhật</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-column="bus-owner">Lê Lương</td>
                        <td data-column="phone-number">0859293354</td>
                        <td data-column="type-of-bus">Huyndai</td>
                        <td data-column="number-of-seats">40</td>
                        <td data-column="">Giường nằm (thường)</td>
                        <td data-column="number-plate">43A23456</td>
                        <td data-column="link"><a href="#">Cập nhật</a></td>
                        <td data-column="link"><a href="#">Xóa</a></td>
                    </tr>
                    <tr>
                        <td data-column="bus-owner">Lê Trí Đô</td>
                        <td data-column="phone-number">0859293354</td>
                        <td data-column="type-of-bus">Huyndai</td>
                        <td data-column="number-of-seats">40</td>
                        <td data-column="">Giường nằm (thường)</td>
                        <td data-column="">43A23456</td>
                        <td data-column="link"><a href="#">Cập nhật</a></td>
                        <td data-column="link"><a href="#">Xóa</a></td>
                    </tr>
                    <tr>
                        <td data-column="bus-owner">Lê A</td>
                        <td data-column="phone-number">0859293354</td>
                        <td data-column="type-of-bus">Huyndai</td>
                        <td data-column="number-of-seats">40</td>
                        <td data-column="">Giường nằm (thường)</td>
                        <td data-column="">43A23456</td>
                        <td data-column="link"><a href="#">Cập nhật</a></td>
                        <td data-column="link"><a href="#">Xóa</a></td>
                    </tr>
                    <tr>
                        <td data-column="bus-owner">Lê B</td>
                        <td data-column="phone-number">0859293354</td>
                        <td data-column="type-of-bus">Huyndai</td>
                        <td data-column="number-of-seats">30</td>
                        <td data-column="">Giường nằm (VIP)</td>
                        <td data-column="">43A23456</td>
                        <td data-column="link"><a href="#">Cập nhật</a></td>
                        <td data-column="link"><a href="#">Xóa</a></td>
                    </tr>
                    <tr>
                        <td data-column="bus-owner">Lê C</td>
                        <td data-column="phone-number">0859293354</td>
                        <td data-column="type-of-bus">Huyndai</td>
                        <td data-column="number-of-seats">30</td>
                        <td data-column="">Giường nằm (VIP)</td>
                        <td data-column="">43A23456</td>
                        <td data-column="link"><a href="#">Cập nhật</a></td>
                        <td data-column="link"><a href="#">Xóa</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Bustable;