import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  NavLink,
  Badge,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  CardFooter,
  Button
} from "shards-react";

import { NavLink as RouteNavLink } from "react-router-dom";
import { api, path } from "../../services";
import formatter from "../../utils/formatter";
import notify from "../../utils/notify";

const UserList = () => {
  const cols = [
    "#",
    "User Name",
    'ID Number',
    "First Name",
    "Last Name",
    "Phone Number",
    "Email",
    "Date",
    "Action"
  ];

  const [item, setItem] = useState({ loading: true, data: [], error: "" });
  useEffect(() => getUsers(), []);

  const getUsers = () => {
    api
      .all(path.users)
      .then(res => {
        // console.log("Data: ", res);
        setItem({ ...item, loading: false, data: res, error: "" });
      })
      .catch(err => setItem({ ...item, loading: false, error: err }));
  };

  const deleteUser = id => {
    // console.log(id);
    api
      .remove(id, "/users")
      .then(res => {
        const data = item.data.filter(f => f.id !== id);
        setItem({ ...item, data: data });
        notify.success("User Deleted successfully.");
      })
      .catch(err => notify.error("Unable to delete user. Try again"));
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
    <div className="my-5" style={{ height: "100vh" }}>
      <Container fluid className="main-content-container px-4">
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <div
                  className="d-flex"
                  style={{
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <h6 className="m-0 d-none d-md-inline">Users</h6>
                  <div className="d-flex mx-2" style={{ minWidth: "40%",}}>
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
                  <div className="d-flex mx-2">
                    <Button onClick={() => {}}>ADD USER</Button>
                  </div>
                </div>
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
                    {item.data.map((x, i) => (
                      <tr key={i}>
                        <td>{i + 1} </td>
                        <td
                          style={{
                            cursor: "pointer",
                            color: "#007bff"
                          }}
                        >
                          <NavLink tag={RouteNavLink} to={`/user/${x.email}`}>
                            {x.username}
                          </NavLink>
                        </td>
                        <td>{x.idNumber} </td>
                        <td>{x.firstName} </td>
                        <td>{x.lastName} </td>
                        <td>{x.phone} </td>
                        <td>{x.email} </td>
                        <td> {formatter.intToDate(x.createdAt)}</td>

                       
                        <td>
                          <Button
                            onClick={() => deleteUser(x.id)}
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
                {item.data.map((x, i) => (
                  <table className="table mb-0">
                    <tr>
                      <td>User Name</td>
                      <td>
                        <a href="/user-profile">{x.username}</a>
                      </td>
                    </tr>
                    <tr>
                      <td>ID Number</td>
                      <td>
                       {x.idNumber}
                      </td>
                    </tr>
                    <tr>
                      <td>First Name</td>
                      <td>
                       {x.firstName}
                      </td>
                    </tr>
                    <tr>
                      <td>Last Name</td>
                      <td>
                       {x.lastName}
                      </td>
                    </tr>
                    <tr>
                      <td>Phone Number</td>
                      <td>
                       {x.phone}
                      </td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>{x.email} </td>
                    </tr>
                    <tr>
                      <td>Date</td>
                      <td>{formatter.intToDate(x.createdAt)} </td>
                    </tr>
                    <tr>
                      <td>Action</td>
                      <td>
                        <Button theme="danger" onClick={() => deleteUser(x.id)}>
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

export default UserList;
