import React, {Fragment} from "react";
import {useHistory} from 'react-router-dom';
import {Row} from "reactstrap";
import {Colxx, Separator} from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import RestaurantTypesDefault from "./default";
import RestaurantCard from "./RestaurantCard";
import Button from 'reactstrap/es/Button';
import dishoom from '../../../assets/images/dishoom.jpg';
export const shops = [
    {
        id: 1,
        title: 'Dishoom',
        img: dishoom,
        venues:[
            {
                id: 11,
                title: 'King Cross',
                img: dishoom,
            },
            {
                id: 12,
                title: 'Shoreditch',
                img: '',
            },
            {
                id: 13,
                title: 'Carnaby',
                img: '',
            },
            {
                id: 14,
                title: 'Covent Garden',
                img: '',
            }
        ]
    },
    {
        id: 2,
        title: 'The LockHouse',
        img: '',
        venues:[]
    },
    {
        id: 3,
        title: 'Bourne & Hollingworth',
        img: '',
        venues:[]
    },
    {
        id: 4,
        title: 'Formagerie',
        img: '',
        venues:[]
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
                    {shops.map((item, index) => {
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
