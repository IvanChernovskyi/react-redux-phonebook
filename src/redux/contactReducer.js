import { combineReducers } from 'redux';
import Types from './types';

const initialState = {
  contacts: [
    {
      id: 'id-1',
      first_name: 'Rosie',
      last_name: 'Simpson',
      number: '+38 (012) 459-12-56',
    },
    {
      id: 'id-2',
      first_name: 'Hermione',
      last_name: 'Kline',
      number: '+38 (016) 443-89-12',
    },
    {
      id: 'id-3',
      first_name: 'Eden',
      last_name: 'Clements',
      number: '+38 (032) 645-17-79',
    },
    {
      id: 'id-4',
      first_name: 'Annie',
      last_name: 'Copeland',
      number: '+38 (038) 227-91-26',
    },
  ],
  filter: '',
};

const contactsReducer = (state = initialState.contacts, actions) => {
  switch (actions.type) {
    case Types.ADD_CONTACT:
      console.log(actions.payload);
      return [...state, actions.payload];

    case Types.DELETE_CONTACT:
      const filtered = state.filter((contact) => {
        return contact.id !== actions.payload;
      });
      return filtered;

    case Types.UPDATE_CONTACT:
      return state.map((item) =>
        item.id === actions.payload.id ? (item = actions.payload) : item,
      );

    default:
      return state;
  }
};

const filterReducer = (state = initialState.filter, actions) => {
  switch (actions.type) {
    case Types.FILTER_CONTACT:
      console.log(actions.payload);
      return (state = actions.payload);

    default:
      return state;
  }
};

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
