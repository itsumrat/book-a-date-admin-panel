import React, { Fragment, useState } from 'react';
import classnames from 'classnames';
import {
  CardHeader,
  Nav,
  Row,
  NavLink,
  NavItem,
  TabContent,
  TabPane,
} from 'reactstrap';
import { Colxx } from '../../../../components/common/CustomBootstrap';
import IntlMessages from '../../../../helpers/IntlMessages';
import ProductList from './ProductList';
import ProductsComponent from './ProductsComponent';

const DessertsComponent = ({ products }) => {
  return (
    <>
      <Row className="mt-4">
        <Row>
          <Colxx xxs="12">
            <h1>Tickets</h1>
          </Colxx>
        </Row>
        <Row style={{ width: '100%' }}>
          <ProductsComponent products={products} />
        </Row>
      </Row>
    </>
  );
};

export default DessertsComponent;
