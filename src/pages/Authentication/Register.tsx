import React, { useEffect } from "react";
import MetaTags from "react-meta-tags";
import { Row, Col, Alert, Container } from "reactstrap";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

// action
import { registerUser } from "../../slices/thunks";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

// import images
import logoDark from "../../assets/images/logo-dark.png";
import logolight from "../../assets/images/logo-light.png";

const Register = () => {
  const dispatch = useDispatch();

  const { user, registrationError } = useSelector((state: any) => ({
    user: state.register.user,
    registrationError: state.register.registrationError,
    loading: state.register.loading,
  }));

  // handleValidSubmit
  const handleValidSubmit = (values: any) => {
    dispatch(registerUser(values));
  };

  useEffect(() => {
    // dispatch(apiError(""));
  }, [dispatch]);

  return (
    <React.Fragment>
      <MetaTags>
        <title>Register | Dashonic - React Admin & Dashboard Template</title>
      </MetaTags>
      <div className="authentication-bg min-vh-100">
        <div className="bg-overlay bg-white"></div>
        <Container>
          <div className="d-flex flex-column min-vh-100 px-3 pt-4">
            <Row className="justify-content-center my-auto">
              <Col md={8} lg={6} xl={4}>
                <div className="py-5">
                  <div className="mb-4 mb-md-5">
                    <Link to="/dashboard" className="d-block auth-logo text-center">
                      <img src={logoDark} alt="" height="22" className="auth-logo-dark" />
                      <img src={logolight} alt="" height="22" className="auth-logo-light" />
                    </Link>
                  </div>
                  <div className="text-center mb-4">
                    <h5 className="">Register Account</h5>
                    <p>Get your free Dashonic account now.</p>
                  </div>
                  <AvForm
                    className="needs-validation custom-form mt-4 pt-2"
                    onValidSubmit={(e: any, v: any) => {
                      handleValidSubmit(v);
                    }}
                  >
                    {user && user ? (
                      <Alert color="success">
                        Register User Successfully
                      </Alert>
                    ) : null}

                    {registrationError && registrationError ? (
                      <Alert color="danger">{registrationError}</Alert>
                    ) : null}

                    <div className="form-floating form-floating-custom mb-3">
                      <AvField
                        id="email"
                        name="email"
                        label="Email"
                        className="form-control"
                        placeholder="Enter email"
                        type="email"
                        required
                      />
                    </div>
                    <div className="form-floating form-floating-custom mb-3">
                      <AvField
                        name="username"
                        label="Username"
                        type="text"
                        required
                        placeholder="Enter username"
                      />
                    </div>
                    <div className="form-floating form-floating-custom mb-3">
                      <AvField
                        name="password"
                        label="Password"
                        type="password"
                        required
                        placeholder="Enter Password"
                      />
                    </div>

                    <div className="text-start">
                      <p>By registering you agree to the Dashonic <Link to="#" className="text-decoration-underline">Terms of Use</Link></p>
                    </div>

                    <div className="mt-3">
                      <button className="btn btn-info w-100" type="submit">Register</button>
                    </div>
                  </AvForm>

                  <div className="mt-5 text-center">
                    <p>Already have an account ? <Link to="/login" className="fw-medium text-decoration-underline"> Signin </Link></p>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg="12">
                <div className="text-center text-muted p-4">
                  <p className="mb-0">&copy; {new Date().getFullYear()} Dashonic. Crafted with <i className="mdi mdi-heart text-danger"></i> by Pichforest</p>
                </div>
              </Col>
            </Row>

          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Register;
