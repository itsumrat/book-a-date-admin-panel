import React, {Fragment} from "react";
import {Row} from "reactstrap";
import {useHistory} from 'react-router-dom';
import {Colxx, Separator} from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import RestaurantCard from "./RestaurantCard";
import OutletCard from "./OutletCard";
import Button from 'reactstrap/es/Button';
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
    }
]
const Outlets = ({match}) => {
    const history = useHistory();
    return(
        <Fragment>
            <Row>
                <Colxx xxs="12">
                    <Breadcrumb heading="menu.outlets" match={match} />
                    <Separator className="mb-5" />
                </Colxx>
                <Colxx xxs={12}>
                    <Button onClick={()=>history.goBack()} color="primary" className="float-right">Back</Button>
                </Colxx>
            </Row>
            <Row>
                {outlets.map((item, index) => {
                    return (
                        <div key={`icon_card_${index}`}>
                            <OutletCard match={match}{...item} className="m-4"/>
                        </div>
                    );
                })}
            </Row>
        </Fragment>
    );
}

export default Outlets;
