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
  UncontrolledTooltip,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";

import {
  getInvoices as onGetInvoices,
  updateInvoice as onUpdateInvoice,
  getActiveContractor as onGetActiveContractor
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
import { get } from "lodash";
import { SelectField } from "@availity/select";
import { Form } from "@availity/form";
import * as yup from 'yup';
import '@availity/yup';
import { LoadingButton } from "@availity/button";
import moment from "moment";
import logo from "../../../assets/images/logo-sm.png";
import { formatCurrency } from "src/common/currency";

const InvoiceList = () => {
  const dispatch = useDispatch();
  const { SearchBar } = Search;
  const [assignContractorModal, setAssignContractorModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeInvoice, setActiveInvoice] = useState<any>({})
  const [viewMode, setViewMode] = useState<boolean>(false);
  const [viewInvoice, setViewInvoice] = useState<any>({});


  const { invoices, contractorList } = useSelector((state: any) => ({
    invoices: state.invoices.invoices,
    contractorList: state.contractor.contractorList
  }));

  useEffect(() => {
    dispatch(onGetInvoices());
    dispatch(onGetActiveContractor())
  }, [dispatch]);

  const printInvoice = () => {
    window.print();
  };

  const pageOptions = {
    sizePerPage: 10,
    totalSize: invoices.length, // replace later with size(users),
    custom: true,
  };


  const getStatusBadge = (invoice: any) => {
    return (
      invoice.attributes.iv_status == "PAID" ?
        <div className="badge bg-success font-size-12">{"Paid"}</div> :
        invoice.attributes.iv_status == "PENDING" ?
          <div className="badge bg-warning font-size-12">{"Pending"}</div> :
          <div className="badge bg-danger font-size-12">{"Cancelled"}</div>
    )
  }

  const selectRow: any = {
    mode: 'radio',
    clickToSelect: true,
    hideSelectColumn: true,
    bgColor: viewMode ? '#E3F2FB' : '#f8f9fa'  //#00FFFF
  };

  const onAssignClick = ({ iv_contractor }: any) => {
    if (activeInvoice) {
      setIsLoading(true)
      dispatch(onUpdateInvoice({ id: activeInvoice.id, ...activeInvoice.attributes, iv_contractor }, history, true));
      setAssignContractorModal(false);
      setIsLoading(false)
    }
  }

  const invoicesListColumns = [
    {
      text: "id",
      dataField: "id",
      sort: true,
      hidden: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, invoices: any) => <React.Fragment>{invoices.invoiceId}</React.Fragment>,
    },
    {
      text: "Invoice ID",
      dataField: "attributes.iv_number",
      sort: true,
      hidden: viewMode,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, invoices: any) => <React.Fragment><Link to="#" onClick={() => viewInvoiceDetails(invoices)}>{invoices.attributes.iv_number}</Link></React.Fragment>,
    },
    {
      text: "Date",
      dataField: "attributes.iv_date",
      sort: true,
      hidden: viewMode,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, invoices: any) => <React.Fragment>{moment(invoices.attributes.iv_date).format("DD MMM YYYY")}</React.Fragment>,
    },
    {
      text: "Contractor Name",
      dataField: "attributes.iv_contractor.data.attributes.co_name",
      sort: true,
      hidden: viewMode,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, invoices: any) => <React.Fragment>{get(invoices, "attributes.iv_contractor.data.attributes.co_name", "-")}</React.Fragment>,
    },
    {
      text: "Amount",
      dataField: "attributes.iv_total_amount",
      sort: true,
      hidden: viewMode,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, invoices: any) => <React.Fragment>{formatCurrency(invoices.attributes.iv_total_amount)}</React.Fragment>,
    },
    {
      text: "Status",
      dataField: "attributes.iv_status",
      sort: true,
      hidden: viewMode,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, invoices: any) => (
        <React.Fragment>
          {getStatusBadge(invoices)}
        </React.Fragment>
      ),
    },
    {
      text: "Action",
      dataField: "action",
      sort: true,
      hidden: viewMode,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, invoices: any) => (
        <React.Fragment>
          <UncontrolledDropdown>
            <Link to="#" title="Send an Email" className="btn btn-info me-1" style={{ padding: "0.1rem 0.3rem" }}><i className="fa fa-envelope"></i></Link>
            <Link to="#" title="Print" className="btn btn-warning me-1" style={{ padding: "0.1rem 0.3rem" }}><i className="fa fa-print"></i></Link>
            {invoices.attributes.iv_status === "PENDING" && <Link to="#" onClick={() => dispatch(onUpdateInvoice({ id: invoices.id, ...invoices.attributes, iv_status: "PAID" }, history, true))} title="Mark as Paid" className="btn btn-success me-1" style={{ padding: "0.1rem 0.3rem" }}><i className="fa fa-money-bill-wave"></i></Link>}
            <DropdownToggle tag="button" className="btn btn-light btn-sm">
              <i title="More Options" className="uil uil-ellipsis-h"></i>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              <DropdownItem onClick={() => { setAssignContractorModal(true); setActiveInvoice(invoices) }} to="#">Assign to Contractor</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </React.Fragment>
      ),
    },
    {
      text: "",
      dataField: "",
      sort: true,
      hidden: !viewMode,
      headerAttrs: {
        hidden: true
      },
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, invoices: any) => {
        return (
          <React.Fragment>
            <Link to={`#`} onClick={() => viewInvoiceDetails(invoices)}>
              <div className="d-flex align-items-start">

                <div className="flex-grow-1 overflow-hidden">
                  <h5 className="text-truncate font-size-14 mb-1">
                    {invoices.attributes.iv_number}
                  </h5>
                  <p className="text-truncate mb-0">
                    {get(invoices, "attributes.iv_contractor.data.attributes.co_name", "-")} |
                    {" " + moment(invoices.attributes.updatedAt).format('DD MMM Y')}
                  </p>
                </div>
                <div className="flex-shrink-0 text-sm-end">
                  <div>
                    <h6 className="font-size-12">{formatCurrency(invoices.attributes.iv_total_amount)}</h6>
                  </div>
                  <div className="font-size-11 mt-2">
                    {getStatusBadge(invoices)}
                  </div>
                </div>

              </div>
            </Link>
          </React.Fragment>
        )
      }
    }
  ];

  const viewInvoiceDetails = (invoice: any) => {
    setViewMode(true);
    setViewInvoice(invoice)
  }

  return (
    <React.Fragment>
      <Modal isOpen={assignContractorModal} toggle={() => setAssignContractorModal(!assignContractorModal)} centered={true}>
        <ModalHeader><p>Assign Contractor</p></ModalHeader>
        <ModalBody className="py-3 px-5">
          <Form
            initialValues={{
              iv_contractor: '',
            }}
            onSubmit={(values) => onAssignClick(values)}
            validationSchema={yup.object().shape({
              iv_contractor: yup.string().required('Please select contractor.'),
            })}
          >
            <Row>
              <Col lg={12}>
                <SelectField
                  // label="Contractor"
                  className="form-group"
                  placeholder="Select Contractor"
                  name="iv_contractor"
                  isMulti={false}
                  options={contractorList.map(({ id, attributes }: any) => ({ value: id, label: attributes.co_name }))}
                // isDisabled={id != undefined ? true : false}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="text-center mt-3">
                  <LoadingButton block className="btn btn-success save-user w-md" isLoading={isLoading} disabled={isLoading} >
                    Assign
                  </LoadingButton>
                  <button
                    type="button"
                    className="btn btn-light btn-lg ms-2"
                    onClick={() => setAssignContractorModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
      <div className="page-content">
        <MetaTags>
          <title>Invoice List | Calgary Carpet Empire</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Invoices" breadcrumbItem={viewMode ? "View Invoice" : "Invoice List"} />
          <Row>
            <Col lg={viewMode ? "5" : "12"}>
              <Card>
                <CardBody>
                  <PaginationProvider
                    pagination={paginationFactory(pageOptions)}
                  >
                    {({ paginationProps, paginationTableProps }) => (
                      <ToolkitProvider
                        keyField="id"
                        data={invoices}
                        columns={invoicesListColumns}
                        bootstrap4
                        search
                      >
                        {toolkitProps => (
                          <React.Fragment>
                            <Row className="align-items-start">
                              <div className="col-sm">
                                <div className="mb-3">
                                  <Link to="/sales/invoices/new" className="btn btn-primary" id="newInvoice">
                                    <i className="uil uil-plus me-1"></i>New
                                  </Link>
                                  <UncontrolledTooltip
                                    placement="top"
                                    target={"newInvoice"}
                                  >
                                    Create New Invoice
                                  </UncontrolledTooltip>
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
                                    striped={!viewMode}
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
            {viewMode
              &&
              <Col lg={7}>
                <Card>
                  <div className="p-3 border-bottom">
                    <Row>
                      <Col xl="11" xs="7">
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1">
                            <h2 className="font-size-18 mb-1 text-truncate"><Link to="#" className="text-dark">
                              {viewInvoice?.attributes.iv_number || 0}
                            </Link></h2>
                            {getStatusBadge(viewInvoice)}
                          </div>
                        </div>
                      </Col>
                      <Col xl="1">
                        <Link to="#" onClick={() => setViewMode(false)} className="btn btn-sm btn-soft-secondary"> <i className="mdi mdi-window-close align-middle"></i></Link>
                      </Col>
                    </Row>
                  </div>
                  <CardBody>
                    <div className="invoice-title">
                      {/* <h4 className="float-end font-size-15">Invoice {viewInvoice.attributes.iv_number} {getStatusBadge(viewInvoice)}</h4> */}
                      <div className="mb-4">
                        <img src={logo} alt="logo" height="28" />
                      </div>
                      <div className="text-muted">
                        <p className="mb-1">3184 Spruce Drive Pittsburgh, PA 15201</p>
                        <p className="mb-1"><i className="uil uil-envelope-alt me-1"></i> xyz@987.com</p>
                        <p><i className="uil uil-phone me-1"></i> 012-345-6789</p>
                      </div>
                    </div>

                    <hr className="my-4" />

                    <Row>
                      <Col sm={6}>
                        <div className="text-muted">
                          <h5 className="font-size-16 mb-3">Billed To: </h5>
                          <h5 className="font-size-15 mb-2">Preston Miller</h5>
                          <p className="mb-1">4068 Post Avenue Newfolden, MN 56738</p>
                          <p className="mb-1">PrestonMiller@armyspy.com</p>
                          <p>001-234-5678</p>
                        </div>
                      </Col>

                      <Col sm={6}>
                        <div className="text-muted text-sm-end">
                          <div>
                            <h5 className="font-size-15 mb-1">Invoice No: </h5>
                            <p>{viewInvoice.attributes.iv_number}</p>
                          </div>
                          <div className="mt-4">
                            <h5 className="font-size-15 mb-1">Invoice Date: </h5>
                            <p>{moment(viewInvoice.attributes.iv_date).format("DD MMM YYYY")}</p>
                          </div>
                        </div>
                      </Col>

                    </Row>


                    <div className="py-2">
                      <h5 className="font-size-15">Order Summary</h5>

                      <div className="table-responsive border">
                        <table className="table align-middle table-nowrap table-centered mb-0">
                          <thead>
                            <tr>
                              <th style={{ width: "70px" }}>No.</th>
                              <th>Item</th>
                              <th>Unit Price</th>
                              <th>Quantity</th>
                              <th className="text-end" style={{ width: "120px" }}>Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            {viewInvoice.attributes.iv_products.data.map((prodDetails: any, i: number) => {
                              return <tr key={i}>
                                <th scope="row">{i + 1 + "."}</th>
                                <td>
                                  <div>
                                    <h5 className="text-truncate font-size-14 mb-1">{prodDetails.attributes.product.data.attributes.p_name + '-' + prodDetails.attributes.product.data.attributes.p_color}</h5>
                                    {/* <p className="text-muted mb-0">Watch, Black</p> */}
                                  </div>
                                </td>
                                <td>${prodDetails.attributes.ivp_price}</td>
                                <td>{prodDetails.attributes.ivp_quantity}</td>
                                <td className="text-end">${prodDetails.attributes.ivp_amount}</td>
                              </tr>
                            })}

                            <tr>
                              <th scope="row" colSpan={4} className="text-end">Sub Total</th>
                              <td className="text-end">${viewInvoice.attributes.iv_products.data.reduce((n: any, { attributes: { ivp_amount } }: any) => n + ivp_amount, 0)}</td>
                            </tr>


                            <tr>
                              <th scope="row" colSpan={4} className="border-0 text-end">
                                GST</th>
                              <td className="border-0 text-end">${(viewInvoice.attributes.iv_products.data.reduce((n: any, { attributes: { ivp_amount } }: any) => n + ivp_amount, 0) / 20).toFixed(2)}</td>
                            </tr>

                            <tr>
                              <th scope="row" colSpan={4} className="border-0 text-end">Total</th>
                              <td className="border-0 text-end"><h4 className="m-0 fw-semibold">${viewInvoice.attributes.iv_total_amount}</h4></td>
                            </tr>

                          </tbody>
                        </table>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>

            }
          </Row>
        </Container>
      </div>
    </React.Fragment>)
};

export default InvoiceList;
