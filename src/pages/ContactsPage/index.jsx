import React from 'react';
import { connect } from 'react-redux';
import { getContact } from '../../selector';
import ContactList from '../../components/ContactList';
import Form from '../../components/Form';
import Filter from '../../components/Filter';

const ContactsPage = () => {
  return (
    <>
      <h2>Contacts Page</h2>
      <Form />
      <Filter />
      <ContactList />
    </>
  );
};

const mapStateToProps = (state) => ({
  contacts: getContact(state),
});

export default connect(mapStateToProps, null)(ContactsPage);
