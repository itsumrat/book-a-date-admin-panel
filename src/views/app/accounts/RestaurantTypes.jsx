import React, {Fragment, Suspense} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import RestaurantTypesDefault from "./default";
import Restaurants from "./Restaurants";

const RestaurantTypes = ({match}) => {

    return(
        <Suspense fallback={<div className="loading" />}>
            <Switch>
                {/*<Redirect exact from={`${match.url}/`} to={`${match.url}/default`} />*/}
                <Route
                    exact={true}
                    path={`${match.url}/`}
                    render={props => <RestaurantTypesDefault {...props} />}
                />
                <Route
                    path={`${match.url}/restaurants`}
                    render={props => <Restaurants {...props} />}
                />
                <Route
                  path={`${match.url}/bars`}
                  render={props => <Restaurants {...props} />}
                />
                <Route
                  path={`${match.url}/theaters`}
                  render={props => <Restaurants {...props} />}
                />
                <Route
                  path={`${match.url}/cafes`}
                  render={props => <Restaurants {...props} />}
                />
                <Route
                  path={`${match.url}/clubs`}
                  render={props => <Restaurants {...props} />}
                />
                <Route
                  path={`${match.url}/other-social-venue`}
                  render={props => <Restaurants {...props} />}
                />
                <Redirect to="/error" />
            </Switch>
        </Suspense>
    );
}

export default RestaurantTypes;
