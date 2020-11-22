import React, {Suspense} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import RestaurantTypes from "./RestaurantTypes";

const AccountsPage = ({match}) => {


    return(
        <Suspense fallback={<div className="loading" />}>
            <Switch>
                <Redirect exact from={`${match.url}/`} to={`${match.url}/restaurant-types`} />
                <Route
                    path={`${match.url}/restaurant-types`}
                    render={props => <RestaurantTypes {...props} />}
                />
                <Redirect to="/error" />
            </Switch>
        </Suspense>
    );
}

export default AccountsPage;
