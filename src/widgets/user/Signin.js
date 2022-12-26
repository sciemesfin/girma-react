import React, { useState } from "react";
import {
  Card,
  CardHeader,
  Form,
  FormInput,
  FormGroup,
  CardBody,
  CardFooter,
  Button,
  Container,
  Row,
  Col
} from "shards-react";
import { useHistory } from "react-router-dom";
import notify from "../../utils/notify";
import { AuthService } from "../../services";
import Loading from "react-loader-spinner";

export default function Signin() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [user, setUser] = useState({ email: "", password: "" });
  function submit() {
    setLoading(true);
    AuthService.login(user)
      .then(() => {
        setLoading(false);
        history.push("/app");
        notify.success("Successfully Signed In");
      })
      .catch(e => {
        setLoading(false);
        notify.error("Error");
      });
  }
  return (
    <Container>
      <Row
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "83vh"
        }}
      >
        <Col xs="12" md="5">
          <Card style={{ maxWidth: "100%" }}>
            <CardHeader style={{fontSize:18}}>Sign in to your account</CardHeader>
            <CardBody>
              <div>
                <Form>
                  <FormGroup>
                    <label>Email</label>
                    <FormInput
                      placeholder="Email"
                      onChange={e =>
                        setUser({ ...user, email: e.target.value })
                      }
                      value={user.email}
                    />
                  </FormGroup>
                  <FormGroup>
                    <label>Password</label>
                    <FormInput
                      type="password"
                      placeholder="Password"
                      onChange={e =>
                        setUser({ ...user, password: e.target.value })
                      }
                      value={user.password}
                    />
                  </FormGroup>
                </Form>
              </div>
              {loading ? (
                <div style={{ textAlign: "center" }}>
                  <Loading
                    type="ThreeDots"
                    color="#17c671"
                    height={50}
                    width={50}
                  />
                </div>
              ) : (
                <Button
                  block
                  theme="success"
                  onClick={submit}
                  style={{ fontSize: 14, fontWeight: "600" }}
                >
                  Login
                </Button>
              )}
            </CardBody>
            <CardFooter>
              <div
                style={{
                  textAlign: "center",
                  color: "#1e7e34",
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: "600"
                }}
              ></div>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
