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
import InputMask from "react-input-mask";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";

import {
  getCustomers as onGetCustomers,
  updateCustomerStatus as onUpdateCustomerStatus,
  addNewCustomer as onAddNewCustomer,
  updateCustomer as onUpdateCustomer
} from "../../../slices/thunks";

import { isEmpty, size, map } from "lodash";

import DeleteModal from "../../Common/DeleteModal";
//redux
import { useSelector, useDispatch } from "react-redux";
import AddEditCustomer from "./addEditCustomer";

const Customers = () => {
  const dispatch = useDispatch();
  const { SearchBar } = Search;
  const { customerList } = useSelector((state: any) => ({
    customerList: state.customers.customerList,
  }));

  const [modal, setModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [customerEvent, setCustomerEvent] = useState<any>({});

  const handleShow = () => setModal(false);



  const handleDeleteClick = (event: any) => {
    setCustomerEvent({
      id: event.id,
      c_status: event.attributes.c_status == 1 ? false : true
    });
    setDeleteModal(true);
  };
 
  const handleDeleteEvent = () => {
    dispatch(onUpdateCustomerStatus(customerEvent));
    setDeleteModal(false);
  };

  const handleDeleteClose = () => {
    setDeleteModal(false);
  };

  const handleEditConstomerClick = (event: any) => {
    setCustomerEvent(event)
    setIsEdit(true);
    toggle();
  };

  const pageOptions = {
    sizePerPage: 10,
    totalSize: customerList.length, // replace later with size(users),
    custom: true,
  };

  const contactListColumns = [
    {
      text: "id",
      dataField: "id",
      sort: true,
      hidden: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, c: any) => <React.Fragment>{c.id}</React.Fragment>,
    },
    {
      text: "Name",
      dataField: "attributes.c_name",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, c: any) => <React.Fragment>{c.attributes.c_name}</React.Fragment>,

    },
    {
      text: "Address",
      dataField: "attributes.c_address",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, c: any) => <React.Fragment>{c.attributes.c_address}</React.Fragment>
    },
    {
      text: "Phone",
      dataField: "attributes.c_phone",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, c: any) => <React.Fragment>{c.attributes.c_phone|| "-"}</React.Fragment>
    },
    {
      text: "Email",
      dataField: "attributes.c_email",
      sort: true,// eslint-disable-next-line react/display-name
      formatter: (cellContent: any, c: any) => <React.Fragment>{c.attributes.c_email || "-"}</React.Fragment>
   
    },  {
      text: "Business Type",
      dataField: "attributes.c_type",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, c: any) => <React.Fragment>{c.attributes.c_type}</React.Fragment>,

    }, {
      text: "Status",
      dataField: "attributes.c_status",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, c: any) => (
        <React.Fragment>
          {c.attributes.c_status == true ?
            <div className="badge bg-success font-size-12">{"Active"}</div>
            : <div className="badge bg-warning font-size-12">{"Inactive"}</div>}
        </React.Fragment>
      ),
    },
    {
      dataField: "menu",
      isDummyField: true,
      editable: false,
      text: "Action",
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, c: any) => (
        <React.Fragment>
          <UncontrolledDropdown>
            <DropdownToggle tag="button" className="btn btn-light btn-sm">
              <i className="uil uil-ellipsis-h"></i>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              <DropdownItem to="#" onClick={() => handleEditConstomerClick(c)}>Edit</DropdownItem>
              <DropdownItem to="#" onClick={() => handleDeleteClick(c)}>{c.attributes.c_status == true ? "Mark as Inactive" : "Mark as Active"}</DropdownItem>
              </DropdownMenu>
          </UncontrolledDropdown>
        </React.Fragment>
      ),
    },
  ];


  useEffect(() => {
    dispatch(onGetCustomers());
  }, [dispatch]);

  const toggle = () => {
    setModal(!modal);
    if (!modal && !isEmpty(customerEvent) && !!isEdit) {
      setTimeout(() => {
        setCustomerEvent(customerEvent);
        setIsEdit(false);
      }, 500);
    }
  };
  /**
   * Handling submit user on user form
   */
  const handleValidFormSubmit = (values: any) => {
    setIsLoading(true);
    if (isEdit) {
      values["id"] = customerEvent.id
      dispatch(onUpdateCustomer(values));
    } else {
      // save new customer
      dispatch(onAddNewCustomer(values));
    }

    setCustomerEvent({})
    setIsEdit(false);
    setModal(!modal);
  };

  const handleUserClicks = () => {
    setCustomerEvent("");
    setIsEdit(false);
    toggle();
  };

  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteEvent}
        onCloseClick={handleDeleteClose}
        deleteButtonLable={customerEvent.c_status == 0 ? "Inactive" : "Active"}
      />
      <div className="page-content">
        <MetaTags>
          <title>Customers | Calgary Carpet Empire</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Sales" breadcrumbItem="Customers" />
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
                        data={customerList}
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
                                    className="btn btn-primary"
                                    onClick={handleUserClicks}
                                  >
                                    <i className="uil uil-plus me-1"></i>New
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
                                    classes={
                                      "table align-middle table-nowrap table-hover"
                                    }
                                    bordered={false}
                                    striped={true}
                                  />

                                  <Modal isOpen={modal} toggle={toggle}>
                                    <ModalHeader toggle={toggle} tag="h4">
                                      {!!isEdit ? "Edit Customer" : "Add Customer"}
                                    </ModalHeader>
                                    <ModalBody>
                                      <AddEditCustomer
                                        isLoading= {isLoading}
                                        customerEvent={customerEvent}
                                        handleValidFormSubmit={handleValidFormSubmit}
                                        isEdit={isEdit}
                                        handleShow={handleShow}
                                      />                 
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

export default withRouter(Customers);
