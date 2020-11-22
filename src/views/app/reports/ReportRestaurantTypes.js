import React, {Fragment, Suspense} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import ReportRestaurantTypesDefault from './ReportRestaurantTypesDefault';
import RestaurantReport from './RestaurantReports';

const ReportRestaurantTypes = ({match}) => {

  return(
    <Suspense fallback={<div className="loading" />}>
      <Switch>
        {/*<Redirect exact from={`${match.url}/`} to={`${match.url}/default`} />*/}
        <Route
          exact={true}
          path={`${match.url}/`}
          render={props => <ReportRestaurantTypesDefault {...props} />}
        />
        <Route
          path={`${match.url}/restaurants`}
          render={props => <RestaurantReport {...props} />}
        />
        <Route
          path={`${match.url}/bars`}
          render={props => <RestaurantReport {...props} />}
        />
        <Route
          path={`${match.url}/theaters`}
          render={props => <RestaurantReport {...props} />}
        />
        <Route
          path={`${match.url}/cafes`}
          render={props => <RestaurantReport {...props} />}
        />
        <Route
          path={`${match.url}/clubs`}
          render={props => <RestaurantReport {...props} />}
        />
        <Route
          path={`${match.url}/other-social-venue`}
          render={props => <RestaurantReport {...props} />}
        />
        <Redirect to="/error" />
      </Switch>
    </Suspense>
  );
}

export default ReportRestaurantTypes;
