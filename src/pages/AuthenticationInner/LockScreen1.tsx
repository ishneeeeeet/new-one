import React from "react";
import { Container, Row, Col, Form, Button, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";

//import images
import logolight from "../../assets/images/logo-light.png";
import logoDark from "../../assets/images/logo-dark.png";

import avatar10 from "../../assets/images/users/avatar-10.jpg";

const LockScreen1 = () => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>Lock Screen | Dashonic - React Admin & Dashboard Template</title>
            </MetaTags>
            <div className="authentication-bg min-vh-100">
                <div className="bg-overlay bg-white"></div>
                <Container>
                    <div className="d-flex flex-column min-vh-100 px-3 pt-4">
                        <Row className="justify-content-center my-auto">
                            <Col md={8} lg={6} xl={4}>

                                <div className="text-center py-5">
                                    <div className="mb-4 mb-md-5">
                                        <Link to="/dashboard" className="d-block auth-logo">
                                            <img src={logoDark} alt="" height="22" className="auth-logo-dark" />
                                            <img src={logolight} alt="" height="22" className="auth-logo-light" />
                                        </Link>
                                    </div>
                                    <div className="user-thumb mb-4 mb-md-5">
                                        <img src={avatar10} className="rounded-circle img-thumbnail avatar-lg" alt="thumbnail" />
                                        <h5 className="font-size-16 mt-3">Kate Dudley</h5>
                                    </div>
                                    <Form>
                                        <div className="form-floating form-floating-custom mb-3">
                                            <Input type="password" className="form-control" id="input-password" placeholder="Enter Password" />
                                            <Label htmlFor="input-password">Password</Label>
                                            <div className="form-floating-icon">
                                                <i className="uil uil-padlock"></i>
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <Button color="info" className="w-100" type="button">Unlock</Button>
                                        </div>
                                    </Form>

                                    <div className="mt-5 text-center text-muted">
                                        <p>Not you ? return <Link to="auth-signin-basic" className="fw-medium text-decoration-underline"> Signin </Link></p>
                                    </div>
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

export default LockScreen1;