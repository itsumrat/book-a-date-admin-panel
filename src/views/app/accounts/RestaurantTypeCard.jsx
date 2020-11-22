import React from "react";
import { Card, CardBody } from "reactstrap";
import { NavLink, useHistory } from 'react-router-dom';
import IntlMessages from "../../../helpers/IntlMessages";

const RestaurantTypeCard = ({className="mb-4", icon, title,id,match, value }) => {
    const history = useHistory();
    return (
        <div style={{
            width: 300,
            height: 300,
        }} className={`icon-row-item ${className}`}>
            <NavLink to={`${match.url}/${id}`}>
                <Card style={{height: '100%', cursor: 'pointer'}} >
                    <CardBody className="text-center">
                        <i style={{fontSize: 40, color: '#922c88'}} className={icon} />
                        <h2 className="card-text font-weight-semibold mb-0">
                            <IntlMessages id={title} />
                        </h2>
                        {/*<p className="lead text-center">{value}</p>*/}
                    </CardBody>
                </Card>
            </NavLink>
        </div>
    );
};

export default RestaurantTypeCard;
