import React, { Fragment, useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardHeader,
  Nav,
  NavItem,
  Row,
  TabContent,
  Table,
  TabPane,
} from 'reactstrap';

import classnames from 'classnames';
import Badge from 'reactstrap/es/Badge';
import Button from 'reactstrap/es/Button';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import IntlMessages from '../../../helpers/IntlMessages';
import OutletDataList from './OutletDataList';
import SalesChartCard from '../../../containers/dashboards/SalesChartCard';
import WebsiteVisitsChartCard from '../../../containers/dashboards/WebsiteVisitsChartCard';
import WeeklyVanueReservations from '../../../containers/dashboards/WeeklyVanueReservations';
import YearVanueReservations from '../../../containers/dashboards/YearVanueReservations';

const data = [
  { day: 'Sunday', count: 100, status: 'Pending' },
  { day: 'Monday', count: 150, status: 'Confirmed' },
  { day: 'Tuesday', count: 100, status: 'Re-schedule' },
  { day: 'Wednesday', count: 20, status: 'Rejected' },
  { day: 'Thursday', count: 30, status: 'Re-schedule' },
  { day: 'Friday', count: 10, status: 'Refund' },
  { day: 'Saturday', count: 25, status: 'Pending' },
];

const monthlyData = [
    { month: 'January', count: 100, status: 'Pending' },
    { month: 'February', count: 150, status: 'Confirmed' },
    { month: 'March', count: 100, status: 'Re-schedule' },
    { month: 'April', count: 20, status: 'Rejected' },
    { month: 'May', count: 30, status: 'Re-schedule' },
    { month: 'June', count: 10, status: 'Refund' },
    { month: 'July', count: 25, status: 'Pending' },
    { month: 'August', count: 100, status: 'Pending' },
    { month: 'September', count: 150, status: 'Confirmed' },
    { month: 'Obtober', count: 100, status: 'Re-schedule' },
    { month: 'November', count: 20, status: 'Rejected' },
    { month: 'December', count: 30, status: 'Re-schedule' },
  ];
const OutletDataListPage = ({ match, intl }) => {
  const [activeFirstTab, setActiveFirstTab] = useState('1');

  const toggleTab = (tab) => {
    setActiveFirstTab(tab);
  };
  const history = useHistory();
  // const { messages } = intl;
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.outlets" match={match} />
          <Separator className="mb-5" />
        </Colxx>
        <Colxx xxs={12}>
          <Button
            onClick={() => history.goBack()}
            color="primary"
            className="float-right"
          >
            Back
          </Button>
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <Row>
            <Colxx lg={12} sm="12" md="12">
              <OutletDataList match={match} />
            </Colxx>
          </Row>
          <br />
          <br />
          <Row>
            <Colxx xxs="12" sm="12" lg="12" md="12">
              <Card className="mb-4">
                <CardHeader style={{ width: '80vw' }}>
                  <Nav tabs className="card-header-tabs ">
                    <NavItem
                      className={classnames({
                        active: activeFirstTab === '1',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        toggleTab('1');
                      }}
                      to="#"
                    >
                      <IntlMessages id="pages.daily" />
                    </NavItem>

                    <NavItem
                      className={classnames({
                        active: activeFirstTab === '2',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        toggleTab('2');
                      }}
                      to="#"
                    >
                      <IntlMessages id="pages.weekly" />
                    </NavItem>
                    <NavItem
                      className={classnames({
                        active: activeFirstTab === '3',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        toggleTab('3');
                      }}
                      to="#"
                    >
                      <IntlMessages id="pages.monthly" />
                    </NavItem>
                  </Nav>
                </CardHeader>

                <TabContent activeTab={activeFirstTab}>
                  <TabPane tabId="1">
                    <Row>
                      <Colxx xxs="12" sm="12" lg="12" md="12">
                        <CardBody style={{ width: '80vw' }}>
                          <Table>
                            <thead>
                              <tr>
                                <th scope="col">Day</th>
                                <th scope="col">Count</th>
                                <th scope="col">Value</th>
                              </tr>
                            </thead>
                            <tbody>
                              {data.map((item, ind) => (
                                <tr key={ind}>
                                  <th scope="row">{item.day}</th>
                                  <td>{item.count}</td>
                                  <td>
                                    <Badge color="primary">{item.status}</Badge>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </CardBody>
                      </Colxx>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Colxx xxs="12" sm="12" lg="12" md="12">
                        <CardBody style={{ width: '80vw' }}>
                          <Table>
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Count</th>
                                <th scope="col">Value</th>
                              </tr>
                            </thead>
                            <tbody>
                              {data
                                .reverse()
                                .slice(1, 5)
                                .map((item, ind) => (
                                  <tr key={ind}>
                                    <th scope="row">{ind + 1}</th>
                                    <td>{item.count}</td>
                                    <td>
                                      <Badge color="primary">
                                        {item.status}
                                      </Badge>
                                    </td>
                                  </tr>
                                ))}
                            </tbody>
                          </Table>
                        </CardBody>
                      </Colxx>
                    </Row>
                  </TabPane>
                  <TabPane tabId="3">
                    <Row>
                      <Colxx xxs="12" sm="12" lg="12" md="12">
                        <CardBody style={{ width: '80vw' }}>
                          <Table>
                            <thead>
                              <tr>
                                <th scope="col">Month</th>
                                <th scope="col">Count</th>
                                <th scope="col">Value</th>
                              </tr>
                            </thead>
                            <tbody>
                              {monthlyData.map((item, ind) => (
                                <tr key={ind}>
                                  <th scope="row">{item.month}</th>
                                  <td>{item.count}</td>
                                  <td>
                                    <Badge color="primary">{item.status}</Badge>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </CardBody>
                      </Colxx>
                    </Row>
                  </TabPane>
                </TabContent>
              </Card>
            </Colxx>
          </Row>
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" sm="12" lg="12" md="12" className="mb-3">
          <h1>Venue Analysis</h1>
        </Colxx>
        <Colxx xxs="12" sm="12" lg="6" md="6" className="mb-3">
          <WeeklyVanueReservations />
        </Colxx>
        <Colxx xxs="12" sm="12" lg="6" md="6">
          <YearVanueReservations />
        </Colxx>
      </Row>
    </>
  );
};

export default OutletDataListPage;
