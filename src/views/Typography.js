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

function Typography() {
  const [name, setName] = useState("Mike");
  const [mail, setEmail] = useState("mike@aol.com");
  const [file, setFile] = useState("");

  const [card, setCard] = useState(false);
  useEffect(() => {});

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Add Rider</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                          placeholder="Mike"
                          type="text"
                          onChange={(e) => setName(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          placeholder="Adrew"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Vehical Number</label>
                        <Form.Control
                          placeholder="ABC-1234"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <Form.Control
                          placeholder="Email"
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          placeholder="Shop Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
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
                        <label>Zone</label>
                        <Form.Control
                          placeholder="Delivery Area"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Col className="pl-1" md="4">
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
                  </Col>
                  <Button
                    className="btn-fill pull-right mr-2"
                    variant="success"
                    onClick={() => setCard(true)}
                  >
                    Preview
                  </Button>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Add Profile
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
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>

        {/* <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Light Bootstrap Table Heading</Card.Title>
                <p className="card-category">
                  Created using Montserrat Font Family
                </p>
              </Card.Header>
              <Card.Body>
                <div className="typography-line">
                  <h1>
                    <span>Header 1</span>
                    The Life of Light Bootstrap Dashboard React
                  </h1>
                </div>
                <div className="typography-line">
                  <h2>
                    <span>Header 2</span>
                    The Life of Light Bootstrap Dashboard React
                  </h2>
                </div>
                <div className="typography-line">
                  <h3>
                    <span>Header 3</span>
                    The Life of Light Bootstrap Dashboard React
                  </h3>
                </div>
                <div className="typography-line">
                  <h4>
                    <span>Header 4</span>
                    The Life of Light Bootstrap Dashboard React
                  </h4>
                </div>
                <div className="typography-line">
                  <h5>
                    <span>Header 5</span>
                    The Life of Light Bootstrap Dashboard React
                  </h5>
                </div>
                <div className="typography-line">
                  <h6>
                    <span>Header 6</span>
                    The Life of Light Bootstrap Dashboard React
                  </h6>
                </div>
                <div className="typography-line">
                  <p>
                    <span>Paragraph</span>I will be the leader of a company that
                    ends up being worth billions of dollars, because I got the
                    answers. I understand culture. I am the nucleus. I think
                    that’s a responsibility that I have, to push possibilities,
                    to show people, this is the level that things could be at.
                  </p>
                </div>
                <div className="typography-line">
                  <span>Quote</span>
                  <blockquote>
                    <p className="blockquote blockquote-primary">
                      "I will be the leader of a company that ends up being
                      worth billions of dollars, because I got the answers. I
                      understand culture. I am the nucleus. I think that’s a
                      responsibility that I have, to push possibilities, to show
                      people, this is the level that things could be at."{" "}
                      <br></br>
                      <br></br>
                      <small>- Noaa</small>
                    </p>
                  </blockquote>
                </div>
                <div className="typography-line">
                  <span>Muted Text</span>
                  <p className="text-muted">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Primary Text</span>
                  <p className="text-primary">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Info Text</span>
                  <p className="text-info">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Success Text</span>
                  <p className="text-success">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Warning Text</span>
                  <p className="text-warning">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Danger Text</span>
                  <p className="text-danger">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <h2>
                    <span>Small Tag</span>
                    Header with small subtitle <br></br>
                    <small>Use "small" tag for the headers</small>
                  </h2>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}
      </Container>
    </>
  );
}

export default Typography;
