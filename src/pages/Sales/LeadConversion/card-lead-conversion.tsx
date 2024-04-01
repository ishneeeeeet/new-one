import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  Col,
  Row,
  UncontrolledTooltip,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Tooltip,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
  Button,
} from "reactstrap"

import moment from 'moment';

//Import Icons
import Icon from "@ailibs/feather-react-ts";

interface CardProjectProps {
  leadCDetail: any;
  rowIndex:any
}

const CardProject = ({ leadCDetail,rowIndex }: CardProjectProps) => {
  const [ttop, setttop] = useState(false);
  const [isOpenToggle, setIsOpenToggle] = useState(false);
  return (
    <React.Fragment>
      {
        <Card className="border shadow-none" key={rowIndex}>
        <CardBody>
          <div className="d-flex">
            <div className="flex-grow-1 me-2 flex-wrap">
              <div className="text-muted ">
                <div>
                  <Row>
                    <Col xl={3} sm={4}>
                      <h5 className="font-size-15 mb-1">Lead number: </h5>
                      <p>{leadCDetail.attributes.lead.data.attributes.ld_number}</p>
                    </Col>
                    <Col xl={3} sm={4}>
                      <h5 className="font-size-15 mb-1">Estimate No: </h5>
                      <p>{leadCDetail.attributes.lc_estimate_id}</p>
                    </Col>
                  </Row>

                </div>
              </div>
              {leadCDetail.attributes.lc_customer_instruction && 
               <p className="text-muted mb-0">Notes: {leadCDetail.attributes.lc_customer_instruction}</p>
               }
             
            </div>
            <div className="flex-shrink-0">
              <div className="d-flex gap-2">
                {!leadCDetail.attributes.invoice_created && 
                    <React.Fragment>
                      {/* <div>
                        <Link to={`/sales/estimates/edit/${leadCDetail.id}`} id={"estimate"+rowIndex} className="btn btn-light btn-sm"><i className="uil uil-pen"></i></Link>
                      </div>
                      <UncontrolledTooltip
                        placement="top"
                        target={"estimate"+rowIndex}
                      >
                        Edit Estimate
                      </UncontrolledTooltip> */}
                    </React.Fragment>
              }
                {/* <UncontrolledDropdown>
                  <DropdownToggle
                    href="#"
                    className="btn btn-light btn-sm"
                    tag="a"
                  >
                    <Icon className="icon-xs" name="more-horizontal" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-end">
                    <DropdownItem to="#">Draft</DropdownItem>
                    <DropdownItem to="#">Delete</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown> */}
              </div>
            </div>
          </div>
        </CardBody>

        <div className="">
          <Row className="g-0">
            <Col xl={4} sm={6}>
              <div className="border p-3 h-100">
                <div>
                  <h5 className="font-size-16 mb-0">Customer Details: </h5>
                  <div className="mt-3">
                    <h5 className="font-size-14 mb-2">{leadCDetail.attributes.lead.data.attributes?.ld_customer?.data?.attributes?.c_name}</h5>
                    <p className="mb-1">{leadCDetail.attributes.lead.data.attributes?.ld_customer?.data?.attributes?.c_address}</p>
                    {/* <p className="mb-1">PrestonMiller@armyspy.com</p> */}
                    {/* <p>001-234-5678</p> */}
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={2} sm={6}>
              <div className="border p-3 h-100">
                <div>
                  <h5 className="font-size-16 mb-0">Price Details</h5>
                  <div className="mt-3 mr-5">
                    <h5 className="font-size-14 mb-1">Total Billing: </h5>
                    <p>${leadCDetail.attributes.lc_total_amount}</p>
                  </div>
                  {/* <div className="mt-3">
                    <h5 className="font-size-14 mb-1">Discount: </h5>
                    <p>$10</p>
                  </div> */}
                </div>
              </div>
            </Col>
            <Col xl={2} sm={6}>
              <div className="border p-3 h-100">
                <div>
                  <h5 className="font-size-16 mb-0">Date</h5>
                  <div className="mt-3">
                    {moment(leadCDetail.attributes.lc_date).format('DD MMM Y')}
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={2} sm={6}>
              <div className="border p-3 h-100">

                <div>
                  <h5 className="font-size-16 mb-0">All Product Quantity</h5>
                  <div className="mt-3">
                    20
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={2} sm={6}>
              <div className="border p-3 h-100">
                <div>
                  <h5 className="font-size-16 mb-0">Product Details</h5>
                  <div className="mt-3">
                         {/* <Button
                          id={`Popoverdismiss${rowIndex}`}
                          className="badge bg-success font-size-12 col-lg-4 col-sm-6 btn-light"
                          onClick={() => {
                            setIsOpenToggle(!isOpenToggle);
                          }}
                        >
                           <Icon name="eye" />
                        </Button>
                        <UncontrolledPopover
                          trigger="focus"
                          target={`Popoverdismiss${rowIndex}`}
                          placement="right"
                          className="col-lg-12"
                        >
                          <PopoverHeader>Product Summary</PopoverHeader>
                          <PopoverBody>
                          <div className="table-responsive border">
                        <table className="table align-middle table-nowrap table-centered mb-0">
                          <thead>
                            <tr>
                              <th style={{ width: "70px" }}>No.</th>
                              <th>Item</th>
                              <th>Ordered Qty</th>
                              <th>Rate</th>
                              <th className="text-end" style={{ width: "120px" }}>Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                          </tbody>
                        </table>
                      </div>
                          </PopoverBody>
                        </UncontrolledPopover> */}
                      
                     <Dropdown
                      isOpen={isOpenToggle}
                      direction="right"
                      className="btn-group dropend"
                      toggle={() => setIsOpenToggle(!isOpenToggle)}
                    >
                      <DropdownToggle  className="badge bg-success col-lg-4 col-sm-6 btn-light" caret>
                      <Icon name="eye" />
                      </DropdownToggle>
                      <DropdownMenu  data-popper-placement="right-start">
                        <div className="table-responsive">
                        <table className="table align-middle table-nowrap table-centered mb-0">
                          <thead>
                            <tr>
                              <th style={{ width: "70px" }}>No.</th>
                              <th>Item</th>
                              <th>Quantity</th>
                              <th>Rate</th>
                              <th>Discount</th>
                              <th>Installation</th>
                              <th className="text-end" style={{ width: "120px" }}>Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                          {(leadCDetail?.attributes?.lead_conversion_products &&
                              leadCDetail?.attributes?.lead_conversion_products?.data.length) &&
                              leadCDetail?.attributes?.lead_conversion_products.data.map((ele: any, index: any) =>
                                <tr key={index}>
                                  <th scope="row">{('0' + (index+1)).slice(-2)}</th>
                                  <td>
                                    <div>
                                      <h5 className="text-truncate font-size-14 mb-1">{ele.attributes.product.data.attributes.p_name + '-' + ele.attributes.product.data.attributes.p_color}</h5>
                                      
                                    </div>
                                  </td>
                                  <td>{ele.attributes.lcp_quantity}</td>
                                  <td>${ele.attributes.lcp_price}</td>
                                  <td>${ele.attributes.lcp_discount}</td>
                                  <td> {ele.attributes.lcp_installation == true ? "Yes" : "No"}</td>
                                  <td className="text-end">${ele.attributes.lcp_amount}</td>
                                </tr>)}
                          </tbody>
                        </table>
                      </div>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Card>
      }
    </React.Fragment>
  )
}

export default CardProject