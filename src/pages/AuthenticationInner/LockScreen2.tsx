import React from "react";
import { Container, Row, Col, Form, Card, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";

//import images
import logolight from "../../assets/images/logo-light.png";
import avatar10 from "../../assets/images/users/avatar-10.jpg";

const LockScreen2 = () => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>Lock Screen | Dashonic - React Admin & Dashboard Template</title>
            </MetaTags>
            <div className="authentication-bg min-vh-100">
                <div className="bg-overlay bg-white"></div>
                <Container>
                    <div className="d-flex flex-column min-vh-100 px-3 pt-4">
                        <Row className="justify-content-center my-auto ">
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
                                                        <div className="mb-4 mb-md-5">
                                                            <Link to="/dashboard" className="d-block auth-logo">
                                                                <img src={logolight} alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="user-thumb mb-4 mb-md-5">
                                                            <img src={avatar10} className="rounded-circle img-thumbnail avatar-lg" alt="thumbnail" />
                                                            <h5 className="font-size-16 text-white mt-3">Kate Dudley</h5>
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
                                                                <Button className="btn btn-info w-100" type="button">Unlock</Button>
                                                            </div>
                                                        </Form>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
                                    <div className="mt-5 text-center text-muted">
                                        <p>Not you ? return <Link to="auth-signin-cover" className="fw-medium text-decoration-underline"> Signin </Link></p>
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

export default LockScreen2;