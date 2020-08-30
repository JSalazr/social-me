import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppNavbar from "./navbar";
import PostList from "./postList";
import LeftPanel from "./left-panel";
import "./base.css";

function Base() {
  return (
    <div className="bg">
      <AppNavbar />
      <Container fluid={true}>
        <Row className="content panel-row">
          <Col m={3} xl={3} className="allow-pointers">
            <LeftPanel />
          </Col>
          <Col xs={3} md={6} xl={6} className="center-panel">
          </Col>
          <Col m={3} xl={3}>Right Content</Col>
        </Row>
        <Row className="content content-row">
          <Col m={3} xl={3}>
          </Col>
          <Col xs={3} md={6} xl={6} className="center-panel">
            <PostList />
          </Col>
          <Col m={3} xl={3}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Base;
