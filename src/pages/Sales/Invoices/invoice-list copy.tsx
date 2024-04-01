import React, { useEffect } from "react";
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

import { getInvoices as onGetInvoices } from "../../../slices/thunks";
import Breadcrumbs from "../../../components/Common/Breadcrumb";

import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";

//redux
import { useSelector, useDispatch } from "react-redux";

const InvoiceList = () => {
  const dispatch = useDispatch();
  const { SearchBar } = Search;

  const { invoices } = useSelector((state: any) => ({
    invoices: state.invoices.invoices,
  }));

  useEffect(() => {
    dispatch(onGetInvoices());
  }, [dispatch]);

  const pageOptions = {
    sizePerPage: 10,
    totalSize: invoices.length, // replace later with size(users),
    custom: true,
  };

  const defaultSorted: any = [
    {
      dataField: "id", // if dataField is not match to any column you defined, it will be ignored.
      order: "asc", // desc or asc
    },
  ];

  const selectRow: any = {
    mode: "checkbox",
  };

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
      dataField: "id",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, invoices: any) => <React.Fragment>{invoices.invoiceId}</React.Fragment>,
    },
    {
      text: "Estimate #",
      dataField: "estimateNo",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, invoices: any) => <React.Fragment>{invoices.estimateNo}</React.Fragment>,
    },
    {
      text: "Customer Details",
      dataField: "custDetails",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, invoices: any) => <React.Fragment>{invoices.custDetails}</React.Fragment>,
    },
    {
      text: "Products",
      dataField: "products",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, invoices: any) => <React.Fragment>{invoices.products}</React.Fragment>,
    },
    {
      text: "Qty",
      dataField: "qty",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, invoices: any) => <React.Fragment>{invoices.qty}</React.Fragment>,
    },
    {
      text: "Sales Representative",
      dataField: "salesRep",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, invoices: any) => <React.Fragment>{invoices.salesRep}</React.Fragment>,
    },
    {
      text: "Installation Charges",
      dataField: "instCharges",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, invoices: any) => <React.Fragment>{invoices.instCharges}</React.Fragment>,
    },
    {
      text: "Adjustments",
      dataField: "adjustments",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, invoices: any) => <React.Fragment>{invoices.adjustments}</React.Fragment>,
    },
    {
      text: "Payment Terms",
      dataField: "paymentTerms",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, invoices: any) => <React.Fragment>{invoices.paymentTerms}</React.Fragment>,
    },
    {
      text: "Date",
      dataField: "date",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, invoices: any) => <React.Fragment>{invoices.date}</React.Fragment>,
    },
    {
      text: "Billing Name",
      dataField: "billingName",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, invoices: any) => <React.Fragment>{invoices.billingName}</React.Fragment>,
    },
    {
      text: "Amount",
      dataField: "amount",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, invoices: any) => <React.Fragment>{invoices.amount}</React.Fragment>,
    },
    {
      text: "Status",
      dataField: "status",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, invoices: any) => (
        <React.Fragment>
          <div
            className={"badge badge-soft-" + invoices.badgecolor + " font-size-12"}
          >
            {invoices.status}
          </div>
        </React.Fragment>
      ),
    },
    {
      text: "Action",
      dataField: "action",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: () => (
        <React.Fragment>
          <UncontrolledDropdown>
            <DropdownToggle tag="button" className="btn btn-light btn-sm">
              <i className="uil uil-ellipsis-h"></i>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              <DropdownItem to="#">Assign to Contractor</DropdownItem>
              <DropdownItem to="#">Print</DropdownItem>
              <DropdownItem to="#">Send Email</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </React.Fragment>
      ),
    },
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Invoice List | Calgary Carpet Empire</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Invoices" breadcrumbItem="Invoices List" />
          <Row>
            <Col lg="12">
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
                                <div>
                                  <Button color="light" className="mb-4"><i className="mdi mdi-plus me-1"></i> Add Invoice</Button>
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
                                  <UncontrolledDropdown>
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
                                  </UncontrolledDropdown>
                                </div>
                              </div>
                            </Row>
                            <Row>
                              <Col xl="12">
                                <div className="table-responsive">
                                  <BootstrapTable
                                    {...toolkitProps.baseProps}
                                    {...paginationTableProps}
                                    selectRow={selectRow}
                                    defaultSorted={defaultSorted}
                                    classes={
                                      "table align-middle table-nowrap table-hover"
                                    }
                                    bordered={false}
                                    striped={false}
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
          </Row>
        </Container>
      </div>
    </React.Fragment >
  );
};

export default InvoiceList;
