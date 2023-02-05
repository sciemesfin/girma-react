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

import PageTitle from "../../components/common/PageTitle";

import { api, AuthService, path } from "../../services";

export default function UserProfile() {
  const [user, setUser] = useState({ loading: true, error: "", data: {} });

useEffect(()=>getUser(),[] )

 const getUser=()=>{
  const user=AuthService.getProfile()

  api
  .get(user.id,path.profile)
  .then(res => {
    // console.log(res)
    setUser({ loading: false, error: "", data: res });
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
                            value={user.data.firstName}
                            onChange={() => {}}
                          />
                        </Col>
                        {/* Last Name */}
                        <Col md="6" className="form-group">
                          <label htmlFor="feLastName">Last Name</label>
                          <FormInput
                            id="feLastName"
                            placeholder="Last Name"
                            value={user.data.lastName}
                            onChange={() => {}}
                          />
                        </Col>
                        <Col md="6" className="form-group">
                          <label >Phone Number</label>
                          <FormInput
                            value={user.data.phone}
                            onChange={() => {}}
                          />
                        </Col>

                        <Col md="6" className="form-group">
                          <label>Email</label>
                          <FormInput
                            value={user.data.email}
                            onChange={() => {}}
                          />
                        </Col>

                        <Col md="6" className="form-group">
                          <label>Gender</label>
                          <FormInput
                            value={user.data.gender}
                            onChange={() => {}}
                          />
                        </Col>

                        <Col md="6" className="form-group">
                          <label>User Name</label>
                          <FormInput
                            value={user.data.username}
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
                            value={user.data.discussion}
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
