import React, { Fragment } from 'react';
import { Row } from 'reactstrap';
import { Colxx } from '../../../../components/common/CustomBootstrap';

import ProductsComponent from './ProductsComponent';

const MainsComponent = ({ products }) => {
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

export default MainsComponent;
