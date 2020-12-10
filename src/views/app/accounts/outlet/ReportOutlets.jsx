import React from 'react';
import OutletCard from '../OutletCard';
import Row from 'reactstrap/es/Row';
import { Colxx } from '../../../../components/common/CustomBootstrap';

const ReportOutlets = ({match})=> {
  const outlets = [
    {
      title: 'Venues 1'
    },
    {
      title: 'Venues 2'
    },
    {
      title: 'Venues 3'
    },
    {
      title: 'Venues 4'
    },
    {
      title: 'Venues 5'
    },
    {
      title: 'Venues 6'
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
