import React from "react";
import Form from "react-bootstrap/Form";

const CityDropDown = () => {
  return (
    <Form.Group controlId="formGridState">
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>
  );
};

export default CityDropDown;
