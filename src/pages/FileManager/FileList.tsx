import React from "react"
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  Col,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Row,
  Progress,
  UncontrolledDropdown,
} from "reactstrap"

const FileList = () => {
  const myfiles = [
    {
      id: 1,
      name: "Google Drive",
      file: "20GB of 50GB used",
      icon: "fab fa-google-drive font-size-24 text-muted",
      Gb: 25,
    },
    {
      id: 2,
      name: "Dropbox",
      file: "15GB of 40GB used",
      icon: "fab fa-dropbox font-size-24 text-primary",
      Gb: 25,
    },
    {
      id: 3,
      name: "Drive",
      file: "12GB of 30GB used",
      icon: "fas fa-folder-open font-size-24 text-warning",
      Gb: 20,
    },
  ]

  const myfolders = [
    {
      id: 1,
      name: "Design",
      file: "12",
      Gb: 6,
    },
    {
      id: 2,
      name: "Development",
      file: "20",
      Gb: 8,
    },
    {
      id: 3,
      name: "Project A",
      file: "06",
      Gb: 2,
    },
  ]
  return (
    <React.Fragment>
      <div>
        <Row className="mb-3">
          <Col lg={4} sm={6}>
            <div className="search-box mb-2">
              <div className="position-relative">
                <input type="text" className="form-control bg-light border-light rounded" placeholder="Search..." />
                <i className="uil uil-search search-icon"></i>
              </div>
            </div>
          </Col>
          <Col lg={8} sm={6}>
            <div className="mt-4 mt-sm-0 d-flex align-items-center justify-content-sm-end">
              <div className="mb-2 me-2">
                <UncontrolledDropdown>
                  <DropdownToggle
                    color="white"
                    className="btn btn-primary"
                  >
                    <i className="uil uil-plus me-1"></i> Create New
                  </DropdownToggle>

                  <DropdownMenu className="dropdown-menu-end">
                    <DropdownItem to="#">
                      Share Files
                    </DropdownItem>
                    <DropdownItem to="#">
                      Share with me
                    </DropdownItem>
                    <DropdownItem to="#">
                      Other Actions
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <UncontrolledDropdown className="mb-0">
                <DropdownToggle className="btn btn-link text-muted p-1 mt-n2" tag="a">
                  <i className="uil uil-ellipsis-v font-size-20"></i>
                </DropdownToggle>

                <DropdownMenu className="dropdown-menu-end">
                  <DropdownItem to="#">Share Files</DropdownItem>
                  <DropdownItem to="#">Share with me</DropdownItem>
                  <DropdownItem to="#">Other Actions</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Row>
          {myfiles.map((myfiles, key) => (
            <Col xl={4} sm={6} key={key}>
              <Card className="shadow-none border">
                <CardBody className="p-3">
                  <div>
                    <div className="float-end ms-2">
                      <UncontrolledDropdown className="mb-2">
                        <DropdownToggle
                          color="white"
                          tag="a"
                          className="font-size-16 text-muted"
                        >
                          <i className="uil uil-ellipsis-h"></i>
                        </DropdownToggle>

                        <DropdownMenu className="dropdown-menu-end">
                          <DropdownItem to="#">
                            Open
                          </DropdownItem>
                          <DropdownItem to="#">
                            Edit
                          </DropdownItem>
                          <DropdownItem to="#">
                            Rename
                          </DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem to="#">
                            Remove
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>

                    <div className="avatar-sm me-3 mb-3">
                      <div className="avatar-title bg-transparent rounded">
                        <i className={myfiles.icon}></i>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-size-14 text-truncate"><Link to="#" className="text-body">{myfiles.name}</Link></h5>
                      <div className="mt-3">
                        <p className="text-muted font-size-13 mb-1">{myfiles.file}</p>
                        <Progress value={myfiles.Gb} color="primary" className="animated-progess custom-progress"></Progress>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className="mt-4">
        <div className="d-flex flex-wrap">
          <h5 className="font-size-16 me-3">Folder</h5>

          <div className="ms-auto">
            <Link to="#" className="fw-medium text-reset">View All</Link>
          </div>
        </div>
        <hr className="mt-2" />
        <Row>
          {myfolders.map((myfolder, key) => (
            <Col xl={4} sm={6} key={key}>
              <div className="card shadow-none border">
                <div className="card-body p-3">
                  <div className="">
                    <div className="float-end ms-2">

                      <UncontrolledDropdown className="mb-2">
                        <DropdownToggle
                          tag="a"
                          color="white"
                          className="font-size-16 text-muted"
                        >
                          <i className="uil uil-ellipsis-h"></i>
                        </DropdownToggle>

                        <DropdownMenu className="dropdown-menu-end">
                          <DropdownItem to="#">
                            Open
                          </DropdownItem>
                          <DropdownItem to="#">
                            Edit
                          </DropdownItem>
                          <DropdownItem to="#">
                            Rename
                          </DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem to="#">
                            Remove
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>

                    </div>
                    <div className="avatar-sm me-3 mb-3">
                      <div className="avatar-title bg-transparent rounded">
                        <i className="fas fa-folder font-size-24 text-warning"></i>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="overflow-hidden me-auto">
                        <h5 className="font-size-14 text-truncate mb-1"><Link to="#" className="text-body">{myfolder.name}</Link></h5>
                        <p className="text-muted text-truncate mb-0">{myfolder.file} Files</p>
                      </div>
                      <div className="align-self-end ms-2">
                        <p className="text-muted mb-0">{myfolder.Gb}GB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </React.Fragment>
  )
}

export default FileList
