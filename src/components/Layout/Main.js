import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSidNav from "../Shared/RightSideNav/RightSidNav";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="3">
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg="6">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightSidNav></RightSidNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
