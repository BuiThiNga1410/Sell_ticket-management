import React, {Component} from 'react';
import './Search.scss';



function Search(props) {
    return (
        <div className="search">
            <div className="form-group">
                <div className="btn-group">
                    <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Nhập từ khóa"/>
                    <button className="btn btn-infor">Tìm kiếm</button>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default Search;