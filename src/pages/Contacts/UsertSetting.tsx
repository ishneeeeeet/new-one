import { useState } from "react";
import MetaTags from "react-meta-tags";
import {
    Col,
    Container,
    Row,
    InputGroup
} from "reactstrap";
import Select from "react-select";
import { Link } from "react-router-dom";
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

import avatar1 from "../../assets/images/users/avatar-1.jpg";
import { CardBody, Card } from "reactstrap";

const UsertSetting = () => {

    const [selectedMulti, setselectedMulti] = useState(null);

    function handleMulti(selectedMulti: any) {
        setselectedMulti(selectedMulti);
    };

    const optionGroup = [
        { label: "Photoshop", value: "photoshop" },
        { label: "illustrator", value: "illustrator" },
        { label: "HTML", value: "HTML" },
        { label: "CSS", value: "CSS" },
        { label: "Javascript", value: "Javascript" },
        { label: "Php", value: "Php" },
        { label: "Python", value: "Python" }
    ];

    return (
        <div className="page-content">
            <MetaTags>
                <title>User Settings | Dashonic - React Admin & Dashboard Template</title>
            </MetaTags>
            <Container fluid>
                {/* Render Breadcrumbs */}
                <Breadcrumbs title="Contacts" breadcrumbItem="User Settings" />

                <Row>
                    <Row className="col-xxl-3 col-lg-4">
                        <Card>
                            <CardBody>
                                <div className="profile-bg position-relative overflow-hidden rounded-top" style={{ height: "150px" }}>
                                    <div className="bg-overlay bg-dark bg-gradient"></div>

                                    <div className="position-relative p-3 text-end">
                                        <button type="button" className="btn btn-primary btn-sm"><i className="mdi mdi-pencil me-1"></i> Edit</button>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="position-relative d-inline-block mx-auto mt-n5 mb-4">
                                        <div className="avatar-lg">
                                            <img src={avatar1} alt="" className="rounded-circle img-thumbnail" />
                                        </div>
                                        <Link to="#" className="d-block position-absolute bottom-0 end-0">
                                            <div className="avatar-sm">
                                                <div className="avatar-title rounded-circle bg-light text-primary">
                                                    <i className="mdi mdi-pencil"></i>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    <h5 className="font-size-16 mb-1">Katie Sharpe</h5>
                                    <p className="text-muted mb-0">Full Stack Developer</p>
                                </div>
                                <hr className="my-4" />
                                <div>
                                    <h5 className="font-size-16">Info {" "}:</h5>

                                    <div className="mt-4">
                                        <p className="text-muted mb-1">Name {" "}:</p>
                                        <h5 className="font-size-14 text-truncate">Katie Sharpe</h5>
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-muted mb-1">Email {" "}:</p>
                                        <h5 className="font-size-14 text-truncate">katie@dashonic.com</h5>
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-muted mb-1">Location {" "}:</p>
                                        <h5 className="font-size-14 text-truncate">California, United States</h5>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>

                    </Row>

                    <div className="col-xxl-9 col-lg-8">
                        <Card>
                            <CardBody>
                                <h5 className="card-title mb-4">Setting</h5>
                                <form>
                                    <div className="card border shadow-none mb-5">
                                        <div className="card-header d-flex align-items-center">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar-sm">
                                                    <div className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                        01
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="card-title">General Info</h5>
                                            </div>
                                        </div>
                                        <CardBody>
                                            <div>

                                                <Row>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <label className="form-label" htmlFor="gen-info-name-input">Name</label>
                                                            <input type="text" className="form-control" id="gen-info-name-input" placeholder="Enter Name" />
                                                        </div>

                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <label className="form-label" htmlFor="gen-info-designation-input">Designation</label>
                                                            <input type="text" className="form-control" id="gen-info-designation-input" placeholder="Enter Designation" />
                                                        </div>
                                                    </Col>
                                                </Row>

                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="gen-info-description-input">Description</label>
                                                    <textarea className="form-control" placeholder="Enter Description" id="gen-info-description-input" rows={3}></textarea>
                                                </div>

                                                <div className="form-check mb-3" data-bs-toggle="collapse" data-bs-target="#collapseChangePassword" aria-expanded="false" aria-controls="collapseChangePassword">
                                                    <input type="checkbox" className="form-check-input" id="gen-info-change-password" />
                                                    <label className="form-check-label" htmlFor="gen-info-change-password">Change Password?</label>
                                                </div>

                                                <div className="collapse" id="collapseChangePassword">
                                                    <div className="card border shadow-none card-body">
                                                        <Row>
                                                            <div className="col-lg-4">
                                                                <div className="mb-lg-0">
                                                                    <label htmlFor="current-password-input" className="form-label">Current password</label>
                                                                    <input type="password" className="form-control" placeholder="Enter Current password" id="current-password-input" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="mb-lg-0">
                                                                    <label htmlFor="new-password-input" className="form-label">New password</label>
                                                                    <input type="password" className="form-control" placeholder="Enter New password" id="new-password-input" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="mb-lg-0">
                                                                    <label htmlFor="confirm-password-input" className="form-label">Confirm password</label>
                                                                    <input type="password" className="form-control" placeholder="Enter Confirm password" id="confirm-password-input" />
                                                                </div>
                                                            </div>
                                                        </Row>
                                                    </div>
                                                </div>


                                                <div>
                                                    <label htmlFor="choices-multiple-skill-input" className="form-label">Skills</label>
                                                    <Select
                                                        defaultValue={{ label: "Photoshop", value: "photoshop" }}
                                                        isMulti={true}
                                                        onChange={(value: any) => {
                                                            handleMulti(value);
                                                        }}
                                                        options={optionGroup}
                                                        name="choices-multiple-skill-input"
                                                        classNamePrefix="select2-selection form-control"
                                                    />

                                                </div>
                                            </div>
                                        </CardBody>
                                    </div>

                                    <div className="card border shadow-none mb-5">
                                        <div className="card-header d-flex align-items-center">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar-sm">
                                                    <div className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                        02
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="card-title">Contact Info</h5>
                                            </div>
                                        </div>
                                        <CardBody>
                                            <div className="mb-3">
                                                <label htmlFor="contact-info-email-input">Email :</label>
                                                <input type="email" className="form-control" id="contact-info-email-input" placeholder="Enter Email" />
                                            </div>
                                            <Row>
                                                <div className="col-md-6">
                                                    <div className="mb-md-0">
                                                        <label htmlFor="contact-info-website-input" className="form-label">Website</label>
                                                        <input type="url" className="form-control" placeholder="Enter website url" id="contact-info-website-input" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-md-0">
                                                        <label htmlFor="contact-info-location-input" className="form-label">Location</label>
                                                        <input type="url" className="form-control" placeholder="Enter Address" id="contact-info-location-input" />
                                                    </div>
                                                </div>
                                            </Row>
                                        </CardBody>
                                    </div>

                                    <div className="card border shadow-none">
                                        <div className="card-header d-flex align-items-center">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar-sm">
                                                    <div className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                        03
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="card-title">Experience</h5>
                                            </div>
                                        </div>
                                        <CardBody>
                                            <Row>
                                                <Col lg={6}>
                                                    <div className="mb-3">
                                                        <label htmlFor="workexperience-designation-input">Designation</label>
                                                        <input type="text" className="form-control" id="workexperience-designation-input" placeholder="Enter Designation title" />
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="mb-3">
                                                        <label htmlFor="workexperience-companyname-input">Company name</label>
                                                        <input type="text" className="form-control" id="workexperience-companyname-input" placeholder="Enter Company name" />
                                                    </div>
                                                </Col>
                                            </Row>


                                            <div>
                                                <label>Years</label>
                                                <InputGroup>
                                                    <Flatpickr
                                                        className="form-control"
                                                        options={{
                                                            altInput: true,
                                                            altFormat: "Y",
                                                            dateFormat: "Y"
                                                        }}
                                                    />
                                                </InputGroup>
                                            </div>
                                        </CardBody>
                                    </div>


                                    <div className="text-end">
                                        <button type="submit" className="btn btn-primary w-sm">Submit</button>
                                    </div>
                                </form>

                            </CardBody>

                        </Card>

                    </div >

                </Row >
            </Container >
        </div >
    );
};

export default UsertSetting;