import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../redux/contactAction';
import Input from '../../shared/Input';
import Button from '../../shared/Button';
import S from './style.module.scss';

const Form = ({ onAddContact }) => {
  const [contact, setContact] = useState({
    first_name: '',
    last_name: '',
    number: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
    onAddContact(contact);

    setContact({
      first_name: '',
      last_name: '',
      number: '',
    });
  };

  const handleChange = (e) => {
    setContact((value) => ({
      ...value,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <form className={S.form} onSubmit={handleSubmit}>
        <Input
          type="text"
          name="first_name"
          value={contact.first_name}
          labelHeading="First Name"
          placeholder="First Name"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="last_name"
          labelHeading="Last Name"
          placeholder="Last Name"
          value={contact.last_name}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="number"
          mask="+38 (099) 999-99-99"
          value={contact.number}
          placeholder="Number"
          labelHeading="Number"
          onChange={handleChange}
        />
        <Button
          disabled={
            contact.first_name && contact.last_name && contact.number
              ? false
              : true
          }
          type="submit"
        >
          Add contact
        </Button>
      </form>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onAddContact: (contact) => dispatch(addContact(contact)),
});

export default connect(null, mapDispatchToProps)(Form);
