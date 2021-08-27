import React, { useRef } from "react";
import "./Search_admin.scss";
import PropTypes from "prop-types";
SearchAdmin.propTypes = {
  onSubmit: PropTypes.func,
};
SearchAdmin.defaultProps = {
  onSubmit: null,
};

function SearchAdmin(props) {
  const { onSubmit } = props;
  const typingTimeoutRef = useRef(null);

  function handleSearchTermChange(e) {
    const value = e.target.value;
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
            className="my-form-control-1"
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

export default SearchAdmin;
