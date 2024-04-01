import React, { useState } from 'react';
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import { Row, Col, Container, Card, CardHeader, CardBody } from "reactstrap";

//Import Images
import img1 from "../../assets/images/small/img-1.jpg";
import img3 from "../../assets/images/small/img-3.jpg";
import img4 from "../../assets/images/small/img-4.jpg";
import img5 from "../../assets/images/small/img-5.jpg";
import img6 from "../../assets/images/small/img-6.jpg";
import img7 from "../../assets/images/small/img-7.jpg";


//Import Light box
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

import { GalleryData } from "../../common/data/gallery";

const Gallery = () => {

    const [displayCategory, setCategory] = useState<string>('All');
    const [Modal, setModal] = useState<boolean>(false);
    const [photoIndex, setphotoIndex] = useState<number>(0);

    const images = [
        img1, img3, img4, img5, img6, img7
    ];

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Gallery | Dashonic - React Admin & Dashboard Template</title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Apps" breadcrumbItem="Gallery" />

                    <Row>
                        <Col xs="12">
                            <Card>
                                <CardHeader className="justify-content-between d-flex align-items-center">
                                    <h4 className="card-title">Gallery Photos</h4>
                                    <p className="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col lg={12}>
                                            <div className="text-center">
                                                <ul className="list-inline categories-filter button-group" id="filter">

                                                    <li className="list-inline-item"><Link to="#" onClick={() => setCategory("All")}

                                                        className={
                                                            displayCategory === "All"
                                                                ? "categories active"
                                                                : "categories"
                                                        }
                                                    >

                                                        All

                                                    </Link>{" "}
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link to="#" onClick={() => setCategory("project")}
                                                            className={
                                                                displayCategory === "project"
                                                                    ? "categories active"
                                                                    : "categories"
                                                            }
                                                        >
                                                            Project

                                                        </Link>{" "}
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link to="#" onClick={() => setCategory("designing")}
                                                            className={
                                                                displayCategory === "designing"
                                                                    ? "categories active"
                                                                    : "categories"
                                                            }
                                                        >
                                                            Designing

                                                        </Link>{" "}
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link to="#" onClick={() => setCategory("photography")}
                                                            className={
                                                                displayCategory === "photography"
                                                                    ? "categories active"
                                                                    : "categories"
                                                            }
                                                        >
                                                            Photography

                                                        </Link>{" "}
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link to="#" onClick={() => setCategory("development")}
                                                            className={
                                                                displayCategory === "development"
                                                                    ? "categories active"
                                                                    : "categories"
                                                            }
                                                        >
                                                            Development
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="gallery-wrapper">
                                        {GalleryData
                                            .filter(
                                                ({ category }: any) => category.includes(displayCategory) ||
                                                    displayCategory === "All"
                                            )
                                            .map(({ title, image, author }, key) => (
                                                <Col key={key} xl={4} sm={6} className="element-item">
                                                    <Card className="gallery-box">
                                                        <div className="gallery-container">
                                                            <Link to="#" className="image-popup" href={image} title={title}
                                                                onClick={(event) => {
                                                                    event.preventDefault();
                                                                    setModal(!Modal);
                                                                    setphotoIndex(key);
                                                                }}>
                                                                <img className="gallery-img img-fluid mx-auto" src={image} alt={title} />
                                                                <div className="gallery-overlay"></div>
                                                            </Link>

                                                        </div>

                                                        <div className="box-content p-3">
                                                            <h5 className="title">{title}</h5>
                                                            <p className="post">by <Link to="#" className="text-body">{author}</Link></p>
                                                        </div>
                                                    </Card>
                                                </Col>
                                            ))}

                                        {/* lightbox for portfolio images */}
                                        {Modal && (
                                            <Lightbox
                                                mainSrc={images[photoIndex]}
                                                nextSrc={images[(photoIndex + 1) % images.length]}
                                                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                                imagePadding={100}
                                                onCloseRequest={() => setModal(false)}
                                                onMovePrevRequest={() =>
                                                    setphotoIndex((photoIndex + images.length - 1) % images.length)
                                                }
                                                onMoveNextRequest={() =>
                                                    setphotoIndex((photoIndex + 1) % images.length)
                                                }
                                            />
                                        )}
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default Gallery;