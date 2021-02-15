import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const EditUserForm = (props) => {
  const [contact, setContact] = useState(props.currentContact);

  useEffect(() => {
    setContact(props.currentContact);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setContact({ ...contact, [name]: value });
  };

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateContact(contact.id, contact);
      }}
    >
      <Form.Group controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          value={contact.firstName}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          value={contact.lastName}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="formCountryCode">
        <Form.Label>Country Code</Form.Label>
        <Form.Control
          type="text"
          name="countryCode"
          value={contact.countryCode}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="formPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          value={contact.phone}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Update contact
      </Button>
      <Button
        onClick={() => props.setEditing(false)}
        className="button ml-2"
        variant="primary"
      >
        Cancel
      </Button>
    </Form>
  );
};

export default EditUserForm;
