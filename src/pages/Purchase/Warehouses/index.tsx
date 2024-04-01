import React, { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import { withRouter, Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
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
  Button,
} from "reactstrap";

import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import { Field, Form } from '@availity/form';
import * as yup from 'yup';
import '@availity/yup';
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";

import {
  getWarehouses as onGetWarehouses,
  addNewWarehouse as onAddNewWarehouse,
  updateWarehouse as onUpdateWarehouse,
  updateWarehouseStatus as onUpdateWarehouseStatus
} from "../../../slices/thunks";

import { isEmpty, size, map } from "lodash";

//redux
import { useSelector, useDispatch } from "react-redux";
import DeleteModal from "src/pages/Common/DeleteModal";

const WareHouseLocation = () => {
  const dispatch = useDispatch();
  const { SearchBar } = Search;
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [warehouse, setWarehouse] = useState<any>({});
  const [modal, setModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const { warehouses, alerts } = useSelector((state: any) => ({
    warehouses: state.warehouse.warehouses,
    alerts: state.warehouse.alerts,
  }));
  const handleShow = () => setModal(false);

  const handleEditClick = (event: any) => {
    let data = Object.assign({}, event.attributes)
    data["id"] = event.id;
    setWarehouse(data);
    setIsEdit(true);
    setModal(!modal);
  };

  const handleDeleteClick = (event: any) => {
    setWarehouse({
      id: event.id,
      w_status: event.attributes.w_status == 1 ? false : true
    });
    setDeleteModal(true);
  };
  const pageOptions = {
    sizePerPage: 10,
    totalSize: warehouses.length, // replace later with size(users),
    custom: true,
  };

  const warehouseColumns = [
    {
      dataField: "id",
      text: "Id",
      sort: true,
      hidden: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, warehouse: any) => <React.Fragment>{warehouse.id}</React.Fragment>,
    },
    {
      text: "Warehouse Name",
      dataField: "attributes.w_name",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, warehouse: any) => (
        <React.Fragment>{warehouse.attributes.w_name}</React.Fragment>
      ),
    },
    {
      text: "Warehouse Address",
      dataField: "attributes.w_address",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, warehouse: any) => <React.Fragment>{warehouse.attributes.w_address}</React.Fragment>,
    },
    {
      text: "Phone",
      dataField: "attributes.w_phone",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, warehouse: any) => <React.Fragment>{warehouse.attributes.w_phone}</React.Fragment>,
    },
    {
      text: "Contact Name",
      dataField: "attributes.w_contact_name",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, warehouse: any) => <React.Fragment>{warehouse.attributes.w_contact_name}</React.Fragment>,
    },
    {
      text: "Status",
      dataField: "attributes.w_status",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, warehouse: any) => (
        <React.Fragment>
          {warehouse.attributes.w_status ?
            <div className="badge bg-success font-size-12">{"Active"}</div>
            : <div className="badge bg-danger font-size-12">{"Inactive"}</div>}
        </React.Fragment>
      ),
    },
    {
      dataField: "menu",
      isDummyField: true,
      text: "Action",
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, warehouse: any) => (
        <React.Fragment>
          <UncontrolledDropdown>
            <DropdownToggle tag="button" className="btn btn-light btn-sm">
              <i className="uil uil-ellipsis-h"></i>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              <DropdownItem to="#" onClick={() => handleEditClick(warehouse)}>Edit</DropdownItem>
              <DropdownItem to="#" onClick={() => handleDeleteClick(warehouse)}>{warehouse.attributes.w_status == true ? "Mark as Inactive" : "Mark as Active"}</DropdownItem>

            </DropdownMenu>
          </UncontrolledDropdown>
        </React.Fragment>
      ),
    },
  ];

  useEffect(() => {
    dispatch(onGetWarehouses());
  }, [dispatch]);


  const toggle = () => {
    setModal(!modal);
    if (!modal && !isEmpty(warehouse) && !!isEdit) {
      setTimeout(() => {
        setWarehouse(warehouse);
        setIsEdit(false);
      }, 500);
    }
  };

  /**
   * Handling submit user on user form
   */
  const handleValidFormSubmit = (values: any) => {
    if (isEdit) {
      values["id"] = warehouse.id
      dispatch(onUpdateWarehouse(values));
    } else {
      dispatch(onAddNewWarehouse(values));
    }
    toggle();
  };
  const handleUserClicks = () => {
    setWarehouse({});
    setIsEdit(false);
    toggle();
  };

  /**
* On delete event
*/
  const handleDeleteEvent = () => {
    dispatch(onUpdateWarehouseStatus(warehouse));
    setDeleteModal(false);
  };

  const handleDeleteClose = () => {
    setDeleteModal(false)
    setWarehouse({})
  };



  const initialValuesObj = {
    w_name: "",
    w_address: "",
    w_contact_name: "",
    w_phone: ""
  }

  const validationSchema = yup.object().shape({
    w_name: yup.string().required("Enter Valid Location Name"),
    w_address: yup.string().required("Enter Location Address"),
  });


  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteEvent}
        onCloseClick={handleDeleteClose}
        deleteButtonLable={warehouse.w_status == 0 ? "Inactive" : "Active"}
      />
      <div className="page-content">
        <MetaTags>
          <title>Warehouse Management | Calgary Carpet Empire</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Warehouse" breadcrumbItem="Locations" />
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
                        data={warehouses}
                        columns={warehouseColumns}
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
                                    classes={
                                      "table align-middle table-nowrap table-hover"
                                    }
                                    bordered={false}
                                    striped={true}
                                  />

                                  <Modal isOpen={modal} toggle={toggle}>
                                    <ModalHeader toggle={toggle} tag="h4">
                                      {!!isEdit ? "Edit Location" : "Add Location"}
                                    </ModalHeader>
                                    <ModalBody>
                                      <Form initialValues={initialValuesObj} validationSchema={validationSchema} onSubmit={handleValidFormSubmit}>

                                        {({ setFieldValue }) => {
                                          useEffect(() => {
                                            if (!isEmpty(warehouse) && isEdit) {
                                              setFieldValue("w_name", warehouse.w_name, false)
                                              setFieldValue("w_address", warehouse.w_address, false)
                                              setFieldValue("w_phone", warehouse.w_phone, false)
                                              setFieldValue("w_contact_name", warehouse.w_contact_name, false)
                                            }
                                          }, [warehouse])

                                          return (
                                            <>
                                              <Row >
                                                <Col>
                                                  <div className="mb-3">
                                                    <Field
                                                      name="w_name"
                                                      type="text"
                                                      placeholder="Enter Location Name"
                                                      label="Warehouse Name"
                                                      className={'form-control'}
                                                      required
                                                    />
                                                  </div>
                                                </Col>
                                              </Row>
                                              <Row >
                                                <Col>
                                                  <div className="mb-3">
                                                    <Field
                                                      name="w_address"
                                                      label="Address"
                                                      placeholder="Enter Warehouse Address"
                                                      type="textarea"
                                                      className={'form-control'}
                                                      required
                                                    />
                                                  </div>
                                                </Col>
                                              </Row>
                                              <Row className="mb-3">
                                                <Col >
                                                  <div className="form-group">
                                                    <Field
                                                      name="w_phone"
                                                      label="Phone"
                                                      placeholder="Enter Warehouse Phone Number"
                                                      type="text"
                                                      className={'form-control'}
                                                    />
                                                  </div>
                                                </Col>
                                              </Row>
                                              <Row className="mb-3">
                                                <Col >
                                                  <div className="form-group">
                                                    <Field
                                                      name="w_contact_name"
                                                      label="Contact Name"
                                                      placeholder="Enter Warehouse Contact Name"
                                                      type="text"
                                                      className={'form-control'}
                                                    />
                                                  </div>
                                                </Col>
                                              </Row>
                                              <CardFooter>
                                                <div className="text-end">
                                                  <Button type="button" className="btn btn-light w-sm me-4" onClick={handleShow} >Close</Button>
                                                  <Button
                                                    type="submit"
                                                    className="btn btn-success save-user w-md">
                                                    Save
                                                  </Button>
                                                </div>
                                              </CardFooter>
                                            </>
                                          );
                                        }}
                                      </Form>
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

export default withRouter(WareHouseLocation);
