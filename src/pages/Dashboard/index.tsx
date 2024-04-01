import React from "react";
import MetaTags from "react-meta-tags";

//import Breadcrumbs
import Breadcrumbs from "../../components/Common/Breadcrumb";

import { Col, Container, Row } from "reactstrap";

import WidgetData from "./Widgets";

import SalesAnalytics from './SalesAnalytics';

import EarningReports from './EarningReports';

import Orders from './Orders';

import SalesByCountry from './SalesByCountry';
import ProductAnalytics from "./ProductAnalytics";

const Dashboard = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Dashboard | Calgary Carpet Empire</title>
                </MetaTags>

                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Dashboard" breadcrumbItem="" />

                    <Row>
                        <WidgetData />
                    </Row>

                    <Row>
                        <Col xl={4}>
                            <EarningReports />
                        </Col>

                        <Col xl={8}>
                            <SalesAnalytics />
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6}>
                            <ProductAnalytics title={"Most Sold Products"} productData={[{ name: "Magnolia Place", quantity: 1100 }]} />
                        </Col>

                        <Col xl={6}>
                            <ProductAnalytics title={"Low Quantity Products"} productData={[{ name: "Titanium", quantity: 10 }]} />
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12}>
                            <Orders />
                        </Col>

                        {/* <Col xl={4}>
                            <SalesByCountry />
                        </Col> */}
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    );
}

export default Dashboard;