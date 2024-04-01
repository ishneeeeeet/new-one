import React, { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import { withRouter, Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
} from "reactstrap";

import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator";

import { AvForm, AvField } from "availity-reactstrap-validation";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";

//Import Breadcrumb
import Breadcrumbs from "../../../../components/Common/Breadcrumb";

import {
  getUsers as onGetUsers,
  addNewUser as onAddNewUser,
} from "../../../../slices/thunks";

import { isEmpty, size, map } from "lodash";

//redux
import { useSelector, useDispatch } from "react-redux";

const ProductShipped = () => {
  const dispatch = useDispatch();
  const { SearchBar } = Search;
  // const { users } = useSelector((state: any) => ({
  //   users: state.contacts.users,
  // }));

  const productsShipped = [
    {
      id: 1,
      invoiceNo: '001',
      dateShipped: '02-09-2023',
      products: 'Roll Ends',
      productQty: '20'
    },
    {
      id: 2,
      invoiceNo: '002',
      dateShipped: '12-09-2023',
      products: 'Tiles',
      productQty: '25'
    },
    {
      id: 3,
      invoiceNo: '003',
      dateShipped: '02-10-2023',
      products: 'Laminate',
      productQty: '54'
    },
    {
      id: 4,
      invoiceNo: '004',
      dateShipped: '25-09-2023',
      products: 'VCT Tiles',
      productQty: '40'
    },
    {
      id: 5,
      invoiceNo: '005',
      dateShipped: '23-09-2023',
      products: 'Hardwood',
      productQty: '10'
    }
  ]
  console.log(productsShipped)
  const [userList, setUserList] = useState<any>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleShow = () => setModal(false);

  const pageOptions = {
    sizePerPage: 10,
    totalSize: productsShipped.length, // replace later with size(users),
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
  const contactListColumns = [
    {
      dataField: "id",
      text: "Id",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, productsShipped: any) => <React.Fragment>{productsShipped.id}</React.Fragment>
    },
    {
      dataField: "invoiceNo",
      text: "Invoice Number",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, productsShipped: any) => <React.Fragment>{productsShipped.invoiceNo}</React.Fragment>
    },
    {
      text: "Date shipped",
      dataField: "dateShipped",
      sort: false,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, productsShipped: any) => <React.Fragment>{productsShipped.dateShipped}</React.Fragment>
    },
    {
      dataField: "products",
      text: "Products",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, productsShipped: any) => <React.Fragment>{productsShipped.products}</React.Fragment>
    },
    {
      dataField: "productQty",
      text: "Product Qty",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, productsShipped: any) => <React.Fragment>{productsShipped.productQty}</React.Fragment>
    },
    {
      dataField: "menu",
      isDummyField: true,
      editable: false,
      text: "Action",
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, user: any) => (
        <React.Fragment>
          <UncontrolledDropdown>
            <DropdownToggle tag="button" className="btn btn-light btn-sm">
              <i className="uil uil-ellipsis-h"></i>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              <DropdownItem to="#">Edit</DropdownItem>
              <DropdownItem to="#">Delete</DropdownItem>
              {/* <DropdownItem to="#">Something else here</DropdownItem> */}
            </DropdownMenu>
          </UncontrolledDropdown>
        </React.Fragment>
      ),
    },
  ];


  // useEffect(() => {
  //   if (users && !users.length) {
  //     dispatch(onGetUsers());
  //     setIsEdit(false);
  //   }
  // }, [dispatch, users]);

  // useEffect(() => {
  //   setUserList(users);
  //   setIsEdit(false);
  // }, [users]);

  const toggle = () => {
    setModal(!modal);
    if (!modal && !isEmpty(productsShipped) && !!isEdit) {
      setTimeout(() => {
        setUserList(productsShipped);
        setIsEdit(false);
      }, 500);
    }
  };

  const handleUserClick = (arg: any) => {
    const user = arg;

    setUserList({
      id: user.id,
      name: user.name,
      designation: user.designation,
      email: user.email,
      tags: user.tags,
    });
    setIsEdit(true);

    toggle();
  };

  // const handleDeleteUser = (user: any) => {
  //   dispatch(onDeleteUser(user));
  // };

  /**
   * Handling submit user on user form
   */
  const handleValidUserSubmit = (values: any) => {
    if (isEdit) {
    } else {
      const newUser = {
        id: Math.floor(Math.random() * (30 - 20)) + 20,
        name: values["name"],
        designation: values["designation"],
        email: values["email"],
        tags: values["tags"],
      };
      // save new user
      dispatch(onAddNewUser(newUser));
    }
    toggle();
  };
  const handleUserClicks = () => {
    setUserList("");
    setIsEdit(false);
    toggle();
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Calgary Carpet Empire | Product Shipped</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Warehouse" breadcrumbItem="Product Shipped" />
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
                        data={productsShipped}
                        columns={contactListColumns}
                        bootstrap4
                        search
                      >
                        {toolkitProps => (
                          <React.Fragment>
                            <Row>
                              <Col md={6}>
                                <div className="mb-3">
                                  <Link
                                    to="#"
                                    className="btn btn-light"
                                    onClick={handleUserClicks}
                                  >
                                    <i className="uil uil-plus me-1"></i>Add New Product Shipped
                                  </Link>
                                </div>
                              </Col>

                              <Col md={6}>
                                <div className="d-flex flex-wrap align-items-start justify-content-md-end mt-2 mt-md-0 gap-2 mb-3">
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
                                </div>
                              </Col>
                            </Row>


                            <Row>
                              <Col xl="12">
                                <div className="table-responsive border">
                                  <BootstrapTable
                                    {...toolkitProps.baseProps}
                                    {...paginationTableProps}
                                    // selectRow={selectRow}
                                    defaultSorted={defaultSorted}
                                    classes={
                                      "table align-middle table-nowrap table-hover"
                                    }
                                    bordered={false}
                                    striped={true}
                                  />

                                  <Modal isOpen={modal} toggle={toggle}>
                                    <ModalHeader toggle={toggle} tag="h4">
                                      {!!isEdit ? "Edit Shipment Received" : "Add Shipment Received"}
                                    </ModalHeader>
                                    <ModalBody>
                                      <AvForm
                                        onValidSubmit={(
                                          e: any,
                                          values: any
                                        ) => {
                                          handleValidUserSubmit(values);
                                        }}
                                      >
                                        <Row form>
                                          <Col xs={12}>
                                            <div className="mb-3">
                                              <AvField
                                                name="invoiceNo"
                                                label="Invoice Number"
                                                type="number"
                                                placeholder="Enter Valid Invoice Number"
                                                errorMessage="Invalid Invoice Number"
                                                validate={{
                                                  required: { value: true },
                                                }}
                                                value={userList.name || ""}
                                              />
                                            </div>
                                            <div className="mb-3">
                                              <AvField
                                                name="dateReceived"
                                                label="Date shipped"
                                                type="date"
                                                placeholder="Enter Valid Date shipped"
                                                errorMessage="Invalid Date shipped"
                                                validate={{
                                                  required: { value: true },
                                                }}
                                                value={userList.name || ""}
                                              />
                                            </div>
                                            <div className="mb-3">
                                              <AvField
                                                name="productReceived"
                                                label="Products"
                                                placeholder="Enter Products"
                                                type="text"
                                                errorMessage="Invalid Products"
                                                validate={{
                                                  required: { value: true },
                                                }}
                                                value={
                                                  userList.designation || ""
                                                }
                                              />
                                            </div>
                                            <div className="mb-3">
                                              <AvField
                                                name="qtyReceived"
                                                label="Product Qty"
                                                type="number"
                                                placeholder="Enter Product Qty"
                                                errorMessage="Invalid Product Qty"
                                                validate={{
                                                  required: { value: true },
                                                }}
                                                value={userList.email || ""}
                                              />
                                            </div>

                                          </Col>
                                        </Row>
                                        <Row>
                                          <Col>
                                            <div className="text-end">
                                              <button type="button" className="btn btn-light w-sm" onClick={handleShow}>Close</button>
                                              <button
                                                type="submit"
                                                className="btn btn-success save-user"
                                              >
                                                Save
                                              </button>
                                            </div>
                                          </Col>
                                        </Row>
                                      </AvForm>
                                    </ModalBody>
                                  </Modal>
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
    </React.Fragment>
  );
};

export default withRouter(ProductShipped);
