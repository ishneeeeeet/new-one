import MetaTags from "react-meta-tags";
import React from "react";

import { Row, Col, Alert, Container } from "reactstrap";

//redux
import { useSelector, useDispatch } from "react-redux";

import { withRouter, Link } from "react-router-dom";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

//Social Media Imports
import { GoogleLogin } from "react-google-login";

import config from "../../config";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

// actions
import { loginUser, socialLogin } from "../../slices/thunks";

//import images
import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo-light.png";

interface LoginProps {
  history: any;
}

const Login = ({ history }: LoginProps) => {
  const dispatch = useDispatch();

  const { error } = useSelector((state: any) => ({
    error: state.login.error,
  }));

  // handleValidSubmit
  const handleValidSubmit = (event: any, values: any) => {
    dispatch(loginUser(values, history));
  };

  const signIn = (res: any, type: any) => {
    if (type === "google" && res) {
      const postData = {
        name: res.profileObj.name,
        email: res.profileObj.email,
        token: res.tokenObj.access_token,
        idToken: res.tokenId,
      };
      dispatch(socialLogin(postData, history, type));
    } else if (type === "facebook" && res) {
      const postData = {
        name: res.name,
        token: res.accessToken,
      };
      dispatch(socialLogin(postData, history, type));
    }
  };

  //handleGoogleLoginResponse
  const googleResponse = (response: Object) => {
    signIn(response, "google");
  };

  //handleFacebookLoginResponse
  const facebookResponse = (response: Object) => {
    signIn(response, "facebook");
  };

  return (
    <React.Fragment>
      <MetaTags>
        <title>Login | Calgary Carpet Empire</title>
      </MetaTags>
      <div className="authentication-bg min-vh-100">
        <div className="bg-overlay bg-white"></div>
        <Container>
          <div className="d-flex flex-column min-vh-100 px-3 pt-4">
            <Row className="justify-content-center my-auto">
              <Col md={8} lg={6} xl={4}>

                <div className="py-5">
                  <div className="mb-4 mb-md-5 text-center">
                    <Link to="/dashboard" className="d-block auth-logo">
                      <img src={''} alt="Calgary Carpet Empire" height="22" className="auth-logo-dark" />
                      <img src={''} alt="Calgary Carpet Empire" height="22" className="auth-logo-light" />
                    </Link>
                  </div>
                  <div className="text-center mb-4">
                    <h5>Welcome Back !</h5>
                    <p>Sign in to continue to Calgary Carpet Empire.</p>
                  </div>
                  <AvForm
                    onValidSubmit={(e: any, v: any) => {
                      handleValidSubmit(e, v);
                    }}
                  >
                    {error ? <Alert color="danger">{error}</Alert> : null}
                    <div className="form-floating form-floating-custom mb-3">
                      <AvField
                        name="email"
                        label="Email"
                        value="admin@calgarycarpetempire.com"
                        className="form-control"
                        placeholder="Enter email"
                        type="email"
                        required
                      />
                    </div>
                    <div className="form-floating form-floating-custom mb-3">
                      <AvField
                        name="password"
                        label="password"
                        value="123456"
                        type="password"
                        className="form-control"
                        required
                        placeholder="Enter Password"
                      />
                    </div>
                    <div className="form-check form-check-info font-size-16">
                      <input className="form-check-input" type="checkbox" id="remember-check" />
                      <label className="form-check-label font-size-14" htmlFor="remember-check">
                        Remember me
                      </label>
                    </div>

                    <div className="mt-3">
                      <button className="btn btn-info w-100" type="submit">Log In</button>
                    </div>

                    <div className="mt-4 text-center">
                      <h5 className="font-size-14 mb-3">Sign in with</h5>

                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <FacebookLogin
                            appId="" // Enter Your Facebook AppID
                            autoLoad={false}
                            callback={facebookResponse}
                            render={(renderProps: any) => (
                              <Link
                                to="#"
                                className="social-list-item bg-primary text-white border-primary"
                                onClick={renderProps.onClick}
                              >
                                <i className="mdi mdi-facebook" />
                              </Link>
                            )}
                          />
                        </li>

                        <li className="list-inline-item">
                          <GoogleLogin
                            clientId={
                              config.google.CLIENT_ID ? config.google.CLIENT_ID : "" // Enter Your Client ID
                            }
                            render={renderProps => (
                              <Link
                                to="#"
                                className="social-list-item bg-danger text-white border-danger"
                                onClick={renderProps.onClick}
                              >
                                <i className="mdi mdi-google" />
                              </Link>
                            )}
                            onSuccess={googleResponse}
                            onFailure={() => { }}
                          />
                        </li>
                      </ul>
                    </div>

                    <div className="mt-4 text-center"><Link className="text-muted" to="/forgot-password"><i className="mdi mdi-lock me-1"></i> Forgot your password?</Link></div>

                  </AvForm>

                  <div className="mt-5 text-center text-muted">
                    <p>Don&apos;t have an account ? <Link to="/register" className="fw-medium text-decoration-underline"> Signup </Link></p>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xl="12">
                <div className="text-center text-muted p-4">
                  <p className="mb-0">&copy;{new Date().getFullYear()} Dashonic. Crafted with <i className="mdi mdi-heart text-danger"></i> by Pichforest</p>
                </div>
              </Col>
            </Row>

          </div>
        </Container>
      </div></React.Fragment>
  );
};

export default withRouter(Login);