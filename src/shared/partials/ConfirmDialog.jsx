import React from 'react';

const ConfirmDialog = (props) => {
  const { title, handleConfirm, handleCancel } = props;

  return (
    <div className="overlay-show">
      <div className="remove-content">
        <p className="remove-lable">
          {title}
        </p>
        <div className="actions">
          <button className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn btn-danger" onClick={handleConfirm}>
            OK
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmDialog;
