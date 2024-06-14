import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import Login from "./page/Login";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log("로그인 상태 확인", authenticate);
  }, [authenticate]);
  return (
    <>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Container>
        <Routes>
          <Route path="/" element={<ProductAll />} />
          <Route
            path="/login"
            element={<Login setAuthenticate={setAuthenticate} />}
          />
          <Route path="/ProductDetail" element={<ProductDetail />} />
          <Route
            path="/products/:id"
            element={<PrivateRoute authenticate={authenticate} />}
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
