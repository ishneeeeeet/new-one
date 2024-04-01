import React from "react";
import { Container, Row, Col, Form } from "reactstrap";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";

//import images
import logolight from "../../assets/images/logo-light.png";
import logoDark from "../../assets/images/logo-dark.png";

const ForgotPassword1 = () => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>Forgot Password | Dashonic - React Admin & Dashboard Template</title>
            </MetaTags>
            <div className="authentication-bg min-vh-100">
                <div className="bg-overlay bg-white"></div>
                <Container>
                    <div className="d-flex flex-column min-vh-100 px-3 pt-4">
                        <Row className=" justify-content-center my-auto">
                            <Col md={8} lg={6} xl={4}>

                                <div className="text-center py-5">
                                    <div className="mb-4 mb-md-5">
                                        <Link to="/dashboard" className="d-block auth-logo">
                                            <img src={logoDark} alt="" height="22" className="auth-logo-dark" />
                                            <img src={logolight} alt="" height="22" className="auth-logo-light" />
                                        </Link>
                                    </div>
                                    <div className="text-muted mb-4">
                                        <h5 className="">Forgot Password</h5>
                                        <p>Forgot Your Password?</p>
                                    </div>
                                    <Form>
                                        <div className="form-floating form-floating-custom mb-3">
                                            <input type="password" className="form-control" id="input-newpassword" placeholder="Password" />
                                            <label htmlFor="input-newpassword">New Password</label>
                                            <div className="form-floating-icon">
                                                <i className="uil uil-padlock"></i>
                                            </div>
                                        </div>
                                        <div className="form-floating form-floating-custom mb-3">
                                            <input type="password" className="form-control" id="input-confirmpassword" placeholder="Password" />
                                            <label htmlFor="input-confirmpassword">Confirm Password</label>
                                            <div className="form-floating-icon">
                                                <i className="uil uil-check-circle"></i>
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <button className="btn btn-info w-100" type="submit">Reset</button>
                                        </div>
                                    </Form>

                                    <div className="mt-5 text-center text-muted">
                                        <p>Remember It ? <Link to="auth-signin-basic" className="fw-medium text-decoration-underline"> Sign In </Link></p>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="12">
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

export default ForgotPassword1;