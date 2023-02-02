import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  FormTextarea,
  Button,
  FormInput,
  Form,
  ListGroupItem,
  ListGroup,
  CardHeader,
  Card
} from "shards-react";
import { useParams } from "react-router-dom";

import PageTitle from "../../components/common/PageTitle";

import { api, path } from "../../services";

export default function User() {
  let { email } = useParams();

  const [user, setUser] = useState({ loading: true, error: "", data: {} });
  useEffect(() => getUser(), []);
  function getUser() {
    api
      .get(email, path.user)
      .then(res => {
        // console.log(res.data)
        setUser({ loading: false, error: "", data: res.data });
      })
      .catch(err => {
        setUser({ loading: false, error: `${err}` });
        console.log(err);
      });
  }

  return user.loading ? (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 25
      }}
    >
      Loading ...
    </div>
  ) : (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle
          title="User Profile"
          subtitle="Overview"
          md="12"
          className="ml-sm-auto mr-sm-auto"
        />
      </Row>
      <Row>
        {/* <Col lg="4">
          <UserDetails data={user.data} />
        </Col> */}
        <Col lg="12">
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Personal Information</h6>
            </CardHeader>
            <ListGroup flush>
              <ListGroupItem className="p-3">
                <Row>
                  <Col>
                    <Form>
                      <Row form>
                        {/* First Name */}
                        <Col md="6" className="form-group">
                          <label htmlFor="feFirstName">First Name</label>
                          <FormInput
                            id="feFirstName"
                            placeholder="First Name"
                            value={user.data&&user.data.firstName?user.data.firstName:""}
                            onChange={() => {}}
                          />
                        </Col>
                        {/* Last Name */}
                        <Col md="6" className="form-group">
                          <label htmlFor="feLastName">Last Name</label>
                          <FormInput
                            id="feLastName"
                            placeholder="Last Name"
                            value={user.data&&user.data.lastName?user.data.lastName:""}
                            onChange={() => {}}
                          />
                        </Col>
                      </Row>
                      <Row form>
                        {/* Email */}
                        <Col md="6" className="form-group">
                          <label htmlFor="feEmail">Email</label>
                          <FormInput
                            type="email"
                            id="feEmail"
                            placeholder="Email Address"
                            value={user.data&&user.data.email?user.data.email:""}
                            onChange={() => {}}
                            autoComplete="email"
                          />
                        </Col>
                        {/* Password */}
                        <Col md="6" className="form-group">
                          <label htmlFor="fePassword">Password</label>
                          <FormInput
                            type="password"
                            id="fePassword"
                            placeholder="Password"
                            value={user.data&&user.data.password?user.data.password:""}
                            onChange={() => {}}
                            autoComplete="current-password"
                          />
                        </Col>
                      </Row>

                      <Row form>
                        {/* City */}
                        <Col md="6" className="form-group">
                          <label htmlFor="role">Role</label>
                          <FormInput
                            disabled
                            id="frole"
                            placeholder="Role"
                            // value={user.data.userRole}
                            value={user.data&&user.data.userRole?user.data.userRole:""}
                            onChange={() => {}}
                          />
                        </Col>
                       
                      
                      </Row>
                      <Row form>
                        {/* Description */}
                        <Col md="12" className="form-group">
                          <label htmlFor="feDescription">Description</label>
                          <FormTextarea
                            id="feDescription"
                            rows="5"
                            value={user.data.description}
                          />
                        </Col>
                      </Row>
                      <Button
                        theme="success"
                        style={{
                          fontSize: 14,
                          fontWeight: "bolder"
                        }}
                      >
                        Update Account
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
