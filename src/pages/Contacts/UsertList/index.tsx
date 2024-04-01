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
  Nav,
  NavItem,
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
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";

import {
  getUsers as onGetUsers,
  addNewUser as onAddNewUser,
} from "../../../slices/thunks";

import { isEmpty, size, map } from "lodash";

//redux
import { useSelector, useDispatch } from "react-redux";

const ContactsList = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state: any) => ({
    users: state.contacts.users,
  }));

  const [userList, setUserList] = useState<any>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleShow = () => setModal(false);

  const pageOptions = {
    sizePerPage: 10,
    totalSize: users.length, // replace later with size(users),
    custom: true,
  };

  const defaultSorted: any = [
    {
      dataField: "id", // if dataField is not match to any column you defined, it will be ignored.
      order: "desc", // desc or asc
    },
  ];

  const selectRow: any = {
    mode: "checkbox",
  };
  const contactListColumns = [
    {
      text: "id",
      dataField: "id",
      sort: true,
      hidden: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, user: any) => <React.Fragment>{user.id}</React.Fragment>
    },
    {
      text: "Name",
      dataField: "name",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, user: any) => (
        <React.Fragment>
          {!user.img ? (
            <React.Fragment>
              <div className="d-flex align-items-center">
                <div className="avatar-sm me-2">
                  <span className="avatar-title rounded-circle">
                    {user.name.charAt(0)}
                  </span>
                </div>
                <Link to="#" className="text-body fw-medium">
                  {user.name}
                </Link>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <img
                className="avatar-sm rounded-circle me-2"
                src={user.img}
                alt=""
              />
              <Link to="#" className="text-body fw-medium">
                {user.name}
              </Link>
            </React.Fragment>
          )}

        </React.Fragment>
      ),
    },
    {
      text: "Position",
      dataField: "designation",
      sort: true,
    },

    {
      dataField: "email",
      text: "Email",
      sort: true,
    },
    {
      text: "Tags",
      dataField: "tags",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, user: any) => (
        <>
          <div className="d-flex gap-2">
            {map(
              user.tags,
              (tag, index: number) =>
                index < 2 && (
                  <Link
                    to="#"
                    className="badge badge-soft-primary"
                    key={"_skill_" + user.id + index}
                  >
                    {tag}
                  </Link>
                )
            )}
            {size(user.tags) > 2 && (
              <Link
                to="#"
                className="badge badge-soft-primary"
                key={"_skill_" + user.id}
              >
                {size(user.tags) - 1} + more
              </Link>
            )}
          </div>
        </>
      ),
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
              <DropdownItem to="#">Action</DropdownItem>
              <DropdownItem to="#">Another action</DropdownItem>
              <DropdownItem to="#">Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </React.Fragment>
      ),
    },
  ];

  useEffect(() => {
    if (users && !users.length) {
      dispatch(onGetUsers());
      setIsEdit(false);
    }
  }, [dispatch, users]);

  useEffect(() => {
    setUserList(users);
    setIsEdit(false);
  }, [users]);

  const toggle = () => {
    setModal(!modal);
    if (!modal && !isEmpty(users) && !!isEdit) {
      setTimeout(() => {
        setUserList(users);
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
          <title>User List | Dashonic - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Contacts" breadcrumbItem="User List" />
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
                        data={users}
                        columns={contactListColumns}
                        bootstrap4
                        search
                      >
                        {toolkitProps => (
                          <React.Fragment>
                            <Row>
                              <Col md={6}>
                                <div className="mb-3">
                                  <h5 className="card-title">
                                    Contact List{" "}
                                    <span className="text-muted fw-normal ms-2">
                                      (834)
                                    </span>
                                  </h5>
                                </div>
                              </Col>

                              <Col md={6}>
                                <div className="d-flex flex-wrap align-items-start justify-content-md-end mt-2 mt-md-0 gap-2 mb-3">
                                  <div>
                                    <Nav pills>
                                      <NavItem>
                                        <Link className="nav-link active" to="user-list">
                                          <i className="uil uil-list-ul"></i>
                                        </Link>
                                      </NavItem>
                                      <NavItem>
                                        <Link className="nav-link" to="user-grid">
                                          <i className="uil uil-apps"></i>
                                        </Link>
                                      </NavItem>
                                    </Nav>
                                  </div>
                                  <div>
                                    <Link
                                      to="#"
                                      className="btn btn-light"
                                      onClick={handleUserClicks}
                                    >
                                      <i className="uil uil-plus me-1"></i> Add
                                      New
                                    </Link>
                                  </div>

                                  <UncontrolledDropdown>
                                    <DropdownToggle
                                      className="btn btn-link text-dark shadow-none"
                                      tag="a"
                                    >
                                      <i className="uil uil-ellipsis-h"></i>
                                    </DropdownToggle>

                                    <DropdownMenu className="dropdown-menu-end">
                                      <li>
                                        <DropdownItem to="#">Action</DropdownItem>
                                      </li>
                                      <li>
                                        <DropdownItem to="#">Another action</DropdownItem>
                                      </li>
                                      <li>
                                        <DropdownItem to="#">Something else here</DropdownItem>
                                      </li>
                                    </DropdownMenu>
                                  </UncontrolledDropdown>
                                </div>
                              </Col>
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

                                  <Modal isOpen={modal} toggle={toggle}>
                                    <ModalHeader toggle={toggle} tag="h4">
                                      {!!isEdit ? "Edit User" : "Add User"}
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
                                                name="name"
                                                label="Name"
                                                type="text"
                                                placeholder="Enter Name"
                                                errorMessage="Invalid name"
                                                validate={{
                                                  required: { value: true },
                                                }}
                                                value={userList.name || ""}
                                              />
                                            </div>
                                            <div className="mb-3">
                                              <AvField
                                                name="designation"
                                                label="Designation"
                                                placeholder="Enter Designation"
                                                type="text"
                                                errorMessage="Invalid Designation"
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
                                                name="email"
                                                label="Email"
                                                type="email"
                                                placeholder="Enter Email"
                                                errorMessage="Invalid Email"
                                                validate={{
                                                  required: { value: true },
                                                }}
                                                value={userList.email || ""}
                                              />
                                            </div>
                                            <div className="mb-3">
                                              <AvField
                                                type="select"
                                                name="tags"
                                                placeholder="Select Tags"
                                                label="Option"
                                                helpMessage="MULTIPLE!"
                                                multiple={true}
                                                required
                                                value={userList.tags || ""}
                                              >
                                                <option>Photoshop</option>
                                                <option>illustrator</option>
                                                <option>Html</option>
                                                <option>Php</option>
                                                <option>Java</option>
                                                <option>Python</option>
                                                <option>UI/UX Designer</option>
                                                <option>Ruby</option>
                                                <option>Css</option>
                                              </AvField>
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

export default withRouter(ContactsList);
