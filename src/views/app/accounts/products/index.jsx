import React, { Fragment, useState } from 'react';
import {
  Nav,
  NavItem,
  Row,
  TabContent,
  TabPane,
  Card,
  CardHeader,
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import classnames from 'classnames';
import Button from 'reactstrap/es/Button';
import {
  Colxx,
  Separator,
} from '../../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';
import IntlMessages from '../../../../helpers/IntlMessages';
import StarterComponent from './StartersComponent';
import DrinksComponent from './DrinksComponent';
import MainsComponent from './MainsComponent';
import DessertsComponent from './DessertsComponent';
import products from '../../../../data/products';

const AccountProductPage = ({ match }) => {
  const [activeCategory, setActiveCategory] = useState('Drinks');
  const toggleCategory = (category) => {
    setActiveCategory(category);
  };
  const history = useHistory();
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.products" match={match} />
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
        <Colxx>
          <Card className="p-4">
            <Colxx  xxs="12">
              <Card className="mb-4">
                <CardHeader>
                  <Nav justified tabs className="card-header-tabs ">
                    {/* <NavItem
                      className={classnames({
                        active: activeCategory === 'Starter',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        toggleCategory('Starter');
                      }}
                      to="#"
                      style={{
                        boxShadow:
                          '0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04)',
                      }}
                    >
                      <IntlMessages id="pages.starter" />
                    </NavItem> */}

                    <NavItem
                      className={classnames({
                        active: activeCategory === 'Drinks',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        toggleCategory('Drinks');
                      }}
                      to="#"
                      style={{
                        boxShadow:
                          '0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04)',
                      }}
                    >
                      <IntlMessages id="pages.drinks" />
                    </NavItem>

                    <NavItem
                      className={classnames({
                        active: activeCategory === 'Dining',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        toggleCategory('Dining');
                      }}
                      to="#"
                      style={{
                        boxShadow:
                          '0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04)',
                      }}
                    >
                      {/* <IntlMessages id="pages.mains" /> */}
                      Dining
                    </NavItem>

                    <NavItem
                      className={classnames({
                        active: activeCategory === 'Tickets',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        toggleCategory('Tickets');
                      }}
                      to="#"
                      style={{
                        boxShadow:
                          '0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04)',
                      }}
                    >
                      {/* <IntlMessages id="pages.desserts" /> */}
                      Tickets
                    </NavItem>
                  </Nav>
                </CardHeader>
              </Card>
              <TabContent activeTab={activeCategory}>
                <TabPane tabId="Dining">
                  <Row>
                    <Colxx xxs="12" sm="12" lg="12" md="12">
                      <StarterComponent
                        products={products.filter(
                          (product) => product.category === 'starter'
                        )}
                      />
                    </Colxx>
                  </Row>
                </TabPane>
                <TabPane tabId="Drinks">
                  <Row>
                    <Colxx xxs="12" sm="12" lg="12" md="12">
                      <DrinksComponent
                        products={products.filter(
                          (product) => product.category === 'drinks'
                        )}
                      />
                    </Colxx>
                  </Row>
                </TabPane>
                <TabPane tabId="Tickets">
                  <Row>
                    <Colxx xxs="12" sm="12" lg="12" md="12">
                      <MainsComponent
                        products={products.filter(
                          (product) => product.category === 'mains'
                        )}
                      />
                    </Colxx>
                  </Row>
                </TabPane>
                {/* <TabPane tabId="Tickets">
                  <Row>
                    <Colxx xxs="12" sm="12" lg="12" md="12">
                      <DessertsComponent
                        products={products.filter(
                          (product) => product.category === 'desserts'
                        )}
                      />
                    </Colxx>
                  </Row>
                </TabPane> */}
              </TabContent>
            </Colxx>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};

export default AccountProductPage;
