import React, { useState } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

import ColorPicker from "@vtaits/react-color-picker";
import "@vtaits/react-color-picker/dist/index.css";
import { SketchPicker } from "react-color";

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import ChoicesInput from "./ChoicesInput";
import Switcher from "./Switcher";
import Datepickers from "./Datepickers";

const AdvancedPlugins = () => {
  const [color, setcolor] = useState("rgba(3, 142, 220, 1)");
  const [colorCust, setcolorCust] = useState("rgba(95, 208, 243, 1)");
  const [colorRGBA, setcolorRGBA] = useState("rgba(247, 204, 83, 1)");
  
  const [display_RGBA, setdisplay_RGBA] = useState(false);
  const [display_Cust, setdisplay_Cust] = useState(false);
  
  function handleRGBA() {
    setdisplay_RGBA(!display_RGBA);
  }
  function handleCust() {
    setdisplay_Cust(!display_Cust);
  }
  const onSwatchHover_RGBA = (color: any) => {
    const format =
      "rgba(" +
      color.rgb.r +
      "," +
      color.rgb.g +
      "," +
      color.rgb.b +
      "," +
      color.rgb.a +
      ")";
    setcolorRGBA(format);
  };

  const onSwatchHover_Cust = (color: any) => {
    const format1 =
      "rgba(" +
      color.rgb.r +
      "," +
      color.rgb.g +
      "," +
      color.rgb.b +
      "," +
      color.rgb.a +
      ")";
      setcolorCust(format1);
  };

  const [simple_color, setsimple_color] = useState<any>(0);

  const onDrag = (c1: any) => {
    setcolor(c1);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Advanced Plugins | Dashonic - React Admin & Dashboard Template
          </title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Forms" breadcrumbItem="Advanced Plugins" />
          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader className="justify-content-between d-flex align-items-center">
                  <h4 className="card-title">Css Switch</h4>
                  <p className="m-0 badge badge-soft-primary py-2">
                    Dashonic Only
                  </p>
                </CardHeader>
                <CardBody>
                  <Row>
                    {/* import Switcher */}
                    <Switcher />
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardHeader className="justify-content-between d-flex align-items-center">
                  <h4 className="card-title">Colorpicker</h4>
                  <Link
                    to="//www.npmjs.com/package/@vtaits/react-color-picker"
                    target="_blank" rel="noreferrer"
                    className="btn btn-sm btn-soft-secondary"
                  >
                    Docs <i className="mdi mdi-arrow-right align-middle"></i>
                  </Link>
                </CardHeader>
                <CardBody>
                  <div className="text-center">
                    <Row>
                      <div className="col-4">
                        <div className="Name">
                          <h5 className="font-size-14">Simple Demo</h5>

                          <span className="input-group-append">
                            <span
                              className="input-group-text colorpicker-input-addon"
                              onClick={() => {
                                setsimple_color(!simple_color);
                              }}
                            >
                              <i
                                style={{
                                  height: "28px",
                                  width: "28px",
                                  background: color,
                                  display: "block"
                                }}
                              />
                            </span>
                          </span>
                          {simple_color ? (
                            <ColorPicker
                              saturationHeight={100}
                              saturationWidth={100}
                              value={color}
                              onDrag={onDrag}
                            />
                          ) : null}

                        </div>
                      </div>
                      <div className="col-4">
                        <div className="Name">
                          <h5 className="font-size-14">RGBA Demo</h5>
                          <span className="input-group-append">
                            <span
                              className="input-group-text colorpicker-input-addon"
                              onClick={handleCust}
                            >
                              <i
                                style={{
                                  height: "28px",
                                  width: "28px",
                                  background: colorCust,
                                  display: "block"
                                }}
                              />
                            </span>
                          </span>
                          {display_Cust ? (
                            <SketchPicker
                            color="#fff"
                            value={colorCust}
                            width="160px"
                            onChangeComplete={onSwatchHover_Cust}
                          />
                        ) : null}
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="Name">
                          <h5 className="font-size-14">Horizontal Demo</h5>
                          <span className="input-group-append">
                            <span
                              className="input-group-text colorpicker-input-addon"
                              onClick={handleRGBA}
                            >
                              <i
                                style={{
                                  height: "28px",
                                  width: "28px",
                                  background: colorRGBA,
                                  display: "block"
                                }}
                              />
                            </span>
                          </span>
                          {display_RGBA ? (
                            <SketchPicker
                              color="#fff"
                              value={colorRGBA}
                              width="160px"
                              onChangeComplete={onSwatchHover_RGBA}
                            />
                          ) : null}
                        </div>
                      </div>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader className="justify-content-between d-flex align-items-center">
                  <h4 className="card-title">Choices</h4>
                  <Link
                    to="//www.npmjs.com/package/react-select-animated"
                    target="_blank" rel="noreferrer"
                    className="btn btn-sm btn-soft-secondary"
                  >
                    Docs <i className="mdi mdi-arrow-right align-middle"></i>
                  </Link>
                </CardHeader>

                <CardBody>
                  <ChoicesInput />
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader className="justify-content-between d-flex align-items-center">
                  <h4 className="card-title">Datepicker</h4>
                  <Link
                    to="//www.npmjs.com/package/react-flatpickr"
                    target="_blank" rel="noreferrer"
                    className="btn btn-sm btn-soft-secondary"
                  >
                    Docs <i className="mdi mdi-arrow-right align-middle"></i>
                  </Link>
                </CardHeader>

                <CardBody>
                  <Datepickers />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AdvancedPlugins;
