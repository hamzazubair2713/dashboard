import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TableList from "views/TableList";
import {
  Badge,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const Modalpop = ({ showModal, setShowModal }) => {
  return (
    <Modal size="lg" show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header className="modal-lg">
        <div className="model-h">Recent Update</div>
      </Modal.Header>
      <Modal.Body className="text-center w-100">
        <Card className="strpied-tabled-with-hover">
          <Card.Body className="table-full-width table-responsive modal-table-hight ">
            <Table className="table-hover table-striped">
              <thead>
                <tr>
                  <th className="border-0">ID</th>
                  <th className="border-0">Name</th>
                  <th className="border-0">Price</th>
                  <th className="border-0">Email</th>
                  <th className="border-0">City</th>
                  <th className="border-0">Phone Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>100</td>
                  <td>BreakOut</td>
                  <td>200 </td>
                  <td>breakout@gmail.com</td>
                  <td>lahore</td>
                  <td>04212345678</td>
                </tr>{" "}
                <tr>
                  <td>100</td>
                  <td>BreakOut</td>
                  <td>200 </td>
                  <td>breakout@gmail.com</td>
                  <td>lahore</td>
                  <td>04212345678</td>
                </tr>{" "}
                <tr>
                  <td>100</td>
                  <td>BreakOut</td>
                  <td>200 </td>
                  <td>breakout@gmail.com</td>
                  <td>lahore</td>
                  <td>04212345678</td>
                </tr>{" "}
                <tr>
                  <td>100</td>
                  <td>BreakOut</td>
                  <td>200 </td>
                  <td>breakout@gmail.com</td>
                  <td>lahore</td>
                  <td>04212345678</td>
                </tr>{" "}
                <tr>
                  <td>100</td>
                  <td>BreakOut</td>
                  <td>200 </td>
                  <td>breakout@gmail.com</td>
                  <td>lahore</td>
                  <td>04212345678</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Modal.Body>
      <div className="modal-footer">
        <Button
          className="btn-simple"
          type="button"
          variant="link"
          onClick={() => setShowModal(false)}
        >
          Back
        </Button>
        <Button
          className="btn-simple"
          type="button"
          variant="link"
          onClick={() => setShowModal(false)}
        >
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default Modalpop;
