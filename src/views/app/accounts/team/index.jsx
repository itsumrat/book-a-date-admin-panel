import React, { Fragment, Suspense, useState } from 'react';
import {Card, CardBody, CardHeader, Nav, NavItem, Row, TabContent, Table, TabPane} from "reactstrap";
import {Colxx, Separator} from "../../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../../containers/navs/Breadcrumb";
import { Redirect, Route, Switch } from 'react-router-dom';
import TeamChat from './TeamChat';
import TeamDefaultPage from './TeamDefaultPage';
import TeamTodoTask from './TeamTodoTask';
import TeamCustomerSupport from './TeamCustomerSupport';
import TeamMembers from './TeamMembers';

const OutletTeamPage = ({match}) => {

  return(
    <Suspense fallback={<div className="loading" />}>
      <Switch>
        {/*<Redirect exact from={`${match.url}/`} to={`${match.url}/chat`} />*/}
        <Route
          exact={true}
          path={`${match.url}/`}
          render={props => <TeamDefaultPage {...props} />}
        />
        <Route
          exact={true}
          path={`${match.url}/chat`}
          render={props => <TeamChat {...props} />}
        />
        <Route
          exact={true}
          path={`${match.url}/team-members`}
          render={props => <TeamMembers {...props} />}
        />
        <Route
          exact={true}
          path={`${match.url}/to-do-task`}
          render={props => <TeamTodoTask {...props} />}
        />
        <Route
          exact={true}
          path={`${match.url}/customer-support`}
          render={props => <TeamCustomerSupport {...props} />}
        />
        <Redirect to="/error" />
      </Switch>
    </Suspense>
  )
}

export default OutletTeamPage;
