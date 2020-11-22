import React from 'react';
import OutletCard from '../OutletCard';
import Row from 'reactstrap/es/Row';
import { Colxx } from '../../../../components/common/CustomBootstrap';

const ReportOutlets = ({match})=> {
  const outlets = [
    {
      title: 'Outlet 1'
    },
    {
      title: 'Outlet 2'
    },
    {
      title: 'Outlet 3'
    },
    {
      title: 'Outlet 4'
    },
    {
      title: 'Outlet 5'
    },
    {
      title: 'Outlet 6'
    }
  ]
  return(
    <Row>
      <Colxx style={{textAlign: 'center'}} xxs={12}>
        <h1>Outlets</h1>
      </Colxx>
      <Colxx xxs={12}>
        <Row>
          {outlets.map((item, index) => {
            return (
              <div key={`icon_card_${index}`}>
                <OutletCard match={match}{...item} className="m-4"/>
              </div>
            );
          })}
        </Row>
      </Colxx>
    </Row>
  )
}

export default ReportOutlets;
