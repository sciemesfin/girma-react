import React from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  FormInput
} from "shards-react";
import { NavLink as RouteNavLink } from "react-router-dom";

export default function Toolbar({ title, btn, filter }) {
  return (
    <div className="custom-card" style={{ marginBottom: 10 }}>
      <Container fluid className="d-none d-md-block">
        <Row noGutters className="page-header py-4">
          <Col lg="5" md="5" sm="12">
            <h3 className="page-title">{title} </h3>
          </Col>
          <Col lg="3" md="3" sm="12" className="ml-auto">
            <div className="d-flex mx-2">
              <InputGroup seamless>
                <InputGroupAddon type="prepend">
                  <InputGroupText style={{ marginLeft: 10 }}>
                    <i class="material-icons md-18">search</i>
                  </InputGroupText>
                </InputGroupAddon>
                <FormInput
                  style={{ borderRadius: 20, marginLeft: 10 }}
                  placeholder="Search"
                />
              </InputGroup>
            </div>
          </Col>
          {filter ? <Col lg="2"
            md="2"
            sm="12">
            {filter}
          </Col> : null}
          {btn ? (
            <Col
              lg="2"
              md="2"
              sm="12"
              style={{
                textDecoration: "none"
              }}
              tag={RouteNavLink}
              to={btn.to}
            >
              <div
                className="d-flex elev"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#17c671",
                  padding: 7,
                  color: "white",
                  cursor: "pointer",
                  borderRadius: 30,
                  width: 160,
                  margin: "auto"
                }}
              >
                <i class="material-icons md-18">add_circle_outline</i>
                <div style={{ paddingLeft: 10, fontSize: 14 }}>
                  {btn.title}{" "}
                </div>
              </div>
            </Col>
          ) : null}
        </Row>
      </Container>
    </div>
  );
}
