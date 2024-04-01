import React, { useState } from 'react';
import { UncontrolledDropdown, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardBody, Form, Input } from "reactstrap";
import { Link } from 'react-router-dom';

interface ProductAnalyticsProps {
    title: string;
    productData: Array<{[key: string]: any;}>;
}

const ProductAnalytics = ({ title, productData }: ProductAnalyticsProps) => {
    const [menu1, setMenu1] = useState<boolean>(false);
    const [search_Menu, setsearch_Menu] = useState<boolean>(false);


    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <div className="d-flex justify-content-between">
                        <h4 className="card-title mb-4">{title}</h4>

                        <div>

                            <Dropdown
                                isOpen={menu1}
                                toggle={() => setMenu1(!menu1)}
                                className="d-inline"
                            >
                                <DropdownToggle tag="a" className="text-reset mb-3">
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
                    </div>

                    <div className="table-responsive">
                        <table className="table table-hover table-nowrap mb-0 align-middle">
                            <thead className="bg-light">
                                <tr>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                </tr>

                            </thead>

                            <tbody>
                                {(productData || []).map((product: any, key: number) => (
                                    <tr key={key}>
                                        <td className="fw-medium">
                                            {product.name}
                                        </td>
                                        <td>
                                            {product.quantity}
                                        </td>
                                    </tr>
                                ))}

                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
        </React.Fragment >
    );
};

export default ProductAnalytics;