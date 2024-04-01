import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  Collapse,
  DropdownMenu,
  DropdownToggle,
  UncontrolledAlert,
  UncontrolledDropdown,
} from "reactstrap"

const FileRightBar = () => {
  const [isOpen, setIsOpen] = useState(true)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <React.Fragment>
      <Card className="filemanager-sidebar me-md-3">
        <CardBody>

          <div className="d-flex flex-column h-100">
            <div className="mb-4">
              <ul className="list-unstyled categories-list">
                <li>
                  <div className="custom-accordion">
                    <Link
                      className="text-body fw-medium py-1 d-flex align-items-center"
                      onClick={toggle}
                      to="#"
                    >
                      <i className="fas fa-folder text-warning font-size-13 me-2"></i>{" "}
                      Files{" "}
                      <i
                        className={
                          isOpen
                            ? "mdi mdi-chevron-up accor-down-icon ms-auto"
                            : "mdi mdi-chevron-down accor-down-icon ms-auto"
                        }
                      />
                    </Link>
                    <Collapse isOpen={isOpen}>
                      <Card className="border-0 shadow-none ps-2 mb-0">
                        <ul className="list-unstyled mb-0">
                          <li>
                            <Link to="#" className="d-flex align-items-center">
                              <span className="me-auto">Design</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="d-flex align-items-center">
                              <span className="me-auto">Development</span>{" "}
                              <i className="fas fa-map-pin font-size-10 ms-auto"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="d-flex align-items-center">
                              <span className="me-auto">Project A</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="d-flex align-items-center">
                              <span className="me-auto">Admin</span>{" "}
                              <i className="fas fa-map-pin font-size-10 ms-auto"></i>
                            </Link>
                          </li>
                        </ul>
                      </Card>
                    </Collapse>
                  </div>
                </li>
                <li>
                  <Link to="#" className="text-body d-flex align-items-center">
                    <i className="fab fa-google-drive text-muted font-size-13 me-2"></i> <span className="me-auto">Google Drive</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-body d-flex align-items-center">
                    <i className="fab fa-dropbox font-size-13 me-2 text-primary"></i> <span className="me-auto">Dropbox</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-body d-flex align-items-center">
                    <i className="fas fa-share-alt text-muted font-size-13 me-2"></i> <span className="me-auto">Shared</span> <i className="mdi mdi-circle-medium text-danger ms-2"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-body d-flex align-items-center">
                    <i className="far fa-star text-muted font-size-13 me-2"></i> <span className="me-auto">Starred</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-body d-flex align-items-center">
                    <i className="fas fa-trash-alt text-danger font-size-13 me-2"></i> <span className="me-auto">Trash</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-body d-flex align-items-center">
                    <i className="fas fa-cog text-muted font-size-13 me-2"></i> <span className="me-auto">Setting</span><span className="badge bg-success rounded-pill ms-2">01</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-auto">
              <UncontrolledAlert color="info" className="alert-dismissible fade show mb-0">
                <div className="mb-3">
                  <i className="fas fa-folder-open h1 text-info"></i>
                </div>

                <div>
                  <h5 className="text-info">Upgrade Features</h5>
                  <p>Upgrade your plan from a <span className="fw-semibold">Free
                    trial</span>, to ‘Premium Plan’</p>
                  <div className="text-center mt-4">
                    <Link to="pricing-basic" className="btn btn-link text-decoration-none text-info w-100 shadow-none">Upgrade <i className="mdi mdi-arrow-right"></i></Link>
                  </div>
                </div>
              </UncontrolledAlert>
            </div>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default FileRightBar