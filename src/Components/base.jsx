import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppNavbar from "./navbar";
import PostList from "./postList";
import LeftPanel from "./left-panel";
import "./base.scss";

function Base() {
  return (
    <div className="bg">
      <AppNavbar />
      <Container fluid={true}>
        <Row className="content">
          <Col md={3} xl={3} className="panel-menu">
            <LeftPanel />
          </Col>
          <Row className="content-row" noGutters>
            <Col md={{ span: 6, offset: 3 }} xl={{ span: 6, offset: 3 }} className="center-panel">
              <PostList />
            </Col>
          </Row>
          <Col md={{ span: 3, offset: 9 }} xl={{ span: 3, offset: 9 }} className="panel-menu right">
            <LeftPanel />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Base;
