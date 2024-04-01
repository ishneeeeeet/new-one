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
  getProductGrps as onGetProductGrps,
  updateProductGrp as onUpdateProductGrp
} from "../../../../slices/thunks";
import Breadcrumbs from "../../../../components/Common/Breadcrumb";


import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";

//redux
import { useSelector, useDispatch } from "react-redux";
import CreateOrEdit from "./CreateOrEdit";
import DeleteModal from "src/pages/Common/DeleteModal";
import { Link } from "react-router-dom";
import { get } from "lodash";

const ProductGroups = () => {
  const dispatch = useDispatch()
  const { SearchBar } = Search;
  const [deleteModal, setDeleteModal] = useState<Boolean>(false)
  const [isHidden, setIsHidden] = useState<boolean>(false)
  const [viewProductGrp, setViewProductGrp] = useState<any>({})
  const [currentProductGrp, setCurrentProductGrp] = useState<any>()


  const { productGrps } = useSelector((state: any) => ({
    productGrps: state.productGrps.productGrps
  }));

  useEffect(() => {
    dispatch(onGetProductGrps());
  }, [dispatch]);

  const viewProductGrpDetails = (productGrp: any) => {
    setIsHidden(true);
    setViewProductGrp(productGrp)
  }

  const pageOptions = {
    sizePerPage: 10,
    totalSize: productGrps.length, // replace later with size(users),
    custom: true,
  };

  const defaultSorted: any = [
    {
      dataField: "id", // if dataField is not match to any column you defined, it will be ignored.
      order: "asc", // desc or asc
    },
  ];

  const selectRow: any = {
    mode: 'radio',
    clickToSelect: true,
    hideSelectColumn: true,
    bgColor: isHidden ? '#E3F2FB' : '#f8f9fa'  //#00FFFF
  };

  const toggleGrpStatus = (grpDetails: any) => {
    const productGrpData = { g_status: !grpDetails?.attributes?.g_status, g_updated_by: "User", id: grpDetails.id }
    dispatch(onUpdateProductGrp(productGrpData));
    setDeleteModal(false)
  }

  const productGrpsListColumns = [
    {
      text: "id",
      dataField: "id",
      sort: true,
      hidden: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, productGrps: any) => <React.Fragment>{productGrps.id}</React.Fragment>,
    },
    {
      text: "Group Name",
      dataField: "attributes.g_name",
      sort: true,
      hidden: isHidden,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, productGrps: any) => <React.Fragment><Link to="#" onClick={() => viewProductGrpDetails(productGrps)}>{productGrps.attributes.g_name}</Link></React.Fragment>,
    },
    {
      text: "Group Description",
      dataField: "attributes.g_description",
      sort: true,
      hidden: isHidden,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, productGrps: any) => <React.Fragment>{productGrps.attributes.g_description}</React.Fragment>,
    },
    {
      text: "Status",
      dataField: "attributes.g_status",
      sort: true,
      hidden: isHidden,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, productGrps: any) => (
        <React.Fragment>
          <div
            className={"badge badge-soft-" + (productGrps.attributes.g_status ? 'success' : 'danger') + " font-size-12"}
          >
            {productGrps.attributes.g_status ? 'Active' : 'Inactive'}
          </div>
        </React.Fragment>
      ),
    },
    {
      text: "Action",
      dataField: "action",
      sort: true,
      hidden: isHidden,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, productGrps: any) => (
        <React.Fragment>
          <UncontrolledDropdown>
            <DropdownToggle tag="button" className="btn btn-light btn-sm">
              <i className="uil uil-ellipsis-h"></i>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              {productGrps.attributes.g_status && <Link to={`/inventory/product-groups/edit/${productGrps.id}`}> <DropdownItem>Edit</DropdownItem></Link>}
              <DropdownItem onClick={() => { setCurrentProductGrp(productGrps); setDeleteModal(true) }} to="#">{productGrps?.attributes?.g_status ? 'Mark as Inactive' : 'Mark as Active'}</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
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
      formatter: (cellContent: any, productGrps: any) => {
        return (
          <React.Fragment>
            <Link to={`#`} onClick={() => viewProductGrpDetails(productGrps)}>
              <div className="d-flex align-items-start">

                <div className="flex-grow-1 overflow-hidden">
                  <h5 className="text-truncate font-size-14 mb-1">
                    {productGrps.attributes.g_name}
                  </h5>
                  <p className="text-truncate mb-0">
                    {get(productGrps, "attributes.g_product_ids.data", []).length + " products"}
                  </p>
                </div>
                <div className="flex-shrink-0 text-sm-end">
                  <div className={"badge badge-soft-" + (productGrps.attributes.g_status ? 'success' : 'danger') + " font-size-12"}>
                    {productGrps.attributes.g_status ? 'Active' : 'Inactive'}
                  </div>
                </div>
              </div>
            </Link>
          </React.Fragment>
        )
      }
    }
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <DeleteModal
          show={deleteModal}
          onDeleteClick={() => toggleGrpStatus(currentProductGrp)}
          onCloseClick={() => setDeleteModal(false)}
          deleteButtonLable={currentProductGrp?.attributes?.g_status ? "Inactive" : "Active"}
        />
        <MetaTags>
          <title>Product Groups | Calgary Carpet Empire</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Inventory" breadcrumbItem={isHidden ? "View Product Group" : "Product Groups"} />

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
                        data={productGrps}
                        columns={productGrpsListColumns}
                        bootstrap4
                        search
                      >
                        {toolkitProps => (
                          <React.Fragment>
                            <Row className="align-items-start">
                              <div className="col-sm">
                                <div>
                                  <Link to="/inventory/product-groups/new">
                                    <Button color="primary" className="mb-4"><i className="mdi mdi-plus me-1"></i>New</Button>
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
                                        <div>
                                        </div>
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
                                    defaultSorted={defaultSorted}
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
                              {viewProductGrp?.attributes.g_name || "-"}
                            </Link></h2>
                            <div className={"badge badge-soft-" + (viewProductGrp.attributes.g_status ? 'success' : 'danger') + " font-size-12"}>
                              {viewProductGrp.attributes.g_status ? 'Active' : 'Inactive'}
                            </div>
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
                            <h5 className="font-size-16 mb-1">Title </h5>
                            <p className="mb-0">{viewProductGrp?.attributes.g_name}</p>
                          </div>
                          <div className="text-muted mt-4">
                            <h5 className="font-size-16 mb-1">Description </h5>
                            <p className="mb-0">{viewProductGrp?.attributes.g_description || "-"}</p>
                          </div>
                          <div className="text-muted mt-4">
                            <h5 className="font-size-16 mb-1">Linked Products: </h5>
                            <ul>{viewProductGrp?.attributes.g_product_ids.data.map((product: any, i: number) => (
                              <li key={"product-grp-item-" + i}>{product.attributes.p_name}</li>
                            ))}</ul>
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
    </React.Fragment>
  )
};

export default ProductGroups;
