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
  getProductAdjmtList as onGetProductAdjmtList
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
import moment from "moment";
import { formatCurrency } from "src/common/currency";

const InventoryAdjustments = () => {
  const { SearchBar } = Search;
  const dispatch = useDispatch();
  const {productAdjmtList} = useSelector((state: any) => ({
    productAdjmtList: state.adjustment.productAdjmtList,
    // alerts : state.adjustment.alerts,
  }));
  
  useEffect(()=>{
    dispatch(onGetProductAdjmtList())
},[dispatch])


  const pageOptions = {
    sizePerPage: 10,
    totalSize: productAdjmtList.length, // replace later with size(users),
    custom: true,
  };

  const productsAdjmtListColumns = [
    {
      text: "id",
      dataField: "id",
      sort: true,
      hidden: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, adjmt: any) => <React.Fragment>{adjmt.id}</React.Fragment>,
    },
    {
      text: "Product Name",
      dataField: "attributes.product.data.attributes.p_name",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, adjmt: any) =>
        <React.Fragment>
          {/* <Link to={`/inventory/inventory-adjustment/${adjmt.id}`}> */}
            {adjmt.attributes.product.data.attributes.p_name}
            {/* </Link> */}
        </React.Fragment>
    },
    {
      text: "Adjustment Action",
      dataField: "attributes.ad_action",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, adjmt: any) => 
      <React.Fragment>
        {adjmt.attributes.ad_action=="add"?"Add to inventory":"Remove from inventory"}
      </React.Fragment>,
    },
    {
      text: "Product Quantity",
      dataField: "attributes.ad_p_quantity",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, adjmt: any) => 
      <React.Fragment>
        {adjmt.attributes.ad_p_quantity}
      </React.Fragment>,
    },
    {
      text: "Discount/Refund",
      dataField: "attributes.ad_discount",
      sort: false,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, adjmt: any) => 
      <React.Fragment>
        {formatCurrency(adjmt.attributes.ad_discount)}
      </React.Fragment>,
    },
    {
      text: "Created Date",
      dataField: "attributes.createdAt",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, adjmt: any) => 
      <React.Fragment>
        {moment(adjmt.attributes.createdAt).format('DD MMM Y')}
        
      </React.Fragment>,
    },
    {
      text: "Created By",
      dataField: "attributes.createdBy",
      sort: false,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, adjmt: any) => 
      <React.Fragment>
        {/* {moment(adjmt.attributes.createdAt).format('DD MMM Y')} */}
        {"User Name"}
      </React.Fragment>,
    }
    // {
    //   text: "Action",
    //   dataField: "action",
    //   sort: true,
    //   // eslint-disable-next-line react/display-name
    //   formatter: (cellContent: any, adjmt: any) => (
    //     <React.Fragment>
    //       <UncontrolledDropdown>
    //         <DropdownToggle tag="button" className="btn btn-light btn-sm">
    //           <i className="uil uil-ellipsis-h"></i>
    //         </DropdownToggle>
    //         <DropdownMenu className="dropdown-menu-end">
    //           <Link to={`/inventory/inventory-adjustment/${adjmt.id}`}>
    //             <DropdownItem to="#">Edit</DropdownItem>
    //           </Link>
    //           {/* <DropdownItem to="#">Delete</DropdownItem> */}
    //         </DropdownMenu>
    //       </UncontrolledDropdown>
    //     </React.Fragment>
    //   ),
    // },
  ];


  return < React.Fragment >
    <div className="page-content">
      <MetaTags>
        <title>Inventory Adjustments | Calgary Carpet Empire</title>
      </MetaTags>
      <Container fluid>
        {/* Render Breadcrumbs */}
        <Breadcrumbs title="Inventory" breadcrumbItem="Inventory Adjustments" />
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
                      data={productAdjmtList}
                      columns={productsAdjmtListColumns}
                      bootstrap4
                      search
                    >
                      {toolkitProps => (
                        <React.Fragment>
                          <Row className="align-items-start">
                            <div className="col-sm">
                              <div>
                                <Link to="/inventory/inventory-adjustment/new">
                                  <Button color="primary" className="mb-4">
                                  <i className="mdi mdi-plus me-1"></i>New
                                  </Button>
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
                                  bordered={false}
                                  striped={true}
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
};

export default InventoryAdjustments;
