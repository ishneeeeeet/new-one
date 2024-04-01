import React, { useState } from "react";
import SimpleBar from "simplebar-react";
import { Dropdown, DropdownToggle, DropdownMenu, Card, CardBody, DropdownItem } from "reactstrap";
import { countries } from "../../common/data/analytics";

import { VectorMap } from "react-jvectormap";
import "../Maps/jquery-jvectormap.scss";

const map = React.createRef();

const VisitorbyLocation = () => {
    const [menu1, setMenu1] = useState<boolean>(false);
    return (
        <Card className="card-h-100">
            <CardBody>
                <div className="d-flex align-items-start">
                    <div className="flex-grow-1 overflow-hidden">
                        <h5 className="card-title text-truncate mb-3">Visitors by Location</h5>
                    </div>

                    <div className="flex-shrink-0">
                        <Dropdown
                            isOpen={menu1}
                            toggle={() => setMenu1(!menu1)}
                        >
                            <DropdownToggle tag="a" className="text-reset">
                                <span className="fw-semibold">Report By:</span> <span className="text-muted">Monthly<i className="mdi mdi-chevron-down ms-1"></i></span>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                                <DropdownItem to="#">Yearly</DropdownItem>
                                <DropdownItem to="#">Monthly</DropdownItem>
                                <DropdownItem to="#">Weekly</DropdownItem>
                                <DropdownItem to="#">Today</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>

                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="d-flex h-100 map-widget">
                            <div id="world-map-markers">
                            <VectorMap
                                map="asia_mill"
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
                                    height: "270px",
                                }}
                                regionStyle={{
                                    initial: {
                                        fill: "rgb(98, 110, 212)",
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
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <SimpleBar style={{ maxHeight: "230px" }}>
                            <ul className="list-unstyled mb-0">
                                {(countries || []).map((country: any, key: number) => (
                                    <li className="px-4 py-3" key={key}>
                                        <div className="d-flex align-items-start">
                                            <div className="flex-shrink-0 align-self-center me-3">
                                                <div className="avatar-sm">
                                                    <div className="avatar-title bg-light rounded-circle">
                                                        <img src={country["image"]} alt="" height="10" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <p className="text-muted mb-1">{country["title"]}</p>
                                                <h5 className="font-size-16 mb-0">{country["rank"]}%</h5>
                                            </div>
                                            <div className="flex-shrink-0 ms-2">
                                                <div className="badge badge-soft-success">{country["percentage"]} % <i className="uil uil-arrow-up-right text-success ms-1"></i></div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </SimpleBar>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default VisitorbyLocation;