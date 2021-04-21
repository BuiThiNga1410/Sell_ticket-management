import React from 'react';
import { Link } from 'react-router-dom';
import './Busroutetable.scss';
import data from './dulieutuyenxe.json'


function Busroutetable(props) {
    return (
        <div className="table-list">
            
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
                    {
                        data.map(busroute=> {
                            return (
                                <tr>
                                    <td data-column="route">{busroute.busroute}</td>
                                    <td data-column="startingpoint">{busroute.startingpoint}</td>
                                    <td data-column="destination">{busroute.destination}</td>
                                    <td data-column="price">{busroute.price}</td>
                                    <td data-column="link"><a href={"/busroute/update?id="+busroute.id}>Cập nhật</a></td>
                                    <td data-column="link"><a href={"/busroute/delete?id="+busroute.id}>Xóa</a></td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
        </div>
    );
}

export default Busroutetable;