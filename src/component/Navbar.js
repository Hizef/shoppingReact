import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Person, Search } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import OffMenu from "./OffMenu";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "펩시",
    "닥터페퍼",
    "MD",
    "립톤",
    "미란다",
    "과자",
    "스타벅스",
  ];
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  const search = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const query = e.target.value;
      console.log("Press Enter, ", query);
      navigate(`/?q=${query}`);
    }
  };

  const logout = (e) => {
    console.log("로그아웃 했음!");
    setAuthenticate(false);
  };
  return (
    <Container className="mt-3">
      {authenticate === false ? (
        <div className="d-flex justify-content-end align-items-center ">
          <Person />
          <Link to="/login" className="ms-2 text-decoration-none text-dark">
            로그인
          </Link>
        </div>
      ) : (
        <div className="d-flex justify-content-end align-items-center ">
          <Link
            to="/"
            className="ms-2 text-decoration-none text-dark"
            onClick={(e) => logout(e)}
          >
            로그아웃
          </Link>
        </div>
      )}

      <div className="text-center my-3 d-none d-md-block">
        <img
          src="./images/pepsi-logo.jpg"
          alt="펩시 로고"
          className="img-fluid w-25 logoImg"
          onClick={goHome}
        />
      </div>
      <div className="d-none d-md-block">
        <Row className="mb-3 ">
          <Col lg={2} md={1} sm={12}></Col>
          <Col lg={8} md={10} sm={12}>
            <ul className="list-unstyled fw-bold d-flex justify-content-between m-0 pt-2 ps-0">
              {menuList.map((menu, index) => (
                <li key={index}>{menu}</li>
              ))}
            </ul>
          </Col>
          <Col lg={2} md={12} sm={12}>
            <Form>
              <Form.Group
                className="ms-1 d-flex align-items-center"
                controlId="searchForm.ControlSearch1"
              >
                <Search className="me-2" />
                <Form.Control
                  type="text"
                  placeholder="search"
                  onKeyDown={(e) => search(e)}
                ></Form.Control>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
      <div className="d-md-none">
        <OffMenu />
        <img
          src="./images/pepsi-logo.jpg"
          alt="펩시 로고"
          className="img-fluid logoImg"
          width="100px"
          onClick={goHome}
        />
      </div>
    </Container>
  );
};

export default Navbar;
