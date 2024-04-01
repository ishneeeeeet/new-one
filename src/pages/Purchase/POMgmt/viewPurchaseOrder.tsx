import React, { useEffect, useState, useCallback } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import { isEmpty, map } from "lodash";
import moment from "moment";
import {
  Card,
  Col,
  Container,
  Row,
  TabContent,
  TabPane,
  CardBody
} from "reactstrap";


//Import Scrollbar
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

import {
  getPurchaseOrder as onGetPurchaseOrders,

} from "../../../slices/thunks";

//redux
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { formatCurrency } from "src/common/currency";
const ViewPurchaseOrder = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { purchaseOrderList } = useSelector((state: any) => ({
    purchaseOrderList: state.purchase.purchaseOrderList,
  }));

  const [messageBox, setMessageBox] = useState<any>(null);
  const [purchaseOrderDetail, setPurchaseOrderDetail] = useState<any>();

  useEffect(() => {
    if (id != undefined && !isEmpty(purchaseOrderList)) {
      const poDetails = purchaseOrderList.find((ele: any) => ele.id == id)
      console.log("==poDetails==", poDetails)
      setPurchaseOrderDetail(poDetails)
    }
  }, [id, purchaseOrderList]);

  useEffect(() => {
    dispatch(onGetPurchaseOrders());
  }, [dispatch]);


  const scrollToBottom = useCallback(() => {
    if (messageBox) {
      messageBox.scrollTop = messageBox.scrollHeight + 1000;
    }
  }, [messageBox]);

  useEffect(() => {
    if (!isEmpty(purchaseOrderList)) scrollToBottom();
  }, [purchaseOrderList, scrollToBottom]);

  const handlePurchaseOrderClosedOrOpen = (po_products: any) => {
    const closePOrder = po_products.data.filter(({ attributes }: any) => attributes.pp_ordered_quantity == attributes.pp_received_quantity)
    if (closePOrder.length == po_products.data.length) {
      return { type: "closed" };
    } else {
      const openOrder = po_products.data.find(({ attributes }: any) => attributes.pp_received_quantity > 0)
      if (!isEmpty(openOrder)) {
        return { type: "p_received" };
      }
      if (isEmpty(openOrder)) {
        return { type: "pending" };
      }
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>PO Management-view| Calgary Carpet Empire</title>
        </MetaTags>
        <Container fluid>
          <div className="d-lg-flex mb-4">
            <Card className="chat-leftsidebar">
              <div className="pt-4 px-4 bg-soft-primary rounded-top">
                <div>
                  <Row className="mb-3">
                    <Col lg={6} sm={6}>
                      <div className="search-box mb-4">
                        <h5 className="font-size-16 mt-2">All Purchase Orders</h5>
                      </div>
                    </Col>
                    <Col lg={6} sm={6}>
                      <div className="mt-4 mt-sm-0 d-flex align-items-center justify-content-sm-end">
                        <div className="mb-2 me-2">
                          <Link to="/purchase/purchase-orders/new" className="btn btn-primary">
                            <i className="uil uil-plus"></i>New
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>

              </div>

              <div>
                <TabContent activeTab={"1"}>
                  <TabPane tabId="1">
                    <PerfectScrollbar style={{ height: "604px" }} className="chat-message-list">
                      <div className="p-4">
                        <div>
                          <ul className="list-unstyled chat-list">
                            {map(purchaseOrderList, po => {
                              const type = handlePurchaseOrderClosedOrOpen(po?.attributes.po_products)?.type;
                              return (
                                <li
                                  key={po.id}
                                  className={
                                    id == po.id ? "active" : ""
                                  }
                                >
                                  <Link to={`/purchase/purchase-orders/view/${po.id}`}>
                                    <div className="d-flex align-items-start">

                                      <div className="flex-grow-1 overflow-hidden">
                                        <h5 className="text-truncate font-size-14 mb-1">
                                          {po.attributes.po_number}
                                        </h5>
                                        <p className="text-truncate mb-0">
                                          {po.attributes.po_vendor.data.attributes.v_name} |
                                          {moment(po.attributes.po_date).format('DD MMM Y')}
                                        </p>
                                      </div>
                                      <div className="flex-shrink-0 text-sm-end">
                                        <div className="font-size-14">
                                          {formatCurrency(po.attributes.po_total_amount)}
                                        </div>
                                        <div className="font-size-11 mt-2">
                                          {po.attributes.po_status == true ?
                                            <React.Fragment>
                                              {type == "closed" ?
                                                <div className="badge bg-success font-size-12">{"Closed"}</div> :
                                                <React.Fragment>
                                                  {type == "pending" ? <div className="badge bg-warning font-size-12">{"Pending"}</div> :
                                                    <div className="badge bg-info font-size-12">{"Partially received"}</div>}
                                                </React.Fragment>
                                              }
                                            </React.Fragment>
                                            : <div className="badge bg-danger font-size-12">{"Cancelled"}</div>}

                                        </div>
                                      </div>

                                    </div>
                                  </Link>
                                </li>
                              )
                            }

                            )}
                          </ul>
                        </div>
                      </div>
                    </PerfectScrollbar>
                  </TabPane>
                </TabContent>
              </div>
            </Card>
            <div className="w-100 user-chat mt-4 mt-sm-0 ms-lg-1">
              <Card>
                <div className="p-3 border-bottom">
                  <Row>
                    <Col xl="11" xs="7">
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h2 className="font-size-18 mb-1 text-truncate"><Link to="#" className="text-dark">{purchaseOrderDetail?.attributes.po_number || 0}</Link></h2>
                        </div>
                      </div>
                    </Col>
                    <Col xl="1">
                      <Link to="/purchase/purchase-orders" className="btn btn-sm btn-soft-secondary"> <i className="mdi mdi-window-close align-middle"></i></Link>
                    </Col>
                  </Row>
                </div>

                <div>
                  <CardBody>
                    <Row>
                      <Col sm={6}>
                        <div className="text-muted">
                          <h5 className="font-size-16 mb-1">Vendor Details </h5>
                          <p className="mb-0">{purchaseOrderDetail?.attributes.po_vendor.data.attributes.v_name}</p>
                        </div>
                        <div className="text-muted mt-4">
                          <h5 className="font-size-16 mb-1">Warehouse Details </h5>
                          <p className="mb-0">{purchaseOrderDetail?.attributes.po_ship_to.data.attributes.w_name}</p>
                        </div>
                        <div className="mt-4">
                          <h5 className="font-size-15 mb-1">Order Placed With: </h5>
                          <p>{purchaseOrderDetail?.attributes.po_order_placed_with || "NA"}</p>
                        </div>
                      </Col>

                      <Col sm={6}>
                        <div className="text-muted text-sm-end">
                          <div>
                            <h5 className="font-size-15 mb-1"><i className="uil uil-calendar-alt text-primary font-size-22"></i> Date</h5>
                            <p className="text-muted mb-0"> {moment(purchaseOrderDetail?.attributes.po_date).format('DD MMM, Y')}</p>
                          </div>
                          <div className="mt-4">
                            <h5 className="font-size-15 mb-1"><i className="uil uil-check-circle text-primary font-size-22"></i>Due Date</h5>
                            <p className="text-muted mb-0"> {moment(purchaseOrderDetail?.attributes.po_due_date).format('DD MMM, Y')}</p>
                          </div>
                          <div className="mt-4">
                            <h5 className="font-size-15 mb-1">Payment Terms: </h5>
                            <p>{purchaseOrderDetail?.attributes.po_payment_terms || "NA"}</p>
                          </div>
                          <div className="mt-4">
                            <h5 className="font-size-15 mb-1">Order Note: </h5>
                            <p>{purchaseOrderDetail?.attributes.po_order_note || "NA"}</p>
                          </div>
                        </div>
                      </Col>

                    </Row>


                    <div className="py-2">
                      <h5 className="font-size-15">Products Summary</h5>

                      <div className="table-responsive border">
                        <table className="table align-middle table-nowrap table-centered mb-0">
                          <thead>
                            <tr>
                              {/* <th style={{ width: "70px" }}>No.</th> */}
                              <th>Item</th>
                              <th>Ordered Qty</th>
                              <th>Rate</th>
                              <th className="text-end" style={{ width: "120px" }}>Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            {(purchaseOrderDetail?.attributes?.po_products &&
                              purchaseOrderDetail?.attributes?.po_products?.data.length) &&
                              purchaseOrderDetail?.attributes?.po_products.data.map((ele: any, index: any) =>
                                <tr key={index}>
                                  {/* <th scope="row">{index}</th> */}
                                  <td>
                                    <div>
                                      <h5 className="text-truncate font-size-14 mb-1">{ele.attributes.pp_product.data.attributes.p_name}</h5>
                                      <p className="text-muted mb-0">{ele.attributes.pp_product.data.attributes.p_sku}</p>
                                    </div>
                                  </td>
                                  <td>{ele.attributes.pp_ordered_quantity}</td>
                                  <td>{formatCurrency(ele.attributes.pp_purchase_price)}</td>
                                  <td className="text-end">{formatCurrency(ele.attributes.pp_total_amount)}</td>
                                </tr>)}

                            <tr>
                              <th scope="row" colSpan={4} className="border-0 text-end">GST</th>
                              <td className="border-0 text-end">{purchaseOrderDetail?.attributes.po_gst} %</td>
                            </tr>

                            <tr>
                              <th scope="row" colSpan={4} className="border-0 text-end">Total</th>
                              <td className="border-0 text-end"><h4 className="m-0 fw-semibold">{formatCurrency(purchaseOrderDetail?.attributes.po_total_amount)}</h4></td>
                            </tr>

                          </tbody>
                        </table>
                      </div>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ViewPurchaseOrder;