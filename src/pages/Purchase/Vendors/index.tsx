import React, { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import {
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Row,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  UncontrolledAlert
} from "reactstrap";
import {  Field, Form } from '@availity/form';
import { LoadingButton } from "@availity/button";
import * as yup from 'yup';
import '@availity/yup';
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import { isEmpty } from "lodash";
import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";


import {
  getVendors as onGetVendors,
  addNewVendor as onAddNewVendor,
  updateVender as onUpdateVendor,
  updateVendorStatus as onUpdateVendorStatus
} from "../../../slices/thunks";


import DeleteModal from "../../Common/DeleteModal";
//redux
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Categories = () => {
  const dispatch = useDispatch();

  const { SearchBar } = Search;

  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [vendorEvent, setVendorEvent] = useState<any>({});
  const [modal, setModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleShow = () => setModal(false);

  const initialValuesObj = {
    v_name: "",
    v_description: "",
    v_address: "",
  }

  const validationSchema = yup.object().shape({
    v_name: yup.string().required("Enter Valid Vendor Name"),
    // v_description: yup.string().required("Enter Description"),
  });


  const { vendorList, alerts } = useSelector((state: any) => ({
    vendorList: state.vendors.vendorList,
    alerts: state.vendors.alerts,
  }));

  useEffect(() => {
    dispatch(onGetVendors());
  }, [dispatch]);


  const pageOptions = {
    sizePerPage: 10,
    totalSize: vendorList.length, // replace later with size(users),
    custom: true,
  };

  const handleDeleteClick = (event: any) => {
    setVendorEvent({
      id: event.id,
      v_status: event.attributes.v_status == 1 ? false : true
    });
    setDeleteModal(true);
  };
  /**
  * On delete event
  */
  const handleDeleteEvent = () => {
    dispatch(onUpdateVendorStatus(vendorEvent));
    setDeleteModal(false);
  };

  const handleDeleteClose = () => {
    setDeleteModal(false)
    setVendorEvent({})
  };

  const handleValidFormSubmit = (values: any) => {
    setIsLoading(true);
    if (isEdit) {
      values["id"] = vendorEvent.id
      dispatch(onUpdateVendor(values));
    } else {
      // save new user
      dispatch(onAddNewVendor(values));
    }

    setVendorEvent({})
    setIsEdit(false);
    setModal(!modal);
  };

  const toggle = () => {
    setModal(!modal);
    if (!modal && !isEmpty(vendorEvent) && !!isEdit) {
      setTimeout(() => {
        setVendorEvent({})
        setIsEdit(false);
      }, 500);
    }
  };

  const handleUserClicks = () => {
    setIsEdit(false);
    setVendorEvent({})
    setModal(!modal);
  };

  const handleEditVendorClick = (event: any) => {
    console.log("event.id==", event.id)
    let data = Object.assign({}, event.attributes)
    data["id"] = event.id;
    setVendorEvent(data);
    setIsEdit(true);
    setModal(!modal);
  };


  const vendorListColumns = [
    {
      text: "Id",
      dataField: "id",
      sort: true,
      hidden: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, vendor: any) => <React.Fragment>{vendor.id}</React.Fragment>,
    },
    {
      text: "Vendor Name",
      dataField: "attributes.v_name",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, vendor: any) => <React.Fragment>{vendor.attributes.v_name}</React.Fragment>,
    },
    {
      text: "Description",
      dataField: "attributes.v_description",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, vendor: any) => <React.Fragment>{vendor.attributes.v_description}</React.Fragment>,
    },
    {
      text: "Address",
      dataField: "attributes.v_address",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, vendor: any) => <React.Fragment>{vendor.attributes.v_address}</React.Fragment>,
    },
    {
      text: "Status",
      dataField: "attributes.v_status",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, vendor: any) => (
        <React.Fragment>
          {vendor.attributes.v_status == true ?
            <div className="badge bg-success font-size-12">{"Active"}</div>
            : <div className="badge bg-warning font-size-12">{"Inactive"}</div>}
        </React.Fragment>
      ),
    },
    {
      text: "Action",
      dataField: "action",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, vendor: any) => (
        <React.Fragment>
          <UncontrolledDropdown>
            <DropdownToggle tag="button" className="btn btn-light btn-sm">
              <i className="uil uil-ellipsis-h"></i>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              <DropdownItem to="#" onClick={() => handleEditVendorClick(vendor)}>Edit</DropdownItem>
              <DropdownItem to="#" onClick={() => handleDeleteClick(vendor)}>{vendor.attributes.v_status == true ? "Mark as Inactive" : "Mark as Active"}</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </React.Fragment>
      ),
    },
  ];

  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteEvent}
        onCloseClick={handleDeleteClose}
        deleteButtonLable={vendorEvent.v_status == 0 ? "Inactive" : "Active"}
      />


      <div className="page-content">
        <MetaTags>
          <title>Vendors Management | Calgary Carpet Empire</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Inventory" breadcrumbItem="Vendor List" />
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
                        data={vendorList}
                        columns={vendorListColumns}
                        bootstrap4
                        search
                      >
                        {toolkitProps => (
                          <React.Fragment>
                            <Row className="align-items-start">
                              <div className="col-sm">
                                <div>
                                  <Button color="primary" onClick={handleUserClicks} className="mb-4">
                                    <i className="mdi mdi-plus me-1"></i>New</Button>
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
                                  <Modal isOpen={modal} toggle={toggle}>
                                    <ModalHeader toggle={toggle} tag="h4">
                                      {!!isEdit ? "Edit Vendor" : "Add Vendor"}
                                    </ModalHeader>
                                    <ModalBody>
                                      <Form initialValues={initialValuesObj} validationSchema={validationSchema} onSubmit={handleValidFormSubmit}>

                                        {({ setFieldValue }) => {
                                          useEffect(() => {
                                            if (!isEmpty(vendorEvent) && isEdit) {
                                              setFieldValue("v_name", vendorEvent.v_name, false)
                                              setFieldValue("v_description", vendorEvent.v_description, false)
                                              setFieldValue("v_address", vendorEvent.v_address, false)
                                            }
                                          }, [vendorEvent])

                                          return (
                                            <>
                                              <Row >
                                                <Col>
                                                  <div className="mb-3">
                                                    <Field
                                                      name="v_name"
                                                      type="text"
                                                      label="Vendor Name"
                                                      className={'form-control'}
                                                      required
                                                      placeholder="Enter Valid Vendor Name"
                                                    />
                                                  </div>
                                                </Col>
                                              </Row>
                                              <Row >
                                                <Col>
                                                  <div className="mb-3">
                                                    <Field
                                                      name="v_description"
                                                      label="Vendor Description"
                                                      type="textarea"
                                                      placeholder="Enter Valid Vendor Description"
                                                      className={'form-control'}
                                                    />
                                                  </div>
                                                </Col>
                                              </Row>
                                              <Row className="mb-3">
                                                <Col >
                                                  <div className="form-group">
                                                    <Field
                                                      name="v_address"
                                                      label="Vendor Address"
                                                      type="textarea"
                                                      placeholder="Enter Valid Vendor Address"
                                                      className={'form-control'}
                                                    />
                                                  </div>
                                                </Col>
                                              </Row>
                                              <CardFooter>
                                                <div className="text-end">
                                                  <Button type="button" className="btn btn-light w-sm me-4" onClick={handleShow} >Close</Button>
                                                  <LoadingButton block className="btn btn-success save-user w-md" disabled={isLoading} isLoading={isLoading} >
                                                      Save
                                                  </LoadingButton>
                                                  {/* <Button
                                                    type="submit"
                                                    className="btn btn-success save-user w-md">
                                                    Save
                                                  </Button> */}
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
    </React.Fragment >
  );
};

export default Categories;