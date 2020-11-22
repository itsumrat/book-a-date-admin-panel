import React from "react";
import {
    Row,
    Card,
    CardBody,
    CardSubtitle,
    CardImg,
    CardText,
    CustomInput,
    Badge
} from "reactstrap";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import { ContextMenuTrigger } from "react-contextmenu";
import { Colxx } from "../../../../components/common/CustomBootstrap";
import moment from 'moment';
import ButtonGroup from 'reactstrap/es/ButtonGroup';
import Button from 'reactstrap/es/Button';

const ProductCard = ({ product, isSelect, collect, onCheckItem }) => {
    return (
        <Colxx sm="6" lg="4" xl="4" className="mb-3" key={product.id}>
            <ContextMenuTrigger id="menu_id" data={product.id} collect={collect}>
                <Card
                    onClick={event => onCheckItem(event, product.id)}
                    className={classnames({
                        active: isSelect
                    })}
                >
                    <div className="position-relative">
                        <NavLink to={`?p=${product.id}`} className="w-40 w-sm-100">
                            <CardImg top alt={product.title} src={product.img} />
                        </NavLink>
                        <Badge
                            color={product.statusColor}
                            pill
                            className="position-absolute badge-top-left"
                        >
                            {product.status}
                        </Badge>
                    </div>
                    <CardBody>
                        <Row>
                            {/*<Colxx xxs="2">*/}
                            {/*    <CustomInput*/}
                            {/*        className="item-check mb-0"*/}
                            {/*        type="checkbox"*/}
                            {/*        id={`check_${product.id}`}*/}
                            {/*        checked={isSelect}*/}
                            {/*        onChange={() => {}}*/}
                            {/*        label=""/>*/}
                            {/*</Colxx>*/}
                            <Colxx xxs="12" className="mb-3">
                                <Row className="font-weight-bold card-title mb-0 justify-content-between">
                                    <CardSubtitle>{product.title}</CardSubtitle>
                                </Row>
                                <CardText className="text-muted text-small mb-0 font-weight-light">
                                    {product.description}
                                </CardText>
                            </Colxx>
                            <Colxx xxs="12" className="mb-3">
                                <CardText>Start: {moment(product.advertiseStart).format(
                                  'ddd, MMM Do YYYY'
                                )}</CardText>
                                <CardText>
                                    End: {moment(product.advertiseEnd).format(
                                  'ddd, MMM Do YYYY'
                                )}
                                </CardText>
                            </Colxx>
                            <Colxx xxs="12" className="mb-3">
                                <CardText>Start: {moment(product.advertiseStart).format(
                                  'h:mm:ss a'
                                )}</CardText>
                                <CardText>
                                    End: {moment(product.advertiseEnd).format(
                                  'h:mm:ss a'
                                )}
                                </CardText>
                            </Colxx>
                            <Colxx xxs="10" className="mb-3">
                                <CardText className="text-muted">Price: £{product.price}</CardText>
                            </Colxx>
                            <Colxx xxs="12" style={{padding: 0, textAlign: 'center'}}>
                                <ButtonGroup>
                                    <Button color="success">Confirm</Button>
                                    <Button color="info">Re-schedule</Button>
                                    <Button color="primary">Reject</Button>
                                </ButtonGroup>
                            </Colxx>
                        </Row>
                    </CardBody>
                </Card>
            </ContextMenuTrigger>
        </Colxx>
    );
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(ProductCard);
