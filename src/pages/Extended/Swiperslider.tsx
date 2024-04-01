import React from "react";
import MetaTags from "react-meta-tags";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay, Pagination, Navigation, Keyboard, EffectFlip
} from 'swiper/core';
import {Link} from "react-router-dom";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/effect-flip/effect-flip.min.css"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import img1 from '../../assets/images/small/img-1.jpg';
import img2 from '../../assets/images/small/img-2.jpg';
import img3 from '../../assets/images/small/img-3.jpg';
import img4 from '../../assets/images/small/img-7.jpg';
import img5 from '../../assets/images/small/img-5.jpg';
import img6 from '../../assets/images/small/img-6.jpg';
import img7 from '../../assets/images/small/img-7.jpg';

SwiperCore.use([Autoplay, Pagination, Navigation, Keyboard, EffectFlip]);

const Swiperslider = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Swiper Slider | Dashonic - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Extended UI" breadcrumbItem="Swiper Slider" />
          <Row>
            <Col xl={4} lg={6}>
              <Card>
                <CardHeader className="justify-content-between d-flex align-items-center">
                  <h4 className="card-title">Default Swiper</h4>
                  <Link to="//swiperjs.com/react" rel="noreferrer" className="btn btn-sm btn-soft-secondary">Docs <i className="mdi mdi-arrow-right align-middle"></i></Link>
                </CardHeader>
                <CardBody>
                  <Swiper centeredSlides={true}
                    autoplay={{
                      "delay": 3000,
                      "disableOnInteraction": false
                    }} className="mySwiper">
                    <SwiperSlide>
                      <div className="">
                        <img src={img1} className="img-fluid mx-auto d-block" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="">
                        <img src={img2} className="img-fluid mx-auto d-block" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="">
                        <img src={img3} className="img-fluid mx-auto d-block" />
                      </div>
                    </SwiperSlide>

                  </Swiper>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4} lg={6}>
              <Card>
                <CardHeader className="justify-content-between d-flex align-items-center">
                  <h4 className="card-title">Navigation Swiper</h4>
                  <Link to="//swiperjs.com/react" rel="noreferrer" className="btn btn-sm btn-soft-secondary">Docs <i className="mdi mdi-arrow-right align-middle"></i></Link>
                </CardHeader>
                <CardBody>
                  <Swiper centeredSlides={true}
                    autoplay={{
                      "delay": 3000,
                      "disableOnInteraction": false
                    }}
                    slidesPerView={1}
                    spaceBetween={40}
                    navigation={true} className="mySwiper">
                    <SwiperSlide>
                      <div className="">
                        <img src={img4} className="img-fluid mx-auto d-block" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="">
                        <img src={img5} className="img-fluid mx-auto d-block" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="">
                        <img src={img6} className="img-fluid mx-auto d-block" />
                      </div>
                    </SwiperSlide>

                  </Swiper>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4} lg={6}>
              <Card>
                <CardHeader className="justify-content-between d-flex align-items-center">
                  <h4 className="card-title">Pagination Swiper</h4>
                  <Link to="//swiperjs.com/react" rel="noreferrer" className="btn btn-sm btn-soft-secondary">Docs <i className="mdi mdi-arrow-right align-middle"></i></Link>
                </CardHeader>
                <CardBody>
                  <Swiper centeredSlides={true}
                    pagination={{
                      "clickable": true
                    }} autoplay={{
                      "delay": 3000,
                      "disableOnInteraction": false
                    }}
                    slidesPerView={1} className="mySwiper">
                    <SwiperSlide>
                      <div className="">
                        <img src={img7} className="img-fluid mx-auto d-block" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="">
                        <img src={img1} className="img-fluid mx-auto d-block" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="">
                        <img src={img6} className="img-fluid mx-auto d-block" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="">
                        <img src={img5} className="img-fluid mx-auto d-block" />
                      </div>
                    </SwiperSlide>

                  </Swiper>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4} lg={6}>
              <Card>
                <CardHeader className="justify-content-between d-flex align-items-center">
                  <h4 className="card-title">Keyboard control</h4>
                  <Link to="//swiperjs.com/react" rel="noreferrer" className="btn btn-sm btn-soft-secondary">Docs <i className="mdi mdi-arrow-right align-middle"></i></Link>
                </CardHeader>
                <CardBody>
                  <Swiper centeredSlides={true}
                    pagination={{
                      "clickable": true
                    }} keyboard={{
                      "enabled": true
                    }} slidesPerView={1} className="mySwiper">
                    <SwiperSlide>
                      <div className="">
                        <img src={img2} className="img-fluid mx-auto d-block" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="">
                        <img src={img1} className="img-fluid mx-auto d-block" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="">
                        <img src={img5} className="img-fluid mx-auto d-block" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="">
                        <img src={img7} className="img-fluid mx-auto d-block" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4} lg={6}>
              <Card>
                <CardHeader className="justify-content-between d-flex align-items-center">
                  <h4 className="card-title">Pagination Progress</h4>
                  <Link to="//swiperjs.com/react" rel="noreferrer" className="btn btn-sm btn-soft-secondary">Docs <i className="mdi mdi-arrow-right align-middle"></i></Link>
                </CardHeader>
                <CardBody>
                  <Swiper pagination={{
                    "type": "progressbar"
                  }} navigation={true} className="mySwiper">
                    <SwiperSlide>
                      <div className="">
                        <img src={img2} className="img-fluid mx-auto d-block" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="">
                        <img src={img1} className="img-fluid mx-auto d-block" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="">
                        <img src={img5} className="img-fluid mx-auto d-block" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="">
                        <img src={img7} className="img-fluid mx-auto d-block" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4} lg={6}>
              <Card>
                <CardHeader className="justify-content-between d-flex align-items-center">
                  <h4 className="card-title">Effect Flip</h4>
                  <Link to="//swiperjs.com/react" rel="noreferrer" className="btn btn-sm btn-soft-secondary">Docs <i className="mdi mdi-arrow-right align-middle"></i></Link>
                </CardHeader>
                <CardBody>
                  <Swiper effect={'flip'} grabCursor={true} pagination={true} navigation={true} autoplay={{
                    "delay": 3000,
                    "disableOnInteraction": false
                  }} className="mySwiper">
                    <SwiperSlide>
                      <div className="">
                        <img src={img3} className="img-fluid mx-auto d-block" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="">
                        <img src={img2} className="img-fluid mx-auto d-block" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="">
                        <img src={img1} className="img-fluid mx-auto d-block" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl={12}>
              <Card>
                <CardHeader className="justify-content-between d-flex align-items-center">
                  <h4 className="card-title">Responsive Breakpoints</h4>
                  <Link to="//swiperjs.com/react" rel="noreferrer" className="btn btn-sm btn-soft-secondary">Docs <i className="mdi mdi-arrow-right align-middle"></i></Link>
                </CardHeader>
                <CardBody>
                  <Swiper slidesPerView={1} spaceBetween={10}
                    autoplay={{
                      "delay": 3000,
                      "disableOnInteraction": false
                    }}
                    pagination={{
                      "clickable": true
                    }} breakpoints={{
                      "640": {
                        "slidesPerView": 2,
                        "spaceBetween": 10
                      },
                      "768": {
                        "slidesPerView": 3,
                        "spaceBetween": 15
                      },
                      "1024": {
                        "slidesPerView": 4,
                        "spaceBetween": 20
                      }
                    }} loop={true} className="mySwiper">
                    <SwiperSlide>
                      <div className="">
                        <img src={img3} className="img-fluid mx-auto d-block" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="">
                        <img src={img2} className="img-fluid mx-auto d-block" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="">
                        <img src={img1} className="img-fluid mx-auto d-block" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="">
                        <img src={img4} className="img-fluid mx-auto d-block" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="">
                        <img src={img5} className="img-fluid mx-auto d-block" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Swiperslider;