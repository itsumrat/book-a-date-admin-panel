import React, {Fragment, useState} from 'react';
import { Nav, NavItem, Row, TabContent, TabPane} from "reactstrap";
import {Colxx, Separator} from "../../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../../containers/navs/Breadcrumb";
import {useHistory} from "react-router-dom";
import classnames from "classnames";
import IntlMessages from "../../../../helpers/IntlMessages";
import StarterComponent from './StartersComponent';
import DrinksComponent from './DrinksComponent';
import MainsComponent from './MainsComponent';
import DessertsComponent from './DessertsComponent';
import products from '../../../../data/products';
import Button from 'reactstrap/es/Button';

const AccountProductPage = ({match}) => {
    const [activeCategory, setActiveCategory] = useState("Starter");
    const toggleCategory = category =>{
        setActiveCategory(category);
    }
    const history = useHistory();
    return(
        <Fragment>
            <Row>
                <Colxx xxs="12">
                    <Breadcrumb heading="menu.products" match={match} />
                    <Separator className="mb-5" />
                </Colxx>
              <Colxx xxs={12}>
                <Button onClick={()=>history.goBack()} color="primary" className="float-right">Back</Button>
              </Colxx>
            </Row>
            <Row>
                <Colxx xxs="12">
                    <Nav justified tabs className="card-header-tabs ">

                        <NavItem
                          className={classnames({
                              active: activeCategory === "Starter",
                              "nav-link": true
                          })}
                          onClick={() => { toggleCategory("Starter"); }} to="#" >
                            <IntlMessages id="pages.starter" />
                        </NavItem>


                        <NavItem
                          className={classnames({
                              active: activeCategory === "Drinks",
                              "nav-link": true
                          })}
                          onClick={() => { toggleCategory("Drinks"); }} to="#" >
                            <IntlMessages id="pages.drinks" />
                        </NavItem>

                        <NavItem
                          className={classnames({
                              active: activeCategory === "Mains",
                              "nav-link": true
                          })}
                          onClick={() => { toggleCategory("Mains"); }} to="#" >
                            <IntlMessages id="pages.mains" />
                        </NavItem>

                        <NavItem
                          className={classnames({
                              active: activeCategory === "Desserts",
                              "nav-link": true
                          })}
                          onClick={() => { toggleCategory("Desserts"); }} to="#" >
                            <IntlMessages id="pages.desserts" />
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeCategory}>
                        <TabPane tabId="Starter">
                            <Row>
                                <Colxx xxs="12" sm="12" lg="12" md="12">
                                    <StarterComponent products={products.filter(product=>product.category==='starter')}/>
                                </Colxx>
                            </Row>
                        </TabPane>
                        <TabPane tabId="Drinks">
                            <Row>
                                <Colxx xxs="12" sm="12" lg="12" md="12">
                                   <DrinksComponent products={products.filter(product=>product.category==='drinks')}/>
                                </Colxx>
                            </Row>
                        </TabPane>
                        <TabPane tabId="Mains">
                            <Row>
                                <Colxx xxs="12" sm="12" lg="12" md="12">
                                   <MainsComponent products={products.filter(product=>product.category==='mains')}/>
                                </Colxx>
                            </Row>
                        </TabPane>
                        <TabPane tabId="Desserts">
                            <Row>
                                <Colxx xxs="12" sm="12" lg="12" md="12">
                                    <DessertsComponent products={products.filter(product=>product.category==='desserts')}/>
                                </Colxx>
                            </Row>
                        </TabPane>
                    </TabContent>
                </Colxx>
            </Row>
        </Fragment>
    );
}

export default AccountProductPage;
