import React, { useEffect, useState } from "react";
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
  FormTextarea,
  FormSelect
} from "shards-react";
import { useHistory } from "react-router-dom";
import { api, AuthService, path } from "../../services";
import notify from "../../utils/notify";
import Loading from "react-loader-spinner";

export default function AddSubcategory() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [item, setItem] = useState({});

  const[category,setCategory]=useState({loading:true,error:"",data:[]})
  useEffect(()=>getCategories(),[])

const getCategories=()=>{
  api
  .all(path.categories)
  .then(res =>
    setCategory({ ...category, loading: false, error: "", data: res })
  )
  .catch(err => console.log(err));
}


  async function submit() {
 
const user=await AuthService.getProfile()
    setLoading(true);
    api
      .create({
        ...item,
       userId:user.id
      }, path.addSubcategory)
      .then(res => {
        notify.success("Subcategory added successfull.");
        history.push("/subcategories");
        setLoading(false);
      })
      .catch(e => {
        console.log(e)
        setLoading(false);
        notify.error("Unable to create subcategories right now. Try again.");
      });
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
            <CardHeader>Add New Subcategory</CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col xs="12" md="6">
                    <FormGroup>
                      <label>Title</label>
                      <FormInput
                        placeholder="Enter category title"
                        value={item.title}
                        onChange={e =>
                          setItem({ ...item, title: e.target.value })
                        }
                      />
                    </FormGroup>
                  </Col>
                
                  <Col xs="12" md="6">
                    <FormGroup>
                      <label>Category</label>
                      <FormSelect
                        onChange={e => setItem({...item,categoryId:e.target.value})}
                       >
                        <option value="">Select</option>
                        {category.data &&category.data.map((x,i)=><option value={x.id}> {x.title} </option>)}
                      </FormSelect>
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
