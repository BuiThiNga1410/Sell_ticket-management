import React, {useState} from 'react';
import  './Stafftable.scss';
import dl from './duliennhanvien.json';
import { Link } from 'react-router-dom';
import axios from 'axios';
Stafftable.propTypes = {
    
};

function Stafftable(props) {
  let [responseData, setResponseData] = useState('');
  const fetchData = React.useCallback(() => {
    axios.get("https://qlbvxk.herokuapp.com/api/staffs")
    .then((response) => {
       setResponseData(response.data);
       //console.log(response.data);
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
  React.useEffect(() => {
    fetchData()
  }, [fetchData])
    return (
        <div className="table-list-staff">
                
                
                <button className="button addbutton"><Link to="/staff/add" className="link-add-button">Thêm nhân viên</Link></button>
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
                      {dl.map(staff => {
                        return(
                          
                            <tr>
                              <td data-column="Name">{staff.name}</td>
                              <td data-column="Age">{staff.age}</td>
                              <td data-column="Gender">{staff.gender}</td>
                              <td data-column="Username">{staff.username}</td>
                              <td data-column="Position">{staff.position}</td>
                              <td data-column="link"><Link to={"/staff/update/"+staff.id}>Cập nhật</Link></td>
                              <td data-column="link"><Link to={"/staff/delete/"+staff.id}>Xóa</Link></td>
                            </tr>
                        )
                      })}
                   
                    
                  </tbody>
                </table>
              </div>
    );
}

export default Stafftable;