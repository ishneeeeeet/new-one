import React, { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import { get } from "lodash";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";

import { getSalesReturns as onGetSalseReturns } from "../../../slices/thunks";
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
import moment from "moment";
import { formatCurrency } from "src/common/currency";

const SalesReturnList = () => {
  const dispatch = useDispatch();
  const { SearchBar } = Search;
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [viewReturn, setViewReturn] = useState<any>({});

  const { returns } = useSelector((state: any) => ({
    returns: state.returns.returns
  }));

  useEffect(() => {
    dispatch(onGetSalseReturns());
  }, [dispatch]);

  const pageOptions = {
    sizePerPage: 10,
    totalSize: returns.length, // replace later with size(users),
    custom: true,
  };

  const selectRow: any = {
    mode: 'radio',
    clickToSelect: true,
    hideSelectColumn: true,
    bgColor: isHidden ? '#E3F2FB' : '#f8f9fa'  //#00FFFF
  };

  const viewReturnDetails = (retn: any) => {
    setIsHidden(true);
    setViewReturn(retn)
  }

  const returnsListColumns = [
    {
      text: "id",
      dataField: "id",
      sort: true,
      hidden: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, retn: any) => <React.Fragment>{retn.id}</React.Fragment>,
    },
    {
      text: "Invoice ID",
      hidden: isHidden,
      dataField: "attributes.invoice_number.data.attributes.iv_number",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, retn: any) => <React.Fragment><Link to="#" onClick={() => viewReturnDetails(retn)}>{retn.attributes.invoice_number.data.attributes.iv_number}</Link></React.Fragment>,

    },
    {
      text: "Date",
      hidden: isHidden,
      dataField: "attributes.rt_date",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, retn: any) => <React.Fragment>{moment(retn.attributes.rt_date).format('DD MMM Y')}</React.Fragment>,
    },
    {
      text: "Amount",
      hidden: isHidden,
      dataField: "attributes.total_amount",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, retn: any) => <React.Fragment>{formatCurrency(retn.attributes.total_amount)}</React.Fragment>,
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
      formatter: (cellContent: any, retn: any) => {
        return (
          <React.Fragment>
            <div className="d-flex align-items-start" onClick={() => viewReturnDetails(retn)}>

              <div className="flex-grow-1 overflow-hidden">
                <h5 className="text-truncate font-size-14 mb-1">
                  {retn.attributes.invoice_number.data.attributes.iv_number}
                </h5>

              </div>
              <div className="flex-shrink-0 text-sm-end">
                <div>
                  <h6 className="font-size-12">{moment(retn.attributes.rt_date).format('DD MMM Y')}</h6>
                </div>
              </div>
            </div>

          </React.Fragment>
        )
      }
    }
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Sales Returns | Calgary Carpet Empire</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Sales" breadcrumbItem="Returns" />
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
                        data={returns}
                        columns={returnsListColumns}
                        bootstrap4
                        search
                      >
                        {toolkitProps => (
                          <React.Fragment>
                            <Row className="align-items-start">
                              <div className="col-sm">
                                <div className="mb-3">
                                  <Link to="/sales/return/new" className="btn btn-primary" id="newReturn">
                                    <i className="uil uil-plus me-1"></i>New
                                  </Link>
                                  <UncontrolledTooltip
                                    placement="top"
                                    target={"newReturn"}
                                  >
                                    Create New Return
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
                                    noDataIndication={'No results found'}
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
            {isHidden
              &&
              <Col lg="7">
                <Card>
                  <div className="p-3 border-bottom">
                    <Row>
                      <Col xl="11" xs="7">
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1">
                            <h2 className="font-size-18 mb-1 text-truncate">
                              <Link to="#" className="text-dark">
                                {viewReturn.attributes.invoice_number.data.attributes.iv_number}
                              </Link></h2>
                            <i className="uil uil-calendar-alt text-primary font-size-22"></i> {moment(viewReturn?.attributes.rt_date).format('DD MMM YYYY')}
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
                      <div className="py-2">
                        <h5 className="font-size-15">Product Summary</h5>

                        <div className="table-responsive border">
                          <table className="table align-middle table-nowrap table-centered mb-0">
                            <thead>
                              <tr>
                                <th style={{ width: "70px" }}>No.</th>
                                <th>Item</th>
                                <th>Return Qty</th>
                                <th>Rate</th>
                                <th className="text-end" style={{ width: "120px" }}>Amount</th>
                              </tr>
                            </thead>
                            <tbody>
                              {(viewReturn?.attributes?.rt_products &&
                                viewReturn?.attributes?.rt_products?.data.length) &&
                                viewReturn?.attributes?.rt_products.data.map((ele: any, index: any) =>
                                  <tr key={index}>
                                    <th scope="row">{index + 1}.</th>
                                    <td>
                                      <div>
                                        <h5 className="text-truncate font-size-14 mb-1">{ele.attributes.product.data.attributes.p_name + '-' + ele.attributes.product.data.attributes.p_color}</h5>
                                      </div>
                                    </td>
                                    <td>{ele.attributes.ivp_returned_quantity || 0}</td>
                                    <td>${ele.attributes.ivp_price}</td>
                                    <td className="text-end">{formatCurrency(ele.attributes.ivp_return_amount)}</td>
                                  </tr>)}

                              {/* <tr>
                              <th scope="row" colSpan={4} className="border-0 text-end">GST</th>
                              <td className="border-0 text-end">{viewReturn?.attributes.po_gst} %</td>
                            </tr> */}

                              <tr>
                                <th scope="row" colSpan={4} className="border-0 text-end">Total</th>
                                <td className="border-0 text-end"><h4 className="m-0 fw-semibold">${viewReturn?.attributes.total_amount}</h4></td>
                              </tr>

                            </tbody>
                          </table>
                        </div>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </Col>}
          </Row>
        </Container>
      </div>
    </React.Fragment>)
};

export default SalesReturnList;
