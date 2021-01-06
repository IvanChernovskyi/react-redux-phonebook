import React from 'react';
import InputMask from 'react-input-mask';
import S from './style.module.scss';

const Input = ({
  type,
  labelHeading,
  onChange,
  isRequired,
  name,
  value,
  placeholder,
  mask,
}) => {
  return (
    <label className={S.label}>
      {labelHeading}
      <InputMask
        className={S.input}
        mask={mask}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={isRequired}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
