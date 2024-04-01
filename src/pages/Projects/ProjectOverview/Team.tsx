import React from "react";
import { Row, Col, Nav, NavItem, NavLink, Card, CardBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Link } from "react-router-dom";

//Import Icons
import Icon from "@ailibs/feather-react-ts";

//import images
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../../assets/images/users/avatar-6.jpg";

const Team = () => {
    return (
        <React.Fragment>
            <div>
                <Card>
                    <CardBody>
                        <Row>
                            <Col md={6}>
                                <div className="mb-3">
                                    <h5 className="card-title">Member List <span className="text-muted fw-normal ms-2">(12)</span></h5>
                                </div>
                            </Col>

                            <Col md={6}>
                                <div className="d-flex flex-wrap align-items-start justify-content-end gap-2 mb-3">
                                    <div>
                                        <Nav pills>
                                            <NavItem>
                                                <NavLink href="#list">
                                                    <i className="uil uil-list-ul"></i>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="#" className="active">
                                                    <i className="uil uil-apps"></i>
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </div>

                                    <div>
                                        <Link to="#" className="btn btn-light"><i className="uil uil-plus me-1"></i> Add New</Link>
                                    </div>

                                    <UncontrolledDropdown>
                                        <DropdownToggle href="#" className="btn btn-link text-dark" tag="a">
                                            <i className="uil uil-ellipsis-h"></i>
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu-end">
                                            <DropdownItem href="#">Action</DropdownItem>
                                            <DropdownItem href="#">Another action</DropdownItem>
                                            <DropdownItem href="#">Something else here</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xl={4} sm={6}>
                                <div className="card border shadow-none">
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-start">
                                            <div className="flex-shrink-0 avatar rounded-circle me-3">
                                                <img src={avatar1} alt=""
                                                    className="img-fluid rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 overflow-hidden">
                                                <h5 className="font-size-15 mb-1 text-truncate"><Link to="#" className="text-dark">Donald
                                                    Risher</Link></h5>
                                                <p className="text-muted text-truncate mb-0">Full Stack Developer</p>
                                            </div>
                                            <UncontrolledDropdown className="flex-shrink-0">
                                                <DropdownToggle href="#" className="text-body font-size-16" tag="a">
                                                    <Icon name="more-horizontal" className="icon-xs" />
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-end">
                                                    <DropdownItem href="#">Action</DropdownItem>
                                                    <DropdownItem href="#">Another action</DropdownItem>
                                                    <DropdownItem href="#">Something else here</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </div>
                                    </div>
                                    <div className="btn-group btn-icon" role="group">
                                        <button type="button" className="btn btn-outline-light" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="Profile"><i className="uil uil-user"></i></button>
                                        <button type="button" className="btn btn-outline-light" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="Message"><i
                                                className="uil uil-envelope-alt"></i></button>
                                        <button type="button" className="btn btn-outline-light" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="Projects"><i className="uil uil-chart-pie"></i></button>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={4} sm={6}>
                                <div className="card border shadow-none">
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-start">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar rounded-circle">
                                                    <img src={avatar2} alt=""
                                                        className="img-fluid rounded-circle" />
                                                </div>
                                            </div>

                                            <div className="flex-grow-1 overflow-hidden">
                                                <h5 className="font-size-15 mb-1 text-truncate"><Link to="#" className="text-dark">Helen
                                                    Barron</Link></h5>
                                                <p className="text-muted text-truncate mb-0">Web Designer</p>
                                            </div>

                                            <UncontrolledDropdown className="flex-shrink-0">
                                                <DropdownToggle href="#" className="text-body font-size-16" tag="a">
                                                    <Icon name="more-horizontal" className="icon-xs" />
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-end">
                                                    <DropdownItem href="#">Action</DropdownItem>
                                                    <DropdownItem href="#">Another action</DropdownItem>
                                                    <DropdownItem href="#">Something else here</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>

                                        </div>
                                    </div>
                                    <div className="btn-group btn-icon" role="group">
                                        <button type="button" className="btn btn-outline-light" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="Profile"><i className="uil uil-user"></i></button>
                                        <button type="button" className="btn btn-outline-light" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="Message"><i
                                                className="uil uil-envelope-alt"></i></button>
                                        <button type="button" className="btn btn-outline-light" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="Projects"><i className="uil uil-chart-pie"></i></button>
                                    </div>
                                </div>

                            </Col>

                            <Col xl={4} sm={6}>
                                <div className="card border shadow-none">
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-start">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar rounded-circle">
                                                    <img src={avatar3} alt=""
                                                        className="img-fluid rounded-circle" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 overflow-hidden">
                                                <h5 className="font-size-15 mb-1 text-truncate"><Link to="#" className="text-dark">Philip
                                                    Theroux</Link></h5>
                                                <p className="text-muted text-truncate mb-0">UI/UX Designer</p>
                                            </div>
                                            <UncontrolledDropdown className="flex-shrink-0">
                                                <DropdownToggle href="#" className="text-body font-size-16" tag="a">
                                                    <Icon name="more-horizontal" className="icon-xs" />
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-end">
                                                    <DropdownItem href="#">Action</DropdownItem>
                                                    <DropdownItem href="#">Another action</DropdownItem>
                                                    <DropdownItem href="#">Something else here</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </div>
                                    </div>
                                    <div className="btn-group btn-icon" role="group">
                                        <button type="button" className="btn btn-outline-light" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="Profile"><i className="uil uil-user"></i></button>
                                        <button type="button" className="btn btn-outline-light" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="Message"><i
                                                className="uil uil-envelope-alt"></i></button>
                                        <button type="button" className="btn btn-outline-light" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="Projects"><i className="uil uil-chart-pie"></i></button>
                                    </div>
                                </div>

                            </Col>

                            <Col xl={4} sm={6}>
                                <div className="card border shadow-none">
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-start">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar rounded-circle">
                                                    <img src={avatar4} alt=""
                                                        className="img-fluid rounded-circle" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 overflow-hidden">
                                                <h5 className="font-size-15 mb-1 text-truncate"><Link to="#" className="text-dark">Donald
                                                    Risher</Link></h5>
                                                <p className="text-muted text-truncate mb-0">Backend Developer</p>
                                            </div>
                                            <UncontrolledDropdown className="flex-shrink-0">
                                                <DropdownToggle href="#" className="text-body font-size-16" tag="a">
                                                    <Icon name="more-horizontal" className="icon-xs" />
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-end">
                                                    <DropdownItem href="#">Action</DropdownItem>
                                                    <DropdownItem href="#">Another action</DropdownItem>
                                                    <DropdownItem href="#">Something else here</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </div>
                                    </div>
                                    <div className="btn-group btn-icon" role="group">
                                        <button type="button" className="btn btn-outline-light" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="Profile"><i className="uil uil-user"></i></button>
                                        <button type="button" className="btn btn-outline-light" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="Message"><i
                                                className="uil uil-envelope-alt"></i></button>
                                        <button type="button" className="btn btn-outline-light" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="Projects"><i className="uil uil-chart-pie"></i></button>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={4} sm={6}>
                                <div className="card border shadow-none">
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-start">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar rounded-circle">
                                                    <img src={avatar5} alt=""
                                                        className="img-fluid rounded-circle" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 overflow-hidden">
                                                <h5 className="font-size-15 mb-1 text-truncate"><Link to="#" className="text-dark">Gerald
                                                    Moyer</Link></h5>
                                                <p className="text-muted text-truncate mb-0">Backend Developer</p>
                                            </div>
                                            <UncontrolledDropdown className="flex-shrink-0">
                                                <DropdownToggle href="#" className="text-body font-size-16" tag="a">
                                                    <Icon name="more-horizontal" className="icon-xs" />
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-end">
                                                    <DropdownItem href="#">Action</DropdownItem>
                                                    <DropdownItem href="#">Another action</DropdownItem>
                                                    <DropdownItem href="#">Something else here</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </div>
                                    </div>
                                    <div className="btn-group btn-icon" role="group">
                                        <button type="button" className="btn btn-outline-light" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="Profile"><i className="uil uil-user"></i></button>
                                        <button type="button" className="btn btn-outline-light" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="Message"><i
                                                className="uil uil-envelope-alt"></i></button>
                                        <button type="button" className="btn btn-outline-light" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="Projects"><i className="uil uil-chart-pie"></i></button>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={4} sm={6}>
                                <div className="card border shadow-none">
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-start">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar rounded-circle">
                                                    <img src={avatar6} alt=""
                                                        className="img-fluid rounded-circle" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 overflow-hidden">
                                                <h5 className="font-size-15 mb-1 text-truncate"><Link to="#" className="text-dark">Sharon
                                                    Carver</Link></h5>
                                                <p className="text-muted text-truncate mb-0">Frontend Developer</p>
                                            </div>
                                            <UncontrolledDropdown className="flex-shrink-0">
                                                <DropdownToggle href="#" className="text-body font-size-16" tag="a">
                                                    <Icon name="more-horizontal" className="icon-xs" />
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-end">
                                                    <DropdownItem href="#">Action</DropdownItem>
                                                    <DropdownItem href="#">Another action</DropdownItem>
                                                    <DropdownItem href="#">Something else here</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </div>
                                    </div>
                                    <div className="btn-group btn-icon" role="group">
                                        <button type="button" className="btn btn-outline-light" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="Profile"><i className="uil uil-user"></i></button>
                                        <button type="button" className="btn btn-outline-light" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="Message"><i
                                                className="uil uil-envelope-alt"></i></button>
                                        <button type="button" className="btn btn-outline-light" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="Projects"><i className="uil uil-chart-pie"></i></button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div className="row g-0">
                            <div className="col-sm-6">
                                <div>
                                    <p className="mb-sm-0">Showing 1 to 2 of 12 entries</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="float-sm-end">
                                    <ul className="pagination pagination-rounded mb-sm-0">
                                        <li className="page-item">
                                            <Link to="#" className="page-link"><i className="mdi mdi-chevron-left"></i></Link>
                                        </li>
                                        <li className="page-item active">
                                            <Link to="#" className="page-link">1</Link>
                                        </li>
                                        <li className="page-item">
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
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </React.Fragment>
    );
}

export default Team;