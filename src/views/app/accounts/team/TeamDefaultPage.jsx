import React, {Fragment, useState} from "react";
import {Card, CardBody, CardHeader, Nav, NavItem, Row, TabContent, Table, TabPane} from "reactstrap";
import {Colxx, Separator} from "../../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../../containers/navs/Breadcrumb";
import { NavLink, useHistory } from 'react-router-dom';
import Button from 'reactstrap/es/Button';

const TeamDefaultPage = ({match}) => {
  const history = useHistory();
  return(
    <Fragment>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.team" match={match} />
          <Separator className="mb-5" />
        </Colxx>
        <Colxx xxs={12} className="mb-5">
          <Button onClick={()=>history.goBack()} color="primary" className="float-right">Back</Button>
        </Colxx>
      </Row>
      <Row >
        <Colxx className="d-inline-flex justify-content-between">
          <NavLink to={`${match.url}/chat`}>
           <Card>
             <CardBody>
               Chat
             </CardBody>
           </Card>
          </NavLink>
          <NavLink to={`${match.url}/team-members`}>
            <Card>
              <CardBody>
                Team Members
              </CardBody>
            </Card>

          </NavLink>
          <NavLink to={`${match.url}/to-do-task`}>
            <Card>
              <CardBody>
                To do task
              </CardBody>
            </Card>

          </NavLink>
          <NavLink to={`${match.url}/customer-support`}>
            <Card>
              <CardBody>
                Customer support
              </CardBody>
            </Card>

          </NavLink>
        </Colxx>
      </Row>
    </Fragment>
  )
}

export default TeamDefaultPage;
