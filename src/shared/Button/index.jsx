import React from 'react';
import S from './style.module.scss';

const Button = ({ type, disabled, children, onClick }) => (
  <button
    className={S.button}
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
