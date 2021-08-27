import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import myaxios from '../../../../app/api';
import { useHistory } from 'react-router-dom';

function UpdateReview(props) {
  const [review, setReview] = useState();
  const [numberStar, setNumberStar] = useState(0);
  const [note, setNote] = useState();
  const history = useHistory();
  const query = new URLSearchParams(window.location.search);
  const id = query.get("id");

  useEffect(() => {
    myaxios.get(`reviews/${id}`)
      .then(res => {
        setReview(res.data)
        setNumberStar(res.data.sao);
        setNote(res.data.noiDungDanhGia);
      })
      .catch(err => {
        throw err;
      })
  }, [id]);

  const handleClickStar = (id) => {
    setNumberStar(+id);
  }

  const handleSubmit = () => {
    console.log( {
      "Sao": numberStar,
      "NoiDungDanhGia": note
    })
    myaxios.put(`/reviews/${review.maDanhGia}`, {
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
    <>
      {!!review && (
        <div className="detail-ticket">
          <div className="rating">
            <p className="rating__label">Chỉnh sửa đánh giá</p>
            <div className="rating__star">
              {generateStar()}
            </div>
            <div className="rating__cmt">
              <textarea defaultValue={review.noiDungDanhGia} className="input-rating" placeholder="Nhập ý kiến của bạn" onChange={handleChangeNote} />
            </div>
            <div className="respond"><button className="btn btn-primary" onClick={handleSubmit}>Cập nhật</button></div>
          </div>
        </div>
      )}
    </>
  );
}

export default UpdateReview;