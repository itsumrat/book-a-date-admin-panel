import React, {Fragment, useState} from "react";
import {
    Card,
    Row,
} from "reactstrap";
import {Colxx, Separator} from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import {NavLink, useHistory} from "react-router-dom";
import classnames from "classnames";
import IntlMessages from "../../../helpers/IntlMessages";
import {injectIntl} from "react-intl";
import Button from 'reactstrap/es/Button';

const OutletPage = ({match, intl}) => {
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
            <Row className="flex-column align-content-center">
                <Card >
                    <NavLink
                        style={{width: 300,
                            height: 80,
                            fontSize: 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex'}}
                        className={classnames({
                            "nav-link": true
                        })}
                        onClick={() => { }}
                        to={`${match.url}/data-list`} >
                        <IntlMessages id="pages.data-list" />
                    </NavLink>
                </Card>
                <Card style={{marginTop: 20}}>
                    <NavLink
                        style={{width: 300, height: 80, fontSize: 20,  alignItems: 'center', justifyContent: 'center', display: 'flex'}}
                        className={classnames({
                            "nav-link": true
                        })}
                        onClick={() => { }}  to={`${match.url}/products`} >
                        <IntlMessages id="pages.products" />
                    </NavLink>
                </Card>
                <Card style={{marginTop: 20}}>
                    <NavLink
                        style={{width: 300, height: 80, fontSize: 20,  alignItems: 'center', justifyContent: 'center', display: 'flex'}}
                        className={classnames({
                            "nav-link": true
                        })}
                        onClick={() => { }}
                        to={`${match.url}/reports`} >
                        <IntlMessages id="pages.reports" />
                    </NavLink>
                </Card>
                <Card style={{marginTop: 20}}>
                    <NavLink
                        style={{width: 300, height: 80, fontSize: 20,  alignItems: 'center', justifyContent: 'center', display: 'flex'}}
                        className={classnames({
                            "nav-link": true
                        })}
                        onClick={() => { }} to={`${match.url}/team`} >
                        <IntlMessages id="pages.team" />
                    </NavLink>
                </Card>
            </Row>
        </Fragment>
    )
}

export default injectIntl(OutletPage);
