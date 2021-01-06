import shortid from 'shortid';
import Types from './types';

export const addContact = (contact) => ({
  type: Types.ADD_CONTACT,
  payload: { id: shortid(), ...contact },
});

export const deleteContact = (id) => ({
  type: Types.DELETE_CONTACT,
  payload: id,
});

export const updateContact = (contact) => ({
  type: Types.UPDATE_CONTACT,
  payload: contact,
});

export const filterContact = (value) => ({
  type: Types.FILTER_CONTACT,
  payload: value,
});
