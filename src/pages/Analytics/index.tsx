import React from "react";
import MetaTags from "react-meta-tags";

//import Breadcrumbs
import Breadcrumbs from "../../components/Common/Breadcrumb";

import { Col, Container, Row } from "reactstrap";

import User from "./User";
import Widget from "./Widget";
import UserActivity from "./UserActivity";
import VisitorGraph from "./VisitorGraph";
import VisitorbyBrowser from "./VisitorbyBrowser";
import VisitorSource from "./VisitorSource";
import TrafficSource from "./TrafficSource";
import VisitorbyLocation from "./VisitorbyLocation";
import Channels from "./Channels";

const index = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Analytics | Dashonic - React Admin & Dashboard Template</title>
                </MetaTags>

                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Dashboards" breadcrumbItem="Analytics" />

                    <Row>
                        <Col className="col-xxl-9" lg={8}>
                            <User />
                        </Col>
                        <Col className="col-xxl-3" lg={4}>
                            <Widget />
                            <UserActivity />
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={3} md={6}>
                            <VisitorGraph />
                        </Col>
                        <Col xl={3} md={6}>
                            <VisitorbyBrowser />
                        </Col>
                        <Col xl={3} md={6}>
                            <VisitorSource />
                        </Col>
                        <Col xl={3} md={6}>
                            <TrafficSource />
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={8}>
                            <VisitorbyLocation />
                        </Col>
                        <Col xl={4}>
                            <Channels />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default index;