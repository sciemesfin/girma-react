import React from "react";
import { Container, Row, Col } from "shards-react";

export default function ErrorPage() {
  return (
    <div
      style={{
        background: "white"
      }}
    >
      <Container>
        <Row
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
          }}
        >
          <Col xs="12" md="5">
            <div style={{ float: "right" }}>
              <h3
                style={{
                  fontWeight: "bolder",
                  color: "#039f9f"
                }}
              >
                Item-Request
              </h3>
              <p className="p">
                <b>404.</b> That is an Error
              </p>
              <p className="p">
                The requested URL/error was not found on this server.
              </p>
              <p className="p" style={{ color: "grey" }}>
                That's all we know
              </p>
            </div>
          </Col>
          <Col xs="12" md="5">
            <img src={require("../../assets/images/google.png")} alt="logo" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
