import React, {Fragment} from "react";
import {useHistory} from 'react-router-dom';
import {Row} from "reactstrap";
import {Colxx, Separator} from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import restaurantTypes from "../../../data/restaurantTypes";
import ReportRestaurantCard from './ReportRestaurantCard';
import Input from 'reactstrap/es/Input';
import Button from 'reactstrap/es/Button';

const ReportRestaurantTypesDefault = ({match}) => {
  const history = useHistory();
  return(
    <Fragment>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.default" match={match} />
          <Separator className="mb-5" />
        </Colxx>
        <Colxx xxs={12}>
          <Button onClick={()=>history.goBack()} color="primary" className="float-right">Back</Button>
        </Colxx>
      </Row>
      <Row>
        {restaurantTypes.map((item, index) => {
          return (
            <div key={`icon_card_${index}`}>
              <ReportRestaurantCard match={match} {...item} className="m-4"/>
            </div>
          );
        })}
      </Row>
    </Fragment>
  );
}

export default ReportRestaurantTypesDefault;
