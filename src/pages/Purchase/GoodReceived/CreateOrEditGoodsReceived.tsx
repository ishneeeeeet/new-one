import React, { useEffect, useRef, useState } from "react";
import { Col, Row, Card, CardHeader, CardFooter, CardBody, Container, Label } from "reactstrap";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { Form, Field, RadioGroup, Radio } from "@availity/form";
import { SelectField } from "@availity/select";
import * as yup from 'yup';
import '@availity/yup';
// Editable
import BootstrapTable from "react-bootstrap-table-next";
import {
    getActivePurchaseOrders as onGetActivePurchaseOrders,
    getActiveWarehouse as onGetActiveWarehouse,
    addShipmentReceiveds as onAddShipmentReceiveds
} from "../../../slices/thunks";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { isEmpty } from "lodash";
import { toast } from "react-toastify";

interface GRProps {
    history: any;
}

const AddEditGoodsReceived = ({ history }: GRProps) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const POInitialState: any = { "PENDING": [], "PARTIAL": [] }
    const [products, setProducts] = useState<any[]>([]);
    const [purchaseOrderList, setPurchaseOrderList] = useState(POInitialState)

    const productsStateRef = useRef(products);
    productsStateRef.current = products;

    const { poListFetched, warehouseList } = useSelector((state: any) => ({
        poListFetched: state.purchase.activePurchaseOrderList,
        warehouseList: state.warehouse.activeWarehouses
    }));

    useEffect(() => {
        dispatch(onGetActivePurchaseOrders());
        dispatch(onGetActiveWarehouse());
    }, [dispatch])



    useEffect(() => {
        let purchaseOrdersData = POInitialState

        poListFetched.map((poDetails: any) => {
            let completed = poDetails.attributes.po_products.data.every(({ attributes }: any) => attributes.pp_received_quantity === attributes.pp_ordered_quantity)
            if (!completed) {
                let openOrder = poDetails.attributes.po_products.data.find(({ attributes }: any) => attributes.pp_received_quantity > 0)
                if (isEmpty(openOrder)) {
                    purchaseOrdersData["PENDING"].push(poDetails)
                }
                else {
                    purchaseOrdersData["PARTIAL"].push(poDetails)
                }
            }
        })
        setPurchaseOrderList(purchaseOrdersData)
    }, [poListFetched])

    const handleValidFormSubmit = (values: any) => {
        console.log("====values==", values)
        const data = Object.assign({}, values);
        const foundPO = purchaseOrderList[data.gr_status].find((poDetails: any) => poDetails.id === values.po_number)
        data.gr_po_number = foundPO ? foundPO.attributes.po_number : ''
        data.gr_po_date = foundPO ? foundPO.attributes.po_date : ''
        delete data.po_number
        // Calculating difference of received qty
        const qtyChanged = data.products.map((elem: any) => {
            const foundProduct = foundPO.attributes.po_products.data.find((productDetails: any) => productDetails.id === elem.id)
            let rcvdQtyChanged = false
            if (foundProduct) {
                rcvdQtyChanged = foundProduct.attributes.pp_received_quantity != elem.pp_received_quantity
                if (rcvdQtyChanged) {
                    elem.pp_received_quantity_diff = parseInt(elem.pp_received_quantity) - parseInt(foundProduct.attributes.pp_received_quantity)
                    elem.p_opening_stock = elem.pp_received_quantity_diff + parseInt(elem.p_opening_stock)
                }
            }
            return rcvdQtyChanged
        })
        // If at least one product's received qty is updated
        if (qtyChanged.some((elem: boolean) => elem == true))
            dispatch(onAddShipmentReceiveds(data, history))
        else
            toast.warn("Please Update Received Quantity of At Least One Product in Purchase Order.")
    };
    const handleAddProduct = () => {
        const newItem = {
            id: products.length + 1,
            p_name: "",
            p_id: 0,
            p_quantity: 1,
            p_unit: '',
            p_purchase_price: 0,
            p_total_amount: 0
        }
        setProducts(products => [...products, newItem])
    }

    const validationSchema = yup.object().shape({
        po_number: yup.string().required("Please Select Purchase Order Number."),
    });

    const handleDeleteClick = (id: any) => {
        const productData = [...productsStateRef.current]
        productData.splice(id, 1);
        setProducts(productData)
    };

    const handlePOChange = (poNumber: number, setFieldValue: any, values: any) => {
        const foundPO = purchaseOrderList[values.gr_status].find((poDetails: any) => poDetails.id === poNumber)
        if (foundPO) {
            const POProducts = foundPO.attributes.po_products.data.map((elem: any) => ({
                "id": elem.id,
                "p_id": elem.attributes.pp_product.data.id,
                "p_name": elem.attributes.pp_product.data.attributes.p_name,
                "p_color": elem.attributes.pp_product.data.attributes.p_color,
                "p_opening_stock": elem.attributes.pp_product.data.attributes.p_opening_stock,
                "pp_ordered_quantity": elem.attributes.pp_ordered_quantity,
                "pp_roll": elem.attributes.pp_roll,
                "pp_dye_lot": elem.attributes.pp_dye_lot,
                "pp_warehouse_location": elem.attributes.pp_warehouse_location,
                "pp_location_in_warehouse": elem.attributes.pp_location_in_warehouse,
                "pp_received_quantity": elem.attributes.pp_received_quantity,

            }))
            console.log(" POProducts == ", POProducts)
            setProducts(POProducts)
            setFieldValue("products", POProducts)
        }
    }

    const handleOrderType = (type: any, setFieldValue: any) => {
        setFieldValue("po_number", "")
        setProducts([])
        setFieldValue("products", [])
    }


    const defaultValues = {
        gr_status: "PENDING",
        po_number: ""
    };


    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Goods Received | Calgary Carpet Empire</title>

                </MetaTags>
                <Container fluid>
                    <Row>
                        <Col xs={12}>
                            {/* import TextualInputs */}
                            <Card style={{minHeight: "400px"}}>
                                <CardHeader className="justify-content-between d-flex align-items-center">
                                    <h4 className="card-title">{id ? "Edit Goods Received" : "New Goods Received"}</h4>
                                    <Link to="/purchase/goods-received" className="btn btn-sm btn-soft-secondary"> <i className="mdi mdi-window-close align-middle"></i></Link>
                                </CardHeader>
                                <CardBody>
                                    <Form
                                        onSubmit={(values: any, action: any) => {
                                            handleValidFormSubmit(values);
                                        }}
                                        initialValues={defaultValues}
                                        validationSchema={validationSchema}
                                    >
                                        {({ values, setFieldValue }) => {
                                            const columns = [
                                                {
                                                    dataField: 'id',
                                                    text: 'id',
                                                    hidden: true,
                                                    // eslint-disable-next-line react/display-name
                                                    formatter: (cellContent: any, product: any, rowIndex: any) => (
                                                        <React.Fragment>
                                                            <Field
                                                                name={'products[' + rowIndex + '][id]'}
                                                                type="text"
                                                                value={product.id || 0}
                                                                rowindex={rowIndex}
                                                                placeholder="Purchase Price"
                                                                required={false}
                                                            />
                                                        </React.Fragment>
                                                    ),
                                                }, {
                                                    dataField: 'p_name',
                                                    text: 'Product with Color',
                                                    // eslint-disable-next-line react/display-name
                                                    formatter: (cellContent: any, product: any, rowIndex: any) => (
                                                        <React.Fragment>
                                                            <Field
                                                                name={'products[' + rowIndex + '][p_id]'}
                                                                disabled={true}
                                                                value={product.p_name + "-" + product.p_color || ""}
                                                                required
                                                            />
                                                        </React.Fragment>
                                                    ),
                                                    headerAttrs: { width: 180 }
                                                },
                                                {
                                                    dataField: 'pp_ordered_quantity',
                                                    text: 'Ordered Quantity',
                                                    // eslint-disable-next-line react/display-name
                                                    formatter: (cellContent: any, product: any, rowIndex: any) => (
                                                        <React.Fragment>
                                                            <Field
                                                                name={'products[' + rowIndex + '][pp_ordered_quantity]'}
                                                                type="number"
                                                                value={product.pp_ordered_quantity || 1}
                                                                rowindex={rowIndex}
                                                                placeholder="Quantity"
                                                                disabled={true}
                                                                required={true}
                                                            />

                                                        </React.Fragment>
                                                    ),
                                                    headerAttrs: { width: 50 },
                                                }, {
                                                    dataField: 'pp_received_quantity',
                                                    text: 'Received Quantity',
                                                    // eslint-disable-next-line react/display-name
                                                    formatter: (cellContent: any, product: any, rowIndex: any) => (
                                                        <React.Fragment>
                                                            <Field
                                                                name={'products[' + rowIndex + '][pp_received_quantity]'}
                                                                type="number"
                                                                rowindex={rowIndex}
                                                                placeholder="Qty"
                                                                min={product.pp_received_quantity}
                                                                max={product.pp_ordered_quantity}
                                                                required={true}
                                                                onBlur={(e: any) => handleChange(e, rowIndex, "pp_received_quantity")}
                                                            />

                                                        </React.Fragment>
                                                    ),
                                                    headerAttrs: { width: 100 },
                                                },
                                                {
                                                    dataField: 'pp_roll',
                                                    text: 'Roll#    ',
                                                    // eslint-disable-next-line react/display-name
                                                    formatter: (cellContent: any, product: any, rowIndex: any) => (
                                                        <React.Fragment>
                                                            <Field
                                                                name={'products[' + rowIndex + '][pp_roll]'}
                                                                type="text"
                                                                rowindex={rowIndex}
                                                                placeholder="Roll"
                                                                required={true}
                                                                onBlur={(e: any) => handleChange(e, rowIndex, "pp_roll")}
                                                            />

                                                        </React.Fragment>
                                                    ),
                                                    headerAttrs: { width: 100 },
                                                },
                                                {
                                                    dataField: 'pp_dye_lot',
                                                    text: 'Dye Lot',
                                                    // eslint-disable-next-line react/display-name
                                                    formatter: (cellContent: any, product: any, rowIndex: any) => (
                                                        <React.Fragment>
                                                            <Field
                                                                name={'products[' + rowIndex + '][pp_dye_lot]'}
                                                                type="text"
                                                                rowindex={rowIndex}
                                                                placeholder="Dye Lot"
                                                                required={true}
                                                                onBlur={(e: any) => handleChange(e, rowIndex, "pp_dye_lot")}
                                                            />

                                                        </React.Fragment>
                                                    ),
                                                    headerAttrs: { width: 120 },
                                                }, {
                                                    dataField: 'pp_warehouse_location',
                                                    text: 'Location',
                                                    // eslint-disable-next-line react/display-name
                                                    formatter: (cellContent: any, product: any, rowIndex: any) => (
                                                        <React.Fragment>
                                                            <SelectField
                                                                name={'products[' + rowIndex + '][pp_warehouse_location]'}
                                                                placeholder="Warehouse"
                                                                multiple={false}
                                                                required
                                                                options={warehouseList.map(({ id, attributes }: any) => ({ value: id, label: attributes.w_name }))}
                                                            />
                                                        </React.Fragment>
                                                    ),
                                                    headerAttrs: { width: 150 },
                                                }, {
                                                    dataField: 'pp_location_in_warehouse',
                                                    text: 'Location in Warehouse',
                                                    // eslint-disable-next-line react/display-name
                                                    formatter: (cellContent: any, product: any, rowIndex: any) => (
                                                        <React.Fragment>
                                                            <Field
                                                                name={'products[' + rowIndex + '][pp_location_in_warehouse]'}
                                                                type="text"
                                                                rowindex={rowIndex}
                                                                placeholder="Location in Warehouse"
                                                                required={true}
                                                                onBlur={(e: any) => handleChange(e, rowIndex, "pp_location_in_warehouse")}
                                                            />
                                                        </React.Fragment>
                                                    ),
                                                    headerAttrs: { width: 180 },
                                                },

                                                // columns follow dataField and text structure
                                                // {
                                                //     text: "Delete",
                                                //     dataField: "remove",
                                                //     sort: true,
                                                //     isDummyField: true,
                                                //     csvExport: false,
                                                //     headerStyle: {
                                                //         color: 'white'
                                                //     },
                                                //     editable: false,
                                                //     headerAttrs: { width: 50 },

                                                //     // eslint-disable-next-line react/display-name
                                                //     formatter: (cellContent: any, vendor: any, rowIndex: any) => (
                                                //         <React.Fragment>
                                                //             <i className="uil uil-pen align-middle btn btn-sm btn-soft-primary"></i>
                                                //         </React.Fragment>
                                                //     ),
                                                // }
                                            ];

                                            const handleChange = (evt: any, rowIndex: any, fieldName: any) => {
                                                setFieldValue(`products[${rowIndex}][${fieldName}]`, evt.target.value)
                                            }
                                            return (<>
                                                <Row className="mb-3">
                                                    <Label
                                                        htmlFor="product-color-input"
                                                        className="col-md-3 col-form-label">
                                                        Ordered Type<span className="text-danger">*</span>
                                                    </Label>
                                                    <Col md={8}>
                                                        <RadioGroup inline name="gr_status" onChange={(e: any) => handleOrderType(e, setFieldValue)} required >
                                                            <Radio label="Pending" value="PENDING" />
                                                            <Radio label="Partially received" value="PARTIAL" />
                                                        </RadioGroup>

                                                    </Col>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Label
                                                        htmlFor="product-color-input"
                                                        className="col-md-3 col-form-label">
                                                        Purchase Order Number<span className="text-danger">*</span>
                                                    </Label>
                                                    <Col md={8}>
                                                        <SelectField
                                                            isDisabled={id ? true : false}
                                                            name="po_number"
                                                            isSearchable={true}
                                                            placeholder={"Select PO Number with Date"}
                                                            classNamePrefix="dropdown"
                                                            options={purchaseOrderList[values.gr_status].map(({ id, attributes }: any) => ({ value: id, label: attributes.po_number + " - " + moment(attributes.po_date).format('DD MMM Y') }))}
                                                            onChange={(evt: number) => handlePOChange(evt, setFieldValue, values)}
                                                        />
                                                    </Col>
                                                </Row>
                                                {values.po_number &&
                                                    <React.Fragment>
                                                        <Row>
                                                            <Col>
                                                                <Card>
                                                                    {/* <CardHeader className="justify-content-between d-flex align-items-center">
                                                            <h4 className="card-title" >Add Product   <i onClick={() => handleAddProduct()} className="mdi mdi-plus align-right btn btn-lg btn-soft-secondary mr-10"  ></i></h4>
                                                        </CardHeader> */}
                                                                    {products.length ? <CardBody>

                                                                        <div className="table-responsive border">
                                                                            <BootstrapTable
                                                                                keyField="id"
                                                                                data={productsStateRef.current}
                                                                                columns={columns}
                                                                                // selectRow={selectRow}
                                                                                // cellEdit={cellEditFactory({ mode: "click", blurToSave: true })}
                                                                                striped={true} hover={true}
                                                                            // rowEvents={ this.rowEvents }
                                                                            />
                                                                        </div>

                                                                    </CardBody> : ""}
                                                                    <Row>
                                                                        <Col></Col>
                                                                        <Col></Col>
                                                                    </Row>
                                                                </Card>
                                                            </Col>
                                                        </Row>
                                                        <CardFooter >
                                                            <div className="text-end mt-4">
                                                                <Link to="/purchase/goods-received/">
                                                                    <button type="button" className="btn btn-light w-sm  me-4" >Close</button>
                                                                </Link>
                                                                <button
                                                                    type="submit"
                                                                    className="btn btn-success save-user w-md"
                                                                >
                                                                    Save
                                                                </button>
                                                            </div>
                                                        </CardFooter>
                                                    </React.Fragment>
                                                }
                                            </>)
                                        }
                                        }
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

        </React.Fragment >
    );
}

export default AddEditGoodsReceived;