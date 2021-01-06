import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../routes';
import Header from './Header';
import Loader from './Loader';
import './App.scss';

const AsyncHomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "HomePage" */),
);

const AsyncAboutPage = lazy(() =>
  import('../pages/AboutPage' /* webpackChunkName: "AboutPage" */),
);

const AsyncContactsPage = lazy(() =>
  import('../pages/ContactsPage' /* webpackChunkName: "ContactsPage" */),
);

const AsyncNotFoundPage = lazy(() =>
  import('../pages/NotFoundPage' /* webpackChunkName: "NotFoundPage" */),
);

const App = () => {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={routes.HOME} component={AsyncHomePage} />
          <Route path={routes.ABOUT} component={AsyncAboutPage} />
          <Route path={routes.CONTACTS} component={AsyncContactsPage} />
          <Route component={AsyncNotFoundPage} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
