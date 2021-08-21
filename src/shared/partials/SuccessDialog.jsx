import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SuccessDialog = (props) => {
  const { message } = props;

  return (
    <>
       <div className="overlay-show">
        <div className="notification">
          <p className="notifi-label">{message}</p>
          <FontAwesomeIcon icon={faCheckCircle} color="green" size="2x" />
        </div>
      </div>
    </>
  )
}

export default SuccessDialog;
