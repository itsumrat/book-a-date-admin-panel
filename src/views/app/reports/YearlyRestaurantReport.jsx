import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  Nav,
  NavItem,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap';
import classnames from 'classnames';
import { Colxx } from '../../../components/common/CustomBootstrap';
import IntlMessages from '../../../helpers/IntlMessages';
import ProductCategory from '../accounts/outlet/ProductCategory';
import DataAnalysisReport from '../accounts/outlet/DataAnalysisReport';
import WebsiteVisitsChartCard from '../../../containers/dashboards/WebsiteVisitsChartCard';
import SalesChartCard from '../../../containers/dashboards/SalesChartCard';
import DailyRestaurantReport from './DailyRestaurantReport';

const reportOptions = [
  {
    month: 'january',
    compoment: DailyRestaurantReport,
  },
  {
    month: 'february',
    compoment: DailyRestaurantReport,
  },
  {
    month: 'march',
    compoment: DailyRestaurantReport,
  },
  {
    month: 'april',
    compoment: DailyRestaurantReport,
  },
  {
    month: 'may',
    compoment: DailyRestaurantReport,
  },
  {
    month: 'june',
    compoment: DailyRestaurantReport,
  },
  {
    month: 'july',
    compoment: DailyRestaurantReport,
  },
  {
    month: 'august',
    compoment: DailyRestaurantReport,
  },
  {
    month: 'september',
    compoment: DailyRestaurantReport,
  },
  {
    month: 'october',
    compoment: DailyRestaurantReport,
  },
  {
    month: 'november',
    compoment: DailyRestaurantReport,
  },
  {
    month: 'december',
    compoment: DailyRestaurantReport,
  },
];
const YearlyRestaurantReport = ({ category, match }) => {
  const [activeFirstTab, setActiveFirstTab] = useState('january');
  const toggleTab = (tab) => {
    setActiveFirstTab(tab);
  };
  return (
    <Row>
      <Colxx xxs="12" sm="12" lg="12" md="12">
        <h2>{category}</h2>
      </Colxx>
      <Colxx xxs="12" sm="12" lg="12" md="12">
        <Card className="mb-4">
          <CardHeader>
            <Nav justified tabs className="card-header-tabs ">
              {reportOptions.map((month) => (
                <NavItem
                  key={month.month}
                  className={classnames({
                    active: activeFirstTab === month.month,
                    'nav-link': true,
                  })}
                  onClick={() => {
                    toggleTab(month.month);
                  }}
                  to="#"
                  style={{
                    boxShadow:
                      '0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04)',
                  }}
                >
                  {/* <IntlMessages id="pages.daily" /> */}
                  <span className="text-capitalize">{month.month}</span>
                </NavItem>
              ))}
            </Nav>
          </CardHeader>

          <TabContent className="m-4" activeTab={activeFirstTab}>
            {reportOptions.map((month) => {
              const Component = month.compoment;
              return (
                <TabPane key={month.month} tabId={month.month}>
                  <Row>
                    <Colxx xxs="12" sm="12" lg="12" md="12" className="mb-3">
                      <Component month={month.month} />
                    </Colxx>
                  </Row>
                </TabPane>
              );
            })}
          </TabContent>
        </Card>
      </Colxx>
    </Row>
  );
};

export default YearlyRestaurantReport;
