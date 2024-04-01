import React, { useEffect } from "react";
import MetaTags from "react-meta-tags";
import { Card, CardBody, Col, Container, Row, Input } from "reactstrap";
import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const PricingBasic = () => {

    const check = () => {
        let checkBox: any = document.getElementById("plan-switch");
        var month: any = document.getElementsByClassName("month");
        var annual: any = document.getElementsByClassName("annual");

        for (var i = 0; i < month.length; i++) {
            if (checkBox.checked == true) {
                annual[i].style.display = "block";
                month[i].style.display = "none";
            } else if (checkBox.checked == false) {
                annual[i].style.display = "none";
                month[i].style.display = "block";
            }
        }
    }

    useEffect(() => {
        check()
    }, [])

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Pricing Basic | Dashonic - React Admin & Dashboard Template</title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Pricing" breadcrumbItem="Pricing Basic" />

                    <Row className="justify-content-center">
                        <Col lg={5}>
                            <div className="text-center mb-5">
                                <h4>Choose Your Pricing Plan</h4>
                                <p className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo veritatis</p>
                            </div>
                        </Col>
                    </Row>


                    <Row className="justify-content-center">
                        <Col lg={9}>
                            <div className="mb-4">
                                <div className="d-flex justify-content-center align-items-center">
                                    <div><h5 className="font-size-14 mb-0">Month</h5></div>
                                    <div className="form-check form-switch font-size-20 ms-3" onClick={check}>
                                        <Input className="form-check-input" type="checkbox" id="plan-switch" />
                                        <label className="form-check-label" htmlFor="plan-switch"></label>
                                    </div>
                                    <div><h5 className="font-size-14 mb-0">Annual</h5></div>
                                </div>
                            </div>
                            <Row>
                                <Col xl={4}>
                                    <Card className="pricing-box">
                                        <CardBody className="p-4">
                                            <div className="pt-2 pb-4">
                                                <h2 className="month"><sup><small>$</small></sup> <span>19</span>/ <span className="font-size-13 text-muted">month</span></h2>
                                                <h2 className="annual"><sup><small>$</small></sup> <span>49</span>/ <span className="font-size-13 text-muted">annual</span></h2>
                                            </div>

                                            <div>
                                                <h5 className="mb-1">Starter</h5>
                                                <p className="text-muted">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>

                                                <div>
                                                    <Link to="#" className="btn btn-primary w-100">Get started</Link>
                                                </div>
                                            </div>

                                            <hr className="my-4 text-muted" />

                                            <ul className="list-unstyled pricing-features mb-0">
                                                <li><i className="uil uil-check-circle text-success font-size-18 align-middle me-2"></i> Free Live Support</li>
                                                <li><i className="uil uil-check-circle text-success font-size-18 align-middle me-2"></i> 1 User</li>
                                                <li><i className="uil uil-times-circle text-danger font-size-18 align-middle me-2"></i> 1GB Storage</li>
                                                <li><i className="uil uil-times-circle text-danger font-size-18 align-middle me-2"></i> Domain</li>
                                                <li><i className="uil uil-times-circle text-danger font-size-18 align-middle me-2"></i> No Time Tracking</li>
                                                <li><i className="uil uil-times-circle text-danger font-size-18 align-middle me-2"></i> Free Setup</li>
                                            </ul>
                                        </CardBody>
                                    </Card>
                                </Col>

                                <Col xl={4}>
                                    <div className="card pricing-box position-relative overflow-hidden">
                                        <CardBody className="p-4">
                                            <div className="ribbon bg-success">40% off Sale</div>
                                            <div className="pt-2 pb-4">
                                                <h2 className="month"><sup><small>$</small></sup> <span>29</span>/ <span className="font-size-13 text-muted">month</span></h2>
                                                <h2 className="annual"><sup><small>$</small></sup> <span>79</span>/ <span className="font-size-13 text-muted">annual</span></h2>
                                            </div>

                                            <div>
                                                <h5 className="mb-1">Professional</h5>
                                                <p className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit accusantium doloremque</p>

                                                <div>
                                                    <Link to="#" className="btn btn-primary w-100">Get started</Link>
                                                </div>
                                            </div>

                                            <hr className="my-4 text-muted" />

                                            <ul className="list-unstyled pricing-features mb-0">
                                                <li><i className="uil uil-check-circle text-success font-size-18 align-middle me-2"></i> Free Live Support</li>
                                                <li><i className="uil uil-check-circle text-success font-size-18 align-middle me-2"></i> 3 User</li>
                                                <li><i className="uil uil-check-circle text-success font-size-18 align-middle me-2"></i> 10GB Storage</li>
                                                <li><i className="uil uil-check-circle text-success font-size-18 align-middle me-2"></i> 1 Domain</li>
                                                <li><i className="uil uil-check-circle text-success font-size-18 align-middle me-2"></i> No Time Tracking</li>
                                                <li><i className="uil uil-times-circle text-danger font-size-18 align-middle me-2"></i> Free Setup</li>
                                            </ul>
                                        </CardBody>
                                    </div>
                                </Col>

                                <Col xl={4}>
                                    <div className="card pricing-box">
                                        <CardBody className="p-4">
                                            <div className="pt-2 pb-4">
                                                <h2 className="month"><sup><small>$</small></sup> <span>49</span>/ <span className="font-size-13 text-muted">month</span></h2>
                                                <h2 className="annual"><sup><small>$</small></sup> <span>99</span>/ <span className="font-size-13 text-muted">annual</span></h2>
                                            </div>

                                            <div>
                                                <h5 className="mb-1">Unlimited</h5>
                                                <p className="text-muted">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse</p>

                                                <div>
                                                    <Link to="#" className="btn btn-primary w-100">Get started</Link>
                                                </div>
                                            </div>

                                            <hr className="my-4 text-muted" />

                                            <ul className="list-unstyled pricing-features mb-0">
                                                <li><i className="uil uil-check-circle text-success font-size-18 align-middle me-2"></i> Free Live Support</li>
                                                <li><i className="uil uil-check-circle text-success font-size-18 align-middle me-2"></i> Unlimited User</li>
                                                <li><i className="uil uil-check-circle text-success font-size-18 align-middle me-2"></i> 40GB Storage</li>
                                                <li><i className="uil uil-check-circle text-success font-size-18 align-middle me-2"></i> 1 Domain</li>
                                                <li><i className="uil uil-check-circle text-success font-size-18 align-middle me-2"></i> No Time Tracking</li>
                                                <li><i className="uil uil-check-circle text-success font-size-18 align-middle me-2"></i> Free Setup</li>
                                            </ul>
                                        </CardBody>
                                    </div>
                                </Col>

                            </Row>

                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    );
};

export default PricingBasic;