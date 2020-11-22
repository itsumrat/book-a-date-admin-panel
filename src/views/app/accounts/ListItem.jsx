import React from 'react';
import {Badge, Card} from "reactstrap";

const ListItem = () => {

    return<Card>
        <p className="mb-1  text-small w-15 w-sm-100">
            100
        </p>
        <div className="w-15 w-sm-100">
            <Badge color='black' pill>
               Pending
            </Badge>
        </div>
    </Card>
}

export default ListItem;
