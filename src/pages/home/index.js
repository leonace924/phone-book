import React, { useState } from "react";
import { Button } from "react-bootstrap";
import AddContact from "../../components/add-contact";
import EditContact from "../../components/edit-contact";
import ContactList from "../../components/contact-list";

const HomePage = () => {
  const contactData = [
    {
      id: 1,
      firstName: "Tania",
      lastName: "Marina",
      countryCode: "+1",
      phone: "231232",
      selected: false,
    },
    {
      id: 2,
      firstName: "Craig",
      lastName: "Barry",
      countryCode: "+31",
      phone: "8956756",
      selected: false,
    },
    {
      id: 3,
      firstName: "Ben",
      lastName: "Tesla",
      countryCode: "+40",
      phone: "23341232",
      selected: false,
    },
  ];

  const initialFormState = {
    id: null,
    firstName: "",
    lastName: "",
    selected: false,
  };

  const [editing, setEditing] = useState(false);
  const [contacts, setContacts] = useState(contactData);
  const [currentContact, setCurrentContact] = useState(initialFormState);

  // CRUD operations
  const addContact = (contact) => {
    contact.id = contacts.length + 1;
    setContacts([...contacts, contact]);
  };

  const deleteContact = (id) => {
    setEditing(false);

    setContacts([...contacts].filter((contact) => contact.id !== id));
  };

  const updateContact = (id, updatedContact) => {
    setEditing(false);

    setContacts(
      [...contacts].map((contact) =>
        contact.id === id ? updatedContact : contact
      )
    );
  };

  const editRow = (contact) => {
    setEditing(true);

    setCurrentContact({
      id: contact.id,
      firstName: contact.firstName,
      lastName: contact.lastName,
      countryCode: contact.countryCode,
      phone: contact.phone,
      selected: contact.selected,
    });
  };

  const selectAll = (value) => {
    setContacts(
      [...contacts].map((contact) => {
        contact.selected = value;
        return contact;
      })
    );
  };

  const updateSelected = (id, value) => {
    setContacts(
      [...contacts].map((contact) => {
        if (contact.id === id) {
          contact.selected = value;
        }
        return contact;
      })
    );
  };

  const deleteContacts = () => {
    setContacts([...contacts].filter((contact) => !contact.selected));
  };

  return (
    <div className="container mt-5">
      <h1>PhoneBook App</h1>

      <div className="row my-4">
        <div className="col-lg-5 my-3">
          {editing ? (
            <>
              <h3>Edit Contact</h3>
              <EditContact
                editing={editing}
                setEditing={setEditing}
                currentContact={currentContact}
                updateContact={updateContact}
              />
            </>
          ) : (
            <>
              <h3>Add Contact</h3>
              <AddContact addContact={addContact} />
            </>
          )}
        </div>

        <div className="col-lg-7 my-3">
          <div className="mb-3 d-flex align-items-center justify-content-between">
            <h3 className="mb-0">Contact List</h3>

            <Button variant="danger" onClick={deleteContacts}>
              Delete Contact
            </Button>
          </div>

          <ContactList
            contacts={contacts}
            editRow={editRow}
            selectAll={selectAll}
            updateSelected={updateSelected}
            deleteContact={deleteContact}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
