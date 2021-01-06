import React from 'react';
import { connect } from 'react-redux';
import { updateContact } from '../../redux/contactAction';
import Modal from '@material-ui/core/Modal';
import Button from '../../shared/Button';
import Input from '../../shared/Input';
import S from './style.module.scss';

function EditingForm({ first_name, last_name, number, id, onEditContact }) {
  const [open, setOpen] = React.useState(false);

  const [contact, setContact] = React.useState({
    first_name,
    last_name,
    number,
    id,
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
    onEditContact(contact);
    setOpen(false);
  };

  const handleChange = (e) => {
    setContact((value) => ({
      ...value,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Button type="button" onClick={handleOpen}>
        update
      </Button>
      <Modal open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit} className={S.box}>
          <div className={S.box__input}>
            <Input
              name="first_name"
              value={contact.first_name}
              labelHeading="First Name"
              placeholder="First Name"
              onChange={handleChange}
            />
          </div>
          <div className={S.box__input}>
            <Input
              name="last_name"
              value={contact.last_name}
              labelHeading="Last Name"
              placeholder="Last Name"
              onChange={handleChange}
            />
          </div>
          <div className={S.box__input}>
            <Input
              type="text"
              name="number"
              mask="+38 (099) 999-99-99"
              value={contact.number}
              placeholder="Number"
              labelHeading="Number"
              onChange={handleChange}
            />
          </div>
          <Button type="submit">submit</Button>
        </form>
      </Modal>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onEditContact: (contact) => dispatch(updateContact(contact)),
});

export default connect(null, mapDispatchToProps)(EditingForm);
