import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Rating.scss'
import myaxios from '../../../../app/api';

function Rating(props) {
  const [numberStar, setNumberStar] = useState(0);
  const [note, setNote] = useState('');
  const query = new URLSearchParams(window.location.search);
  const nx = query.get("nx");
  const kh = query.get("kh");

  const handleClickStar = (e) => {
    if (e.target.getAttribute("color") === "yellow") {
      e.target.setAttribute("color", "gray");
      setNumberStar(numberStar - 1);
    }
    else {
      e.target.setAttribute("color", "yellow");
      setNumberStar(numberStar + 1);
    }
  }
  
  const handleSubmit = () => {
    myaxios.post(`/reviews`, {
      "MaNd": +kh, 
      "MaNhaXe": +nx,
      "Sao": numberStar,
      "NoiDungDanhGia": note
   })
    .then(res => console.log(res))
    .catch(err => {
      throw err;
    })
  }

  const handleChangeNote = (e) => {
    setNote(e.target.value);
  }
  
  const generateStar = () => {
    const arr = [];
    for (let i = 1; i <= 5; i++) {
      arr.push(i);
    }
    const newArr = arr.map(star => {
      return (
        <div className="rating__star-icon" key={star}>
          <FontAwesomeIcon id={star} onClick={handleClickStar} icon={faStar} color="gray" />
        </div>
      )
    })
    return newArr;
  }
  return (
    <div className="detail-ticket">
      <div className="rating">
        <p className="rating__title">Phản hồi của bạn </p>
        <div className="rating__star">
          {generateStar()}
        </div>

        <div className="rating__cmt">
          <textarea className="input-rating" placeholder="Nhập ý kiến của bạn" onChange={handleChangeNote} />
        </div>
        <div className="respond"><button className="btn btn-primary"  onClick={handleSubmit}>Gửi phản hồi</button></div>
      </div>
    </div>



  );
}

export default Rating;