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
import formValidator from "../../utils/formValidator";
import formatter from "../../utils/formatter";
import { api, path } from "../../services";
import encryption from "../../utils/encryption";
import notify from "../../utils/notify";
import Loading from "react-loader-spinner";

export default function Signup() {
  const [loading, setLoading] = useState(false)
  const history = useHistory();
  const [user, setUser] = useState({
    bankEmail: "", state: "", city: "", firstName: "", lastName: "", phoneNumber: "", personalEmail: "",
    category: "", password: ""
  })

  const [isValid, setValid] = useState({
    bankEmail: true, state: true, city: true,
    firstName: true, lastName: true, phoneNumber: true, personalEmail: true,
    category: true, password: true, cPassword: true
  })
  const getFormValue = (value, type) => {

    if (type === "bankEmail") {
      setUser({ ...user, bankEmail: value })
      setValid({ ...isValid, bankEmail: formValidator.validateEmail(value) ? true : false })
    }
    if (type === "state") {
      setUser({ ...user, state: value })
      setValid({ ...isValid, state: value !== "" ? true : false })
    }
    if (type === "city") {
      setUser({ ...user, city: value })
      setValid({ ...isValid, city: value !== "" ? true : false })
    }
    if (type === "category") {
      setUser({ ...user, category: value })
      setValid({ ...isValid, category: value !== "" ? true : false })
    }
    if (type === "firstName") {
      setUser({ ...user, firstName: value })
      setValid({ ...isValid, firstName: formValidator.validateName(value) ? true : false })
    }
    if (type === "lastName") {
      setUser({ ...user, lastName: value })
      setValid({ ...isValid, lastName: formValidator.validateName(value) ? true : false })
    }
    if (type === "personalEmail") {
      setUser({ ...user, personalEmail: value })
      setValid({ ...isValid, personalEmail: formValidator.validateEmail(value) ? true : false })
    }
    if (type === "phoneNumber") {
      setUser({ ...user, phoneNumber: value })
      setValid({ ...isValid, phoneNumber: formValidator.validatePhoneNumber(value) ? true : false })
    }
    if (type === "password") {
      setUser({ ...user, password: value })
      setValid({ ...isValid, password: formValidator.validatePassword(value) ? true : false })
    }
    if (type === "cPassword") {
      setValid({ ...isValid, cPassword: user.password === value ? true : false })
    }
  }

  function submit() {
    setLoading(true)
    api.create(user, path.signup)
      .then(res => {
        localStorage.setItem("token", encryption.encrypt(res.token));
        localStorage.setItem("profile", encryption.encrypt(res));
        setLoading(false)
        history.push("/app");
        notify.success("Successfully Signed In")
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
                      <label>Bank Email Address</label>
                      <FormInput placeholder="Enter your bank email address"
                        onChange={e => getFormValue(e.target.value, "bankEmail")}
                        value={user.bankEmail}
                        style={{
                          border: isValid.bankEmail ? null : "1px solid red",
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="12" md="6">
                    <FormGroup>
                      <label>State</label>
                      <FormSelect
                        onChange={e => getFormValue(e.target.value, "state")}
                        style={{
                          border: isValid.state ? null : "1px solid red",
                        }}
                      >
                      <option>asdf dsfg</option>
                      </FormSelect>
                    </FormGroup>
                  </Col>
                  <Col xs="12" md="6">
                    <FormGroup>
                      <label>City</label>
                      <FormInput placeholder="Enter your city name"
                        onChange={e => getFormValue(e.target.value, "city")}
                        value={user.city}
                        style={{
                          border: isValid.city ? null : "1px solid red",
                        }}
                      />
                    </FormGroup>
                  </Col>

                  <Col xs="12" md="6">
                    <FormGroup>
                      <label>User Type</label>
                      <FormSelect
                        onChange={e => getFormValue(e.target.value, "category")}
                        style={{
                          border: isValid.category ? null : "1px solid red",
                        }}
                      >
                        <option value="">Select</option>
                        <option value="Banker">Banker</option>
                        <option value="Broker">Broker</option>
                        <option value="Franchiser">Franchiser</option>
                      </FormSelect>
                    </FormGroup>
                  </Col>
                  <Col xs="12" md="6">
                    <FormGroup>
                      <label>First Name</label>
                      <FormInput placeholder="Enter your first name"
                        onChange={e => getFormValue(e.target.value, "firstName")}
                        value={user.firstName}
                        style={{
                          border: isValid.firstName ? null : "1px solid red",
                        }}
                      />
                    </FormGroup>
                  </Col>

                  <Col xs="12" md="6">
                    <FormGroup>
                      <label>Last Name</label>
                      <FormInput placeholder="Enter your last name"
                        onChange={e => getFormValue(e.target.value, "lastName")}
                        style={{
                          border: isValid.lastName ? null : "1px solid red",
                        }}
                        value={user.lastName}
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="12" md="6">
                    <FormGroup>
                      <label>Phone Number</label>
                      <FormInput placeholder="Enter your phone number"
                        onChange={e => getFormValue(e.target.value, "phoneNumber")}
                        style={{
                          border: isValid.phoneNumber ? null : "1px solid red",
                        }}
                        value={formatter.phone(user.phoneNumber)}
                      />
                    </FormGroup>
                  </Col>

                  <Col xs="12" md="6">
                    <FormGroup>
                      <label>Email</label>
                      <FormInput placeholder="Enter your email"
                        onChange={e => getFormValue(e.target.value, "personalEmail")}
                        style={{
                          border: isValid.personalEmail ? null : "1px solid red",
                        }}
                        value={user.personalEmail} />
                    </FormGroup>
                  </Col>
                  <Col xs="12" md="6">
                    <FormGroup>
                      <label>Password</label>
                      <FormInput placeholder="Enter a password"
                        type="password"
                        onChange={e => getFormValue(e.target.value, "password")}
                        style={{
                          border: isValid.password ? null : "1px solid red",
                        }}
                        value={user.password} />
                    </FormGroup>
                  </Col>

                  <Col xs="12" md="6">
                    <FormGroup>
                      <label>Confirm Password</label>
                      <FormInput placeholder="Re-enter your password"
                        type="password"
                        onChange={e => getFormValue(e.target.value, "cPassword")}
                        style={{
                          border: isValid.cPassword ? null : "1px solid red",
                        }}
                      />
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
                            Request Account
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
