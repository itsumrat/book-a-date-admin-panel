import React, { Fragment, useState } from 'react';
import classnames from "classnames";
import { Colxx } from '../../../../components/common/CustomBootstrap';
import { CardHeader, Nav, Row,NavLink, NavItem, TabContent, TabPane } from 'reactstrap';
import IntlMessages from '../../../../helpers/IntlMessages';
import ProductList from './ProductList';
import ProductsComponent from './ProductsComponent';

const DessertsComponent = ({products}) => {
  return(<Fragment>
    <Row className="mt-4">
      <Row>
        <Colxx xxs="12">
          <h1>Desserts</h1>
        </Colxx>
      </Row>
      <Row style={{width: '100%'}}>
        <ProductsComponent products={products}/>
      </Row>
    </Row>
  </Fragment>);
}

export default DessertsComponent;
