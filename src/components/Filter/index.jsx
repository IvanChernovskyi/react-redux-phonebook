import React from 'react';
import { connect } from 'react-redux';
import { filterContact } from '../../redux/contactAction';
import { getFilter } from '../../selector';
import Input from '../../shared/Input';

const Filter = ({ value, onChangeFilter }) => (
  <div className="container">
    <Input
      type="text"
      name="Find contact"
      placeholder="Find contacts"
      value={value}
      onChange={(e) => {
        console.log(e.target.value);
        onChangeFilter(e.target.value);
      }}
    />
  </div>
);

const mapStateToProps = (state) => ({
  value: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (value) => dispatch(filterContact(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
