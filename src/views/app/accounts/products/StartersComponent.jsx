import React, { Fragment, useState } from 'react';
import classnames from 'classnames';
import { Row } from 'reactstrap';
import { Colxx } from '../../../../components/common/CustomBootstrap';

import ProductsComponent from './ProductsComponent';

const StarterComponent = ({ products }) => {
  console.log(products);
  return (
    <>
      <Row className="mt-4">
        <Row>
          <Colxx xxs="12">
            <h1>Dining</h1>
          </Colxx>
        </Row>
        <Row style={{ width: '100%' }}>
          <ProductsComponent products={products} />
        </Row>
      </Row>
    </>
  );
};

export default StarterComponent;
