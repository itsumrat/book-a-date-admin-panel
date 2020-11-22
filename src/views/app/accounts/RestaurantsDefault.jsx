import React, {Fragment} from "react";
import {useHistory} from 'react-router-dom';
import {Row} from "reactstrap";
import {Colxx, Separator} from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import RestaurantTypesDefault from "./default";
import RestaurantCard from "./RestaurantCard";
import Button from 'reactstrap/es/Button';
const restaurants = [
    {
        title: 'Shop 1'
    },
    {
        title: 'Shop 2'
    },
    {
        title: 'Shop 3'
    },
    {
        title: 'Shop 4'
    }
]
const RestaurantsDefault = ({match}) => {
    console.log(match.url.split('/'))
    const history = useHistory();
    return(
        <Fragment>
            <Row>
                <Colxx xxs="12">
                    <Breadcrumb heading={`menu.${match.url.split('/')[4]}`} match={match} />
                    <Separator className="mb-5" />
                </Colxx>
                <Colxx xxs={12} >
                    <Button onClick={()=>history.goBack()} color="primary" className="float-right">Back</Button>
                </Colxx>
            </Row>
            <Row>
                <Row>
                    {restaurants.map((item, index) => {
                        return (
                            <div key={`icon_card_${index}`}>
                                <RestaurantCard match={match} {...item} className="m-4"/>
                            </div>
                        );
                    })}
                </Row>

            </Row>
        </Fragment>
    );
}

export default RestaurantsDefault;
