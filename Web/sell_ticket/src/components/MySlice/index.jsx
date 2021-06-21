/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';


import './MySlice.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

MySlice.propTypes = {

};

function MySlice(props) {
  const stations = ["https://dixere.vn/wp-content/uploads/2020/06/b%E1%BA%BFn-xe-gia-l%C3%A2m.jpg",
    "https://tintucxeco.net/wp-content/uploads/2019/05/hinh-anh-ben-xe-nuoc-ngam.jpg",
    "https://gialamhanoi.weebly.com/uploads/6/1/2/0/61209993/ben-xe-gia-lam_orig.jpg",
    "https://megabus.vn/wp-content/uploads/2018/12/bx-mien-tay_megabus-5.jpg",
    "https://thuevilla.com/wp-content/uploads/2017/08/h%C3%ACnh-%E1%BA%A3nh-b%E1%BA%BFn-xe-%C3%B4-t%C3%B4.jpg",
    "https://media.vov.vn/uploaded/mdonacdykms/2017_01_01/nuoc_ngam_01_vov_ftct.jpg",
    "https://image.thanhnien.vn/768/uploaded/congthang/2019_03_08/benxemiendong_vzos_uvsf.jpg",
    "https://photo-cms-baophapluat.zadn.vn/Uploaded/trinhninh/2020_03_30/013.jpg",
    "https://baodautu.vn/Images/thutrang/2018/03/27/ha-noi-xay-dung-ben-xe-khach-rong-74-ha-tai-dong-anh1522164233.jpg",
    "https://cdnimg.vietnamplus.vn/uploaded/qfsqy/2017_02_02/ttxvn_0202ben_xe_ca_mau.jpg",
    "https://media.ex-cdn.com/EXP/media.tapchigiaothong.vn/files/Thuy.duong/2019/10/21/ben_xe_trung_tam_tp_thai_nguyen-1107.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcxid6vUB3SeZedgUZ8cNzk5N3WFZFNtTpQ&usqp=CAU"
  ];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const clockInterval = setInterval(() => {
      handleClickNext();
    }, 4000);

    return () => {
      clearInterval(clockInterval);
    }
  }, [index]);

  const getListImg = () => {
    const img_arr = [];
    for (let i = 0; i < stations.length; i += 4) {
      const list_image = [];
      for (let j = i; j < i + 4 && j < stations.length; j++) {
        list_image.push(stations[j]);
      }
      img_arr.push(list_image);
    }
    return img_arr;
  };

  const list_img = getListImg();

  const handleClickNext = () => {
    if (index < list_img.length - 1) {

      document.getElementsByClassName(`my-slice-${index}`)[0].setAttribute("style", "z-index: 1; left: -100% ");

      document.getElementsByClassName(`my-slice-${index + 1}`)[0].setAttribute("style", "z-index: 100; left: 0");
      setIndex(index + 1);
    }

  };

  const handleClickPrev = () => {
    if (index > 0) {

      document.getElementsByClassName(`my-slice-${index}`)[0].setAttribute("style", "z-index: 1; left: 100%");

      document.getElementsByClassName(`my-slice-${index - 1}`)[0].setAttribute("style", "z-index: 100; left: 0");
      setIndex(index - 1);
    }
  }
  return (
    <div className="div-my-slice">

      {list_img.map((imgs, idxs) => {
        return (
          <div className={`my-slice my-slice-${idxs}`} >
            {imgs.map((img, idx) => {
              return (
                <div className={`my-slice-item my-slice-item-${idx}`}>
                  <img src={img} key={`my-slice-item-${idx}`} alt="img" className="my-slice-item-img" />
                </div>
              )
            })}
          </div>
        )
      })}
      <div className="icon-control-prev" onClick={handleClickPrev}>
        <FontAwesomeIcon className="btn-control" icon={faAngleLeft} color="gray" />
      </div>

      <div className="icon-control-next" onClick={handleClickNext}>
        <FontAwesomeIcon className="btn-control" icon={faAngleRight} color="gray" />
      </div>

    </div>
  );
}

export default MySlice;