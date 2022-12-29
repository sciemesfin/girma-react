import React, { useState } from "react";
import {
  Card,
  CardHeader,
  Form,
  FormInput,
  FormGroup,
  CardBody,
  Button,
  Container,
  Row,
  Col,
  FormSelect
} from "shards-react";
import { useHistory } from "react-router-dom";
import { api, path } from "../../services";
import encryption from "../../utils/encryption";
import notify from "../../utils/notify";
import Loading from "react-loader-spinner";

export default function Signup() {
  const [loading, setLoading] = useState(false)
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",  firstName: "", lastName: "", phone: "",gender: "",
    password: "",address:"",idNumber:"",username:""
  })

  const [isValid, setValid] = useState({
    bankEmail: true, state: true, city: true,
    firstName: true, lastName: true, phoneNumber: true, personalEmail: true,
    category: true, password: true, cPassword: true
  })
 

  function submit() {
    console.log(user)
    setLoading(true)
    api.create(user, path.signup)
      .then(res => {
      
        setLoading(false)
        history.push("/users");
        notify.success("User Added Successfully")
      })
      .catch(e => {
        setLoading(false)
        notify.error("Error")
      })
  }

  return (
    <Container>
      <Row
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <Col xs="12" md="9">
          <Card style={{ maxWidth: "100%" }}>
            <CardHeader>Account Creation</CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col xs="12" md="6">
                    <FormGroup>
                      <label>First Name</label>
                      <FormInput placeholder="Enter your name"
                        onChange={e => setUser({...user,firstName:e.target.value})}
                        value={user.firstName}
                       
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="12" md="6">
                    <FormGroup>
                      <label>Last Name</label>
                      <FormInput placeholder="Enter your last name"
                        onChange={e => setUser({...user,lastName:e.target.value})}
                        value={user.lastName}
                        
                      />
                    </FormGroup>
                  </Col>
                 
                  <Col xs="12" md="6">
                    <FormGroup>
                      <label>ID Number</label>
                      <FormInput placeholder="Enter your ID number"
                        onChange={e => setUser({...user,idNumber:e.target.value})}
                        value={user.idNumber}
                      />
                    </FormGroup>
                  </Col>

                  <Col xs="12" md="6">
                    <FormGroup>
                      <label>User Name</label>
                      <FormInput placeholder="Enter your username"
                        onChange={e => setUser({...user,username:e.target.value})}
                        value={user.username}
                      />
                    </FormGroup>
                  </Col>
                 

                  <Col xs="12" md="6">
                    <FormGroup>
                      <label>Phone Number</label>
                      <FormInput placeholder="Enter your phone number"
                        onChange={e => setUser({...user,phone:e.target.value})}
                        value={user.phone}
                      />
                    </FormGroup>
                  </Col>

                  <Col xs="12" md="6">
                    <FormGroup>
                      <label>Email</label>
                      <FormInput placeholder="Enter your email"
                       onChange={e => setUser({...user,email:e.target.value})}
                        value={user.email} />
                    </FormGroup>
                  </Col>

                  <Col xs="12" md="6">
                    <FormGroup>
                      <label>Gender</label>
                      <FormSelect
                        onChange={e => setUser({...user,gender:e.target.value})}
                       >
                        <option value="">Select</option>
                        <option value="Banker">Male</option>
                        <option value="Broker">Female</option>
                      </FormSelect>
                    </FormGroup>
                  </Col>


                  <Col xs="12" md="6">
                    <FormGroup>
                      <label>Password</label>
                      <FormInput placeholder="Enter a password"
                        type="password"
                        onChange={e => setUser({...user,password:e.target.value})}
                        value={user.password} />
                    </FormGroup>
                  </Col>


                  <Col xs="12">
                    <div style={{ textAlign: "center", marginTop: 10 }}>
                      By clicking Request Account, you agree to our
                      <span style={{ color: "#007bff" }}> Terms of Use </span>
                      and
                      <span style={{ color: "#007bff" }}>
                        {" "}
                        Privacy policies
                      </span>
                      .
                    </div>

                    <div style={{ textAlign: "center", marginTop: 15 }}>
                      {
                        loading ? <div style={{ textAlign: "center" }}>
                          <Loading type="ThreeDots" color="#17c671" height={50} width={50} />
                        </div>
                          : <Button
                            theme="success"
                            style={{ fontSize: 14, fontWeight: "bolder" }}
                            onClick={submit}
                          >
                        Create your Account
                          </Button>}
                    </div>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container >
  );
}
