import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Header.scss';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';

Header.propTypes = {

};

function Header(props) {
  return (
    // <div className="header">
    //   <Navbar expand="lg" >
    //     <Navbar.Brand href="#home"><img class="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS69D9FzUs5f4XRrGWMRiwIooyI0zYCB5ZC-w&usqp=CAU" alt="logo" /></Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    //       <Nav pullRight>
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Vé xe tế<table></table></Nav.Link>
    //         <NavDropdown title="Quản lý vé" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //       <Button variant="outline-primary"><FontAwesomeIcon icon={faUser} />Đăng nhập</Button>

    //     </Navbar.Collapse>
    //   </Navbar>
    // </div>

    <div className="header">
      <img className="header-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS69D9FzUs5f4XRrGWMRiwIooyI0zYCB5ZC-w&usqp=CAU" alt="logo"></img>
      <ul className="header-list">
        <li className="header-item">
          <a className="header-link" href="https://www.quora.com/Where-can-I-find-HTML-CSS-website-templates-Not-Bootstrap">Vé xe tết</a>
        </li>
        <li className="header-item">
          <a className="header-link" href="https://www.quora.com/Where-can-I-find-HTML-CSS-website-templates-Not-Bootstrap">Chính sách</a>
          <div className="header-item__menu">
            <ul className="header-menu-listItem">
              <li className="header-menu-item"><a className="header-menu-link" href="#S">Bùi Thị Nga</a></li>
              <li className="header-menu-item"><a className="header-menu-link" href="#r">Lê Phương Nga</a></li>
              <li className="header-menu-item"><a className="header-menu-link" href="#y">Lê Phương Lanm</a></li>
              <li className="header-menu-item"><a className="header-menu-link" href="#i">Nguyễn Ý Nga</a></li>
            </ul>
          </div>
        </li>
        <li className="header-item"><a className="header-link" href="https://vov.vn/xa-hoi/chum-anh-ben-xe-lon-nhat-nuoc-san-sang-hoat-dong-784923.vov">Quản lý xe</a></li>
        <li className="header-item"><button className="header-button">Đăng nhập</button></li>
      </ul>
    </div>

  );
}

export default Header;