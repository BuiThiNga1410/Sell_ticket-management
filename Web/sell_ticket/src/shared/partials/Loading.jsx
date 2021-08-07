import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div className="div-loading">
      <ReactLoading
        type={"spokes"}
        color={"#3785df"}
        height={50}
        width={50}
      />
    </div>
  )
}

export default Loading;
