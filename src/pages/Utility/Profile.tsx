import React from "react";
import MetaTags from "react-meta-tags";
import {
    Card,
    CardBody,
    Col,
    Container,
    Row,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SimpleBar from "simplebar-react";
import { Link } from 'react-router-dom';

import SwiperCore, {
    Autoplay, Pagination, Navigation, Keyboard, EffectFlip
} from 'swiper/core';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import img9 from "../../assets/images/small/img-9.jpg";
import img2 from "../../assets/images/small/img-2.jpg";
import img3 from "../../assets/images/small/img-3.jpg";
import img4 from "../../assets/images/small/img-4.jpg";
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";

SwiperCore.use([Autoplay, Pagination, Navigation, Keyboard, EffectFlip]);

const Profile = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Profle | Dashonic - React Admin & Dashboard Template</title>
                </MetaTags>
                <Container fluid>
                    <div className="mx-n4 mt-n4">
                        <Row>
                            <Col lg={12}>
                                <Card className="mb-0">
                                    <CardBody className="p-0">
                                        <div className="profile-bg position-relative overflow-hidden">
                                            <div className="bg-overlay bg-dark bg-gradient"></div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>

                    <Row>
                        <Col xl={3}>
                            <Card className="mt-n5">
                                <CardBody className="text-center">
                                    <div className="text-end">
                                        <UncontrolledDropdown>
                                            <DropdownToggle
                                                type="button"
                                                className="btn btn-link text-dark font-size-16 p-1 shadow-none"
                                                tag="a"
                                            >
                                                <i className="uil uil-ellipsis-h"></i>
                                            </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu-end">
                                                <DropdownItem to="#">Action</DropdownItem>
                                                <DropdownItem to="#">Another action</DropdownItem>
                                                <DropdownItem to="#">Something else here</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </div>
                                    <div className="avatar-xl mx-auto mb-4">
                                        <img src={avatar1} alt="" className="rounded-circle img-thumbnail" />
                                    </div>
                                    <h5 className="mb-1">Katie Sharpe</h5>
                                    <p className="text-muted">Full Stack Developer</p>

                                    <div><i className="mdi mdi-wallet text-muted font-size-16 align-middle me-1"></i> <span className="align-middle">Balance : <b className="fw-semibold font-size-16">$6951.02</b></span></div>
                                </CardBody>
                                <div className="d-flex border-top p-2">
                                    <div className="flex-grow-1">
                                        <div className="p-2 ps-3">$40/-hr</div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <button type="button" className="btn btn-light"><i className="uil uil-envelope-alt me-1"></i> Message</button>
                                    </div>
                                </div>
                            </Card>


                            <Card>
                                <CardBody>
                                    <ul className="list-unstyled mb-0">
                                        <li className="pb-3">
                                            <div className="d-flex align-items-center">
                                                <div className="font-size-20 text-primary flex-shrink-0 me-3">
                                                    <i className="uil uil-globe"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <p className="text-muted mb-1 font-size-13">Website</p>
                                                    <h5 className="mb-0 font-size-14">https://dashonic123.com</h5>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="py-3">
                                            <div className="d-flex align-items-center">
                                                <div className="font-size-20 text-primary flex-shrink-0 me-3">
                                                    <i className="uil uil-envelope-alt"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <p className="text-muted mb-1 font-size-13">Email</p>
                                                    <h5 className="mb-0 font-size-14">katie@dashonic.com</h5>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="py-3">
                                            <div className="d-flex align-items-center">
                                                <div className="font-size-20 text-primary flex-shrink-0 me-3">
                                                    <i className="uil uil-map-marker"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <p className="text-muted mb-1 font-size-13">Location</p>
                                                    <h5 className="mb-0 font-size-14">California, United States</h5>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="pt-3">
                                            <div className="d-flex align-items-center">
                                                <div className="font-size-20 text-primary flex-shrink-0 me-3">
                                                    <i className="uil uil-user"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <p className="text-muted mb-1 font-size-13">Experience</p>
                                                    <h5 className="mb-0 font-size-14">4 Years</h5>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <div>
                                        <ul className="list-unstyled mb-0 text-muted">
                                            <li>
                                                <div className="d-flex align-items-center py-2">
                                                    <div className="flex-grow-1">
                                                        <i className="mdi mdi-github font-size-16 text-dark me-1"></i> Github
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <div>dashonic</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center py-2">
                                                    <div className="flex-grow-1">
                                                        <i className="mdi mdi-twitter font-size-16 text-info me-1"></i> Twitter
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <div>@dashonic</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center py-2">
                                                    <div className="flex-grow-1">
                                                        <i className="mdi mdi-linkedin font-size-16 text-primary me-1"></i> Linkedin
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <div>dashonic</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center py-2">
                                                    <div className="flex-grow-1">
                                                        <i className="mdi mdi-pinterest font-size-16 text-danger me-1"></i> Pinterest
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <div>dashonic</div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl={9}>
                            <div className="mt-4">
                                <Row>
                                    <Col lg={8}>
                                        <Card>
                                            <CardBody>
                                                <h5 className="card-title mb-4">About</h5>

                                                <p>Hi I&apos;m Katie, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                                                <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at it has a more-or-less normal distribution of letters</p>
                                            </CardBody>
                                        </Card>

                                        <Card>
                                            <CardBody>
                                                <div className="hori-timeline">
                                                    <div className="swiper-container slider">
                                                        <div className="d-flex align-items-start">
                                                            <div className="flex-grow-1">
                                                                <h5 className="card-title mb-4">Experience</h5>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <div className="swiper-arrow d-flex gap-2 justify-content-end arrow-sm">
                                                                    <div className="swiper-button-prev position-relative rounded-start"></div>
                                                                    <div className="swiper-button-next position-relative rounded-end"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Swiper
                                                            slidesPerView={3}
                                                            navigation={{
                                                                clickable: true,
                                                                prevEl: '.swiper-button-prev',
                                                                nextEl: '.swiper-button-next',
                                                            }}
                                                            className="mySwiper">
                                                            <SwiperSlide>
                                                                <div className="event-list pb-2">
                                                                    <p className="font-size-13 text-primary">2018 - 20</p>

                                                                    <h5 className="font-size-14 mb-1">Full Stack Developer</h5>
                                                                    <p className="text-muted mb-0">ABC Company</p>
                                                                </div>
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <div className="event-list pb-2">
                                                                    <p className="font-size-13 text-primary">2017 - 18</p>

                                                                    <h5 className="font-size-14 mb-1">Backend Developer</h5>
                                                                    <p className="text-muted mb-0">XYZ Company</p>
                                                                </div>
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <div className="event-list pb-2">
                                                                    <p className="font-size-13 text-primary">2015 - 17</p>

                                                                    <h5 className="font-size-14 mb-1">Frontend Developer</h5>
                                                                    <p className="text-muted mb-0">ABC Company</p>
                                                                </div>
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <div className="event-list pb-2">
                                                                    <p className="font-size-13 text-primary">2018 - 20</p>

                                                                    <h5 className="font-size-14 mb-1">UI/UX Designer</h5>
                                                                    <p className="text-muted mb-0">XYZ Company</p>
                                                                </div>
                                                            </SwiperSlide>
                                                        </Swiper>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>

                                        <Card>
                                            <CardBody>
                                                <h5 className="card-title mb-3">Blog</h5>

                                                <SimpleBar style={{ maxHeight: "242px" }}>
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item py-3 px-0">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0 me-3">
                                                                    <div>
                                                                        <img src={img4} alt="blog img" className="avatar-lg h-auto rounded" />
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1 overflow-hidden">
                                                                    <h5 className="font-size-14 mb-1 text-truncate"><Link to="#" className="text-dark">Beautiful Day with Friends</Link></h5>
                                                                    <ul className="list-inline font-size-13 text-muted">
                                                                        <li className="list-inline-item">
                                                                            <Link to="#" className="text-muted">
                                                                                <i className="uil uil-user me-1"></i> Katie
                                                                            </Link>
                                                                        </li>{" "}
                                                                        <li className="list-inline-item">
                                                                            <i className="uil uil-calender me-1"></i> 12 May
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="flex-shrink-0 ms-2">
                                                                    <UncontrolledDropdown>
                                                                        <DropdownToggle
                                                                            type="button"
                                                                            className="btn btn-link text-dark font-size-16 p-1 shadow-none"
                                                                            tag="a"
                                                                        >
                                                                            <i className="uil uil-ellipsis-h"></i>
                                                                        </DropdownToggle>
                                                                        <DropdownMenu className="dropdown-menu-end">
                                                                            <DropdownItem to="#">Action</DropdownItem>
                                                                            <DropdownItem to="#">Another action</DropdownItem>
                                                                            <DropdownItem to="#">Something else here</DropdownItem>
                                                                        </DropdownMenu>
                                                                    </UncontrolledDropdown>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="list-group-item py-3 px-0">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0 me-3">
                                                                    <div>
                                                                        <img src={img3} alt="blog img" className="avatar-lg h-auto rounded" />
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1 overflow-hidden">
                                                                    <h5 className="font-size-14 mb-1 text-truncate"><Link to="#" className="text-dark">Morning skating with friends</Link></h5>
                                                                    <ul className="list-inline font-size-13 text-muted">
                                                                        <li className="list-inline-item">
                                                                            <Link to="#" className="text-muted">
                                                                                <i className="uil uil-user me-1"></i> Katie
                                                                            </Link>
                                                                        </li>{" "}
                                                                        <li className="list-inline-item">
                                                                            <i className="uil uil-calender me-1"></i> 24 Apr
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="flex-shrink-0 ms-2">
                                                                    <UncontrolledDropdown>
                                                                        <DropdownToggle
                                                                            type="button"
                                                                            className="btn btn-link text-dark font-size-16 p-1 shadow-none"
                                                                            tag="a"
                                                                        >
                                                                            <i className="uil uil-ellipsis-h"></i>
                                                                        </DropdownToggle>
                                                                        <DropdownMenu className="dropdown-menu-end">
                                                                            <DropdownItem to="#">Action</DropdownItem>
                                                                            <DropdownItem to="#">Another action</DropdownItem>
                                                                            <DropdownItem to="#">Something else here</DropdownItem>
                                                                        </DropdownMenu>
                                                                    </UncontrolledDropdown>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="list-group-item py-3 px-0">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0 me-3">
                                                                    <div>
                                                                        <img src={img2} alt="blog img" className="avatar-lg h-auto rounded" />
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1 overflow-hidden">
                                                                    <h5 className="font-size-14 mb-1 text-truncate"><Link to="#" className="text-dark">Project Discussion with Team</Link></h5>
                                                                    <ul className="list-inline font-size-13 text-muted">
                                                                        <li className="list-inline-item">
                                                                            <Link to="#" className="text-muted">
                                                                                <i className="uil uil-user me-1"></i> Katie
                                                                            </Link>
                                                                        </li>{" "}
                                                                        <li className="list-inline-item">
                                                                            <i className="uil uil-calender me-1"></i> 12 Apr
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="flex-shrink-0 ms-2">
                                                                    <UncontrolledDropdown>
                                                                        <DropdownToggle
                                                                            type="button"
                                                                            className="btn btn-link text-dark font-size-16 p-1 shadow-none"
                                                                            tag="a"
                                                                        >
                                                                            <i className="uil uil-ellipsis-h"></i>
                                                                        </DropdownToggle>
                                                                        <DropdownMenu className="dropdown-menu-end">
                                                                            <DropdownItem to="#">Action</DropdownItem>
                                                                            <DropdownItem to="#">Another action</DropdownItem>
                                                                            <DropdownItem to="#">Something else here</DropdownItem>
                                                                        </DropdownMenu>
                                                                    </UncontrolledDropdown>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="list-group-item py-3 px-0">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0 me-3">
                                                                    <div>
                                                                        <img src={img9} alt="blog img" className="avatar-lg h-auto rounded" />
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1 overflow-hidden">
                                                                    <h5 className="font-size-14 mb-1 text-truncate"><Link to="#" className="text-dark">Reading book</Link></h5>
                                                                    <ul className="list-inline font-size-13 text-muted">
                                                                        <li className="list-inline-item">
                                                                            <Link to="#" className="text-muted">
                                                                                <i className="uil uil-user me-1"></i> Katie
                                                                            </Link>
                                                                        </li>{" "}
                                                                        <li className="list-inline-item">
                                                                            <i className="uil uil-calender me-1"></i> 01 Apr
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="flex-shrink-0 ms-2">
                                                                    <UncontrolledDropdown>
                                                                        <DropdownToggle
                                                                            type="button"
                                                                            className="btn btn-link text-dark font-size-16 p-1 shadow-none"
                                                                            tag="a"
                                                                        >
                                                                            <i className="uil uil-ellipsis-h"></i>
                                                                        </DropdownToggle>
                                                                        <DropdownMenu className="dropdown-menu-end">
                                                                            <DropdownItem to="#">Action</DropdownItem>
                                                                            <DropdownItem to="#">Another action</DropdownItem>
                                                                            <DropdownItem to="#">Something else here</DropdownItem>
                                                                        </DropdownMenu>
                                                                    </UncontrolledDropdown>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </SimpleBar>
                                            </CardBody>
                                        </Card>
                                    </Col>

                                    <div className="col-lg-4">
                                        <Card>
                                            <CardBody>
                                                <h5 className="card-title mb-4">Skills</h5>

                                                <div className="d-flex flex-wrap gap-2 font-size-16">
                                                    <Link to="#" className="badge badge-soft-primary">Photoshop</Link>
                                                    <Link to="#" className="badge badge-soft-primary">illustrator</Link>
                                                    <Link to="#" className="badge badge-soft-primary">HTML</Link>
                                                    <Link to="#" className="badge badge-soft-primary">CSS</Link>
                                                    <Link to="#" className="badge badge-soft-primary">Javascript</Link>
                                                    <Link to="#" className="badge badge-soft-primary">Php</Link>
                                                    <Link to="#" className="badge badge-soft-primary">Python</Link>
                                                </div>
                                            </CardBody>
                                        </Card>

                                        <Card>
                                            <CardBody>
                                                <h5 className="card-title mb-3">Portfolio</h5>

                                                <div>
                                                    <ul className="list-unstyled mb-0">
                                                        <li>
                                                            <Link to="#" className="py-2 d-block text-muted"><i className="uil uil-globe font-size-16 text-primary me-1"></i> Website</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#" className="py-2 d-block text-muted"><i className="uil uil-newspaper font-size-16 text-primary me-1"></i> Blog</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#" className="py-2 d-block text-muted"><i className="uil uil-notebooks font-size-16 text-primary me-1"></i> Projects</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#" className="py-2 d-block text-muted"><i className="uil uil-images font-size-16 text-primary me-1"></i> Posts</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#" className="py-2 d-block text-muted"><i className="uil uil-newspaper font-size-16 text-primary me-1"></i> Portfolio</Link>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </CardBody>
                                        </Card>

                                        <Card>
                                            <div className="card-header border-bottom-0">
                                                <h5 className="card-title">Similar Profiles</h5>
                                            </div>
                                            <div>

                                                <div className="list-group list-group-flush mb-2">
                                                    <Link to="#" className="list-group-item list-group-item-action">
                                                        <div className="d-flex align-items-center">
                                                            <div className="avatar flex-shrink-0 me-3">
                                                                <img src={avatar2} alt="" className="img-thumbnail rounded-circle" />
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <div>
                                                                    <h5 className="font-size-14 mb-1">Esther James</h5>
                                                                    <p className="font-size-13 text-muted mb-0">Frontend Developer</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <Link to="#" className="list-group-item list-group-item-action">
                                                        <div className="d-flex align-items-center">
                                                            <div className="avatar flex-shrink-0 me-3">
                                                                <img src={avatar3} alt="" className="img-thumbnail rounded-circle" />
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <div>
                                                                    <h5 className="font-size-14 mb-1">Jacqueline Steve</h5>
                                                                    <p className="font-size-13 text-muted mb-0">UI/UX Designer</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <Link to="#" className="list-group-item list-group-item-action">
                                                        <div className="d-flex align-items-center">
                                                            <div className="avatar flex-shrink-0 me-3">
                                                                <img src={avatar4} alt="" className="img-thumbnail rounded-circle" />
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <div>
                                                                    <h5 className="font-size-14 mb-1">George Whalen</h5>
                                                                    <p className="font-size-13 text-muted mb-0">Backend Developer</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <Link to="#" className="list-group-item list-group-item-action">
                                                        <div className="d-flex align-items-center">
                                                            <div className="avatar flex-shrink-0 me-3">
                                                                <img src={avatar5} alt="" className="img-thumbnail rounded-circle" />
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <div>
                                                                    <h5 className="font-size-14 mb-1">Frontend Developer</h5>
                                                                    <p className="font-size-13 text-muted mb-0">Frontend Developer</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Profile;