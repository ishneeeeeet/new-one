import React, { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row
} from "reactstrap";

import {
  getShipmentReceiveds as onGetShipmentReceiveds
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
import { get } from "lodash";

const POMgmt = () => {
  const dispatch = useDispatch();
  const { SearchBar } = Search;
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [activeRecordView, setActiveRecordView] = useState<any>({})
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  useEffect(() => {
    dispatch(onGetShipmentReceiveds());
  }, [dispatch]);

  const { shipmentsRcvd } = useSelector((state: any) => ({
    shipmentsRcvd: state.purchase.shipmentReceiveds
  }));


  // const shipmentsRcvd = [
  //   {
  //     id: 1,
  //     poNumber: 'PO-001',
  //     dateRcvd: '02-09-2023',
  //     productRcvd: 'Roll Ends',
  //     qtyRcvd: '20',
  //     location: '',
  //     locationOfItem: 'Section A',
  //     status:1
  //   },
  //   {
  //     id: 2,
  //     poNumber: 'PO-002',
  //     dateRcvd: '12-09-2023',
  //     productRcvd: 'Tiles',
  //     qtyRcvd: '25',
  //     location: '',
  //     locationOfItem: 'Section A',
  //     status:1
  //   },
  //   {
  //     id: 3,
  //     poNumber: 'PO-003',
  //     dateRcvd: '02-10-2023',
  //     productRcvd: 'Laminate',
  //     qtyRcvd: '54',
  //     location: '',
  //     locationOfItem: 'Section A',
  //     status:1
  //   },
  //   {
  //     id: 4,
  //     poNumber: 'PO-004',
  //     dateRcvd: '25-09-2023',
  //     productRcvd: 'VCT Tiles',
  //     qtyRcvd: '40',
  //     location: '',
  //     locationOfItem: 'Section A',
  //     status:0
  //   },
  //   {
  //     id: 5,
  //     poNumber: 'PO-005',
  //     dateRcvd: '23-09-2023',
  //     productRcvd: 'Hardwood',
  //     qtyRcvd: '10',
  //     location: '',
  //     locationOfItem: 'Section A',
  //     status:1
  //   },
  //   {
  //     id: 6,
  //     poNumber: 'PO-006',
  //     dateRcvd: '23-09-2023',
  //     productRcvd: 'Hardwood',
  //     qtyRcvd: '10',
  //     location: '',
  //     locationOfItem: 'Section A',
  //     status:1
  //   }
  // ];

  const pageOptions = {
    sizePerPage: 10,
    totalSize: shipmentsRcvd.length, // replace later with size(users),
    custom: true,
  };

  /**
 * On delete event
 */
  const handleDeleteEvent = () => {
    setDeleteModal(false);
  };
  const handleDeleteClose = () => {
    setDeleteModal(false)
  };

  const viewRecordDetails = (record: any) => {
    setIsHidden(true);
    setActiveRecordView(record)
  }

  const selectRow: any = {
    mode: 'radio',
    clickToSelect: true,
    hideSelectColumn: true,
    bgColor: isHidden ? '#E3F2FB' : '#f8f9fa'  //#00FFFF
  };

  const shipmentReceivedColumn = [
    // {
    //   dataField: "id",
    //   text: "Id",
    //   sort: true,
    //   // eslint-disable-next-line react/display-name
    //   formatter: (cellContent: any, shipmentsRcvd: any) => <React.Fragment>{shipmentsRcvd.id}</React.Fragment>

    // },
    {
      text: "PO Number",
      dataField: "attributes.gr_po_number",
      sort: false,
      hidden: isHidden,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, shipmentsRcvd: any) => <React.Fragment><Link to='#' onClick={() => viewRecordDetails(shipmentsRcvd)}>
        {shipmentsRcvd.attributes.gr_po_number}</Link></React.Fragment>
    },
    {
      dataField: "attributes.gr_po_date",
      text: "PO Date",
      sort: true,
      hidden: isHidden,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, shipmentsRcvd: any) => <React.Fragment>{moment(shipmentsRcvd.attributes.gr_po_date).format('DD MMM Y')}</React.Fragment>
    },
    {
      dataField: "attributes.createdAt",
      text: "Goods Received Date",
      sort: true,
      hidden: isHidden,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, shipmentsRcvd: any) => <React.Fragment>{moment(shipmentsRcvd.attributes.createdAt).format('DD MMM Y')}</React.Fragment>
    },
    {
      text: "Status",
      dataField: "gr_status",
      sort: true,
      hidden: isHidden,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, shipmentsRcvd: any) => (
        <React.Fragment>
          {shipmentsRcvd.attributes.gr_product_details.every((productObj: any) =>
            productObj.pp_ordered_quantity === productObj.pp_received_quantity
          ) ?
            <div className="badge bg-success font-size-12">{"Completed"}</div>
            : <div className="badge bg-info font-size-12">{"Partially Received"}</div>}
        </React.Fragment>
      )
    },
    {
      text: "",
      dataField: "",
      sort: true,
      hidden: !isHidden,
      headerAttrs: {
        hidden: true
      },
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, shipmentsRcvd: any) => {
        return (
          <React.Fragment>
            <Link to={`#`} onClick={() => viewRecordDetails(shipmentsRcvd)}>
              <div className="d-flex align-items-start">

                <div className="flex-grow-1 overflow-hidden">
                  <h5 className="text-truncate font-size-14 mb-1">
                    {shipmentsRcvd.attributes.gr_po_number}
                  </h5>
                  <p className="text-truncate mb-0">
                    {moment(shipmentsRcvd.attributes.gr_po_date).format('DD MMM Y')}
                  </p>
                </div>
                <div className="flex-shrink-0 text-sm-end">
                  <div>
                    <h6 className="font-size-12">{moment(shipmentsRcvd.attributes.updatedAt).format('DD MMM Y')}</h6>
                  </div>
                  <div className="font-size-11 mt-2">
                    {shipmentsRcvd.attributes.gr_product_details.every((productObj: any) =>
                      productObj.pp_ordered_quantity === productObj.pp_received_quantity
                    ) ?
                      <div className="badge bg-success font-size-12">{"Completed"}</div>
                      : <div className="badge bg-info font-size-12">{"Partially Received"}</div>}
                  </div>
                </div>

              </div>
            </Link>
          </React.Fragment>
        )
      }
    }
  ];



  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteEvent}
        onCloseClick={handleDeleteClose}
        deleteButtonLable={"Cancel"}
      />
      <div className="page-content">
        <MetaTags>
          <title>Goods Received | Calgary Carpet Empire</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Purchase" breadcrumbItem={isHidden ? "View Goods Received" : "Goods Received"} />
          <Row>
            <Col lg={isHidden ? "5" : "12"}>
              <Card>
                <CardBody>
                  <PaginationProvider
                    pagination={paginationFactory(pageOptions)}
                  >
                    {({ paginationProps, paginationTableProps }) => (
                      <ToolkitProvider
                        keyField="id"
                        data={shipmentsRcvd}
                        columns={shipmentReceivedColumn}
                        bootstrap4
                        search
                      >
                        {toolkitProps => (
                          <React.Fragment>
                            <Row className="align-items-start">
                              <div className="col-sm">
                                <div>
                                  <Link
                                    to="/purchase/goods-received/new"
                                    className="btn btn-primary"
                                  >
                                    <i className="uil uil-plus me-1"></i>New
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
                                    selectRow={selectRow}
                                    classes={
                                      "table align-middle table-nowrap table-hover"
                                    }
                                    bordered={false}
                                    striped={!isHidden}
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
            {isHidden ?
              <Col lg="7">
                <Card>
                  <div className="p-3 border-bottom">
                    <Row>
                      <Col xl="11" xs="7">
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1">
                            <h2 className="font-size-18 mb-1 text-truncate"><Link to="#" className="text-dark">{get(activeRecordView, "attributes.gr_po_number", "")}</Link></h2>
                            <React.Fragment>
                              {get(activeRecordView, "attributes.gr_product_details", []).every((productObj: any) =>
                                productObj.pp_ordered_quantity === productObj.pp_received_quantity
                              ) ?
                                <div className="badge bg-success font-size-12">{"Completed"}</div>
                                : <div className="badge bg-info font-size-12">{"Partially Received"}</div>}
                            </React.Fragment>
                          </div>
                        </div>
                      </Col>
                      <Col xl="1">
                        <Link to="#" onClick={() => setIsHidden(false)} className="btn btn-sm btn-soft-secondary"> <i className="mdi mdi-window-close align-middle"></i></Link>
                      </Col>
                    </Row>
                  </div>

                  <div>
                    <CardBody>
                      <Row className="mb-5">
                        <Col sm={6}>
                          <div>
                            <h5 className="font-size-16 mb-1"><i className="uil uil-calendar-alt text-primary font-size-22"></i>Purchase Order Date</h5>
                            <p className="text-muted mb-0"> {moment(get(activeRecordView, "attributes.gr_po_date", "")).format('DD MMM Y')}</p>
                          </div>
                        </Col>

                        <Col sm={6}>
                          <div className="text-muted text-sm-end">
                            <div>
                              <h5 className="font-size-16 mb-1"><i className="uil uil-check-circle text-primary font-size-22"></i>Goods Received Date</h5>
                              <p className="text-muted mb-0"> {moment(get(activeRecordView, "attributes.createdAt", "")).format('DD MMM Y')}</p>
                            </div>
                          </div>
                        </Col>

                      </Row>


                      <div className="py-2 mb-4">
                        <h5 className="font-size-16">Products Summary</h5>

                        <div className="table-responsive border">
                          <table className="table align-middle table-nowrap table-centered mb-0">
                            <thead>
                              <tr>
                                {/* <th style={{ width: "70px" }}>No.</th> */}
                                <th>Item</th>
                                <th>Ordered Qty</th>
                                <th>Received Qty</th>
                                <th>Roll#</th>
                                <th>Dye Lot</th>
                                <th>Location</th>
                                <th>Location in Warehouse</th>
                              </tr>
                            </thead>
                            <tbody>
                              {(activeRecordView?.attributes?.gr_product_details &&
                                activeRecordView?.attributes?.gr_product_details.length) &&
                                activeRecordView?.attributes?.gr_product_details.map((ele: any, index: any) =>
                                  <tr key={index}>
                                    {/* <th scope="row">{index}</th> */}
                                    <td>{ele.p_name + '-' + ele.p_color}</td>
                                    <td>{ele.pp_ordered_quantity}</td>
                                    <td>{ele.pp_received_quantity}</td>
                                    <td>{ele.pp_roll}</td>
                                    <td>{ele.pp_dye_lot}</td>
                                    <td>{ele.pp_warehouse_location}</td>
                                    <td>{ele.pp_location_in_warehouse}</td>
                                  </tr>)}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </Col> : <></>}

          </Row>
        </Container>
      </div>
    </React.Fragment >
  );
};

export default POMgmt;
