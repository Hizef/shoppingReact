import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { List } from "react-bootstrap-icons";

const OffMenu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const menuList = [
    "펩시",
    "닥터페퍼",
    "MD",
    "립톤",
    "미란다",
    "과자",
    "스타벅스",
  ];

  return (
    <>
      <List onClick={handleShow} size={50} />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bold ">메뉴리스트</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-unstyled d-flex flex-column justify-content-between m-0 pt-2 ps-0">
            {menuList.map((menu, index) => (
              <li className="mb-2" key={index}>
                {menu}
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffMenu;
