import React from "react";
import { Container, Row, Col, Form, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";

//import images
import logolight from "../../assets/images/logo-light.png";

const Login2 = () => {
  return (
    <React.Fragment>
      <div className="authentication-bg min-vh-100">
        <div className="bg-overlay bg-white"></div>
        <Container>
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
                              <h5 className="text-white">Welcome Back !</h5>
                              <p>Sign in to continue to Dashonic.</p>
                            </div>
                            
                            <Form>
                              <div className="form-floating form-floating-custom mb-3">
                                <Input type="text" className="form-control" id="input-username" placeholder="Enter User name" />
                                <Label htmlFor="input-username">Username</Label>
                                <div className="form-floating-icon">
                                  <i className="uil uil-users-alt"></i>
                                </div>
                              </div>
                              <div className="form-floating form-floating-custom mb-3">
                                <Input type="password" className="form-control" id="input-password" placeholder="Enter Password" />
                                <Label htmlFor="input-password">Password</Label>
                                <div className="form-floating-icon">
                                  <i className="uil uil-padlock"></i>
                                </div>
                              </div>

                              <div className="form-check form-check-info text-white-50 font-size-16">
                                <Input className="form-check-input bg-soft-primary" type="checkbox" id="remember-check" />
                                <Label className="form-check-label font-size-14" htmlFor="remember-check">
                                  Remember me
                                </Label>
                              </div>

                              <div className="mt-3">
                                <button className="btn btn-info w-100" type="submit">Log In</button>
                              </div>

                              <div className="mt-4 text-center">
                                <Link to="auth-resetpassword-cover" className="text-white-50 text-decoration-underline">Forgot your password?</Link>
                              </div>
                            </Form>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="mt-5 text-center text-muted">
                    <p>Don&apos;t have an account ? <Link to="auth-signup-cover" className="fw-medium text-decoration-underline"> Signup </Link></p>
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

export default Login2;
