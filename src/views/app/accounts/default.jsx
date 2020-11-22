import React, {Fragment} from "react";
import {Row} from "reactstrap";
import {useHistory} from 'react-router-dom';
import {Colxx, Separator} from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import RestaurantTypeCard from "./RestaurantTypeCard";
import restaurantTypes from "../../../data/restaurantTypes";
import Input from 'reactstrap/es/Input';
import Button from 'reactstrap/es/Button';

const RestaurantTypesDefault = ({match}) => {
    const history = useHistory();
    return(
        <Fragment>
            <Row>
                <Colxx xxs="12">
                    <Breadcrumb heading="menu.default" match={match} />
                    <Separator className="mb-5" />
                </Colxx>
            </Row>
          <Row >
            <Colxx xxs={12} md={6} style={{display: 'flex'}}>
              <Input placeholder="search here" style={{width: 400, marginRight: 30}}/> <Button>Search</Button>
            </Colxx>
            <Colxx xxs={12} md={6}>
              <Button onClick={()=>history.goBack()} color="primary" className="float-right">Back</Button>
            </Colxx>
          </Row>
            <Row>
                {restaurantTypes.map((item, index) => {
                    return (
                        <div key={`icon_card_${index}`}>
                            <RestaurantTypeCard match={match} {...item} className="m-4"/>
                        </div>
                    );
                })}
            </Row>
        </Fragment>
    );
}

export default RestaurantTypesDefault;
