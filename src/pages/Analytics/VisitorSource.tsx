import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, CardBody, Card } from "reactstrap";
import Visitor from "../AllCharts/donut/Visitor";

const VisitorSource = (props : any) => {
    const [menu1, setMenu1] = useState<boolean>(false);
    return (
        <React.Fragment>
            <Card className="card-h-100">
                <CardBody>
                    <div className="d-flex align-items-start">
                        <div className="flex-grow-1">
                            <h5 className="card-title mb-4">Visitors Source</h5>
                        </div>

                        <div className="flex-shrink-0">
                            <Dropdown
                                isOpen={menu1}
                                toggle={() => setMenu1(!menu1)}
                            >
                                <DropdownToggle tag="a" className="font-size-16 text-muted">
                                    <i className="mdi mdi-dots-horizontal"></i>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-end">
                                    <DropdownItem to="#">Action</DropdownItem>
                                    <DropdownItem to="#">Another action</DropdownItem>
                                    <DropdownItem to="#">Something else here</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>

                        </div>
                    </div>
                    <div id="chart-donut" className="apex-charts" dir="ltr">
                        <Visitor page={props.page} />
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default VisitorSource;