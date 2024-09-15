import React from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from 'sharedComponents/ErrorBoundary/ErrorBoundary';
import PageErrorComponent from 'sharedComponents/PageNotFound/PageNotFoundComponent';
import Login from 'Pages/Login/Login';
import Register from 'Pages/Register/Register';
import Home from 'Pages/Home/Home';
import ProductListing from 'Pages/ProductListing/ProductListing';

import { Route, Switch } from 'react-router-dom';

import './MainPages.scss';

const ROUTES = [
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/login',
    component: Login,
  },

  {
    path: ['/', '/categories'],
    component: Home,
  },

  {
    path: ['/products', '/categories/:categoryId/products'],
    component: ProductListing,
  },
];

const MainPages = (props) => {
  console.log('main');
  return (
    <div className="main_page">
      <ErrorBoundary>
        <Switch>
          {ROUTES.map((item, index) => (
            <Route
              exact
              path={item?.path}
              key={index}
              render={() => {
                console.log('item', item);
                let RenderComponent = item?.component;
                return <RenderComponent {...props} />;
              }}
            />
          ))}
          <Route component={PageErrorComponent} />
        </Switch>
      </ErrorBoundary>
    </div>
  );
};

export default MainPages;
