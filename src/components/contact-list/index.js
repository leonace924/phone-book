import React from "react";
import { Button, Form, Table } from "react-bootstrap";

const ContactList = (props) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>
          <Form.Check
            type="checkbox"
            checked={props.contacts.every((contact) => contact.selected)}
            onChange={(e) => props.selectAll(e.target.checked)}
          />
        </th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>PhoneNumber</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {props.contacts.length > 0 ? (
        props.contacts.map((contact) => (
          <tr key={contact.id}>
            <td>
              <Form.Check
                type="checkbox"
                checked={contact.selected}
                onChange={(e) => {
                  props.updateSelected(contact.id, e.target.checked);
                }}
              />
            </td>
            <td>{contact.firstName}</td>
            <td>{contact.lastName}</td>
            <td>{`${contact.countryCode}${contact.phone}`}</td>
            <td>
              <Button
                className="button"
                onClick={() => {
                  props.editRow(contact);
                }}
                variant="primary"
              >
                Edit
              </Button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No contacts</td>
        </tr>
      )}
    </tbody>
  </Table>
);

export default ContactList;
