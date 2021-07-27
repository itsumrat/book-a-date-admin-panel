import React, { Fragment, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ReportRestaurantTypes from './ReportRestaurantTypes';

const ReportsPage = ({ match }) => {
  return (
    <Suspense fallback={<div className="loading" />}>
      <Switch>
        <Redirect
          exact
          from={`${match.url}/`}
          to={`${match.url}/restaurant-types`}
        />
        <Route
          path={`${match.url}/restaurant-types`}
          render={(props) => <ReportRestaurantTypes {...props} />}
        />
        <Redirect to="/error" />
      </Switch>
    </Suspense>
  );
};

export default ReportsPage;
