import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { connect } from "react-redux";
import MetaTags from "react-meta-tags";
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const LoadingContainer = () => <div>Loading...</div>;

interface GoogleProps {
  google: Object;
  zoom: number;
}

const MapsGoogle = ({ google, zoom }: GoogleProps) => {
  const selectedPlace: any = {};

  function onMarkerClick() {
    alert("You clicked in this marker");
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Google Maps | Dashonic - React Admin & Dashboard Template</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs title="Maps" breadcrumbItem="Google Maps" />

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Markers</CardTitle>
                  <CardSubtitle className="mb-3">
                    Example of google maps.
                  </CardSubtitle>
                  <div
                    id="gmaps-markers"
                    className="gmaps"
                    style={{ position: "relative" }}
                  >
                    <Map
                      google={google}
                      style={{ width: "100%", height: "100%" }}
                    >
                    </Map>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Overlays</CardTitle>
                  <CardSubtitle className="mb-3">
                    Example of google maps.
                  </CardSubtitle>
                  <div
                    id="gmaps-overlay"
                    className="gmaps"
                    style={{ position: "relative" }}
                  >
                    <Map
                      google={google}
                      style={{ width: "100%", height: "100%" }}
                      initialCenter={{
                        lat: 40.854885,
                        lng: -88.081807,
                      }}
                    >
                      <Marker
                        onClick={() => {
                          onMarkerClick();
                        }}
                      />
                    </Map>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Basic</CardTitle>
                  <CardSubtitle className="mb-3">
                    Example of google maps.
                  </CardSubtitle>
                  <div
                    id="gmaps-markers"
                    className="gmaps"
                    style={{ position: "relative" }}
                  >
                    <Map
                      google={google}
                      style={{ width: "100%", height: "100%" }}
                    ></Map>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Ultra Light</CardTitle>
                  <CardSubtitle className="mb-3">
                    Example of google maps.
                  </CardSubtitle>
                  <div
                    id="gmaps-overlay"
                    className="gmaps"
                    style={{ position: "relative" }}
                  >
                    <Map
                      google={google}
                      style={{ width: "100%", height: "100%" }}
                    >
                      <Marker
                        onClick={() => {
                          onMarkerClick();
                        }}
                      />
                    </Map>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default connect(
  null,
  {}
)(
  GoogleApiWrapper({
    apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
    LoadingContainer: LoadingContainer,
    // v: "3",
  })(MapsGoogle)
);