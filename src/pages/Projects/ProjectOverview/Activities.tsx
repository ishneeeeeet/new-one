import React, { useState } from 'react';
import { Row, CardHeader, Col, Nav, NavItem, NavLink, Card, CardBody, TabContent, TabPane, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import classnames from 'classnames';

//import images
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";

const Activities = () => {

    const [activeTab1, setactiveTab1] = useState<string>("1");
    const toggle1 = (tab: any) => {
        if (activeTab1 !== tab) {
            setactiveTab1(tab);
        }
    };

    return (
        <React.Fragment>
            <Card>
                <CardHeader className="bg-transparent border-bottom d-flex">
                    <h5 className="card-title mb-0">Activities</h5>
                    <div className="ms-auto">

                        <Nav tabs className="card-header-tabs float-end border-bottom-0">
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab1 === '1' })}
                                    onClick={() => { toggle1('1'); }}
                                >
                                    <span className="d-block d-sm-none"><i className="uil uil-comment-alt-lines"></i></span>
                                    <span className="d-none d-sm-block">Messages</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab1 === '2' })}
                                    onClick={() => { toggle1('2'); }}
                                >
                                    <span className="d-block d-sm-none"><i className="uil uil-paperclip"></i></span>
                                    <span className="d-none d-sm-block">Attachments</span>
                                </NavLink>
                            </NavItem>
                        </Nav>

                    </div>
                </CardHeader>
                <CardBody>
                    <TabContent activeTab={activeTab1}>
                        <TabPane tabId="1">
                            <div>
                                <SimpleBar style={{ maxHeight: "280px" }}>
                                    <div className="list-group list-group-flush">
                                        <div className="list-group-item py-3">
                                            <div className="d-flex aligm-items-start">
                                                <div className="flex-shrink-0 me-3">
                                                    <img src={avatar2} alt="" className="avatar-sm rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h5 className="font-size-13 mb-1 text-truncate"><Link to="#" className="text-dark">John Patino</Link> <small className="text-muted ms-1">09:34 AM</small></h5>
                                                    <p className="text-muted mb-0">Donec quam felis ultricies nec, pellentesque eu pretium quis</p>
                                                </div>
                                                <div className="flex-shrink-0 ms-2">
                                                    <ul className="list-inline mb-0">
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="text-muted font-size-15 px-1">
                                                                <i className="uil uil-smile"></i>
                                                            </Link>
                                                        </li>{" "}
                                                        <li className="list-inline-item">
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle href="#" className="text-muted font-size-15 px-2" tag="a">
                                                                    <i className="uil uil-ellipsis-h"></i>
                                                                </DropdownToggle>
                                                                <DropdownMenu className="dropdown-menu-end">
                                                                    <DropdownItem href="#"><i className="uil uil-copy align-bottom text-muted me-2"></i> Copy</DropdownItem>
                                                                    <DropdownItem href="#"><i className="uil uil-comment-alt-notes align-bottom text-muted me-2"></i> Reply</DropdownItem>
                                                                    <DropdownItem href="#"><i className="uil uil-share align-bottom text-muted me-2"></i> Forward</DropdownItem>
                                                                    <DropdownItem divider />
                                                                    <DropdownItem href="#"><i className="uil uil-trash-alt align-bottom text-muted me-2"></i> Remove</DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>

                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="list-group-item py-3">
                                            <div className="d-flex aligm-items-center">
                                                <div className="flex-shrink-0 me-3">
                                                    <img src={avatar1} alt="" className="avatar-sm rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h5 className="font-size-13 mb-1 text-truncate"><Link to="#" className="text-dark">Kate Daniels</Link> <small className="text-muted ms-1">09:45 AM</small></h5>
                                                    <p className="text-muted mb-0">Aenean imperdiet. etiam ultricies nisi vel augue.</p>
                                                </div>
                                                <div className="flex-shrink-0 ms-2">
                                                    <ul className="list-inline mb-0">
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="text-muted font-size-15 px-1">
                                                                <i className="uil uil-smile"></i>
                                                            </Link>
                                                        </li>{" "}
                                                        <li className="list-inline-item">
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle href="#" className="text-muted font-size-15 px-2" tag="a">
                                                                    <i className="uil uil-ellipsis-h"></i>
                                                                </DropdownToggle>
                                                                <DropdownMenu className="dropdown-menu-end">
                                                                    <DropdownItem href="#"><i className="uil uil-copy align-bottom text-muted me-2"></i> Copy</DropdownItem>
                                                                    <DropdownItem href="#"><i className="uil uil-comment-alt-notes align-bottom text-muted me-2"></i> Reply</DropdownItem>
                                                                    <DropdownItem href="#"><i className="uil uil-share align-bottom text-muted me-2"></i> Forward</DropdownItem>
                                                                    <DropdownItem divider />
                                                                    <DropdownItem href="#"><i className="uil uil-trash-alt align-bottom text-muted me-2"></i> Remove</DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="list-group-item py-3">
                                            <div className="d-flex aligm-items-center">
                                                <div className="flex-shrink-0 me-3">
                                                    <img src={avatar2} alt="" className="avatar-sm rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h5 className="font-size-13 mb-1 text-truncate"><Link to="#" className="text-dark">John Patino</Link> <small className="text-muted ms-1">10:15 AM</small></h5>
                                                    <Row>
                                                        <Col lg={4} sm={6}>
                                                            <div className="card border p-2 shadow-none mt-2 mb-2">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="flex-shrink-0 avatar-sm me-3">
                                                                        <span className="avatar-title bg-light text-primary rounded font-size-20">
                                                                            <i className="uil uil-scenery"></i>
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex-grow-1 overflow-hidden">
                                                                        <h5 className="font-size-12 mb-1 text-truncate"><Link to="#" className="text-dark">Image-1.jpg</Link></h5>
                                                                        <p className="text-muted mb-0 font-size-12">1.2 MB</p>
                                                                    </div>
                                                                    <div className="flex-shrink-0 ms-2">
                                                                        <Link to="#" className="px-2 font-size-18 text-muted">
                                                                            <i className="uil uil-download-alt"></i>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <div className="flex-shrink-0 ms-2">
                                                    <ul className="list-inline mb-0">
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="text-muted font-size-15 px-1">
                                                                <i className="uil uil-smile"></i>
                                                            </Link>
                                                        </li>{" "}
                                                        <li className="list-inline-item">
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle href="#" className="text-muted font-size-15 px-2" tag="a">
                                                                    <i className="uil uil-ellipsis-h"></i>
                                                                </DropdownToggle>
                                                                <DropdownMenu className="dropdown-menu-end">
                                                                    <DropdownItem href="#"><i className="uil uil-copy align-bottom text-muted me-2"></i> Copy</DropdownItem>
                                                                    <DropdownItem href="#"><i className="uil uil-comment-alt-notes align-bottom text-muted me-2"></i> Reply</DropdownItem>
                                                                    <DropdownItem href="#"><i className="uil uil-share align-bottom text-muted me-2"></i> Forward</DropdownItem>
                                                                    <DropdownItem divider />
                                                                    <DropdownItem href="#"><i className="uil uil-trash-alt align-bottom text-muted me-2"></i> Remove</DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="list-group-item py-3">
                                            <div className="d-flex aligm-items-center">
                                                <div className="flex-shrink-0 flex-shrink-0 avatar-sm me-3">
                                                    <div className="avatar-title rounded-circle bg-light text-primary">
                                                        J
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h5 className="font-size-13 mb-1 text-truncate"><Link to="#" className="text-dark">Jerry Macleod</Link> <small className="text-muted ms-1">11:34 AM</small></h5>
                                                    <p className="text-muted mb-0">Sed consequat, leo eget augue velit</p>
                                                </div>
                                                <div className="flex-shrink-0 ms-2">
                                                    <ul className="list-inline mb-0">
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="text-muted font-size-15 px-1">
                                                                <i className="uil uil-smile"></i>
                                                            </Link>
                                                        </li>{" "}
                                                        <li className="list-inline-item">
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle href="#" className="text-muted font-size-15 px-2" tag="a">
                                                                    <i className="uil uil-ellipsis-h"></i>
                                                                </DropdownToggle>
                                                                <DropdownMenu className="dropdown-menu-end">
                                                                    <DropdownItem href="#"><i className="uil uil-copy align-bottom text-muted me-2"></i> Copy</DropdownItem>
                                                                    <DropdownItem href="#"><i className="uil uil-comment-alt-notes align-bottom text-muted me-2"></i> Reply</DropdownItem>
                                                                    <DropdownItem href="#"><i className="uil uil-share align-bottom text-muted me-2"></i> Forward</DropdownItem>
                                                                    <DropdownItem divider />
                                                                    <DropdownItem href="#"><i className="uil uil-trash-alt align-bottom text-muted me-2"></i> Remove</DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SimpleBar>
                                <div className="d-flex chat-input-section align-items-start pt-3">
                                    <div className="flex-shrink-0 d-none d-sm-block me-3">
                                        <img src={avatar4} alt="" className="avatar-sm rounded-circle" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="position-relative d-flex align-items-start">
                                            <input type="text" className="form-control chat-input" placeholder="Some text value..." />
                                            <div className="chat-input-links d-flex align-items-start">
                                                <button type="button" className="btn btn-link text-muted" data-bs-toggle="tooltip" data-bs-placement="top" title="Emoji"><i className="uil uil-smile"></i></button>
                                                <button type="button" className="btn btn-link text-muted" data-bs-toggle="tooltip" data-bs-placement="top" title="Attachments"><i className="uil uil-paperclip"></i></button>
                                                <button type="button" className="btn btn-primary"><i className="uil uil-message"></i></button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </TabPane>
                        <TabPane tabId="2">
                            <div>
                                <SimpleBar style={{ maxHeight: "280px" }}>
                                    <div className="list-group list-group-flush">
                                        <div className="list-group-item py-3">
                                            <div className="d-flex align-items-start">
                                                <div className="flex-shrink-0 avatar-sm me-3">
                                                    <span className="avatar-title bg-light text-primary rounded font-size-20">
                                                        <i className="uil uil-scenery"></i>
                                                    </span>
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h5 className="font-size-13 mb-1 text-truncate"><Link to="#" className="text-dark">Image-1.jpg</Link></h5>
                                                    <p className="text-muted mb-0 font-size-12">1.2 MB</p>
                                                </div>
                                                <div className="flex-shrink-0 ms-2">
                                                    <ul className="list-inline mb-0">
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="text-muted font-size-18 px-2">
                                                                <i className="uil uil-download-alt"></i>
                                                            </Link>
                                                        </li>{" "}
                                                        <li className="list-inline-item">
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle href="#" className="text-muted font-size-18 px-2" tag="a">
                                                                    <i className="uil uil-ellipsis-h"></i>
                                                                </DropdownToggle>
                                                                <DropdownMenu className="dropdown-menu-end">
                                                                    <DropdownItem href="#">Action</DropdownItem>
                                                                    <DropdownItem href="#">Another action</DropdownItem>
                                                                    <DropdownItem href="#">Something else here</DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="list-group-item py-3">
                                            <div className="d-flex align-items-start">
                                                <div className="flex-shrink-0 avatar-sm me-3">
                                                    <span className="avatar-title bg-light text-primary rounded font-size-20">
                                                        <i className="uil uil-scenery"></i>
                                                    </span>
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h5 className="font-size-13 mb-1 text-truncate"><Link to="#" className="text-dark">Image-2.jpg</Link></h5>
                                                    <p className="text-muted mb-0 font-size-12">1.3 MB</p>
                                                </div>
                                                <div className="flex-shrink-0 ms-2">
                                                    <ul className="list-inline mb-0">
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="text-muted font-size-18 px-2">
                                                                <i className="uil uil-download-alt"></i>
                                                            </Link>
                                                        </li>{" "}
                                                        <li className="list-inline-item">
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle href="#" className="text-muted font-size-18 px-2" tag="a">
                                                                    <i className="uil uil-ellipsis-h"></i>
                                                                </DropdownToggle>
                                                                <DropdownMenu className="dropdown-menu-end">
                                                                    <DropdownItem href="#">Action</DropdownItem>
                                                                    <DropdownItem href="#">Another action</DropdownItem>
                                                                    <DropdownItem href="#">Something else here</DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="list-group-item py-3">
                                            <div className="d-flex align-items-start">
                                                <div className="flex-shrink-0 avatar-sm me-3">
                                                    <span className="avatar-title bg-light text-primary rounded font-size-20">
                                                        <i className="uil uil-folder"></i>
                                                    </span>
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h5 className="font-size-13 mb-1 text-truncate"><Link to="#" className="text-dark">Pages changes.zip</Link></h5>
                                                    <p className="text-muted mb-0 font-size-12">2.1 MB</p>
                                                </div>
                                                <div className="flex-shrink-0 ms-2">
                                                    <ul className="list-inline mb-0">
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="text-muted font-size-18 px-2">
                                                                <i className="uil uil-download-alt"></i>
                                                            </Link>
                                                        </li>{" "}
                                                        <li className="list-inline-item">
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle href="#" className="text-muted font-size-18 px-2" tag="a">
                                                                    <i className="uil uil-ellipsis-h"></i>
                                                                </DropdownToggle>
                                                                <DropdownMenu className="dropdown-menu-end">
                                                                    <DropdownItem href="#">Action</DropdownItem>
                                                                    <DropdownItem href="#">Another action</DropdownItem>
                                                                    <DropdownItem href="#">Something else here</DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="list-group-item py-3">
                                            <div className="d-flex align-items-start">
                                                <div className="flex-shrink-0 avatar-sm me-3">
                                                    <span className="avatar-title bg-light text-primary rounded font-size-20">
                                                        <i className="uil uil-scenery"></i>
                                                    </span>
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h5 className="font-size-13 mb-1 text-truncate"><Link to="#" className="text-dark">Image-3.jpg</Link></h5>
                                                    <p className="text-muted mb-0 font-size-12">1.2 MB</p>
                                                </div>
                                                <div className="flex-shrink-0 ms-2">
                                                    <ul className="list-inline mb-0">
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="text-muted font-size-18 px-2">
                                                                <i className="uil uil-download-alt"></i>
                                                            </Link>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle href="#" className="text-muted font-size-18 px-2" tag="a">
                                                                    <i className="uil uil-ellipsis-h"></i>
                                                                </DropdownToggle>
                                                                <DropdownMenu className="dropdown-menu-end">
                                                                    <DropdownItem href="#">Action</DropdownItem>
                                                                    <DropdownItem href="#">Another action</DropdownItem>
                                                                    <DropdownItem href="#">Something else here</DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="list-group-item py-3">
                                            <div className="d-flex align-items-start">
                                                <div className="flex-shrink-0 avatar-sm me-3">
                                                    <span className="avatar-title bg-light text-primary rounded font-size-20">
                                                        <i className="uil uil-scenery"></i>
                                                    </span>
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h5 className="font-size-13 mb-1 text-truncate"><Link to="#" className="text-dark">Img-1.png</Link></h5>
                                                    <p className="text-muted mb-0 font-size-12">1.3 MB</p>
                                                </div>
                                                <div className="flex-shrink-0 ms-2">
                                                    <ul className="list-inline mb-0">
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="text-muted font-size-18 px-2">
                                                                <i className="uil uil-download-alt"></i>
                                                            </Link>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle href="#" className="text-muted font-size-18 px-2" tag="a">
                                                                    <i className="uil uil-ellipsis-h"></i>
                                                                </DropdownToggle>
                                                                <DropdownMenu className="dropdown-menu-end">
                                                                    <DropdownItem href="#">Action</DropdownItem>
                                                                    <DropdownItem href="#">Another action</DropdownItem>
                                                                    <DropdownItem href="#">Something else here</DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </SimpleBar>
                            </div>

                        </TabPane>
                    </TabContent>
                </CardBody>
            </Card>
        </React.Fragment>
    );
}

export default Activities;