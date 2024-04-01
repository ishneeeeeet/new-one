import React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody } from "reactstrap"
import ReactApexChart from "react-apexcharts"

const Storage = (props: any) => {
  const { options, series } = props
  return (
    <React.Fragment>
      <Card className="filemanager-sidebar ms-lg-3">
        <CardBody>
          <div className="text-center">
            <h5 className="font-size-15 mb-4">Storage</h5>
            <div>
              <ReactApexChart
                options={options}
                series={series}
                type="radialBar"
                height={150}
                className="apex-charts"
              />
            </div>

            <p className="text-muted mt-4">48.02 GB (76%) of 64 GB used</p>
          </div>

          <div className="mt-4">
            <div className="mt-4">
              <Card className="border shadow-none mb-2">
                <Link to="#" className="text-body">
                  <div className="p-2">
                    <div className="d-flex">
                      <div className="avatar-sm align-self-center me-2">
                        <div className="avatar-title rounded bg-transparent text-success font-size-18">
                          <i className="fas fa-image"></i>
                        </div>
                      </div>

                      <div className="overflow-hidden me-auto">
                        <h5 className="font-size-13 text-truncate mb-1">Images</h5>
                        <p className="text-muted text-truncate mb-0">176 Files</p>
                      </div>

                      <div className="ms-2">
                        <p className="text-muted">6 GB</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>

              <Card className="border shadow-none mb-2">
                <Link to="#" className="text-body">
                  <div className="p-2">
                    <div className="d-flex">
                      <div className="avatar-sm align-self-center me-2">
                        <div className="avatar-title rounded bg-transparent text-danger font-size-18">
                          <i className="far fa-play-circle"></i>
                        </div>
                      </div>

                      <div className="overflow-hidden me-auto">
                        <h5 className="font-size-13 text-truncate mb-1">Video</h5>
                        <p className="text-muted text-truncate mb-0">45 Files</p>
                      </div>

                      <div className="ms-2">
                        <p className="text-muted">4.1 GB</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>

              <Card className="border shadow-none mb-2">
                <Link to="#" className="text-body">
                  <div className="p-2">
                    <div className="d-flex">
                      <div className="avatar-sm align-self-center me-2">
                        <div className="avatar-title rounded bg-transparent text-info font-size-18">
                          <i className="fas fa-music"></i>
                        </div>
                      </div>

                      <div className="overflow-hidden me-auto">
                        <h5 className="font-size-13 text-truncate mb-1">Music</h5>
                        <p className="text-muted text-truncate mb-0">21 Files</p>
                      </div>

                      <div className="ms-2">
                        <p className="text-muted">3.2 GB</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>

              <Card className="border shadow-none mb-2">
                <Link to="#" className="text-body">
                  <div className="p-2">
                    <div className="d-flex">
                      <div className="avatar-sm align-self-center me-2">
                        <div className="avatar-title rounded bg-transparent text-primary font-size-18">
                          <i className="fas fa-file-alt"></i>
                        </div>
                      </div>

                      <div className="overflow-hidden me-auto">
                        <h5 className="font-size-13 text-truncate mb-1">Document</h5>
                        <p className="text-muted text-truncate mb-0">21 Files</p>
                      </div>

                      <div className="ms-2">
                        <p className="text-muted">2 GB</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>

              <Card className="border shadow-none">
                <Link to="#" className="text-body">
                  <div className="p-2">
                    <div className="d-flex">
                      <div className="avatar-sm align-self-center me-2">
                        <div className="avatar-title rounded bg-transparent text-warning font-size-18">
                          <i className="fas fa-folder"></i>
                        </div>
                      </div>

                      <div className="overflow-hidden me-auto">
                        <h5 className="font-size-13 text-truncate mb-1">Others</h5>
                        <p className="text-muted text-truncate mb-0">20 Files</p>
                      </div>

                      <div className="ms-2">
                        <p className="text-muted">1.4 GB</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>
            </div>
          </div>

        </CardBody>
      </Card>
    </React.Fragment >
  )
}

export default Storage
