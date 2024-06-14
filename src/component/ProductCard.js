import React from "react";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ productItem }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/products/${productItem.id}`);
  };

  return (
    <Col
      lg={3}
      md={6}
      xs={12}
      className="d-flex flex-column justify-content-between my-3"
    >
      <div className="w-100 text-center mb-2" onClick={goDetail}>
        <img
          src={productItem.img}
          alt={productItem.description}
          className="w-50 img-fluid"
        />
      </div>
      <div>
        <p className="mb-1">
          <span>
            {productItem.new ? (
              <img src="./images/icon_02.gif" alt="new Icon" />
            ) : (
              " "
            )}
          </span>
          <span>
            {productItem.sale ? (
              <img src="./images/icon_11.gif" alt="sale Icon" />
            ) : (
              ""
            )}
          </span>
          <span>
            {productItem.delivery ? (
              <img src="./images/icon_09.gif" alt="delivery Icon" />
            ) : (
              ""
            )}
          </span>
        </p>
        <p className="fw-bold mb-1">{productItem.title}</p>
        <p className="mb-1">{productItem.price}원</p>
      </div>
    </Col>
  );
};

export default ProductCard;
