import React, { useState } from 'react';

import { Card, CardBody, Progress, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

import { VectorMap } from "react-jvectormap"
// import "../Maps/jquery-jvectormap.scss"

const map = React.createRef()

const SalesByCountry = () => {
    const [menu1, setMenu1] = useState<boolean>(false);
    return (
        <Card>
            <CardBody>
                <div className="d-flex justify-content-between">
                    <h4 className="card-title mb-4">Sales by County</h4>

                    <Dropdown
                        isOpen={menu1}
                        toggle={() => setMenu1(!menu1)}
                    >
                        <DropdownToggle tag="a" className="text-reset">
                            <span className="fw-semibold">Report By:</span> <span
                                className="text-muted">Monthly<i
                                    className="mdi mdi-chevron-down ms-1"></i></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-end">
                            <DropdownItem to="#">Yearly</DropdownItem>
                            <DropdownItem to="#">Monthly</DropdownItem>
                            <DropdownItem to="#">Weekly</DropdownItem>
                            <DropdownItem to="#">Today</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                </div>

                <div id="world-map-markers" style={{ height: "242px" }}>
                    <VectorMap
                        map='asia_mill'
                        backgroundColor="transparent"
                        zoomOnScroll={false}
                        zoomButtons={false}
                        ref={map}
                        lineStyle={{
                            animation: true,
                            strokeDasharray: "6 3 6",
                        }}
                        containerStyle={{
                            width: "457px",
                            height: "242px",
                        }}
                        regionStyle={{
                            initial: {
                                fill: 'rgb(98, 110, 212)',
                                stroke: "none",
                                "stroke-width": 0,
                                "stroke-opacity": 0,
                            },
                            hover: {
                                "fill-opacity": 0.8,
                                cursor: "pointer",
                            },
                            selected: {
                                fill: "#2938bc", //what colour clicked country will be
                            },
                            selectedHover: {},
                        }}
                        containerClassName="map"
                    />
                </div>

                <div className="pt-3 px-2 pb-2">
                    <p className="mb-1 fw-medium">USA <span className="float-end">75%</span></p>
                    <Progress value={75} className="animated-progess custom-progress mt-2"></Progress>
                    <p className="mt-4 mb-1 fw-medium">Russia <span className="float-end">55%</span></p>
                    <Progress value={55} className="progress animated-progess custom-progress mt-2"></Progress>
                    <p className="mt-4 mb-1 fw-medium">Australia <span className="float-end">85%</span></p>
                    <Progress value={85} className="progress animated-progess custom-progress mt-2"></Progress>
                </div>

            </CardBody>
        </Card>
    );
}

export default SalesByCountry;