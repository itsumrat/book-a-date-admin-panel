import React from "react";
import { Card, CardBody } from "reactstrap";
import {useHistory,NavLink} from 'react-router-dom';
import IntlMessages from "../../../helpers/IntlMessages";

const RestaurantCard = ({className="mb-4", icon, id, img, title,match, value }) => {
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

                     {/*<img style={{width: '90%', borderRadius: '7%'}} src={img} alt=""/>*/}
                     <h2 className="card-text font-weight-semibold mt-3">
                       <IntlMessages id={title} />
                     </h2>
                       {/*<p className="lead text-center">{value}</p>*/}
                   </CardBody>
               </Card>
           </NavLink>
        </div>
    );
};

export default RestaurantCard;
