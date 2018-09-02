import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRoute({ component: Component, authedUser, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (
        authedUser !== null 
          ? <Component {...props} />
          : <Redirect to={{
            pathname: "/",
            state: { from: props.location },
          }}
          />
      )}
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

export default PrivateRoute;