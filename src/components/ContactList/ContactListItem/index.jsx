import React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../../../redux/contactAction';
import EditingFormModal from '../../EditingFormModal';
import Button from '../../../shared/Button';
import S from './style.module.scss';

const ContactListItem = ({
  first_name,
  last_name,
  number,
  id,
  deleteContact,
}) => {
  const deleteItem = () => deleteContact(id);
  return (
    <li className={S.list__item}>
      <p className={S.item__text}>
        {first_name} - {last_name}: {number}
      </p>

      <div className={S.item__btn__groupe}>
        <EditingFormModal
          first_name={first_name}
          last_name={last_name}
          number={number}
          id={id}
        />
        <Button type="button" onClick={deleteItem}>
          Delete
        </Button>
      </div>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactListItem);
