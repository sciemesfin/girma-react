/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Badge,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  CardFooter,
  Button,
  NavLink
} from "shards-react";

import formatter from "../../utils/formatter";
import PageTitle from "../../components/common/PageTitle";
import { api, AuthService, path } from "../../services";
import { NavLink as RouteNavLink } from "react-router-dom";
import notify from "../../utils/notify";

const CategoryList = () => {
  const [item, setItem] = useState({ loading: false, data: [], error: "" });
  const [selectedItems, setSelectedItems] = useState([]);
  const cols = [
    "#",
    "Title",
    "Description",
    'Created by',
    "Created Date",
    "Action"
  ];

  const selectItems = e => {
    const arr = selectedItems;
    if (arr.filter(f => f.id === e.id).length <= 0) {
      setSelectedItems([...arr, ...[e]]);
    } else setSelectedItems(arr.filter(f => f.id !== e.id));
  };

  useEffect(() => getItems(), []);

  const getItems = () => {
    api
      .all(path.categories)
      .then(res =>
        setItem({ ...item, loading: false, error: "", data: res })
      )
      .catch(err => console.log(err));
  };

  const deleteItem = id => {
    api
      .remove(id, path.deleteCategory)
      .then(() => {
        notify.success("Category deleted successfully.");
        getItems();
      })
      .catch(() => notify.error("Unable to delete category"));
  };



  return item.loading ? (
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
    <div style={{ height: "100vh" }}>
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle
            title="Categories"
            subtitle="Girma EBC"
            className="text-xs-left mb-3"
          />
        </Row>
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <Row style={{alignItems:'center',justifyContent:"space-between"}}>
                  <Col xs="12" md="3">
                    <h6 className="m-0 d-none d-md-block h5">
                   Categories
                    </h6>
                  </Col>
                  <Col xs="6" md="4">
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
                  </Col>
                  <Col xs="6" md="2">
                    <NavLink tag={RouteNavLink} to="/category/create">
                      <Button>Add Category</Button>
                    </NavLink>
                  </Col>
                </Row>
              </CardHeader>
              {/* large screen view  */}
              <CardBody className="p-0 pb-3 d-none d-md-block">
                {/* large screen view  */}
                <table className="table mb-0">
                  <thead className="bg-light">
                    <tr>
                      {cols.map((x, i) => (
                        <th key={i} scope="col" className="border-0">
                          {x}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {item.data && item.data.map((x, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td
                          style={{
                            cursor: "pointer",
                            color: "#007bff"
                          }}
                        >
                          {x.title}
                        </td>
                        <td>  {x.description}</td>
                        <td>  {x.user.firstName} {x.user.lastName} </td>
                        <td> {formatter.intToDate(x.createdAt)}</td>
                        <td>
                        <Button
                            onClick={() => deleteItem(x.id)}
                            theme="danger"
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardBody>
              {/* small screen view  */}
              <CardBody className="p-0 pb-3 d-block d-md-none">
                {item.data && item.data.map((x, i) => (
                  <table className="table mb-0">
                    <tr>
                      <td>#</td>
                      <td>{i + 1}</td>
                    </tr>
                    <tr>
                      <td>Title</td>
                      <td>{x.title} </td>
                    </tr>
                    <tr>
                      <td>Description</td>
                      <td>{x.description} </td>
                    </tr>
                    <tr>
                      <td>Created by</td>
                      <td>{x.user.firstName} {x.user.lastName} </td>
                    </tr>
                  
                    <tr>
                      <td>Date</td>
                      <td>{formatter.intToDate(x.createdAt)} </td>
                    </tr>

                    <tr>
                      <td>Action</td>
                      <td>
                        <Button theme="danger" onClick={() => deleteItem(x.id)}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  </table>
                ))}
              </CardBody>
              <CardFooter>
                <div className="d-flex" style={{ justifyContent: "end" }}>
                  <div className="left-nav" style={{ marginRight: 5 }}>
                    <i class="material-icons left">arrow_back_ios</i>
                  </div>
                  <div className="left-nav" style={{ marginLeft: 5 }}>
                    <i class="material-icons left">arrow_forward_ios</i>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryList
