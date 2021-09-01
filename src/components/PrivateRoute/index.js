import { Route, Redirect } from 'react-router-dom';

import usePresenter from './hooks/usePresenter';

function PrivateRoute({ children, ...rest }) {
  const { isContentAvailable } = usePresenter();

  return (
    <Route
      {...rest}
      render={() =>
        isContentAvailable ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/mooglee/login',
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
