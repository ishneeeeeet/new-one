import MetaTags from "react-meta-tags";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Alert, CardBody, Button } from "reactstrap";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

//redux
import { useSelector, useDispatch } from "react-redux";

import { withRouter } from "react-router-dom";

//Import Breadcrumb
import Breadcrumb from "../../components/Common/Breadcrumb";

import avatar from "../../assets/images/users/avatar-1.jpg";
// actions
import { editProfile } from "../../slices/thunks";

const UserProfile = () => {
  const dispatch = useDispatch();

  const { error, success } = useSelector((state: any) => ({
    error: state.profile.error,
    success: state.profile.success,
  }));

  const [email, setemail] = useState<string>("");
  const [name, setname] = useState<string>("");
  const [idx, setidx] = useState<number>(1);

  useEffect(() => {
    const authUser: any = localStorage.getItem("authUser");

    if (authUser) {
      const obj = JSON.parse(authUser);
      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
        if(obj.displayName){
          setname(obj.displayName);
        }else{
          setname(obj.fullName);
        }
        setemail(obj.email);
        setidx(obj.uid);
        
      } else if (
        process.env.REACT_APP_DEFAULTAUTH === "fake" ||
        process.env.REACT_APP_DEFAULTAUTH === "jwt"
      ) {
        if(obj.username){
          setname(obj.username);
          setemail(obj.email);
          setidx(obj.uid);
        }else{
          setname(obj.name);
        }
      }
    }

  }, [dispatch, success]);

  function handleValidSubmit(event: any, values: any) {
    dispatch(editProfile(values));
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Profile | Dashonic - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumb title="Dashonic" breadcrumbItem="Profile" />

          <Row>
            <Col lg="12">
              {error && error ? <Alert color="danger">{error}</Alert> : null}
              {success ? <Alert color="success">{success}</Alert> : null}

              <Card>
                <CardBody>
                  <div className="d-flex">
                    <div className="ms-3">
                      <img
                        src={avatar}
                        alt=""
                        className="avatar-md rounded-circle img-thumbnail"
                      />
                    </div>
                    <div className="flex-grow-1 align-self-center ms-3">
                      <div className="text-muted">
                        <h5>{name}</h5>
                        <p className="mb-1">{email}</p>
                        <p className="mb-0">Id no: #{idx}</p>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <h4 className="card-title mb-4">Change User Name</h4>

          <Card>
            <CardBody>
              <AvForm
                className="form-horizontal"
                onValidSubmit={(e: any, v: any) => {
                  handleValidSubmit(e, v);
                }}
              >
                <div className="form-group">
                  <AvField
                    name="username"
                    label="User Name"
                    value={name}
                    className="form-control"
                    placeholder="Enter User Name"
                    type="text"
                    required
                  />
                  <AvField name="idx" value={idx} type="hidden" />
                </div>
                <div className="text-center mt-4">
                  <Button type="submit" color="danger">
                    Update User Name
                  </Button>
                </div>
              </AvForm>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(UserProfile);