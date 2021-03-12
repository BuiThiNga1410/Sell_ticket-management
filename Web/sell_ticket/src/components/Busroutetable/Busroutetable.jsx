import React from 'react';
import './Busroutetable.scss';



function Busroutetable(props) {
    return (
        <div className="table-list">
            <p className="text-of-list">DANH SÁCH TUYẾN XE</p>
            <button className="button addbusroutebutton">Thêm tuyến xe</button>
            <table>
                <thead>
                    <tr>
                        <th>Tuyến xe</th>
                        <th>Điểm xuất phát</th>
                        <th>Điểm đến</th>
                        <th>Giá vé</th>
                        <th>Cập nhật</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-column="route">Đà Nẵng - Lao Bảo</td>
                        <td data-column="startingpoint">Bến xe TT Đà Nẵng</td>
                        <td data-column="destination">Bến xe Lao Bảo</td>
                        <td data-column="price">120.000</td>
                        <td data-column="link"><a href="#">Cập nhật</a></td>
                        <td data-column="link"><a href="#">Xóa</a></td>
                    </tr>
                    <tr>
                        <td data-column="route">Đà Nẵng - Vinh</td>
                        <td data-column="startingpoint">Bến xe TT Đà Nẵng</td>
                        <td data-column="destination">Bến xe Vinh</td>
                        <td data-column="price">200.000</td>
                        <td data-column="link"><a href="#">Cập nhật</a></td>
                        <td data-column="link"><a href="#">Xóa</a></td>
                    </tr>
                    <tr>
                        <td data-column="route">Đà Nẵng - Đà Lạt</td>
                        <td data-column="startingpoint">Bến xe TT Đà Nẵng</td>
                        <td data-column="destination">Bến xe Đà Lạt</td>
                        <td data-column="price">280.000</td>
                        <td data-column="link"><a href="#">Cập nhật</a></td>
                        <td data-column="link"><a href="#">Xóa</a></td>
                    </tr>
                    <tr>
                        <td data-column="route">Buôn Mê Thuột- Đà Nẵng</td>
                        <td data-column="startingpoint">Bến xe Buôn Mê Thuột</td>
                        <td data-column="destination">Bến xe TT Đà Nẵng</td>
                        <td data-column="price">200.000</td>
                        <td data-column="link"><a href="#">Cập nhật</a></td>
                        <td data-column="link"><a href="#">Xóa</a></td>
                    </tr>
                    <tr>
                        <td data-column="route">Quy Nhơn - Đà Nẵng</td>
                        <td data-column="startingpoint">Bến xe Quy Nhơn</td>
                        <td data-column="destination">Bến xe TT Đà Nẵng</td>
                        <td data-column="price">150.000</td>
                        <td data-column="link"><a href="#">Cập nhật</a></td>
                        <td data-column="link"><a href="#">Xóa</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Busroutetable;