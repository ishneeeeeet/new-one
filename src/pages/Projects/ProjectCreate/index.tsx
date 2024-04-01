import React, { useState } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone";

import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  InputGroup,
  Input,
  Label,
  Row,
  TabContent,
  TabPane,
  Button,
  Modal,
  Tooltip
} from "reactstrap";
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";

import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";

import classnames from "classnames";

import SimpleBar from "simplebar-react";

const ProjectCreate = () => {
  const [selectedFiles, setselectedFiles] = useState([]);

  function handleAcceptedFiles(files: any) {
    files.map((file: any) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  }

  /**
 * Formats the size
 */
  function formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  const [tooltipOpen2, setTooltipOpen2] = useState(false);
  const toggle2 = () => setTooltipOpen2(!tooltipOpen2);
  const [tooltipOpen3, setTooltipOpen3] = useState(false);
  const toggle3 = () => setTooltipOpen3(!tooltipOpen3);
  const [modal_standard, setmodal_standard] = useState(false);
  const [activeTab, setactiveTab] = useState(1);

  function toggleTab(tab: any) {
    if (activeTab !== tab) {
      if (tab >= 1 && tab <= 4) {
        setactiveTab(tab);
      }
    }
  }

  function tog_standard() {
    setmodal_standard(!modal_standard);
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Create New | Dashonic - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Projects" breadcrumbItem="Create New" />

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <div>
                    <ul className="wizard-nav mb-5">
                      <li className="wizard-list-item">
                        <div className={classnames({ active: activeTab === 1 }, 'list-item')} id={"Tooltip-1"}>
                          <div className="step-icon">
                            <i className="uil uil-clipboard-notes"></i>
                          </div>
                        </div>
                        <Tooltip
                          placement="top"
                          isOpen={tooltipOpen}
                          target={"Tooltip-1"}
                          toggle={toggle}
                        >
                          Basic Info
                        </Tooltip>
                      </li>
                      <li className="wizard-list-item">
                        <div className={classnames({ active: activeTab === 2 }, 'list-item')} id={"Tooltip-2"}>
                          <div className="step-icon">
                            <i className="uil uil-users-alt"></i>
                          </div>
                        </div>
                        <Tooltip
                          placement="top"
                          isOpen={tooltipOpen2}
                          target={"Tooltip-2"}
                          toggle={toggle2}
                        >
                          Assignee
                        </Tooltip>
                      </li>

                      <li className="wizard-list-item">
                        <div className={classnames({ active: activeTab === 3 }, 'list-item')} id={"Tooltip-3"}>
                          <div className="step-icon">
                            <i className="uil uil-paperclip"></i>
                          </div>
                        </div>
                        <Tooltip
                          placement="top"
                          isOpen={tooltipOpen3}
                          target={"Tooltip-3"}
                          toggle={toggle3}
                        >
                          Attached Files
                        </Tooltip>
                      </li>
                    </ul>

                    <TabContent activeTab={activeTab}>
                      <TabPane tabId={1}>
                        <div className="text-center mb-4">
                          <h5>Project Information</h5>
                          <p className="card-title-desc">Fill all information below</p>
                        </div>
                        <Form>
                          <div>
                            <div className="mb-3">
                              <Label htmlFor="projectname" className="form-label">Project Name</Label>
                              <Input id="projectname" type="text" className="form-control" placeholder="Enter Project Name" />
                            </div>

                            <div className="mb-3">
                              <Label htmlFor="projectdesc" className="form-label">Project Description</Label>
                              <Input type="textarea" className="form-control" id="projectdesc" rows={3} placeholder="Enter Project Description..."></Input>
                            </div>

                            <div className="mb-3">
                              <Label className="form-label">Project Date</Label>
                              <InputGroup>
                                <Flatpickr
                                  options={{
                                    altInput: true,
                                    altFormat: "F j, Y",
                                    dateFormat: "Y-m-d"
                                  }}
                                />
                              </InputGroup>
                            </div>
                          </div>
                        </Form>

                      </TabPane>
                      <TabPane tabId={2}>
                        <div className="text-center mb-4">
                          <h5>Assign to</h5>
                          <p className="card-title-desc">Select Members</p>
                        </div>

                        <Form>
                          <div>
                            <div className="mb-3">
                              <Label>Department</Label>
                              <Input type="select" name="selectMulti" className="form-select shadow-none" defaultValue="Open this select Department">
                                <option value="Open this select Department">Open this select Department</option>
                                <option value="Design">Design</option>
                                <option value="Development">Development</option>
                              </Input>
                            </div>

                            <div className="mb-4">
                              <Label>Assign to</Label>
                              <div className="mb-3">

                                <button
                                  type="button"
                                  onClick={() => {
                                    tog_standard();
                                  }}
                                  className="btn btn-light w-100"
                                  data-toggle="modal"
                                  data-target="#myModal"
                                >
                                  Select Members for Project
                                </button>

                              </div>

                              <Modal
                                isOpen={modal_standard}
                                toggle={() => {
                                  tog_standard();
                                }}
                                className="modal-lg"
                                data-toggle="modal"
                                data-target=".bs-example-modal-lg"
                              >
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title" id="selectmembermodalLabel">Select Members</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div className="modal-body">
                                    <div className="p-3">
                                      <div className="avatar-group align-items-center">
                                        <div className="me-4">Team :</div>
                                        <div className="avatar-group-item">
                                          <Link to="#" className="d-block" data-bs-toggle="tooltip" data-bs-placement="top" title="Janna Johnson">
                                            <img src={avatar1} alt="" className="rounded-circle avatar-sm" />
                                          </Link>
                                        </div>
                                        <div className="avatar-group-item">
                                          <Link to="#" className="d-block" data-bs-toggle="tooltip" data-bs-placement="top" title="Heather Ford">
                                            <img src={avatar2} alt="" className="rounded-circle avatar-sm" />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="p-3">
                                      <div className="input-group border rounded">
                                        <span className="input-group-text bg-transparent border-0 pr-1">
                                          <i className="uil uil-search"></i>
                                        </span>
                                        <Input type="text" className="form-control border-0" placeholder="Search" />

                                        <Button color="primary" type="button">Search</Button>

                                      </div>
                                    </div>

                                    <SimpleBar style={{ maxHeight: "200px" }}>
                                      <div>
                                        <div className="p-3 fw-semibold font-size-12 text-muted">
                                          A
                                        </div>

                                        <ul className="list-group list-group-flush contact-list">
                                          <li className="list-group-item">
                                            <div className="form-check">
                                              <Input className="form-check-input" type="checkbox" value="" id="memberCheck1" defaultChecked />
                                              <Label className="form-check-label" htmlFor="memberCheck1">
                                                Albert Rodarte
                                              </Label>
                                            </div>
                                          </li>

                                          <li className="list-group-item">
                                            <div className="form-check">
                                              <Input className="form-check-input" type="checkbox" value="" id="memberCheck2" />
                                              <Label className="form-check-label" htmlFor="memberCheck2">
                                                Allison Etter
                                              </Label>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>

                                      <div>
                                        <div className="p-3 fw-semibold font-size-12 text-muted">
                                          B
                                        </div>

                                        <ul className="list-group list-group-flush contact-list">
                                          <li className="list-group-item">
                                            <div className="form-check">
                                              <Input className="form-check-input" type="checkbox" value="" id="memberCheck3" />
                                              <Label className="form-check-label" htmlFor="memberCheck3">
                                                Bobby Gaffney
                                              </Label>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>

                                      <div>
                                        <div className="p-3 fw-semibold font-size-12 text-muted">
                                          C
                                        </div>

                                        <ul className="list-group list-group-flush contact-list">
                                          <li className="list-group-item">
                                            <div className="form-check">
                                              <Input className="form-check-input" type="checkbox" value="" id="memberCheck4" defaultChecked />
                                              <Label className="form-check-label" htmlFor="memberCheck4">
                                                Charles Willis
                                              </Label>
                                            </div>
                                          </li>
                                          <li className="list-group-item">
                                            <div className="form-check">
                                              <Input className="form-check-input" type="checkbox" value="" id="memberCheck5" defaultChecked />
                                              <Label className="form-check-label" htmlFor="memberCheck5">
                                                Christi
                                              </Label>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </SimpleBar>

                                  </div>
                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setmodal_standard(false);
                                      }}
                                      className="btn btn-light w-sm"
                                      data-dismiss="modal"
                                      aria-label="Close"
                                    >
                                      Close
                                    </button>
                                    <Button type="button" color="primary" className="w-sm">Save</Button>
                                  </div>
                                </div>
                              </Modal>
                            </div>
                          </div>
                        </Form>

                      </TabPane>
                      <TabPane tabId={3}>
                        <div className="text-center mb-4">
                          <h5>Attached Files</h5>
                          <p className="card-title-desc">Upload Attached Files</p>
                        </div>
                        <Form>
                          <Dropzone
                            onDrop={acceptedFiles => {
                              handleAcceptedFiles(acceptedFiles);
                            }}
                          >
                            {({ getRootProps, getInputProps }) => (
                              <div className="dropzone dz-clickable">
                                <div
                                  className="dz-message needsclick"
                                  {...getRootProps()}
                                >
                                  <input {...getInputProps()} />
                                  <div className="mb-3">
                                    <i className="display-4 text-light uil uil-upload-alt"></i>
                                  </div>
                                  <h5 className="font-size-16">Drop files here or click to upload.</h5>
                                </div>
                              </div>
                            )}
                          </Dropzone>
                          <div className="dropzone-previews mt-3" id="file-previews">
                            {selectedFiles.map((f: any, i: number) => {
                              return (
                                <Card
                                  className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                  key={i + "-file"}
                                >
                                  <div className="p-2">
                                    <Row className="align-items-center">
                                      <Col className="col-auto">
                                        <img
                                          data-dz-thumbnail=""
                                          height="80"
                                          className="avatar-sm rounded bg-light"
                                          alt={f.name}
                                          src={f.preview}
                                        />
                                      </Col>
                                      <Col>
                                        <Link
                                          to="#"
                                          className="text-muted font-weight-bold"
                                        >
                                          {f.name}
                                        </Link>
                                        <p className="mb-0">
                                          <strong>{f.formattedSize}</strong>
                                        </p>
                                      </Col>
                                    </Row>
                                  </div>
                                </Card>
                              );
                            })}
                          </div>
                        </Form>

                      </TabPane>
                    </TabContent>

                    <div className="d-flex align-items-start gap-3 mt-4">
                      {activeTab !== 1 &&
                        <Button type="button"
                          color="primary"
                          className="w-sm"
                          id="prevBtn"
                          onClick={() => {
                            toggleTab(activeTab - 1);
                          }}>Previous</Button>
                      }


                      {activeTab !== 3 &&
                        <Button type="button"
                          color="primary"
                          className="w-sm ms-auto"
                          id="nextBtn"
                          onClick={() => {
                            toggleTab(activeTab + 1);
                          }}>Next</Button>
                      }

                      {activeTab === 3 &&
                        <Button type="button"
                          color="primary"
                          className="btn btn-primary w-sm ms-auto"
                          id="nextBtn">Submit</Button>
                      }

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

export default ProjectCreate;