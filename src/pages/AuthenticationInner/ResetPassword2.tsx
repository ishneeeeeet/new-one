import React from "react";
import { Container, Row, Col, Form, Input, Label, Card } from "reactstrap";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";

//import images
import logolight from "../../assets/images/logo-light.png";

const ResetPassword2 = () => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>Reset Password | Dashonic - React Admin & Dashboard Template</title>
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
                                                    <div className="w-100">
                                                        <div className="mb-4 mb-md-5">
                                                            <Link to="/dashboard" className="d-block auth-logo">
                                                                <img src={logolight} alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="text-white-50 mb-4">
                                                            <h5 className="text-white">Reset Password</h5>
                                                            <p>Re-Password with Dashonic.</p>
                                                        </div>
                                                        <div className="alert alert-success text-center mb-4" role="alert">
                                                            Enter your Email and instructions will be sent to you!
                                                        </div>
                                                        <Form>
                                                            <div className="form-floating form-floating-custom mb-3">
                                                                <Input type="email" className="form-control" id="input-email" placeholder="Enter Email" />
                                                                <Label htmlFor="input-email">Email</Label>
                                                                <div className="form-floating-icon">
                                                                    <i className="uil uil-envelope-alt"></i>
                                                                </div>
                                                            </div>

                                                            <div className="mt-3">
                                                                <Link to="auth-forgotpassword-cover" className="btn btn-info w-100">Send Request</Link>
                                                            </div>
                                                        </Form>
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

export default ResetPassword2;