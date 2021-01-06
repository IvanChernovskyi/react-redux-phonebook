import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const NotFoundPage = () => (
  <>
    <h1 style={{ textAlign: 'center' }}>
      Sorry, page not found
      <span role="img" aria-label="emoji">
        🤔
      </span>
      <NavLink to={routes.HOME}>Back to Home Page</NavLink>
    </h1>
  </>
);

export default NotFoundPage;
