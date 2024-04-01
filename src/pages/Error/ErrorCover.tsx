import React from "react";
//import images
import logosm from "../../assets/images/logo-sm-light.png";
import { Container, Col, Row, Card } from "reactstrap";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";

const ErrorCover = () => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>500 Error | Dashonic - React Admin & Dashboard Template</title>
            </MetaTags>
            <div className="authentication-bg min-vh-100">
                <div className="bg-overlay bg-white"></div>

                <Container>
                    <div className="d-flex flex-column min-vh-100 px-3 pt-4">
                        <Row className="justify-content-center my-auto">
                            <Col lg={10}>
                                <div className="py-5">
                                    <Card className="auth-cover-card overflow-hidden">
                                        <Row className="g-0">
                                            <Col lg={6}>
                                                <div className="auth-img">
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="p-4 p-lg-5 bg-primary h-100 d-flex align-items-center justify-content-center">
                                                    <div className="w-100 text-center">
                                                        <h1 className="display-1 fw-normal error-text text-white">5<img src={logosm} alt=""
                                                            className="avatar-lg h-auto mx-2" />0</h1>
                                                        <h4 className="text-uppercase text-white-50">Internal Server Error</h4>
                                                        <div className="mt-5 text-center">
                                                            <Link className="btn btn-info w-100" to="/dashboard">Back to Dashboard</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>

            </div>
        </React.Fragment>
    );
};

export default ErrorCover;