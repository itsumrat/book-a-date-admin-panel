import React, {Fragment, Suspense} from "react";
import {Row} from "reactstrap";
import {Colxx, Separator} from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import RestaurantTypesDefault from "./default";
import RestaurantCard from "./RestaurantCard";
import {Redirect, Route, Switch} from "react-router-dom";
import RestaurantsDefault from "./RestaurantsDefault";
import Outlets from "./outlets";
import OutletPage from "./OutletPage";
import OutletDataList from "./OutletDataList";
import OutletDataListPage from "./OutletDataListPage";
import OutletReportPage from "./outlet/OutletReportPage";
import AccountProductPage from "./products";
import OutletTeamPage from './team';
const restaurants = [
    {
        title: '1'
    },
    {
        title: '2'
    },
    {
        title: '3'
    },
    {
        title: '4'
    }
]
const Restaurants = ({match}) => {

    return(
        <Suspense fallback={<div className="loading" />}>
            <Switch>
                {/*<Redirect exact from={`${match.url}/`} to={`${match.url}/default`} />*/}
                <Route
                    exact={true}
                    path={`${match.url}/`}
                    render={props => <RestaurantsDefault {...props} />}
                />
                <Route
                  exact={true}
                  path={`${match.url}/:shopId/:venueId`}
                  render={props => <OutletPage {...props} />}
                />
                <Route
                    exact={true}
                    path={`${match.url}/:shopId`}
                    render={props => <Outlets {...props} />}
                />
                <Route
                    exact={true}
                    path={`${match.url}/:shopId/:venueId/data-list`}
                    render={props => <OutletDataListPage {...props} />}
                />
                <Route
                    exact={true}
                    path={`${match.url}/:shopId/:venueId/reports`}
                    render={props => <OutletReportPage {...props} />}
                />
                <Route
                    exact={true}
                    path={`${match.url}/:shopId/:venueId/products`}
                    render={props => <AccountProductPage {...props} />}
                />
                <Route
                  // exact={true}
                  path={`${match.url}/:shopId/:venueId/team`}
                  render={props => <OutletTeamPage {...props} />}
                />
                <Redirect to="/error" />
            </Switch>
        </Suspense>
    );
}

export default Restaurants;
