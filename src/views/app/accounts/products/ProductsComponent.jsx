import React, { useState } from 'react';
import { CardHeader, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import { Colxx } from '../../../../components/common/CustomBootstrap';
import classnames from 'classnames';
import IntlMessages from '../../../../helpers/IntlMessages';
import ProductList from './ProductList';

const ProductsComponent = ({products}) => {
  const [activeFirstTab, setActiveFirstTab] = useState("1");
  const toggleTab = (tab)=> {
    setActiveFirstTab(tab);
  }
  return(
      <Colxx xxs="12" style={{width: '100%'}}>
        <CardHeader>
          <Nav justified tabs className="card-header-tabs  ">
            <NavItem>
              <NavLink
                className={classnames({
                  active: activeFirstTab === "1",
                  "nav-link": true
                })}
                onClick={() => { toggleTab("1"); }} to="#" >
                <IntlMessages id="pages.active" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({
                  active: activeFirstTab === "2",
                  "nav-link": true
                })}
                onClick={() => { toggleTab("2"); }} to="#" >
                <IntlMessages id="pages.stored" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({
                  active: activeFirstTab === "3",
                  "nav-link": true
                })}
                onClick={() => { toggleTab("3"); }} to="#" >
                <IntlMessages id="pages.pending" />
              </NavLink>
            </NavItem>
          </Nav>
        </CardHeader>
        <TabContent activeTab={activeFirstTab}>
          <TabPane tabId="1">
            <Row>
              <Colxx xxs="12">
                <ProductList products={products.filter(product=>product.status==='active')}/>
              </Colxx>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Colxx xxs="12">
                <ProductList products={products.filter(product=>product.status==='stored')}/>
              </Colxx>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Colxx xxs="12">
                <ProductList products={products.filter(product=>product.status==='pending')}/>
              </Colxx>
            </Row>
          </TabPane>
        </TabContent>
      </Colxx>
  );
}

export default ProductsComponent;
