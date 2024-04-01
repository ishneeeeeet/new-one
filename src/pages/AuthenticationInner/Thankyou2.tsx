import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";

//import images
import logolight from "../../assets/images/logo-light.png";

const Thankyou2 = () => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>Thank you | Dashonic - React Admin & Dashboard Template</title>
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
                                                <div className="auth-img"></div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="p-4 p-lg-5 bg-primary h-100 d-flex align-items-center justify-content-center">
                                                    <div className="w-100 text-center">
                                                        <div className="mb-4 mb-md-5">
                                                            <Link to="/dashboard" className="d-block auth-logo">
                                                                <img src={logolight} alt="" />
                                                            </Link>
                                                        </div>

                                                        <div className="mb-4">
                                                            <div className="avatar-lg mx-auto">
                                                                <div className="avatar-title bg-light text-primary display-5 rounded-circle">
                                                                    <i className="uil uil-thumbs-up"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="text-white-50">
                                                            <h4 className="text-white">Thank You !</h4>
                                                            <p>Thank you for using <span className="fw-semibold">Dashonic</span></p>
                                                            <div className="mt-4">
                                                                <Link to="/dashboard" className="btn btn-info w-100">Back to Dashboard</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <div className="text-center text-muted p-4">
                                    <p className="mb-0">&copy; {" "}{new Date().getFullYear()} Dashonic. Crafted with <i className="mdi mdi-heart text-danger"></i> by Pichforest</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Thankyou2;