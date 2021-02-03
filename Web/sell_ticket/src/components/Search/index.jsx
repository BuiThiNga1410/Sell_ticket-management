import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import './Search.scss'

Search.propTypes = {

};

function Search(props) {

  return (
    <div className="search">
      <p className="title"> NHÀ XE THẮNG THANH XIN CHÀO QUÝ KHÁCH</p>

      <form className="search-form">

        <div class="input-group">
          <div class="input-group-prepend ">
            <span class="input-group-text"><FontAwesomeIcon icon={faMapMarker} color="blue" /></span>
          </div>
          <input type="text" class="form-control search-form__input" placeholder="Nghệ An" />

          <div class="input-group-prepend">
            <span class="input-group-text"><div class="search-exchange"><FontAwesomeIcon icon={faExchangeAlt} color="blue" /><FontAwesomeIcon icon={faMapMarker} color="blue" /></div></span>
          </div>
          <input type="text" class="form-control search-form__input" placeholder="Đà Nẵng" />
          <input className="form-control search-form__input" type="date" />
          <input className="btn btn-primary search-form__submit" type="submit" value="Tìm vé xe" />
        </div>


      </form>
    </div>
  );
}

export default Search;