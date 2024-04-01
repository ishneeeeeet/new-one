import React, { useState } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    Button,
    Container,
    CardHeader,
} from "reactstrap";

//Lightbox
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

// import image
import img1 from "../../assets/images/small/img-1.jpg";
import img2 from "../../assets/images/small/img-2.jpg";
import img4 from "../../assets/images/small/img-4.jpg";
import img5 from "../../assets/images/small/img-5.jpg";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const images = [img4, img5, img1];

const UiLightbox = () => {
    const [photoIndex, setphotoIndex] = useState<any>(0);
    const [isFits, setisFits] = useState(false);
    const [isEffects, setisEffects] = useState(false);
    const [isGallery, setisGallery] = useState(false);
    const [isOpen, setisOpen] = useState(false);
    const [isOpen1, setisOpen1] = useState(false);

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Lightbox | Dashonic - React Admin & Dashboard Template</title>
                </MetaTags>
                <Container fluid={true}>
                    <Breadcrumbs title="Extended UI" breadcrumbItem="Lightbox" />
                    {isFits ? (
                        <Lightbox
                            mainSrc={img1}
                            enableZoom={false}
                            imageCaption={
                                "Caption. Can be aligned it to any side and contain any HTML."
                            }
                            onCloseRequest={() => {
                                setisFits(!isFits);
                            }}
                        />
                    ) : null}

                    {isEffects ? (
                        <Lightbox
                            mainSrc={img2}
                            enableZoom={false}
                            onCloseRequest={() => {
                                setisEffects(!isEffects);
                            }}
                        />
                    ) : null}

                    {isGallery ? (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            enableZoom={true}
                            onCloseRequest={() => {
                                setisGallery(false);
                            }}
                            onMovePrevRequest={() => {
                                setphotoIndex((photoIndex + images.length - 1) % images.length);
                            }}
                            onMoveNextRequest={() => {
                                setphotoIndex((photoIndex + 1) % images.length);
                            }}
                            imageCaption={"Project " + parseFloat(photoIndex + 1)}
                        />
                    ) : null}
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <CardHeader className="justify-content-between d-flex align-items-center">
                                    <h4 className="card-title">Single Image Lightbox</h4>
                                    <Link to="//www.npmjs.com/package/react-image-lightbox" target="_blank" rel="noreferrer" className="btn btn-sm btn-soft-secondary">Docs <i className="mdi mdi-arrow-right align-middle"></i></Link>
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col md={6}>
                                            <div className="">
                                                <img
                                                    onClick={() => {
                                                        setisFits(true);
                                                    }}
                                                    className="img-fluid"
                                                    alt="Dashonic"
                                                    src={img1}
                                                />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="mt-4 mt-md-0">
                                                <img
                                                    onClick={() => {
                                                        setisEffects(true);
                                                    }}
                                                    className="img-fluid"
                                                    alt=""
                                                    src={img2}
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card>
                                <CardHeader className="justify-content-between d-flex align-items-center">
                                    <h4 className="card-title">Images with Description</h4>
                                    <Link to="//www.npmjs.com/package/react-image-lightbox" target="_blank" rel="noreferrer" className="btn btn-sm btn-soft-secondary">Docs <i className="mdi mdi-arrow-right align-middle"></i></Link>
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col lg={3} sm={6}>
                                            <div className="">
                                                <img
                                                    src={img4}
                                                    onClick={() => {
                                                        setisGallery(true);
                                                        setphotoIndex(0);
                                                    }}
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </div>
                                        </Col>
                                        <Col lg={3} sm={6}>
                                            <div className="mt-4 mt-md-0">
                                                <img
                                                    src={img5}
                                                    onClick={() => {
                                                        setisGallery(true);
                                                        setphotoIndex(1);
                                                    }}
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </div>
                                        </Col>
                                        <Col lg={3} sm={6}>
                                            <div className="mt-4 mt-lg-0">
                                                <img
                                                    src={img1}
                                                    onClick={() => {
                                                        setisGallery(true);
                                                        setphotoIndex(2);
                                                    }}
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardHeader className="justify-content-between d-flex align-items-center">
                                    <CardTitle className="h4">Popup with video or map</CardTitle>
                                    <Link to="//www.npmjs.com/package/react-modal-video" target="_blank" rel="noreferrer" className="btn btn-sm btn-soft-secondary">Docs <i className="mdi mdi-arrow-right align-middle"></i></Link>
                                </CardHeader>
                                <CardBody>
                                    <div className="d-flex flex-wrap gap-2">
                                        <Button
                                            className="btn btn-light image-popup-video-map"
                                            onClick={() => {
                                                setisOpen(!isOpen);
                                            }}
                                        >
                                            Open Youtube Video
                                        </Button>{" "}
                                        <Button
                                            className="btn btn-light image-popup-video-map"
                                            onClick={() => {
                                                setisOpen1(!isOpen1);
                                            }}
                                        >
                                            Open Vimeo Video
                                        </Button>{" "}
                                        <ModalVideo
                                            videoId="L61p2uyiMSo"
                                            channel="youtube"
                                            isOpen={isOpen}
                                            onClose={() => {
                                                setisOpen(!isOpen);
                                            }}
                                        />
                                        <ModalVideo
                                            videoId="L61p2uyiMSo"
                                            channel="youtube"
                                            isOpen={isOpen1}
                                            onClose={() => {
                                                setisOpen1(false);
                                            }}
                                        />
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

export default UiLightbox;
