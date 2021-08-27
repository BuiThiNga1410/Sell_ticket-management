import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import "./ViewTicket.scss";
import myaxios from "../../../../app/api";

function ViewTicket(props) {
  const [tickets, setTickets] = useState();
  const [removeId, setRemoveId] = useState(0);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    myaxios
      .get("/tickets")
      .then((response) => {
        setTickets(response.data.filter(ticket => ticket.trangThai === true));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDeleteTicket = (e, id) => {
    e.preventDefault();
    setRemoveId(id);
    document
      .getElementsByClassName("overlay")[0]
      .setAttribute("style", "display: flex");
  };

  const handleCancel = () => {
    document
      .getElementsByClassName("overlay")[0]
      .setAttribute("style", "display: none");
  };

  const handleRemove = () => {
    document
      .getElementsByClassName("overlay")[0]
      .setAttribute("style", "display: none");
    myaxios
      .delete(`/tickets/${removeId}`)
      .then((response) => {
        const x = tickets;
        console.log('success');
        setTickets(x.filter((ticket) => ticket.maVe !== removeId));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearch = () => {
    setLoading(true);
    const id = document.getElementsByClassName("search-input")[0].value;
    if (!id) {
      myaxios
        .get("/tickets")
        .then((response) => {
          setLoading(false);
          setTickets(response.data);
        })
        .catch((error) => {
          setLoading(false);
          setTickets([]);
          console.log(error);
        });
      return;
    }
    myaxios
      .get(`/tickets/${id}`)
      .then((res) => {
        setLoading(false);
        setTickets([res.data]);
      })
      .catch((error) => {
        setLoading(false);
        setTickets([]);
        console.log(error);
      });
  };

  return (
    <>
      {!!tickets ? (
        <div className="container view-infor">
          <p className="text-title">THÔNG TIN VÉ XE</p>
          <div className="flex-center search-form">
            <input type="search" className="search-input" placeholder="Mã vé"></input>
            <button disabled={isLoading} className="btn btn-primary" onClick={handleSearch}>
              <span className="f-center-y">
                <span className="txt-mg-right">Search</span>
                {isLoading && (
                  <ReactLoading
                    type={"spokes"}
                    color={"#ffffff"}
                    height={24}
                    width={24}
                  />
                )}
              </span>
            </button>
          </div>
          {!!tickets.length ? (
            <>
              <div className="table-scroll">
                <table className="table table-striped">
                  <thead>
                    <tr className="table-primary">
                      <th className="text-center">Mã Vé</th>
                      <th className="text-center">Tên khách hàng</th>
                      <th className="text-center">Số điện thoại</th>
                      <th className="text-center">Tên tuyến xe</th>
                      <th className="text-center">Ngày xuất bến</th>
                      <th className="text-center">Đơn giá</th>
                      <th className="text-center">
                        <a href="/ticket/trip-list" className="btn btn-primary">
                          Thêm vé
                        </a>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tickets.map((ticket) => {
                      return (
                        <tr>
                          <td className="text-center">{ticket.maVe}</td>
                          <td className="text-center">{ticket.tenKh}</td>
                          <td className="text-center">{ticket.sdt}</td>
                          <td className="text-center">{ticket.tenTuyenXe}</td>
                          <td className="text-center">{ticket.ngayDi.replace(/T/, ' ')}</td>
                          <td className="text-center">{ticket.donGia}</td>
                          <td className="text-center">
                            <button
                              class="btn btn-danger"
                              onClick={(e) => handleDeleteTicket(e, ticket.maVe)}
                            >
                              Xóa vé
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="overlay">
                <div className="remove-content">
                  <p className="remove-lable">
                    Bạn có chắc chắn muốn xóa vé này?
                  </p>
                  <div className="actions">
                    <button className="btn btn-secondary" onClick={handleCancel}>
                      Hủy
                    </button>
                    <button className="btn btn-danger" onClick={handleRemove}>
                      Xóa
                    </button>
                  </div>
                </div>
              </div>
            </>
          )
            :
            (
              <div className="notFound">
                <img className="notFound-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuW_Gkd6eDbGQ7X3JmDZKbSX8q8TZLOPEdv-lMLjICH_OEfS4MVRDAoFP3fsvQU1lV7Ac&usqp=CAU" alt="not found" />
                <p className="notFound-label">Nothing in here</p>
              </div>
            )}
        </div>
      ) : (
        <div className="div-loading">
          <ReactLoading
            type={"spokes"}
            color={"#3785df"}
            height={50}
            width={50}
          />
        </div>
      )}
    </>
  );
}

export default ViewTicket;
