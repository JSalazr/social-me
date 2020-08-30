import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppNavbar from "./navbar";
import PostList from "./postList";

function Base() {
  return (
    <div className="bg">
      <AppNavbar />
      <Container className="content">
        <Row>
          <Col size={2}>Left Content</Col>
          <Col xs={3} m={7} xl={7}>
            <PostList />
          </Col>
          <Col>Right Content</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Base;
