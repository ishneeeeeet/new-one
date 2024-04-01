import React, { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import { AvForm, AvField } from "availity-reactstrap-validation";
import {
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  CardBody,
  Card,
  Dropdown,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Pagination,
  PaginationLink,
  PaginationItem,
  Modal,
  ModalHeader,
  ModalBody,
  UncontrolledDropdown,
  UncontrolledTooltip,
} from "reactstrap";

import paginationFactory, { PaginationListStandalone, PaginationProvider } from "react-bootstrap-table2-paginator";
import ToolkitProvider , { Search } from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";


//redux
import { useSelector, useDispatch } from "react-redux";

import classnames from "classnames";

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";

//Import Cards
import CardProject from "./card-lead-conversion";

import { getLeadConversion as onGetLeadConversion } from "../../../slices/thunks";

const Paginations = () => {
  return (
    <React.Fragment>
      <Row className="g-0">
        <Col sm={6}>
          <div>
            <p className="mb-sm-0">Showing 1 to 8 of 24 entries</p>
          </div>
        </Col>
        <Col sm={6}>
          <div className="float-sm-end">
            <Pagination className="pagination-rounded mb-sm-0">
              <PaginationItem className="page-item disabled">
                <PaginationLink href="#" className="page-link"><i className="mdi mdi-chevron-left"></i></PaginationLink>
              </PaginationItem>
              <PaginationItem className="page-item">
                <PaginationLink href="#" className="page-link">1</PaginationLink>
              </PaginationItem>
              <PaginationItem className="page-item active">
                <PaginationLink href="#" className="page-link">2</PaginationLink>
              </PaginationItem>
              <PaginationItem className="page-item">
                <PaginationLink href="#" className="page-link">3</PaginationLink>
              </PaginationItem>
              <PaginationItem className="page-item">
                <PaginationLink href="#" className="page-link">4</PaginationLink>
              </PaginationItem>
              <PaginationItem className="page-item">
                <PaginationLink href="#" className="page-link">5</PaginationLink>
              </PaginationItem>
              <PaginationItem className="page-item">
                <PaginationLink href="#" className="page-link"><i className="mdi mdi-chevron-right"></i></PaginationLink>
              </PaginationItem>
            </Pagination>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

const LeadConversion = () => {
  const dispatch = useDispatch();
  const { SearchBar } = Search;
  const { conversion } = useSelector((state: any) => ({
    conversion: state.conversion.leadConversionList,
  }));

  const [leadConversion, setLeadConversion] = useState<any[]>([]);
  const [activeTab, setactiveTab] = useState<string>("1");
  const [projectstatus, setprojectstatus] = useState<any>("all");
  const [modal, setModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleShow = () => setModal(false);

  const toggle = () => {
    setModal(!modal);
    if (!modal && !!isEdit) {
      setTimeout(() => {
        setIsEdit(false);
      }, 500);
    }
  };


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
      // dispatch(onAddNewUser(newUser));
    }
    toggle();
  };
  const handleNewLeadClicks = () => {
    setIsEdit(false);
    toggle();
  };

  const toggleTab = (tab: any) => {
    if (activeTab !== tab) {
      console.log("==tab==",tab)
      if (tab == 1) {
        setLeadConversion(conversion)
      } else {
        const filterData = conversion.filter(
          ({ attributes }: any) => attributes.lc_drafted == true
        );
        console.log("filterData==",filterData)
        setLeadConversion(filterData)
      }
      setactiveTab(tab);
    }
  };
  
  useEffect(() => {
    setLeadConversion(conversion)
}, [conversion]);

  useEffect(() => {
      dispatch(onGetLeadConversion());
  }, [dispatch]);

  const pageOptions = {
    sizePerPage: 10,
    totalSize: leadConversion.length, // replace later with size(users),
    custom: true,
  };
  const ldConversionListColumns = [
    {
      text: "id",
      dataField: "id",
      sort: true,
      hidden: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, c: any) => <React.Fragment>{c.id}</React.Fragment>,
    },
    {
      text: "",
      hidden: true,
      headerAttrs: {
        hidden: true
      },
      dataField: "attributes.lc_estimate_id",
    },
    {
      hidden: true,
      text: "",
      headerAttrs: {
        hidden: true
      },
      dataField: "attributes.lead.data.attributes.ld_number",
      sort: true,
    },
    {
      hidden: true,
      text: "",
      headerAttrs: {
        hidden: true
      },
      dataField: "attributes.lead.data.attributes.ld_customer.data.attributes.c_name",
      sort: true,
    },{
      hidden: true,
      text: "",
      headerAttrs: {
        hidden: true
      },
      dataField: "attributes.lead.data.attributes.ld_customer.data.attributes.c_name",
      sort: true,
    },
    {
      hidden: true,
      text: "",
      headerAttrs: {
        hidden: true
      },
      dataField: "attributes.lc_date",
      sort: true,
    },
    {
      dataField: "menu",
      headerAttrs: {
        hidden: true
      },
      editable: false,
      text: "",
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, ldc: any, rowIndex: any) => (
        <React.Fragment>
          <CardProject
            leadCDetail={ldc}
            rowIndex={rowIndex}
          />
        </React.Fragment>
      ),
    },
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Lead Conversion | Calgary Carpet Empire</title>
        </MetaTags>
        <Container fluid>
           {/* Render Breadcrumbs */}
           <Breadcrumbs title="Sales" breadcrumbItem="Lead Conversion" />
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
                      data={leadConversion}
                      columns={ldConversionListColumns}
                      bootstrap4
                      search
                    >
                      {toolkitProps => (
                        <React.Fragment>
                          <Row>
                            <Col md={6}>
                              <div className="mb-3">
                                  <Link to="/sales/estimates/new" className="btn btn-primary" id="newEstimat">
                                    <i className="uil uil-plus me-1"></i>New
                                  </Link>
                                      <UncontrolledTooltip
                                        placement="top"
                                        target={"newEstimat"}
                                      >
                                       Create New Estimate
                                      </UncontrolledTooltip>
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
                            <div className="mt-2">
                              <Nav tabs className="nav-tabs-custom mb-4">
                                <NavItem>
                                  <NavLink
                                    className={classnames({
                                      active: activeTab === "1",
                                    })}
                                    onClick={() => {
                                      toggleTab("1");
                                      setprojectstatus("all");

                                    }}
                                  >
                                    All
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink
                                    className={classnames({
                                      active: activeTab === "2",
                                    })}
                                    onClick={() => {
                                      toggleTab("2");
                                      setprojectstatus("active");
                                    }}
                                  >
                                    Draft
                                  </NavLink>
                                </NavItem>
                              </Nav>
                            </div>
                            <div className="table-responsive">
                                <BootstrapTable
                                  {...toolkitProps.baseProps}
                                  {...paginationTableProps}
                                  // selectRow={selectRow}
                                  classes={
                                    "table align-middle table-nowrap table-hover"
                                  }
                                  
                                  bordered={false}
                                  // striped={true}
                                />
                              </div>
                          <Row className="align-items-md-center mt-30">
                            <Col className="pagination pagination-rounded justify-content-end mb-2 mt-2">
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

export default LeadConversion;
