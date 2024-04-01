import React from "react";
import MetaTags from "react-meta-tags";
import {
    Col,
    Container,
    Row,
    Card,
    CardBody
} from "reactstrap";

import WidgetData from '../Dashboard/Widgets';
import EarningReports from '../Dashboard/EarningReports';
import Widget from '../Analytics/Widget';
import VisitorGraph from '../Analytics/VisitorGraph';
import VisitorbyBrowser from '../Analytics/VisitorbyBrowser';
import VisitorSource from '../Analytics/VisitorSource';
import Inbox from './Inbox';
import Chats from './Chats';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const Widgets = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Widgets | Dashonic - React Admin & Dashboard Template</title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Components" breadcrumbItem="Widgets" />

                    <Row>
                        <Col xl={3} sm={6}>
                            <Card>
                                <CardBody>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-3">
                                            <div className="avatar-sm">
                                                <div className="avatar-title bg-soft-primary text-primary rounded-circle font-size-18">
                                                    <i className="uil uil-list-ul"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex-grow-1 overflow-hidden">
                                            <p className="mb-1 text-truncate text-muted">Total Tasks</p>
                                            <h5 className="font-size-16 mb-0">21</h5>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl={3} sm={6}>
                            <Card>
                                <CardBody>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-3">
                                            <div className="avatar-sm">
                                                <div className="avatar-title bg-soft-primary text-primary rounded-circle font-size-18">
                                                    <i className="uil uil-check-circle"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex-grow-1 overflow-hidden">
                                            <p className="mb-1 text-truncate text-muted">Completed Tasks</p>
                                            <h5 className="font-size-16 mb-0">10</h5>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl={3} sm={6}>
                            <Card>
                                <CardBody>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-3">
                                            <div className="avatar-sm">
                                                <div className="avatar-title bg-soft-primary text-primary rounded-circle font-size-18">
                                                    <i className="uil uil-users-alt"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex-grow-1 overflow-hidden">
                                            <p className="mb-1 text-truncate text-muted">Members</p>
                                            <h5 className="font-size-16 mb-0">12</h5>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl={3} sm={6}>
                            <Card>
                                <CardBody>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-3">
                                            <div className="avatar-sm">
                                                <div className="avatar-title bg-soft-primary text-primary rounded-circle font-size-18">
                                                    <i className="uil uil-clock-eight"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex-grow-1 overflow-hidden">
                                            <p className="mb-1 text-truncate text-muted">Total Hours</p>
                                            <h5 className="font-size-16 mb-0">3224</h5>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <WidgetData page="widget" />
                    </Row>

                    <Row>
                        <Col xl={3} md={6}>
                            <Widget />
                        </Col>
                        <Col xl={3} md={6}>
                            <VisitorGraph page="widget" />
                        </Col>

                        <Col xl={3} md={6}>
                            <VisitorbyBrowser page="widget" />
                        </Col>

                        <Col xl={3} md={6}>
                            <VisitorSource page="widget" />
                        </Col>

                    </Row>

                    <Row>
                        <Col xl={4}>
                            <EarningReports page="widget" />
                        </Col>

                        <Col xl={4}>
                            <Inbox />
                        </Col>


                        <Col xl={4}>
                            <Chats />
                        </Col>

                    </Row>

                </Container>
            </div>
        </React.Fragment>
    );
}

export default Widgets;