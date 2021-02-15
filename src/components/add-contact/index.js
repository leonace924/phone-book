import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddContactForm = (props) => {
  const initialFormState = {
    id: null,
    firstName: "",
    lastName: "",
    countryCode: "",
    phone: "",
    selected: false,
  };
  const [contact, setContact] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setContact({ ...contact, [name]: value });
  };

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        if (
          !contact.firstName ||
          !contact.lastName ||
          !contact.phone ||
          !contact.countryCode
        )
          return;

        props.addContact(contact);
        setContact(initialFormState);
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
        Add new contact
      </Button>
    </Form>
  );
};

export default AddContactForm;
