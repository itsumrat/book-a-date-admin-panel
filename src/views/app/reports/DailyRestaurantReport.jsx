import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  Nav,
  NavItem,
  Row,
  TabContent,
  TabPane,
  Table,
} from 'reactstrap';
import classnames from 'classnames';
import { Colxx } from '../../../components/common/CustomBootstrap';

const reportCardData = [
  {
    name: 'Confirmed non product attachments ',
    quantity: 119,
    value: 75,
  },
  {
    name: 'Confirmed product attachments ',
    quantity: 12,
    value: 543,
  },
  {
    name: 'Drinks ',
    quantity: 43,
    value: 322,
  },
  {
    name: 'Dining',
    quantity: 121,
    value: 43,
  },
  {
    name: 'Tickets',
    quantity: 31,
    value: 125,
  },
  {
    name: 'Re-scheduled ',
    quantity: 12,
    value: 153,
  },
  {
    name: 'Cancellations',
    quantity: 12,
    value: 32,
  },
  {
    name: 'Product refunds',
    quantity: 21,
    value: 120,
  },
];

const ReportCard = ({ month, type, data }) => {
  return (
    <Row>
      <Colxx xxs={12}>
        <div>
          <h2 className="text-capitalize">{`${month} / ${type}`}</h2>
        </div>
      </Colxx>
      <Colxx xxs={12}>
        <Table>
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>Quantity of reservations</th>
              <th>Value of reservations</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i} className="text-center">
                <td>
                  <Card className="p-2">{d.name}</Card>
                </td>
                <td>
                  <Card className="p-2">{d.quantity}</Card>
                </td>
                <td>
                  <Card className="p-2">{d.value}</Card>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Colxx>
    </Row>
  );
};
const reportOptions = [
  {
    period: 'morning',
    compoment: ReportCard,
  },
  {
    period: 'afternoon',
    compoment: ReportCard,
  },
  {
    period: 'evening',
    compoment: ReportCard,
  },
];
const DailyRestaurantReport = ({ match, month }) => {
  const [activeFirstTab, setActiveFirstTab] = useState('morning');
  const toggleTab = (tab) => {
    setActiveFirstTab(tab);
  };
  return (
    <Row>
      <Colxx xxs="12" sm="12" lg="12" md="12">
        <Card className="mb-4">
          <CardHeader>
            <Nav justified tabs className="card-header-tabs ">
              {reportOptions.map((period) => (
                <NavItem
                  key={period.period}
                  className={classnames({
                    active: activeFirstTab === period.period,
                    'nav-link': true,
                  })}
                  onClick={() => {
                    toggleTab(period.period);
                  }}
                  to="#"
                  style={{
                    boxShadow:
                      '0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04)',
                  }}
                >
                  {/* <IntlMessages id="pages.daily" /> */}
                  <span className="text-capitalize">{period.period}</span>
                </NavItem>
              ))}
            </Nav>
          </CardHeader>

          <TabContent className="m-4" activeTab={activeFirstTab}>
            {reportOptions.map((period) => {
              const Component = period.compoment;
              return (
                <TabPane key={period.period} tabId={period.period}>
                  <Row>
                    <Colxx xxs="12" sm="12" lg="12" md="12" className="mb-3">
                      <Component
                        month={month}
                        type={period.period}
                        data={reportCardData}
                      />
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

export default DailyRestaurantReport;
