import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Rating.scss'
import myaxios from '../../../../app/api';
import { useHistory } from 'react-router-dom';

function Rating(props) {
  const [numberStar, setNumberStar] = useState(0);
  const [note, setNote] = useState('');
  const [nameNx, setNameNx] = useState();
  const query = new URLSearchParams(window.location.search);
  const nx = query.get("nx");
  const kh = query.get("kh");
  const mv = query.get("mv");
  const history = useHistory();

  useEffect(() => {
    myaxios.get(`garages/${nx}`)
      .then(res => setNameNx(res.data.tenNhaXe))
      .catch(err => {
        throw err;
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClickStar = (id) => {
    setNumberStar(+id);
  }
  
  const handleSubmit = () => {
    myaxios.post(`/reviews`, {
      "MaNd": +kh, 
      "MaVe": +mv,
      "Sao": numberStar,
      "NoiDungDanhGia": note
   })
    .then(() => {
      history.push('/account/purchase');
    })
    .catch(err => {
      throw err;
    })
  }

  const handleChangeNote = (e) => {
    setNote(e.target.value);
  }
  
  const generateStar = () => {
    let arr = [];
    let tempStar = numberStar;
    for (let i = 1; i <= 5; i++) {
      arr.push(
      <div className="rating__star-icon" key={i}>
        <FontAwesomeIcon id={i} onClick={() => handleClickStar(i)} icon={faStar} color={tempStar >= 1 ? 'yellow' : 'gray'} />
      </div>);
      tempStar -= 1;
    }
    return arr;
  }

  return (
    <div className="detail-ticket">
      <div className="rating">
        <p className="rating__label">Đánh giá nhà xe {nameNx} </p>
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