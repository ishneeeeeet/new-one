import React from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay, Pagination, Navigation, Keyboard, EffectFlip
} from 'swiper/core';

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/effect-flip/effect-flip.min.css";

import {
    Card,
    CardBody,
    Col,
    Container,
    Row
} from "reactstrap";

import Breadcrumbs from "../../components/Common/Breadcrumb";

SwiperCore.use([Autoplay, Pagination, Navigation, Keyboard, EffectFlip]);

const TimeLineHorizontal = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Horizontal Timeline | Dashonic - React Admin & Dashboard Template</title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Timeline" breadcrumbItem="Horizontal Timeline" />

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <div className="hori-timeline">

                                        <div className="swiper-container slider">
                                            <div className="d-flex align-items-start">
                                                <div className="flex-grow-1">
                                                    <h5 className="card-title mb-4">Example</h5>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <div className="swiper-arrow d-flex gap-2 justify-content-end arrow-sm">
                                                        <div className="swiper-button-prev prev position-relative rounded-start"></div>
                                                        <div className="swiper-button-next next position-relative rounded-end"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <Swiper
                                                slidesPerView={4}
                                                navigation={{
                                                    clickable: true,
                                                    prevEl: '.prev',
                                                    nextEl: '.next',
                                                }}
                                                className="mySwiper">
                                                <SwiperSlide>
                                                    <div className="event-list">
                                                        <p className="font-size-13 text-primary">15 May</p>

                                                        <h5 className="font-size-14 mb-1">First Event</h5>
                                                        <p className="text-muted">ABC Company</p>

                                                        <div>
                                                            <p className="text-muted text-truncate">It will be as simple as occidental in fact it will be Cambridge</p>

                                                            <div>
                                                                <Link to="#" className="text-primary">View Detail</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="event-list">
                                                        <p className="font-size-13 text-primary">21 May</p>

                                                        <h5 className="font-size-14 mb-1">Second Event</h5>
                                                        <p className="text-muted">XYZ Company</p>
                                                        <div>
                                                            <p className="text-muted text-truncate">To an English person, it will seem like simplified English existence.</p>

                                                            <div>
                                                                <Link to="#" className="text-primary">View Detail</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="event-list">
                                                        <p className="font-size-13 text-primary">02 Jun</p>

                                                        <h5 className="font-size-14 mb-1">Third Event</h5>
                                                        <p className="text-muted">ABC Company</p>
                                                        <div>
                                                            <p className="text-muted text-truncate">For science, music, sport, etc, Europe uses the same vocabulary.</p>

                                                            <div>
                                                                <Link to="#" className="text-primary">View Detail</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="event-list">
                                                        <p className="font-size-13 text-primary">08 Jun</p>

                                                        <h5 className="font-size-14 mb-1">Fourth Event</h5>
                                                        <p className="text-muted">XYZ Company</p>
                                                        <div>
                                                            <p className="text-muted text-truncate">New common language will be more simple than existing.</p>

                                                            <div>
                                                                <Link to="#" className="text-primary">View Detail</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="event-list">
                                                        <p className="font-size-13 text-primary">15 Jun</p>

                                                        <h5 className="font-size-14 mb-1">Fifth Event</h5>
                                                        <p className="text-muted">XYZ Company</p>
                                                        <div>
                                                            <p className="text-muted text-truncate">It will be as simple as occidental in fact it will be Cambridge</p>

                                                            <div>
                                                                <Link to="#" className="text-primary">View Detail</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="event-list">
                                                        <p className="font-size-13 text-primary">23 Jun</p>

                                                        <h5 className="font-size-14 mb-1">Sixth Event</h5>
                                                        <p className="text-muted">XYZ Company</p>
                                                        <div>
                                                            <p className="text-muted text-truncate">To an English person, it will seem like simplified English existence.</p>

                                                            <div>
                                                                <Link to="#" className="text-primary">View Detail</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </div>
                                </CardBody>

                            </Card>

                        </Col>

                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>

                                    <div className="hori-timeline timeline-card">

                                        <div className="swiper-container" id="timeline-card-slider">
                                            <div className="d-flex align-items-start">
                                                <div className="flex-grow-1">
                                                    <h5 className="card-title mb-4">Timeline with Card</h5>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <div className="swiper-arrow d-flex gap-2 justify-content-end arrow-sm">
                                                        <div className="swiper-button-prev prev1 position-relative rounded-start"></div>
                                                        <div className="swiper-button-next next1 position-relative rounded-end"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <Swiper
                                                slidesPerView={5}
                                                navigation={{
                                                    clickable: true,
                                                    prevEl: '.prev1',
                                                    nextEl: '.next1',
                                                }}
                                                className="mySwiper">
                                                <SwiperSlide>
                                                    <div className="event-list">
                                                        <div className="event-list-item">
                                                            <p className="font-size-13 text-primary">15 May</p>

                                                            <h5 className="font-size-14 mb-1">First Event</h5>
                                                            <p className="text-muted">ABC Company</p>

                                                            <div>
                                                                <p className="text-muted text-truncate">It will be as simple as occidental in fact it will be Cambridge</p>

                                                                <div>
                                                                    <Link to="#" className="text-primary">View Detail</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="event-list">
                                                        <div className="event-list-item">
                                                            <p className="font-size-13 text-primary">21 May</p>

                                                            <h5 className="font-size-14 mb-1">Second Event</h5>
                                                            <p className="text-muted">XYZ Company</p>
                                                            <div>
                                                                <p className="text-muted text-truncate">To an English person, it will seem like simplified English existence.</p>

                                                                <div>
                                                                    <Link to="#" className="text-primary">View Detail</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="event-list">
                                                        <div className="event-list-item">
                                                            <p className="font-size-13 text-primary">02 Jun</p>

                                                            <h5 className="font-size-14 mb-1">Third Event</h5>
                                                            <p className="text-muted">ABC Company</p>
                                                            <div>
                                                                <p className="text-muted text-truncate">For science, music, sport, etc, Europe uses the same vocabulary.</p>

                                                                <div>
                                                                    <Link to="#" className="text-primary">View Detail</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="event-list">
                                                        <div className="event-list-item">
                                                            <p className="font-size-13 text-primary">08 Jun</p>

                                                            <h5 className="font-size-14 mb-1">Fourth Event</h5>
                                                            <p className="text-muted">XYZ Company</p>
                                                            <div>
                                                                <p className="text-muted text-truncate">New common language will be more simple than existing.</p>

                                                                <div>
                                                                    <Link to="#" className="text-primary">View Detail</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="event-list">
                                                        <div className="event-list-item">
                                                            <p className="font-size-13 text-primary">15 Jun</p>

                                                            <h5 className="font-size-14 mb-1">Fifth Event</h5>
                                                            <p className="text-muted">XYZ Company</p>
                                                            <div>
                                                                <p className="text-muted text-truncate">It will be as simple as occidental in fact it will be Cambridge</p>

                                                                <div>
                                                                    <Link to="#" className="text-primary">View Detail</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="event-list">
                                                        <div className="event-list-item">
                                                            <p className="font-size-13 text-primary">23 Jun</p>

                                                            <h5 className="font-size-14 mb-1">Sixth Event</h5>
                                                            <p className="text-muted">XYZ Company</p>
                                                            <div>
                                                                <p className="text-muted text-truncate">To an English person, it will seem like simplified English existence.</p>

                                                                <div>
                                                                    <Link to="#" className="text-primary">View Detail</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </div>
                                </CardBody>

                            </Card>

                        </Col>

                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default TimeLineHorizontal;