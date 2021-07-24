import React, { Component, useRef, useState } from "react";
import "./Search_admin.scss";
import PropTypes from "prop-types";
Search_admin.propTypes = {
  onSubmit: PropTypes.func,
};
Search_admin.defaultProps = {
  onSubmit: null,
};

function Search_admin(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);

  function handleSearchTermChange(e) {
    const value = e.target.value;
    setSearchTerm(value);
    if (!onSubmit) return;
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value,
      };
      onSubmit(formValues);
    }, 300);
  }
  return (
    <div className="search">
      <div className="form-group">
        <div className="btn-group">
          <input
            type="text"
            className="my-form-control"
            name
            id
            aria-describedby="helpId"
            placeholder="Nhập từ khóa"
            onChange={handleSearchTermChange}
          />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Search_admin;