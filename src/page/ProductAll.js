import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productItems, setProductItems] = useState([]);
  const [query, useQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    let url = `https://my-json-server.typicode.com/Hizef/shoppingReact/products?q=${encodeURIComponent(
      searchQuery
    )}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductItems(data);
    console.log(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <>
      <Container>
        <Row>
          {productItems.map((item) => (
            <ProductCard key={item.id} productItem={item} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductAll;
