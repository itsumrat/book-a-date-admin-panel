import React, {Fragment, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Card, CardBody, CardHeader, Nav, NavItem, Row, TabContent, Table, TabPane} from "reactstrap";
import {Colxx, Separator} from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import {NavLink} from "react-router-dom";
import classnames from "classnames";
import IntlMessages from "../../../helpers/IntlMessages";
import OutletDataList from "./OutletDataList";
import Badge from "reactstrap/es/Badge";
import Button from 'reactstrap/es/Button';

const data = [
    {count: 100, status: 'Pending'},
    {count: 150, status: 'Confirmed'},
    {count: 100, status: 'Re-schedule'},
    {count: 20, status: 'Rejected'},
    {count: 30, status: 'Re-schedule'},
    {count: 10, status: 'Refund'},
    {count: 25, status: 'Pending'},

];
const OutletDataListPage = ({match, intl}) => {
    const [activeFirstTab, setActiveFirstTab] = useState("1");

    const toggleTab = (tab)=> {
        setActiveFirstTab(tab)
    }
    const history = useHistory();
    // const { messages } = intl;
    return   <Fragment>
        <Row>
            <Colxx xxs="12">
                <Breadcrumb heading="menu.outlets" match={match} />
                <Separator className="mb-5" />
            </Colxx>
            <Colxx xxs={12}>
                <Button onClick={()=>history.goBack()} color="primary" className="float-right">Back</Button>
            </Colxx>
        </Row>
        <Row>
            <Colxx xxs="12">
                <Row>
                    <Colxx lg={12} sm="12" md="12">
                        <OutletDataList match={match}/>
                    </Colxx>
                </Row>
                <br/>
                <br/>
                <Row>
                    <Colxx xxs="12" sm="12" lg="12" md="12">
                        <Card className="mb-4">
                            <CardHeader style={{width: '80vw'}}>
                                <Nav tabs className="card-header-tabs ">
                                    <NavItem
                                      className={classnames({
                                          active: activeFirstTab === "1",
                                          "nav-link": true
                                      })}
                                      onClick={() => { toggleTab("1"); }} to="#" >
                                        <IntlMessages id="pages.daily" />
                                    </NavItem>

                                    <NavItem
                                      className={classnames({
                                          active: activeFirstTab === "2",
                                          "nav-link": true
                                      })}
                                      onClick={() => { toggleTab("2"); }} to="#" >
                                        <IntlMessages id="pages.weekly" />
                                    </NavItem>
                                    <NavItem
                                      className={classnames({
                                          active: activeFirstTab === "3",
                                          "nav-link": true
                                      })}
                                      onClick={() => { toggleTab("3"); }} to="#" >
                                        <IntlMessages id="pages.monthly" />
                                    </NavItem>
                                </Nav>
                            </CardHeader>

                            <TabContent activeTab={activeFirstTab}>
                                <TabPane tabId="1">
                                    <Row>
                                        <Colxx xxs="12" sm="12" lg="12" md="12">
                                            <CardBody style={{width: '80vw'}}>
                                                <Table >
                                                    <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Count</th>
                                                        <th scope="col">Status</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {data.map((item, ind)=><tr key={ind}>
                                                        <th scope="row">{ind+1}</th>
                                                        <td>{item.count}</td>
                                                        <td><Badge color="primary">{item.status}</Badge></td>
                                                    </tr>)}
                                                    </tbody>
                                                </Table>
                                            </CardBody>
                                        </Colxx>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row>
                                        <Colxx xxs="12" sm="12" lg="12" md="12">
                                            <CardBody style={{width: '80vw'}}>
                                                <Table >
                                                    <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Count</th>
                                                        <th scope="col">Status</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {data.slice(3,5).map((item, ind)=><tr key={ind}>
                                                        <th scope="row">{ind+1}</th>
                                                        <td>{item.count}</td>
                                                        <td><Badge color="primary">{item.status}</Badge></td>
                                                    </tr>)}
                                                    </tbody>
                                                </Table>
                                            </CardBody>
                                        </Colxx>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="3">
                                    <Row>
                                        <Colxx xxs="12" sm="12" lg="12" md="12">
                                            <CardBody style={{width: '80vw'}}>
                                                <Table >
                                                    <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Count</th>
                                                        <th scope="col">Status</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {data.slice(0,4).map((item, ind)=><tr key={ind}>
                                                        <th scope="row">{ind+1}</th>
                                                        <td>{item.count}</td>
                                                        <td><Badge color="primary">{item.status}</Badge></td>
                                                    </tr>)}
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
    </Fragment>
}

export default OutletDataListPage
