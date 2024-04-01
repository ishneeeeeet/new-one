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

import { getLeads as onGetLeads, updateLead as onUpdateLead } from "../../../slices/thunks";
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
import DeleteModal from "src/pages/Common/DeleteModal";
import moment from "moment";

const Leads = ({ history }: any) => {
  const dispatch = useDispatch();
  const { SearchBar } = Search;
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [viewLead, setViewLead] = useState<any>({});
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [leadEvt, setLeadEvt] = useState<any>({});

  const { leads } = useSelector((state: any) => ({
    leads: state.leads.leads,
  }));

  useEffect(() => {
    dispatch(onGetLeads());
  }, [dispatch]);

  const pageOptions = {
    sizePerPage: 10,
    totalSize: leads.length, // replace later with size(users),
    custom: true,
  };


  const selectRow: any = {
    mode: 'radio',
    clickToSelect: true,
    hideSelectColumn: true,
    bgColor: isHidden ? '#E3F2FB' : '#f8f9fa'  //#00FFFF
  };


  const leadsListColumns = [
    {
      text: "id",
      dataField: "id",
      sort: true,
      hidden: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, leads: any) => <React.Fragment>{leads.id}</React.Fragment>,
    },
    {
      text: "Lead #",
      dataField: "attributes.ld_number",
      sort: true,
      hidden: isHidden,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, leads: any) => <React.Fragment><Link to="#" onClick={() => viewLeadDetails(leads)}>{leads.attributes.ld_number}</Link></React.Fragment>,
    },
    {
      text: "Customer Name",
      dataField: "attributes.ld_customer",
      sort: true,
      hidden: isHidden,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, leads: any) => <React.Fragment>{get(leads, "attributes.ld_customer.data.attributes.c_name", "-")}</React.Fragment>,
    },
    {
      text: "Installation Address",
      dataField: "attributes.ld_address",
      sort: true,
      hidden: isHidden,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, leads: any) => <React.Fragment>{leads.attributes.ld_address}</React.Fragment>,
    },
    {
      text: "Field Representative",
      dataField: "attributes.ld_field_rep",
      sort: true,
      hidden: isHidden,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, leads: any) => <React.Fragment>{leads.attributes.ld_field_rep}</React.Fragment>,
    },
    {
      text: "Status",
      dataField: "attributes.ld_status",
      sort: true,
      hidden: isHidden,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, leads: any) => (
        <React.Fragment>
          {getStatusBadge(leads)}
        </React.Fragment>
      ),
    },
    {
      text: "Action",
      dataField: "action",
      sort: true,
      hidden: isHidden,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, leads: any) => (
        <React.Fragment>
          {leads.attributes.ld_status === "PENDING" ? <UncontrolledDropdown>
            <DropdownToggle tag="button" className="btn btn-light btn-sm">
              <i className="uil uil-ellipsis-h"></i>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              <Link to={`/sales/leads/edit/${leads.id}`}> <DropdownItem >Edit</DropdownItem></Link>
              <DropdownItem to="#" onClick={() => handleDeleteClick(leads)}>Mark as Cancel</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> : <></>}
        </React.Fragment>
      ),
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
      formatter: (cellContent: any, leads: any) => {
        return (
          <React.Fragment>
            <Link to={`#`} onClick={() => viewLeadDetails(leads)}>
              <div className="d-flex align-items-start">

                <div className="flex-grow-1 overflow-hidden">
                  <h5 className="text-truncate font-size-14 mb-1">
                    {leads.attributes.ld_number}
                  </h5>
                  <p className="text-truncate mb-0">
                    {get(leads, "attributes.ld_field_rep", "-")}&nbsp;|&nbsp;
                    {moment(leads.attributes.updatedAt).format('DD MMM Y')}
                  </p>
                </div>
                <div className="flex-shrink-0 text-sm-end">
                  <div>
                    <h6 className="font-size-12">{get(leads, "attributes.ld_customer.data.attributes.c_name", "-")}</h6>
                  </div>
                  <div className="font-size-11 mt-2">
                    {getStatusBadge(leads)}
                  </div>
                </div>

              </div>
            </Link>
          </React.Fragment>
        )
      }
    }
  ];


  const viewLeadDetails = (lead: any) => {
    setIsHidden(true);
    setViewLead(lead)
  }

  const getStatusBadge = (lead: any) => {
    return (
      lead.attributes.ld_status == "ESTIMATED" ?
        <div className="badge bg-success font-size-12">{"Estimated"}</div> :
        lead.attributes.ld_status == "PENDING" ?
          <div className="badge bg-warning font-size-12">{"Pending"}</div> :
          <div className="badge bg-danger font-size-12">{"Cancelled"}</div>
    )
  }

  const handleDeleteClick = (event: any) => {
    setLeadEvt({
      id: event.id,
      ld_status: "CANCELLED"
    });
    setDeleteModal(true);
  };

  /**
 * On delete event
 */
  const handleDeleteEvent = () => {
    dispatch(onUpdateLead(leadEvt, history, true));
    setDeleteModal(false);
  };
  const handleDeleteClose = () => {
    setDeleteModal(false)
  };

  return <React.Fragment>
    <DeleteModal
      show={deleteModal}
      onDeleteClick={handleDeleteEvent}
      onCloseClick={handleDeleteClose}
      deleteButtonLable={"Cancel"}
    />
    <div className="page-content">
      <MetaTags>
        <title>Leads | Calgary Carpet Empire</title>
      </MetaTags>
      <Container fluid>
        {/* Render Breadcrumbs */}
        <Breadcrumbs title="Sales" breadcrumbItem={isHidden ? "View Lead" : "Leads"} />
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
                      data={leads}
                      columns={leadsListColumns}
                      bootstrap4
                      search
                    >
                      {toolkitProps => (
                        <React.Fragment>
                          <Row className="align-items-start">
                            <div className="col-sm">
                              <div>
                                <Link to="/sales/leads/new"><Button color="primary" className="mb-4"><i className="mdi mdi-plus me-1"></i>New</Button></Link>
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
                          <h2 className="font-size-18 mb-1 text-truncate"><Link to="#" className="text-dark">
                            {viewLead?.attributes.ld_number || 0}
                          </Link></h2>
                          {getStatusBadge(viewLead)}
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
                    <Row>
                      <Col sm={12}>
                        <div className="text-muted">
                          <h5 className="font-size-16 mb-1">Field Representative Details </h5>
                          <p className="mb-0">{get(viewLead, "attributes.ld_field_rep", "-")}</p>
                        </div>
                        <div className="text-muted mt-4">
                          <h5 className="font-size-16 mb-1">Customer Details </h5>
                          <p className="mb-0">{get(viewLead, "attributes.ld_customer.data.attributes.c_name", "-")}</p>
                        </div>
                        <div className="text-muted mt-4">
                          <h5 className="font-size-16 mb-1">Phone </h5>
                          <p className="mb-0">{get(viewLead, "attributes.ld_customer.data.attributes.c_phone", "-")}</p>
                        </div>
                        <div className="text-muted mt-4">
                          <h5 className="font-size-16 mb-1">Installation Address </h5>
                          <p>{get(viewLead, "attributes.ld_address", "-")}</p>
                        </div>
                        <div className="text-muted mt-4">
                          <h5 className="font-size-16 mb-1">Notes </h5>
                          <p>{get(viewLead, "attributes.ld_notes", "-")}</p>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </div>
              </Card>
            </Col>
          }
        </Row>
      </Container>
    </div>
  </React.Fragment >
};

export default Leads;
