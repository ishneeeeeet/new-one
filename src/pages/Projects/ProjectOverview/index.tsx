import React, { useState } from "react"
import MetaTags from "react-meta-tags";
import { Col, Container, Row, Card, CardBody, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav, NavItem, TabPane, TabContent, NavLink } from "reactstrap";
import SimpleBar from "simplebar-react";
import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";

import Overview from "./Overview"
import Tasks from "./Tasks";
import Team from "./Team";
import Activities from "./Activities";
import classnames from 'classnames';

//import images
import avatar2 from "../../../assets/images/users/avatar-2.jpg";

const ProjectOverview = () => {
  const [menu, setMenu] = useState(false);
  const [menu1, setMenu1] = useState<boolean>(false);
  const [activeTab, setactiveTab] = useState<string>("1");

  const toggleTab = (tab: any) => {
    if (activeTab !== tab) {
      setactiveTab(tab);
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Project Overview | Dashonic - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Projects" breadcrumbItem="Project Overview" />

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody className="pb-0">
                  <Row>
                    <div className="col">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="avatar">
                            <div className="avatar-title bg-soft-primary text-primary font-size-18 rounded">
                              D
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <div className="text-muted">
                            <h5 className="font-size-16 mb-1">Dashonic Admin</h5>
                            <p className="mb-0">Neque porro quisquam est, quia dolor sit amet</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-auto">
                      <div>
                        <div className="d-flex flex-wrap align-items-start justify-content-md-end gap-2 mb-3">
                          <Dropdown
                            isOpen={menu}
                            toggle={() => setMenu(!menu)}
                          >
                            <DropdownToggle
                              className="btn btn-light"
                              tag="a"
                            >
                              <i className="uil uil-bell"></i><span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1"><span className="visually-hidden">unread messages</span></span>
                            </DropdownToggle>

                            <DropdownMenu className="dropdown-menu-end dropdown-menu-lg">
                              <div className="px-3 py-2">
                                <div className="row align-items-center">
                                  <div className="col">
                                    <h5 className="font-size-15 m-0"> Notifications </h5>
                                  </div>
                                  <div className="col-auto">
                                    <div className="badge bg-success rounded-pill">02</div>
                                  </div>
                                </div>
                              </div>
                              <SimpleBar style={{ height: "190px" }}>

                                <Link to="#" className="dropdown-item p-3">
                                  <div className="d-flex align-items-start">
                                    <div className="flex-shrink-0 avatar-sm align-self-center me-3">
                                      <img src={avatar2} alt="" className="img-fluid rounded-circle" />
                                    </div>
                                    <div className="flex-grow-1 overflow-hidden">
                                      <h5 className="font-size-13 mb-1">James Lemire</h5>
                                      <div className="font-size-12">
                                        <p className="text-muted text-truncate mb-0">If several languages coalesce the grammar</p>
                                      </div>
                                    </div>
                                    <p className="text-muted font-size-12 mb-0"><i className="mdi mdi-clock-outline"></i> 3 Mins</p>
                                  </div>
                                </Link>

                              </SimpleBar>
                            </DropdownMenu>
                          </Dropdown>

                          <Dropdown isOpen={menu1}
                            toggle={() => setMenu1(!menu1)}>
                            <DropdownToggle className="btn btn-link text-dark shadow-none" color="">
                              <i className="uil uil-ellipsis-h"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <DropdownItem href="#">Action</DropdownItem>
                              <DropdownItem href="#">Another action</DropdownItem>
                              <DropdownItem href="#">Something else here</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>

                        </div>
                      </div>
                    </div>
                  </Row>

                  <Row>
                    <Col lg={5}>
                      <div className="mt-3">
                        <ul className="text-muted ps-4">
                          <li className="py-1">Sed ut perspiciatis unde omnis iste</li>
                          <li className="py-1">It va esser tam simplic quam</li>
                        </ul>
                      </div>
                    </Col>

                    <Col lg={7}>
                      <Row>
                        <Col lg={4} sm={6}>
                          <div className="d-flex align-items-center mt-4">
                            <div className="flex-shrink-0 me-3">
                              <i className="uil uil-calendar-alt text-primary font-size-22"></i>
                            </div>
                            <div className="flex-grow-1">
                              <h5 className="font-size-12 mb-1">Start Date</h5>
                              <p className="text-muted mb-0">06 Mar, 2021</p>
                            </div>
                          </div>
                        </Col>


                        <Col lg={4} sm={6}>
                          <div className="d-flex align-items-center mt-4">
                            <div className="flex-shrink-0 me-3">
                              <i className="uil uil-check-circle text-primary font-size-22"></i>
                            </div>
                            <div className="flex-grow-1">
                              <h5 className="font-size-12 mb-1">Due Date</h5>
                              <p className="text-muted mb-0">15 May, 2021</p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <div className="mt-3">

                    <Nav className="nav-tabs nav-tabs-custom">
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: activeTab === "1",
                          })}
                          onClick={() => {
                            toggleTab("1")
                          }}
                        >
                          Overview
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: activeTab === "2",
                          })}
                          onClick={() => {
                            toggleTab("2")
                          }}
                        >
                          Tasks
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: activeTab === "3",
                          })}
                          onClick={() => {
                            toggleTab("3")
                          }}
                        >
                          Team
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: activeTab === "4",
                          })}
                          onClick={() => {
                            toggleTab("4")
                          }}
                        >
                          Activities
                        </NavLink>
                      </NavItem>
                    </Nav>

                  </div>
                </CardBody>
              </Card>

              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <Overview />
                </TabPane>
                <TabPane tabId="2">
                  <Tasks />
                </TabPane>

                <TabPane tabId="3">
                  <Team />
                </TabPane>

                <TabPane tabId="4">
                  <Activities />
                </TabPane>
              </TabContent>
            </Col>
          </Row>

        </Container>
      </div >
    </React.Fragment >
  )
}

export default ProjectOverview;