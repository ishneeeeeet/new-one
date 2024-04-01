import React from "react"
import { Card, CardBody, Container } from "reactstrap"
import MetaTags from "react-meta-tags";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

// import Component
import FileLeftBar from "./FileLeftBar"
import FileList from "./FileList"
import RecentFile from "./RecentFile"
import Storage from "./Storage"

const FileManager = () => {
  const series = [76]
  const options = {
    chart: {
      height: 150,
      type: "radialBar",
      sparkline: {
        enabled: !0,
      },
    },
    colors: ["#038edc"],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: "97%",
          margin: 5, // margin is in pixels
        },

        hollow: {
          size: "60%",
        },

        dataLabels: {
          name: {
            show: !1,
          },
          value: {
            offsetY: -2,
            fontSize: "16px",
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    labels: ["Storage"],
  }
  return (
    <React.Fragment>
      <div className="page-content">
          <MetaTags>
            <title>File Manager | Dashonic - React Admin & Dashboard Template</title>
          </MetaTags>
        <Container fluid>
          <Breadcrumbs title="Apps" breadcrumbItem="File Manager" />
          <div className="d-xl-flex">
            <div className="w-100">
              <div className="d-md-flex">
                {/* FileRightBar  */}
                <FileLeftBar />
                <div className="w-100">
                  <Card>
                    <CardBody>
                      <FileList />
                      <RecentFile />
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
            <Storage options={options} series={series} />
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}
export default FileManager
