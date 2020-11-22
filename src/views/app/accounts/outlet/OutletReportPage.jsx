import React, {Fragment, useState} from "react";
import {Card, CardBody, CardHeader, Nav, NavItem, Row, TabContent, Table, TabPane} from "reactstrap";
import {Colxx, Separator} from "../../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../../containers/navs/Breadcrumb";
import {NavLink, useHistory} from "react-router-dom";
import classnames from "classnames";
import IntlMessages from "../../../../helpers/IntlMessages";
import Badge from "reactstrap/es/Badge";
import SalesChartCard from "../../../../containers/dashboards/SalesChartCard";
import WebsiteVisitsChartCard from "../../../../containers/dashboards/WebsiteVisitsChartCard";
import DataAnalysisReport from './DataAnalysisReport';
import ReportOutlets from './ReportOutlets';
import ProductCategory from './ProductCategory';
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
const OutletReportPage = ({match}) => {
    const [activeFirstTab, setActiveFirstTab] = useState("1");

    const toggleTab = (tab)=> {
        setActiveFirstTab(tab)
    }
    const history = useHistory();
    return(
        <Fragment>
            <Row>
                <Colxx xxs="12">
                    <Breadcrumb heading="menu.reports" match={match} />
                    <Separator className="mb-5" />
                </Colxx>
                <Colxx xxs={12} className="mb-5">
                    <Button onClick={()=>history.goBack()} color="primary" className="float-right">Back</Button>
                </Colxx>
            </Row>
            <Row>
                <Colxx xxs="12" sm="12" lg="12" md="12">
                    <Card className="mb-4">
                        <CardHeader>
                            <Nav justified tabs className="card-header-tabs ">
                                <NavItem style={{boxShadow: "0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04)"}}>
                                    <NavLink
                                        className={classnames({
                                            active: activeFirstTab === "1",
                                            "nav-link": true,
                                        })}
                                        onClick={() => { toggleTab("1"); }} to="#" >
                                        <IntlMessages id="pages.daily" />
                                    </NavLink>
                                </NavItem>
                                <NavItem style={{boxShadow: "0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04)"}}  >
                                    <NavLink
                                        className={classnames({
                                            active: activeFirstTab === "2",
                                            "nav-link": true
                                        })}
                                        onClick={() => { toggleTab("2"); }} to="#" >
                                        <IntlMessages id="pages.weekly" />
                                    </NavLink>
                                </NavItem>
                                <NavItem style={{boxShadow: "0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04)"}}>
                                    <NavLink
                                        className={classnames({
                                            active: activeFirstTab === "3",
                                            "nav-link": true
                                        })}
                                        onClick={() => { toggleTab("3"); }} to="#" >
                                        <IntlMessages id="pages.monthly" />
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardHeader>

                        <TabContent className="m-4" activeTab={activeFirstTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Colxx xxs="12" sm="12" lg="6" md="6"  className="mb-3">
                                        <SalesChartCard/>
                                    </Colxx>
                                    <Colxx xxs="12" sm="12" lg="6" md="6">
                                        <WebsiteVisitsChartCard/>
                                    </Colxx>
                                    <Colxx  xxs="12" sm="12" lg="12" md="12">
                                        <DataAnalysisReport/>
                                    </Colxx>
                                    {/*<Colxx  xxs="12" sm="12" lg="12" md="12">*/}
                                    {/*    <ReportOutlets match={match}/>*/}
                                    {/*</Colxx>*/}
                                    <Colxx  xxs="12" sm="12" lg="12" md="12">
                                        <ProductCategory match={match}/>
                                    </Colxx>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Colxx xxs="12" sm="12" lg="6" md="6"  className="mb-3">
                                        <SalesChartCard/>
                                    </Colxx>
                                </Row>
                            </TabPane>
                            <TabPane tabId="3">
                                <Row>
                                    <Colxx xxs="12" sm="12" lg="6" md="6"  className="mb-3">
                                        <SalesChartCard/>
                                    </Colxx>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </Card>
                </Colxx>
            </Row>
        </Fragment>
    )
}

export default OutletReportPage;
