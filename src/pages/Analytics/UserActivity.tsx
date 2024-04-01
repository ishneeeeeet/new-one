import React, { useState } from "react";

import { Card, CardBody, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

import ApexBar from "../AllCharts/apex/apexbar";

const UserActivity = () => {
    const [menu, setMenu] = useState<boolean>(false);
    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <div className="d-flex align-items-start">
                        <div className="flex-grow-1 overflow-hidden">
                            <h5 className="card-title text-truncate mb-4">User Activity</h5>
                        </div>

                        <div className="flex-shrink-0">
                            <Dropdown isOpen={menu}
                                toggle={() => setMenu(!menu)}>
                                <DropdownToggle className="font-size-16 text-muted dropdown-toggle" tag="a">
                                    <i className="mdi mdi-dots-horizontal"></i>
                                </DropdownToggle>

                                <DropdownMenu className="dropdown-menu-end">
                                    <DropdownItem href="#">Action</DropdownItem>
                                    <DropdownItem href="#">Another action</DropdownItem>
                                    <DropdownItem href="#">Something else here</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>

                    <div>
                        <div id="chart-column" className="apex-charts" dir="ltr">
                            <ApexBar />
                        </div>
                    </div>

                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default UserActivity;