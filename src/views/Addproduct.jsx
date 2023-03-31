import React, { useEffect, useState } from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function User() {
  const [name, setName] = useState("Mike");
  const [mail, setEmail] = useState("mike@aol.com");
  const [file, setFile] = useState("");
  const [description, setDescription] = useState(
    " Nike is a global brand that has become synonymous with athletic performance and style. "
  );
  const [card, setCard] = useState(false);
  useEffect(() => {});

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Add Product</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Customer Name</label>
                        <Form.Control
                          type="text"
                          placeholder="Ali"
                          onChange={(e) => setName(e.target.value)}
                          required
                        ></Form.Control>
                      </Form.Group>
                    </Col>

                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">Phone #</label>
                        <Form.Control
                          placeholder="0421325697"
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">Product name</label>
                        <Form.Control
                          placeholder="Clothes , Glassware ,General"
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>
                          Created <span className="text-danger">*</span>
                        </label>
                        <Form.Control
                          type="date"
                          onChange={(e) => setName(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <select>
                        <option>Payment Type</option>
                        <option value="1">Cash on Delivery </option>
                        <option value="2">Paid</option>
                      </select>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          placeholder="Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  {/* <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>City</label>
                        <Form.Control
                          placeholder="City"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Phone Number</label>
                        <Form.Control
                          placeholder="Phone Number"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Postal Code</label>
                        <Form.Control
                          placeholder="ZIP Code"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row> */}
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>About Product</label>
                        <Form.Control
                          cols="80"
                          placeholder="Product description"
                          rows="4"
                          as="textarea"
                          onChange={(e) => setDescription(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  {/* <Col className="pl-1" md="4">
                    <Form.Group>
                      <label htmlFor="img"> + Add Image</label>
                      <Form.Control
                        style={{ display: "none" }}
                        id="img"
                        placeholder="ZIP Code"
                        type="file"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={(e) => setFile(e.target.files[0])}
                      ></Form.Control>
                    </Form.Group>
                  </Col> */}
                  {/* <Button
                    className="btn-fill pull-right mr-2"
                    variant="success"
                    onClick={() => setCard(true)}
                  >
                    Preview
                  </Button> */}
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Add Product
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          {card && (
            <Col md="4">
              <Card className="card-user">
                <div className="card-image">
                  <img
                    alt="..."
                    src={require("assets/img/photo-1431578500526-4d9613015464.jpeg")}
                  ></img>
                </div>
                <Card.Body>
                  <div className="author">
                    <a href={name} onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={
                          file
                            ? URL.createObjectURL(file)
                            : require("assets/img/faces/face-3.jpg")
                        }
                      />

                      <h5 className="title">{name}</h5>
                    </a>
                    <p className="description">{mail}</p>
                  </div>
                  <p className="description text-center">{description}</p>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
}

export default User;
