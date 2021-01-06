import React from 'react';
import ContactListItem from './ContactListItem';
import { connect } from 'react-redux';
import { getFilter, getContact } from '../../selector';
import S from './style.module.scss';

const filterContactsByQuery = (filter = '', contacts) => {
  return contacts.filter((contact) => {
    const res = contact.first_name + contact.last_name;
    return res.toLowerCase().includes(filter.toLowerCase());
  });
};

const ContactsList = React.memo(({ contacts = [], filter }) => {
  const filteredContacts = filterContactsByQuery(filter, contacts);

  return (
    <ul className={S.list}>
      {filteredContacts.map((items) => (
        <ContactListItem {...items} key={items.id} />
      ))}
    </ul>
  );
});

const mapStateToProps = (state) => ({
  contacts: getContact(state),
  filter: getFilter(state),
});

export default connect(mapStateToProps, null)(ContactsList);
