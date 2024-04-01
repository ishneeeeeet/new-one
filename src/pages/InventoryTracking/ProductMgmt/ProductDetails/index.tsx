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
  getProducts as onGetProducts,
  updateProduct as onUpdateProduct
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
import { Link } from "react-router-dom";
import DeleteModal from "src/pages/Common/DeleteModal";
import { get } from "lodash";
import { formatCurrency } from "src/common/currency";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { SearchBar } = Search;
  const [isHidden, setIsHidden] = useState<boolean>(false)
  const [deleteModal, setDeleteModal] = useState<boolean>(false)
  const [viewProduct, setViewProduct] = useState<any>({})
  const [currentProduct, setCurrentProduct] = useState<any>()

  const { products } = useSelector((state: any) => ({
    products: state.products.products,
  }));

  useEffect(() => {
    dispatch(onGetProducts());
  }, [dispatch]);

  const toggleProductStatus = (productDetails: any) => {
    const productData = { p_status: !productDetails?.attributes?.p_status, p_updated_by: "User", id: productDetails.id }
    dispatch(onUpdateProduct(productData));
    setDeleteModal(false)
  }

  const viewProductDetails = (product: any) => {
    setIsHidden(true);
    setViewProduct(product)
  }

  const pageOptions = {
    sizePerPage: 10,
    totalSize: products.length, // replace later with size(users),
    custom: true,
  };


  const selectRow: any = {
    mode: 'radio',
    clickToSelect: true,
    hideSelectColumn: true,
    bgColor: isHidden ? '#E3F2FB' : '#f8f9fa'  //#00FFFF
  };

  const productsListColumns = [
    {
      text: "id",
      dataField: "id",
      sort: true,
      hidden: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, products: any) => <React.Fragment>{products.id}</React.Fragment>,
    },
    {
      text: "Product Name",
      dataField: "attributes.p_name",
      sort: true,
      hidden: isHidden,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, products: any) => <React.Fragment><Link to="#" onClick={() => viewProductDetails(products)}>{products.attributes.p_name}</Link></React.Fragment>,
    },
    {
      text: "Vendor",
      dataField: "attributes.p_vendor_id.data.attributes.v_name",
      sort: true,
      hidden: isHidden,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, products: any) => <React.Fragment>{products.attributes.p_vendor_id?.data?.attributes?.v_name}</React.Fragment>,
    },
    {
      text: "Color",
      dataField: "attributes.p_color",
      sort: true,
      hidden: isHidden,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, products: any) => <React.Fragment>{products.attributes.p_color}</React.Fragment>,
    },
    {
      text: "Total Stock Quantity",
      dataField: "attributes.p_opening_stock",
      sort: true,
      hidden: isHidden,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, products: any) => <React.Fragment>{products.attributes.p_opening_stock}</React.Fragment>,
    },
    {
      text: "Selling Price",
      dataField: "attributes.p_selling_price",
      sort: true,
      hidden: isHidden,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, products: any) => <React.Fragment>{formatCurrency(products.attributes.p_selling_price)}</React.Fragment>,
    },
    {
      text: "Status",
      dataField: "attributes.p_status",
      sort: true,
      hidden: isHidden,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent: any, products: any) => (
        <React.Fragment>
          <div
            className={"badge badge-soft-" + (products.attributes.p_status ? 'success' : 'danger') + " font-size-12"}
          >
            {products.attributes.p_status ? 'Active' : 'Inactive'}
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
      formatter: (cellContent: any, products: any) => (
        <React.Fragment>
          <UncontrolledDropdown>
            <DropdownToggle tag="button" className="btn btn-light btn-sm">
              <i className="uil uil-ellipsis-h"></i>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              {products.attributes.p_status && <Link to={`/inventory/products/edit/${products.id}`}> <DropdownItem >Edit</DropdownItem></Link>}
              <DropdownItem onClick={() => { setCurrentProduct(products); setDeleteModal(true) }} to="#">{products?.attributes?.p_status ? 'Mark as Inactive' : 'Mark as Active'}</DropdownItem>
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
      formatter: (cellContent: any, products: any) => {
        return (
          <React.Fragment>
            <Link to={`#`} onClick={() => viewProductDetails(products)}>
              <div className="d-flex align-items-start">

                <div className="flex-grow-1 overflow-hidden">
                  <h5 className="text-truncate font-size-14 mb-1">
                    {products.attributes.p_name}
                  </h5>
                  <p className="text-truncate mb-0">
                    {get(products, "attributes.p_vendor_id.data.attributes.v_name")}&nbsp;|&nbsp;
                    {products.attributes.p_color}
                  </p>
                </div>
                <div className="flex-shrink-0 text-sm-end">
                  <div>
                    <h6 className="font-size-12">{formatCurrency(products.attributes.p_selling_price)}</h6>
                  </div>
                  <div className="font-size-11 mt-2">
                    <div className={"badge badge-soft-" + (products.attributes.p_status ? 'success' : 'danger') + " font-size-12"}>
                      {products.attributes.p_status ? 'Active' : 'Inactive'}
                    </div>
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
          onDeleteClick={() => toggleProductStatus(currentProduct)}
          onCloseClick={() => setDeleteModal(false)}
          deleteButtonLable={currentProduct?.attributes?.p_status ? "Inactive" : "Active"}
        />
        <MetaTags>
          <title>Products Management | Calgary Carpet Empire</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Inventory" breadcrumbItem={isHidden ? "View Product" : "Products List"} />
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
                        data={products}
                        columns={productsListColumns}
                        bootstrap4
                        search
                      >
                        {toolkitProps => (
                          <React.Fragment>
                            <Row className="align-items-start">
                              <div className="col-sm">
                                <div>
                                  <Link to="/inventory/products/new">
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
                              {viewProduct?.attributes.p_name || "-"}
                            </Link></h2>
                            <div className={"badge badge-soft-" + (viewProduct.attributes.p_status ? 'success' : 'danger') + " font-size-12"}>
                              {viewProduct.attributes.p_status ? 'Active' : 'Inactive'}
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
                        <Col sm={6}>
                          <div className="text-muted">
                            <h5 className="font-size-16 mb-1">Title </h5>
                            <p className="mb-0">{viewProduct?.attributes.p_name}</p>
                          </div>
                          <div className="text-muted mt-4">
                            <h5 className="font-size-16 mb-1">Description </h5>
                            <p className="mb-0">{viewProduct?.attributes.p_description || "-"}</p>
                          </div>
                          <div className="text-muted mt-4">
                            <h5 className="font-size-16 mb-1">Dimension </h5>
                            <p>{viewProduct?.attributes.p_dimension || "NA"}</p>
                          </div>
                          <div className="text-muted mt-4">
                            <h5 className="font-size-16 mb-1">Selling Price </h5>
                            <p>{formatCurrency(viewProduct?.attributes.p_selling_price)}</p>
                          </div>
                          <div className="text-muted mt-4">
                            <h5 className="font-size-16 mb-1">Reorder Level </h5>
                            <p>{viewProduct?.attributes.p_reorder_level || "-"}</p>
                          </div>
                          <div className="text-muted mt-4">
                            <h5 className="font-size-16 mb-1">Opening Stock Price </h5>
                            <p>{formatCurrency(viewProduct?.attributes.p_opening_stock_price)}</p>
                          </div>
                          <div className="text-muted mt-4">
                            <h5 className="font-size-16 mb-1">SKU# </h5>
                            <p>{viewProduct?.attributes.p_sku || "-"}</p>
                          </div>
                        </Col>

                        <Col sm={6}>
                          <div className="text-muted text-sm-end">
                            <div className="text-muted">
                              <h5 className="font-size-16 mb-1">Category </h5>
                              <p className="mb-0">{get(viewProduct, "attributes.p_category_id.data.attributes.pc_name", "-")}</p>
                            </div>
                            <div className="text-muted mt-4">
                              <h5 className="font-size-16 mb-1">Vendor </h5>
                              <p className="mb-0">{get(viewProduct, "attributes.p_vendor_id.data.attributes.v_name", "-")}</p>
                            </div>
                            <div className="text-muted mt-4">
                              <h5 className="font-size-16 mb-1">Unit </h5>
                              <p className="mb-0">{get(viewProduct, "attributes.p_unit_id.data.attributes.u_name", "-")}</p>
                            </div>
                            <div className="text-muted mt-4">
                              <h5 className="font-size-16 mb-1">Color </h5>
                              <p className="mb-0">{viewProduct.attributes.p_color || "-"}</p>
                            </div>
                            <div className="text-muted mt-4">
                              <h5 className="font-size-16 mb-1">Opening Stock </h5>
                              <p className="mb-0">{viewProduct.attributes.p_opening_stock || "-"}</p>
                            </div>
                            <div className="text-muted mt-4">
                              <h5 className="font-size-16 mb-1">UPC# </h5>
                              <p className="mb-0">{viewProduct.attributes.p_upc || "-"}</p>
                            </div>
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
  )
}
export default ProductDetails;
