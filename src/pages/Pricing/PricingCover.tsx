import React from "react";
import MetaTags from "react-meta-tags";
import { Card, Col, Container, Row, Table } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link } from "react-router-dom";

const PricingCover = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Pricing Table | Dashonic - React Admin & Dashboard Template</title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Pricing" breadcrumbItem="Pricing Table" />

                    <Row>
                        <Col lg="12">
                            <Card>
                                <div className="table-responsive text-center">
                                    <Table className="table-bordered mb-0 table-centered align-middle">
                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td style={{ width: "20%" }}>
                                                    <div className="py-3">
                                                        <h5 className="font-size-16">Starter</h5>
                                                        <p className="text-muted mb-4">Neque porro quisquam est</p>
                                                        <h2><sup><small>$</small></sup> 19 / <span className="font-size-13 text-muted">Per month</span></h2>
                                                        <div className="mt-4">
                                                            <Link to="#" className="btn btn-primary btn-sm">Get started</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td style={{ width: "20%" }}>
                                                    <div className="py-3">
                                                        <h5 className="font-size-16">Professional</h5>
                                                        <p className="text-muted mb-4">Et quidem rerum facilis est</p>
                                                        <h2><sup><small>$</small></sup> 29 / <span className="font-size-13 text-muted">Per month</span></h2>
                                                        <div className="mt-4">
                                                            <Link to="#" className="btn btn-primary btn-sm">Get started</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td style={{ width: "20%" }} className="position-relative overflow-hidden">
                                                    <div className="ribbon bg-success">40% off Sale</div>
                                                    <div className="py-3">
                                                        <h5 className="font-size-16">Enterprise</h5>
                                                        <p className="text-muted mb-4">Quis autem vel eum iure</p>
                                                        <h2><sup><small>$</small></sup> 39 / <span className="font-size-13 text-muted">Per month</span></h2>
                                                        <div className="mt-4">
                                                            <Link to="#" className="btn btn-primary btn-sm">Get started</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td style={{ width: "20%" }}>
                                                    <div className="py-3">
                                                        <h5 className="font-size-16">Unlimited</h5>
                                                        <p className="text-muted mb-4">Sed ut perspiciatis unde</p>
                                                        <h2><sup><small>$</small></sup> 49 / <span className="font-size-13 text-muted">Per month</span></h2>
                                                        <div className="mt-4">
                                                            <Link to="#" className="btn btn-primary btn-sm">Get started</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Users</th>
                                                <td>1</td>
                                                <td>3</td>
                                                <td>5</td>
                                                <td>7</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Storage</th>
                                                <td>1 GB</td>
                                                <td>10 GB</td>
                                                <td>20 GB</td>
                                                <td>40 GB</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Domain</th>
                                                <td>
                                                    <div>
                                                        <i className="uil uil-times-circle text-danger font-size-20"></i>
                                                    </div>
                                                </td>
                                                <td>1</td>
                                                <td>2</td>
                                                <td>4</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Support</th>
                                                <td>
                                                    <div>
                                                        <i className="uil uil-times-circle text-danger font-size-20"></i>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <i className="uil uil-check-circle text-success font-size-20"></i>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <i className="uil uil-check-circle text-success font-size-20"></i>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <i className="uil uil-check-circle text-success font-size-20"></i>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Update</th>
                                                <td>
                                                    <div>
                                                        <i className="uil uil-times-circle text-danger font-size-20"></i>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <i className="uil uil-times-circle text-danger font-size-20"></i>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <i className="uil uil-check-circle text-success font-size-20"></i>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <i className="uil uil-check-circle text-success font-size-20"></i>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default PricingCover;