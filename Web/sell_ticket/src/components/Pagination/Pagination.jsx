import React from 'react';
import './Pagination.scss';


function Pagination(props) {
    return (
        <div className="pagination">
            <a href="#" className="pagination-item">prev</a>
            <a href="#" className="pagination-item">1</a>
            <a href="#" className="pagination-item">2</a>
            <a href="#" className="pagination-item">3</a>
            <a href="#" className="pagination-item">4</a>
            <a href="#" className="pagination-item">next</a>
        </div>
    );
}

export default Pagination;