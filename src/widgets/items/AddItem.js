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
  FormSelect,
  FormTextarea
} from "shards-react";
import { useHistory } from "react-router-dom";
import formValidator from "../../utils/formValidator";
import formatter from "../../utils/formatter";
import { api, path } from "../../services";
import encryption from "../../utils/encryption";
import notify from "../../utils/notify";
import Loading from "react-loader-spinner";

export default function addItem() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [item, setItem] = useState({});
  function submit() {
    setLoading(true);
    // console.log(item)

    api.create(item, path.addItem)
      .then(res => {
        notify.success("item added successfull.")
        history.push("/items")
        setLoading(false)
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
            <CardHeader>Add New Item</CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col xs="12" md="6">
                    <FormGroup>
                      <label>Item Name</label>
                      <FormInput
                        placeholder="Enter your item name"
                        value={item.itemName}
                        onChange={e =>
                          setItem({ ...item, itemName: e.target.value })
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="12" md="6">
                    <FormGroup>
                      <label>Model Name</label>
                      <FormInput
                        placeholder="Enter model name"
                        value={item.modelName}
                        onChange={e =>
                          setItem({ ...item, modelName: e.target.value })
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="12" md="6">
                    <FormGroup>
                      <label>Inventory Code</label>
                      <FormInput
                        placeholder="Enter inventory code"
                        value={item.inventoryCode}
                        onChange={e =>
                          setItem({ ...item, inventoryCode: e.target.value })
                        }
                      />
                    </FormGroup>
                  </Col>

                  <Col xs="12" md="6">
                    <FormGroup>
                      <label>Type</label>
                      <FormInput
                        placeholder="Enter type"
                        value={item.type}
                        onChange={e =>
                          setItem({ ...item, type: e.target.value })
                        }
                      />
                    </FormGroup>
                  </Col>

                  <Col xs="12" md="4">
                    <FormGroup>
                      <label>Quantity</label>
                      <FormInput
                        placeholder="Enter item quantity"
                        type="number"
                        value={item.quantity}
                        onChange={e =>
                          setItem({ ...item, quantity: e.target.value })
                        }
                      />
                    </FormGroup>
                  </Col>

                  <Col xs="12" md="4">
                    <FormGroup>
                      <label>Cost</label>
                      <FormInput
                        placeholder="Enter item cost"
                        type="number"
                        value={item.cost}
                        onChange={e =>
                          setItem({ ...item, cost: e.target.value })
                        }
                      />
                    </FormGroup>
                  </Col>

                  <Col xs="12" md="4">
                    <FormGroup>
                      <label>Status</label>
                      <FormInput
                        placeholder="Enter status"
                        value={item.status}
                        onChange={e =>
                          setItem({ ...item, status: e.target.value })
                        }
                      />
                    </FormGroup>
                  </Col>

                  <Col xs="12">
                  <label htmlFor="feDescription">Description</label>
                          <FormTextarea
                            id="feDescription"
                            rows="5"
                            value={item.discussion}
                            onChange={e =>
                                setItem({ ...item, description: e.target.value })
                              }
                          />
                  </Col>




                  <Col xs="12">
                    <div style={{ marginTop: 15 }}>
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
                          theme="success"
                          style={{ fontSize: 14, fontWeight: "bolder" }}
                          onClick={submit}
                        >
                          Submit
                        </Button>
                      )}
                    </div>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
