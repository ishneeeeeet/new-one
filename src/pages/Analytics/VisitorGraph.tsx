import React from "react";

import { Card, CardBody, Row } from "reactstrap";

import Visitorgraph from "../AllCharts/apex/Visitorgraph";

import { visitors } from "../../common/data/analytics";

const VisitorGraph = (props: any) => {
    return (
        <React.Fragment>
            <Card className="card-h-100">
                <CardBody>
                    <div>
                        <ul className="list-group list-group-flush">
                            {(visitors || []).map((visitor: any, key: number) => (
                                <li className=
                                    {(props.page && visitor.id === 1) ? "list-group-item pt-0 py-3 px-0"
                                        : (props.page && visitor.id === 3) ? "list-group-item pb-0 py-3 px-0"
                                            : (props.page) ? "list-group-item py-3 px-0"
                                                : "list-group-item py-3"} key={key}>
                                    <Row>
                                        <div className="col-7">
                                            <div>
                                                <p className="text-muted mb-2 text-truncate">{visitor["title"]}</p>
                                                <h5 className="font-size-16 mb-0 text-truncate">{visitor["price"]} k
                                                    {visitor["isPercentage"] &&
                                                        <span className="text-muted font-size-12 fw-normal ms-2">{" "}{visitor["rank"]} %
                                                            <i className="uil uil-arrow-up-right text-success ms-1"></i>
                                                        </span>
                                                    }
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="col-5">
                                            <div id="chart-sparkarea-1">
                                                <Visitorgraph series={visitor["series"]} page="widget" />
                                            </div>
                                        </div>
                                    </Row>
                                </li>
                            ))}
                        </ul>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default VisitorGraph;