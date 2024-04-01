import React from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";

import {
    Card,
    CardBody,
    Col,
    Row,
    Container,
} from "reactstrap";

import Breadcrumbs from "../../components/Common/Breadcrumb";

//import images
import img2 from "../../assets/images/small/img-2.jpg";
import img3 from "../../assets/images/small/img-3.jpg";
import img4 from "../../assets/images/small/img-4.jpg";


const TimeLineHorizontal = () => {
    return (
    <React.Fragment>
        <div className="page-content">
        <MetaTags>
          <title>Center Timeline | Dashonic - React Admin & Dashboard Template</title>
        </MetaTags>
            <Container fluid>
                {/* Render Breadcrumbs */}
                <Breadcrumbs title="Timeline" breadcrumbItem="Center Timeline" />

                <Row className="justify-content-center">
                    <Col xl={10}>
                        <div className="verti-timeline">
                            <div className="timeline-item left">
                                <div className="timeline-block">
                                    <div className="time-show-btn mt-0">
                                        <Link to="#" className="btn btn-danger btn-rounded w-lg">2021</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-block">
                                    <Card className="timeline-box">
                                        <CardBody>
                                            <div className="timeline-date">28 April</div>
                                            <h5 className="mt-3 font-size-16"> Timeline Event One</h5>
                                            <div className="text-muted">
                                                <p className="mb-0">It will be as simple as occidental in fact. To an english person, it will seem like simplified English, as a skeptical friend</p>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                            <div className="timeline-item left">
                                <div className="timeline-block">
                                    <Card className="timeline-box">
                                        <CardBody>
                                            <div className="timeline-date">21 April</div>
                                            <h5 className="mt-3 font-size-16"> Timeline Event Two</h5>
                                            <div className="text-muted">
                                                <p className="mb-0">To achieve this, it would be necessary to have more common words.</p>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-block">
                                    <Card className="timeline-box">
                                        <CardBody>
                                            <div className="timeline-date">15 April</div>
                                            <h5 className="mt-3 font-size-16"> Timeline Event Three</h5>
                                            <div className="text-muted">
                                                <p>The new common language will be more simple and regular than the existing European languages be as simple as occidental</p>

                                            </div>
                                            <div className="timeline-album">
                                                <Link to="#">
                                                    <img src={img2} alt="" />
                                                </Link>
                                                <Link to="#">
                                                    <img src={img3} alt="" />
                                                </Link>
                                                <Link to="#">
                                                    <img src={img4} alt="" />
                                                </Link>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                            <div className="timeline-item left">
                                <div className="timeline-block">
                                    <Card className="timeline-box">
                                        <CardBody>
                                            <div className="timeline-date">09 April</div>
                                            <h5 className="mt-3 font-size-16"> Timeline Event Four</h5>
                                            <div className="text-muted">
                                                <p className="mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, ab illo inventore veritatis et</p>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-block">
                                    <Card className="timeline-box">
                                        <CardBody>
                                            <div className="timeline-date">02 April</div>
                                            <h5 className="mt-3 font-size-16"> Timeline Event Five</h5>
                                            <div className="text-muted">
                                                <p className="mb-0">Itaque earum rerum hic tenetur a sapiente delectus, ut aut doloribus asperiores.</p>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </React.Fragment>
    )
};

export default TimeLineHorizontal;