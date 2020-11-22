import React, { Fragment, useState } from 'react';
import classnames from "classnames";
import { Colxx } from '../../../../components/common/CustomBootstrap';
import {  Row } from 'reactstrap';

import ProductsComponent from './ProductsComponent';

const StarterComponent = ({products}) => {
  console.log(products)
  return(<Fragment>
    <Row className="mt-4">
      <Row>
        <Colxx xxs="12">
          <h1>Starters</h1>
        </Colxx>
      </Row>
     <Row style={{width: '100%'}}>
       <ProductsComponent products={products}/>
     </Row>
    </Row>
  </Fragment>);
}

export default StarterComponent;
