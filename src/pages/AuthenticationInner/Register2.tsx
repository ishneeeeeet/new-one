import React from "react";
import { Container, Row, Col, Form, Input, Label, Button } from "reactstrap";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";

//import images
import logolight from "../../assets/images/logo-light.png";

const Register2 = () => {
    return (
        <div className="authentication-bg min-vh-100">
            <div className="bg-overlay bg-white"></div>
            <Container>
                <MetaTags>
                    <title>Register | Dashonic - React Admin & Dashboard Template</title>
                </MetaTags>
                <div className="d-flex flex-column min-vh-100 px-3 pt-4">
                    <Row className="justify-content-center my-auto">
                        <Col lg={10}>

                            <div className="py-5">
                                <div className="card auth-cover-card overflow-hidden">
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
                                                        <h5 className="text-white">Register Account</h5>
                                                        <p>Get your free Dashonic account now.</p>
                                                    </div>
                                                    <Form>
                                                        <div className="form-floating form-floating-custom mb-3">
                                                            <Input type="email" className="form-control" id="input-email" placeholder="Enter Email" />
                                                            <Label htmlFor="input-email">Email</Label>
                                                            <div className="form-floating-icon">
                                                                <i className="uil uil-envelope-alt"></i>
                                                            </div>
                                                        </div>
                                                        <div className="form-floating form-floating-custom mb-3">
                                                            <Input type="text" className="form-control" id="input-username" placeholder="Enter User Name" />
                                                            <Label htmlFor="input-username">Username</Label>
                                                            <div className="form-floating-icon">
                                                                <i className="uil uil-users-alt"></i>
                                                            </div>
                                                        </div>
                                                        <div className="form-floating form-floating-custom mb-3">
                                                            <Input type="password" className="form-control" id="floatingPassword" placeholder="Enter Password" />
                                                            <Label htmlFor="floatingPassword">Password</Label>
                                                            <div className="form-floating-icon">
                                                                <i className="uil uil-padlock"></i>
                                                            </div>
                                                        </div>

                                                        <div className="text-white-50">
                                                            <p>By registering you agree to the Dashonic <Link to="#" className="text-white">Terms of Use</Link></p>
                                                        </div>

                                                        <div className="mt-4">
                                                            <Button color="info" className="w-100" type="submit">Register</Button>
                                                        </div>
                                                    </Form>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="mt-5 text-center text-muted">
                                    <p>Already have an account ? <Link to="auth-signin-cover" className="fw-medium text-decoration-underline"> Signin </Link></p>
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
    );
};

export default Register2;