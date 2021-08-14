import React from 'react';
import { Link } from 'react-router-dom';
import './Pagination.scss';


function Pagination(props) {
    return (
        <div className="pagination">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <Link class="page-link" to="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </Link>
                     </li>
                    <li class="page-item"><Link class="page-link" to="#">1</Link></li>
                    <li class="page-item"><Link class="page-link" to="#">2</Link></li>
                    <li class="page-item"><Link class="page-link" to="#">3</Link></li>
                    <li class="page-item">
                        <Link class="page-link" to="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;