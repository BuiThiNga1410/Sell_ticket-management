import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import './Search.scss'

Search.propTypes = {

};

function Search(props) {

  return (

    <form className="search-form">

      <div class="input-group">
        <div class="input-group-prepend ">
          <span class="input-group-text"><FontAwesomeIcon icon={faMapMarker} color="blue" /></span>
        </div>
        <input type="text" class="form-control search-form__input" placeholder="Tỉnh, thành phố nơi đi" />

        <div class="input-group-prepend">
          <span class="input-group-text"><div class="search-exchange"><FontAwesomeIcon icon={faExchangeAlt} color="blue" /><FontAwesomeIcon icon={faMapMarker} color="blue" /></div></span>
        </div>
        <input type="text" class="form-control search-form__input" placeholder="Tỉnh, thành phố nơi đến" />
        <input className="form-control search-form__input" type="date" value="Nhập ngày đi" />
        <input className="btn btn-primary search-form__submit" type="submit" value="Tìm vé xe" />
      </div>


    </form>

  );
}

export default Search;