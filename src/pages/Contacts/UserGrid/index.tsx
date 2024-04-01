import React, { useEffect } from "react";
import MetaTags from "react-meta-tags";
import { Link, withRouter } from "react-router-dom";
import {
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledDropdown,
  Nav,
  NavItem,
} from "reactstrap";
import { map } from "lodash";

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";

//Import Card
import CardContact from "../cardContact";

//redux
import { useSelector, useDispatch } from "react-redux";

import { getUsers as onGetUsers } from "../../../slices/thunks";

import { CardBody, Card } from "reactstrap";

const UserGrid = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state: any) => ({
    users: state.contacts.users,
  }));

  useEffect(() => {
    if (users && !users.length) {
      dispatch(onGetUsers());
    }
  }, [dispatch, users]);

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>User Grid | Dashonic - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Contacts" breadcrumbItem="User Grid" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <Row>
                    <Col md={6}>
                      <div className="mb-3">
                        <h5 className="card-title">Contact List <span
                          className="text-muted fw-normal ms-2">(834)</span></h5>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="d-flex flex-wrap align-items-start justify-content-md-end mt-2 mt-md-0 gap-2 mb-3">
                        <div>
                          <Nav pills>
                            <NavItem>
                              <Link className="nav-link" to="user-list">
                                <i className="uil uil-list-ul"></i>
                              </Link>
                            </NavItem>
                            <NavItem>
                              <Link className="nav-link active" to="user-grid">
                                <i className="uil uil-apps"></i>
                              </Link>
                            </NavItem>
                          </Nav>
                        </div>
                        <div>
                          <Link to="#" className="btn btn-light">
                            <i className="uil uil-plus me-1"></i> Add New
                          </Link>
                        </div>

                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn btn-link text-dark shadow-none"
                            tag="a"
                          >
                            <i className="uil uil-ellipsis-h"></i>
                          </DropdownToggle>

                          <DropdownMenu className="dropdown-menu-end">
                            <li>
                              <DropdownItem to="#">Action</DropdownItem>
                            </li>
                            <li>
                              <DropdownItem to="#">Another action</DropdownItem>
                            </li>
                            <li>
                              <DropdownItem to="#">Something else here</DropdownItem>
                            </li>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    {map(users, (user, key) => (
                      <CardContact user={user} key={"_user_" + key} />
                    ))}
                  </Row>

                  <Row className="g-0 text-center text-sm-start">
                    <Col sm={6}>
                      <div>
                        <p className="mb-sm-0">Showing 1 to 10 of 57 entries</p>
                      </div>
                    </Col>
                    <Col sm={6}>
                      <ul
                        className="pagination pagination-rounded justify-content-center justify-content-sm-end mb-sm-0">
                        <li className="page-item disabled">
                          <Link to="#" className="page-link"><i className="mdi mdi-chevron-left"></i></Link>
                        </li>
                        <li className="page-item">
                          <Link to="#" className="page-link">1</Link>
                        </li>
                        <li className="page-item active">
                          <Link to="#" className="page-link">2</Link>
                        </li>
                        <li className="page-item">
                          <Link to="#" className="page-link">3</Link>
                        </li>
                        <li className="page-item">
                          <Link to="#" className="page-link">4</Link>
                        </li>
                        <li className="page-item">
                          <Link to="#" className="page-link">5</Link>
                        </li>
                        <li className="page-item">
                          <Link to="#" className="page-link"><i className="mdi mdi-chevron-right"></i></Link>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(UserGrid);
