import React, { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Button
} from "reactstrap";

import {
  getPurchaseOrder as onGetPurchaseOrders,
  updatePOStatus as onUpdatePOStatus
} from "../../../slices/thunks";
import Breadcrumbs from "../../../components/Common/Breadcrumb";

import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";

//redux
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import DeleteModal from "src/pages/Common/DeleteModal";
import moment from "moment";
import { isEmpty } from "lodash";
import { formatCurrency } from "src/common/currency";

const POMgmt = () => {
  const dispatch = useDispatch();
  const { SearchBar } = Search;


  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [poEvent, setPOEvent] = useState<any>({});
  const [isHiddden, setIsHiddden] = useState<boolean>(false);
  const [viewPO,setViewPO] = useState<any>({});
  const  [POList, setPOList] = useState<any[]>([])

  const { purchaseOrderList } = useSelector((state: any) => ({
    purchaseOrderList: state.purchase.purchaseOrderList,
  }));

  useEffect(() => {
    setPOList(purchaseOrderList);
  }, [purchaseOrderList]);

  useEffect(() => {
    dispatch(onGetPurchaseOrders());
  }, [dispatch]);

  const pageOptions = {
    sizePerPage: 10,
    totalSize: POList.length, // replace later with size(users),
    custom: true,
  };


  const selectRow: any = {
    mode: 'radio',
    clickToSelect: true,
    hideSelectColumn: true,
    bgColor: isHiddden?'#E3F2FB':'#f8f9fa'  //#00FFFF
  };


  const handleDeleteClick = (event: any) => {
    setPOEvent({
      id: event.id,
      po_status: !event.attributes.po_status
    });
    setDeleteModal(true);
  };

  /**
 * On delete event
 */
  const handleDeleteEvent = () => {
    dispatch(onUpdatePOStatus(poEvent));
    setDeleteModal(false);
  };
  const handleDeleteClose = () => {
    setDeleteModal(false)
  };

  const viewPurchaseOrder = (po:any)=>{
      setIsHiddden(true);
      setViewPO(po)
  }

  const handlePurchaseOrderClosedOrOpen = (po_products: any) => {
    const closePOrder = po_products.data.filter(({ attributes }: any) => attributes.pp_ordered_quantity == attributes.pp_received_quantity)
    if (closePOrder.length == po_products.data.length) {
      return { type: "completed" };
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

  const purchaseOrdersListColumns = [
    {
      text: "id",
      dataField: "id",
      sort: true,
      hidden: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, po: any) => <React.Fragment>{po.id}</React.Fragment>,
    },
    {
      text: "PO Number",
      dataField: "attributes.po_number",
      hidden: isHiddden,
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, po: any) =>
        <React.Fragment>
          {/* <Link to={`/purchase/purchase-orders/view/${po.id}`} > */}
          <Link to={`#`} onClick={() => viewPurchaseOrder(po)}>

            {po.attributes.po_number}</Link></React.Fragment>,
    },
    {
      text: "Vendor",
      dataField: "attributes.po_vendor.data.attributes.v_name",
      sort: true,
      hidden: isHiddden,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, po: any) => <React.Fragment>{po.attributes.po_vendor.data.attributes.v_name}</React.Fragment>,
    },
    {
      text: "Ship To",
      dataField: "attributes.po_ship_to.data.attributes.w_name",
      sort: true,
      hidden: isHiddden,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, po: any) => <React.Fragment>{po.attributes.po_ship_to.data.attributes.w_name}</React.Fragment>,
    },
    {
      text: "Date",
      dataField: "attributes.po_date",
      sort: true,
      hidden: isHiddden,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, po: any) => {
        const type = handlePurchaseOrderClosedOrOpen(po?.attributes.po_products)?.type;
        return (
          <React.Fragment>
            {moment(po.attributes.po_date).format('DD MMM Y')}
          </React.Fragment>
        )
      }

    },
    {
      text: "Payment Terms",
      dataField: "attributes.po_payment_term",
      sort: true,
      hidden: isHiddden,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, po: any) => <React.Fragment>{po.attributes.po_payment_terms}</React.Fragment>,
    },
    {
      text: "Status",
      dataField: "attributes.po_status",
      sort: true,
      hidden: isHiddden,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, po: any) => {
        const type = handlePurchaseOrderClosedOrOpen(po?.attributes.po_products)?.type;
        return (
          <React.Fragment>
            {po.attributes.po_status == true ?
              <React.Fragment>
                {type== "completed" ?
                  <div className="badge bg-success font-size-12">{"Completed"}</div> :
                  <React.Fragment>
                    {type == "pending" ? <div className="badge bg-warning font-size-12">{"Pending"}</div> :
                      <div className="badge bg-info font-size-12">{"Partially received"}</div>}
                  </React.Fragment>
                }
              </React.Fragment>
              : <div className="badge bg-danger font-size-12">{"Cancelled"}</div>}
          </React.Fragment>
        )
      }
    },
    {
      text: "Action",
      dataField: "action",
      sort: true,
      hidden: isHiddden,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, po: any) => {
        const type = handlePurchaseOrderClosedOrOpen(po?.attributes.po_products)?.type;
        return (
          <React.Fragment>
            {po.attributes.po_status == true ?
              <React.Fragment>
                {type == "pending" ?
                  <UncontrolledDropdown>
                    <DropdownToggle tag="button" className="btn btn-light btn-sm">
                      <i className="uil uil-ellipsis-h"></i>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-end">
                      {/* <Link to={`/purchase/purchase-orders/${po.id}`}> <DropdownItem >Edit</DropdownItem></Link> */}
                      <DropdownItem to="#" onClick={() => handleDeleteClick(po)}>Mark as cancel</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown> :
                  ""}
              </React.Fragment>
              : ""}
          </React.Fragment>
        )
      }
    },
    {
      text: "",
      dataField: "",
      sort: true,
      hidden: !isHiddden,
      headerAttrs: {
        hidden: true
      },
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, po: any) => {
        const type = handlePurchaseOrderClosedOrOpen(po?.attributes.po_products)?.type;
        return (
          <React.Fragment>
            <Link to={`#`} onClick={() => viewPurchaseOrder(po)}>
              <div className="d-flex align-items-start">

                <div className="flex-grow-1 overflow-hidden">
                  <h5 className="text-truncate font-size-14 mb-1">
                    {po.attributes.po_number}
                  </h5>
                  <p className="text-truncate mb-0">
                   {po.attributes.po_vendor.data.attributes.v_name}&nbsp;|&nbsp;
                    {moment(po.attributes.po_date).format('DD MMM Y')}
                  </p>
                </div>
                <div className="flex-shrink-0 text-sm-end">
                  <div>
                   <h6 className="font-size-12">{formatCurrency(po.attributes.po_total_amount)}</h6>
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
          </React.Fragment>
        )
      }

    },
  ];

  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteEvent}
        onCloseClick={handleDeleteClose}
        deleteButtonLable={poEvent.po_status == false ? "Inactive" : "Active"}
      />
      <div className="page-content">
        <MetaTags>
          <title>PO Management | Calgary Carpet Empire</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Purchase" breadcrumbItem={isHiddden ? "View Purchase Order" : "Purchase Orders"} />
          <Row className="d-lg-flex mb-4">
            <Col lg={isHiddden?"5":"12"}>
              {/* <div className="d-lg-flex mb-4"> */}
              <Card className="chat-leftsidebar">
                <CardBody>
                  <PaginationProvider
                    pagination={paginationFactory(pageOptions)}>
                    {({ paginationProps, paginationTableProps }) => (
                      <ToolkitProvider
                        keyField="id"
                        data={POList}
                        columns={purchaseOrdersListColumns}
                        bootstrap4
                        search
                      >
                        {toolkitProps => (
                          <React.Fragment>
                            <Row className="align-items-start">
                              <div className="col-sm">
                                <div>
                                  <Link to="/purchase/purchase-orders/new"> 
                                  <Button color="primary"  className="mb-4"><i className="mdi mdi-plus me-1"></i>New</Button>
                                  </Link>
                                </div>
                              </div>

                              <div className="col-sm-auto">
                                <div className="d-flex gap-1">
                                  <div className="input-group">
                                    <div className="search-box ms-2 mb-2 d-inline-block">
                                      <div className="position-relative">
                                        <SearchBar {...toolkitProps.searchProps} />
                                        <i className="bx bx-search-alt search-icon" />
                                      </div>
                                    </div>
                                  </div>
                                  {/* <UncontrolledDropdown>
                                    <DropdownToggle
                                      className="btn btn-link text-body shadow-none"
                                      tag="a"
                                    >
                                      <i className="uil uil-ellipsis-h"></i>
                                    </DropdownToggle>

                                    <DropdownMenu className="dropdown-menu-end">
                                      <DropdownItem to="#">
                                        Action
                                      </DropdownItem>
                                      <DropdownItem to="#">
                                        Another action
                                      </DropdownItem>
                                      <DropdownItem to="#">
                                        Something else here
                                      </DropdownItem>
                                    </DropdownMenu>
                                  </UncontrolledDropdown> */}
                                </div>
                              </div>
                            </Row>
                            <Row>
                              <Col xl="12">
                                <div className="table-responsive border">
                                  <BootstrapTable
                                    {...toolkitProps.baseProps}
                                    {...paginationTableProps}
                                    classes={
                                      "table align-middle table-nowrap table-hover"
                                    }
                                    selectRow={selectRow}
                                    noDataIndication={ 'No results found' }
                                    bordered={false}
                                    striped={!isHiddden}
                                  />
                                </div>
                              </Col>
                            </Row>
                            <Row className="align-items-md-center mt-30">
                              <Col className="pagination pagination-rounded justify-content-end mb-2">
                                <PaginationListStandalone
                                  {...paginationProps}
                                />
                              </Col>
                            </Row>
                          </React.Fragment>
                        )}
                      </ToolkitProvider>
                    )}
                  </PaginationProvider>
                </CardBody>
              </Card>
            </Col>
            {isHiddden
            &&
            <Col lg="7">
              <Card>
                <div className="p-3 border-bottom">
                  <Row>
                    <Col xl="11" xs="7">
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h2 className="font-size-18 mb-1 text-truncate"><Link to="#" className="text-dark">
                            {viewPO?.attributes.po_number || 0}
                          </Link></h2>
                        </div>
                      </div>
                    </Col>
                    <Col xl="1">
                      <Link to="#" onClick={()=>setIsHiddden(false)} className="btn btn-sm btn-soft-secondary"> <i className="mdi mdi-window-close align-middle"></i></Link>
                    </Col>
                  </Row>
                </div>

                <div>
                  <CardBody>
                    <Row>
                      <Col sm={6}>
                        <div className="text-muted">
                          <h5 className="font-size-16 mb-1">Vendor Details </h5>
                          <p className="mb-0">{viewPO?.attributes.po_vendor.data.attributes.v_name}</p>
                        </div>
                        <div className="text-muted mt-4">
                          <h5 className="font-size-16 mb-1">Warehouse Details </h5>
                          <p className="mb-0">{viewPO?.attributes.po_ship_to.data.attributes.w_name}</p>
                        </div>
                        <div className="mt-4">
                          <h5 className="font-size-15 mb-1">Order Placed With: </h5>
                          <p>{viewPO?.attributes.po_order_placed_with || "NA"}</p>
                        </div>
                      </Col>

                      <Col sm={6}>
                        <div className="text-muted text-sm-end">
                          <div>
                            <h5 className="font-size-15 mb-1"><i className="uil uil-calendar-alt text-primary font-size-22"></i> Date</h5>
                            <p className="text-muted mb-0">{moment(viewPO?.attributes.po_date).format('DD MMM, Y')}</p>
                          </div>
                          <div className="mt-4">
                            <h5 className="font-size-15 mb-1"><i className="uil uil-check-circle text-primary font-size-22"></i>Due Date</h5>
                            <p className="text-muted mb-0"> {moment(viewPO?.attributes.po_due_date).format('DD MMM, Y')}</p>
                          </div>
                          <div className="mt-4">
                            <h5 className="font-size-15 mb-1">Payment Terms: </h5>
                            <p>{viewPO?.attributes.po_payment_terms  || "NA"}</p>
                          </div>
                          <div className="mt-4">
                            <h5 className="font-size-15 mb-1">Order Note: </h5>
                            <p>{viewPO?.attributes.po_order_note|| "NA"}</p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <div className="py-2">
                      <h5 className="font-size-15">Product Summary</h5>

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
                            {(viewPO?.attributes?.po_products &&
                              viewPO?.attributes?.po_products?.data.length) &&
                              viewPO?.attributes?.po_products.data.map((ele: any, index: any) =>
                                <tr key={index}>
                                  <th scope="row">{index+1}</th>
                                  <td>
                                    <div>
                                      <h5 className="text-truncate font-size-14 mb-1">{ele.attributes.pp_product.data.attributes.p_name + '-' + ele.attributes.pp_product.data.attributes.p_color}</h5>
                                      <p className="text-muted mb-0">{ele.attributes.pp_product.data.attributes.p_sku}</p>
                                    </div>
                                  </td>
                                  <td>{ele.attributes.pp_ordered_quantity}</td>
                                  <td>{formatCurrency(ele.attributes.pp_purchase_price)}</td>
                                  <td className="text-end">{formatCurrency(ele.attributes.pp_total_amount)}</td>
                                </tr>)}

                            <tr>
                              <th scope="row" colSpan={4} className="border-0 text-end">GST</th>
                              <td className="border-0 text-end">{formatCurrency(viewPO?.attributes.po_gst)}</td>
                            </tr>

                            <tr>
                              <th scope="row" colSpan={4} className="border-0 text-end">Total</th>
                              <td className="border-0 text-end"><h4 className="m-0 fw-semibold">{formatCurrency(viewPO?.attributes.po_total_amount)}</h4></td>
                            </tr>

                          </tbody>
                        </table>
                      </div>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </Col>
            }
            
            {/* </div> */}
          </Row>
        </Container>
      </div>
    </React.Fragment >
  );
};

export default POMgmt;
