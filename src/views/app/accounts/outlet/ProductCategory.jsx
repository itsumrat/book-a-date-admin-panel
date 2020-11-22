import React from 'react';
import Card from 'reactstrap/es/Card';

const ProductCategory = () => {

  return(<div>
      <div style={{textAlign: 'center'}}>
        <h1>Product Category</h1>
      </div>
      <div>
        <Card className="text-center font-weight-bold m-2 p-3">Starter</Card>
        <Card className="text-center font-weight-bold m-2 p-3">Drinks</Card>
        <Card className="text-center font-weight-bold m-2 p-3">Mains</Card>
        <Card className="text-center font-weight-bold m-2 p-3">Desserts</Card>
      </div>
  </div>);
}

export default ProductCategory;
