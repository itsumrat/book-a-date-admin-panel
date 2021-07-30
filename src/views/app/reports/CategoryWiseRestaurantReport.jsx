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
import YearlyRestaurantReport from './YearlyRestaurantReport';

const categoryReportOptions = [
  {
    category: 'Drinks',
    compoment: YearlyRestaurantReport,
  },
  {
    category: 'Dining',
    compoment: YearlyRestaurantReport,
  },
  {
    category: 'Tickets',
    compoment: YearlyRestaurantReport,
  },
];
const CategoryWiseRestaurantReport = ({ match }) => {
  const [activeFirstTab, setActiveFirstTab] = useState('Drinks');
  const toggleTab = (tab) => {
    setActiveFirstTab(tab);
  };
  return (
    <Row>
      <Colxx xxs="12" sm="12" lg="12" md="12">
        <Card className="mb-4">
          <CardHeader>
            <Nav justified tabs className="card-header-tabs ">
              {categoryReportOptions.map((category) => (
                <NavItem
                  key={category.category}
                  className={classnames({
                    active: activeFirstTab === category.category,
                    'nav-link': true,
                  })}
                  onClick={() => {
                    toggleTab(category.category);
                  }}
                  to="#"
                  style={{
                    boxShadow:
                      '0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04)',
                  }}
                >
                  {/* <IntlMessages id="pages.daily" /> */}
                  <span className="text-capitalize">{category.category}</span>
                </NavItem>
              ))}
            </Nav>
          </CardHeader>

          <TabContent className="m-4" activeTab={activeFirstTab}>
            {categoryReportOptions.map((category) => {
              const Component = category.compoment;
              return (
                <TabPane key={category.category} tabId={category.category}>
                  <Row>
                    <Colxx xxs="12" sm="12" lg="12" md="12" className="mb-3">
                      <Component category={category.category} />
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

export default CategoryWiseRestaurantReport;
