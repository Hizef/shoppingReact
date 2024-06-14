import React from "react";
import { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);

  const getProduct = async () => {
    let url = `http://https://my-json-server.typicode.com/Hizef/shoppingReact/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setItem(data);
    console.log(data);
  };

  const [item, setItem] = useState(null);

  useEffect(() => {
    getProduct();
  }, [id]);

  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <>
      <Container className="p-3">
        <Row className="mb-5 py-5 px-3 border border-3 rounded">
          <Col md={6}>
            <div className="text-center">
              <img
                src={item?.img}
                alt={item?.description}
                className="w-50 img-fluid"
              />
            </div>
          </Col>
          <Col md={1} xs="d-none">
            <div className="vr h-100"></div>
          </Col>
          <Col md={5} className="pe-5">
            <p className="mb-5">
              <span>
                {item?.new ? (
                  <img src="/images/icon_02.gif" alt="new Icon" />
                ) : (
                  ""
                )}
              </span>
              <span>
                {item?.sale ? (
                  <img src="/images/icon_11.gif" alt="sale Icon" />
                ) : (
                  ""
                )}
              </span>
              <span>
                {item?.delivery ? (
                  <img src="/images/icon_09.gif" alt="delivery Icon" />
                ) : (
                  ""
                )}
              </span>
            </p>
            <h3>{item?.title}</h3>

            <p>{item?.price} 원</p>
            <div>
              <h5>상세정보</h5>
              <p className="mb-5">{item?.description}</p>
            </div>
            <hr />
            <p className="mt-3 mb-5">
              <DropdownButton title="Size" variant="outline-danger">
                {item?.size?.map((size, index) => (
                  <Dropdown.Item eventKey={size} href={`#/action-${index}`}>
                    {size}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </p>
            <Row>
              <Col md={6} className="text-center mb-3">
                <Button variant="success" className="w-75">
                  구메
                </Button>
              </Col>
              <Col md={6} className="text-center mb-3">
                <Button variant="secondary" className="w-75" onClick={goHome}>
                  취소
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <div className="mt-5">
          <h3>원재료명 및 함량</h3>
          <p>
            탄산수, 고과당 옥수수 시럽, 카라멜 색상, 설탕, 인산, 카페인, 구연산,
            천연 향료
          </p>
          <p className="my-3">영양 성분</p>
          <ul>
            <li>지방 0g / 0%</li>
            <li>나트륨 30mg / 1%</li>
            <li>
              탄수화물 41g / 15%
              <ul>
                <li>설탕 함유량</li>
                <li>첨가당 포함 41g / 83%</li>
              </ul>
            </li>
            <li>단백질 0g / 0%</li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default ProductDetail;
