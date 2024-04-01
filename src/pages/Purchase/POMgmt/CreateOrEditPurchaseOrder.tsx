import React, { useEffect, useRef, useState } from "react";
import { withRouter } from "react-router-dom";
import { Col, Row, Card, CardHeader, CardFooter, CardBody, Container, Button, Label } from "reactstrap";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { Form, Field } from '@availity/form';
import * as yup from 'yup';
import '@availity/yup';
import { SelectField } from "@availity/select";
import { DateField } from '@availity/date'
import '@availity/date/styles.scss';

// Editable
import BootstrapTable from "react-bootstrap-table-next";
import {
    getPODetailsById as onGetPODetailsById,
    getActiveVendors as onGetActiveVendors,
    getActiveWarehouse as onGetActiveWarehouses,
    getActiveProducts as onGetActiveProducts,
    addPurchaseOrder as onAddPurchaseOrder,
    updatePurchaseOrder as onUpdatePurchaseOrder
} from "../../../slices/thunks";

import moment from "moment";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { get, isEmpty } from "lodash";

interface POProps {
    history: any;
}

const AddEditPurchaseOrder = ({ history }: POProps) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [products, setProducts] = useState<any[]>([]);
    const [poGrandTotal, setPOGrandTotal] = useState<any>(0)
    const [gst, setGST] = useState<any>(0);
    const gstStateRef = useRef(gst);
    gstStateRef.current = gst;
    const productsStateRef = useRef(products);
    productsStateRef.current = products;
    const { purchaseOrderDetail, activeVendorList, activeWarehouses, productsList } = useSelector((state: any) => ({
        purchaseOrderDetail: state.purchase.purchaseOrderDetail,
        activeVendorList: state.vendors.activeVendorList,
        activeWarehouses: state.warehouse.activeWarehouses,
        productsList: state.products.products
    }));



    useEffect(() => {
        // dispatch(onGetPurchaseOrders());
        dispatch(onGetActiveVendors());
        dispatch(onGetActiveWarehouses());
        dispatch(onGetActiveProducts());
    }, [dispatch])

    useEffect(() => {
        if (id != undefined) {
            dispatch(onGetPODetailsById(id))
        }
    }, [id])

    useEffect(() => {
        calculateGrandTotal()
    }, [gst])


    const handleValidFormSubmit = (values: any, { setStatus, setSubmitting, resetForm }: any) => {

        setStatus();
        if (values?.products && values?.products.length) {
            if (id != undefined) {
                let data = Object.assign({}, values);
                data["po_total_amount"] = poGrandTotal;
                data["id"] = purchaseOrderDetail.id
                data["po_gst"] = gst
                // dispatch(onUpdatePurchaseOrder(data, history))
                setSubmitting(false);
                resetForm({
                    values: initialValuesObj,
                    // you can also set the other form states here
                });
            } else {
                let data = Object.assign({}, values);
                data["po_total_amount"] = poGrandTotal;
                data["po_gst"] = gst;
                dispatch(onAddPurchaseOrder(data, history))
                setSubmitting(false);
                resetForm({
                    values: initialValuesObj,
                    // you can also set the other form states here
                });

            }

        } else {
            toast.warn("Please add at least one product in purchase order.")
        }

    };
    const handleAddProduct = (setFieldValue: any) => {
        const index = products.length;
        const newItem = {
            id: index + 1,
            p_name: "",
            pp_product: 0,
            pp_ordered_quantity: 1,
            pp_purchase_price: 0,
            pp_total_amount: 0
        }
        setFieldValue('products[' + index + '][pp_product]', "", false)
        setFieldValue('products[' + index + '][pp_ordered_quantity]', 1, false)
        setFieldValue('products[' + index + '][pp_purchase_price]', 0, false)
        setFieldValue('products[' + index + '][pp_total_amount]', 0, false)
        setProducts([...productsStateRef.current, newItem])
    }


    const handleDeleteClick = (index: any, setFieldValue: any) => {
        const productData = [...productsStateRef.current]
        productData.splice(index, 1);
        setFieldValue('products[' + index + '][pp_product]', "", false)
        setFieldValue('products[' + index + '][pp_ordered_quantity]', 1, false)
        setFieldValue('products[' + index + '][pp_purchase_price]', 0, false)
        setFieldValue('products[' + index + '][pp_total_amount]', 0, false)
        setProducts(productData)
        setTimeout(() => calculateGrandTotal(), 300)
    };




    const calculateGrandTotal = () => {
        let grandCount = 0;
        const productData = [...productsStateRef.current]
        for (const x of productData) {
            grandCount += x.pp_total_amount;
        }
        const gstCal = (grandCount * 5 / 100)
        grandCount += gstCal;
        setGST((parseFloat(gstCal.toString())).toFixed(2))
        setPOGrandTotal(parseFloat(grandCount.toString()).toFixed(2));


    }
    const selectRow: any = {
        mode: "checkbox",
    };



    const initialValuesObj: any = {
        po_number: "",
        po_vendor: "",
        po_ship_to: "",
        po_payment_terms: "",
        po_date: ""
    }
    const validationSchema = yup.object().shape({
        po_vendor: yup.string().required("Select Vendor Name."),
        po_ship_to: yup.string().required("Select Warehouse."),
        po_date: yup.date().required('This field is invalid.'),
        po_due_date: yup.date().notRequired()
    });
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Purchase Order- PO Management | Calgary Carpet Empire</title>

                </MetaTags>
                <Container fluid>
                    <Row>
                        <Col xs={12}>
                            {/* import TextualInputs */}
                            <Card>
                                <CardHeader className="justify-content-between d-flex align-items-center">
                                    <h4 className="card-title">{id ? "Edit Purchase Order" : "New Purchase Order"}</h4>
                                    <Link to="/purchase/purchase-orders" className="btn btn-sm btn-soft-secondary"> <i className="mdi mdi-window-close align-middle"></i></Link>
                                </CardHeader>
                                <CardBody>
                                    <Form initialValues={initialValuesObj} validationSchema={validationSchema} onSubmit={handleValidFormSubmit}>

                                        {({ errors, touched, isSubmitting, setFieldValue, values, resetForm }) => {

                                            const handleProductAmount = (event: any, rowIndex: number) => {
                                                const productData = [...productsStateRef.current]
                                                const value = event.target.value ? parseFloat(event.target.value) : 0;
                                                let updateData: any = productData.map((obj, index) => {
                                                    if (index === rowIndex) {
                                                        if (event.target.name.startsWith(`products[${rowIndex}][pp_purchase_price]`)) {
                                                            let newObj: any = { ...obj, pp_purchase_price: value }
                                                            setFieldValue(`products[${rowIndex}][pp_purchase_price]`, value, false)
                                                            setFieldValue('products[' + rowIndex + '][pp_total_amount]', value * obj.pp_ordered_quantity, false)

                                                            const a = { ...newObj, pp_total_amount: value * obj.pp_ordered_quantity }
                                                            return a;
                                                        }
                                                        if (event.target.name.startsWith(`products[${rowIndex}][pp_ordered_quantity]`)) {
                                                            let newObj = { ...obj, pp_ordered_quantity: value || 0 }
                                                            setFieldValue('products[' + rowIndex + '][pp_total_amount]', value * obj.pp_purchase_price || 0 * obj.pp_ordered_quantity, false)
                                                            return { ...newObj, pp_total_amount: value * obj.pp_purchase_price || 0 }
                                                        }
                                                    }
                                                    return { ...obj }
                                                })

                                                setProducts(updateData);
                                                setTimeout(() => calculateGrandTotal(), 300)
                                            }
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
                                                                placeholder="Purchase Price"
                                                                required
                                                                onBlur={(e: any) => handleProductAmount(e, rowIndex)} />
                                                        </React.Fragment>
                                                    ),
                                                }, {
                                                    dataField: 'pp_product',
                                                    text: 'Product',
                                                    // eslint-disable-next-line react/display-name
                                                    formatter: (cellContent: any, product: any, rowIndex: any) => (
                                                        <React.Fragment>
                                                            <SelectField
                                                                className="form-group"
                                                                placeholder="Select Product with Color"
                                                                name={'products[' + rowIndex + '][pp_product]'}
                                                                isMulti={false}
                                                                required
                                                                options={productsList.map(({ id, attributes }: any) => ({ value: id, label: attributes.p_name + "-" + attributes.p_color }))}
                                                            // isDisabled={id != undefined ? true : false}
                                                            />
                                                        </React.Fragment>
                                                    ),
                                                    headerAttrs: { width: 300 }
                                                },
                                                {
                                                    dataField: 'pp_ordered_quantity',
                                                    text: 'Quantity',
                                                    // eslint-disable-next-line react/display-name
                                                    formatter: (cellContent: any, product: any, rowIndex: any) => (
                                                        <React.Fragment>
                                                            <Field
                                                                name={'products[' + rowIndex + '][pp_ordered_quantity]'}
                                                                type="number"
                                                                placeholder="Quantity"
                                                                required
                                                                onBlur={(e: any) => handleProductAmount(e, rowIndex)} />
                                                        </React.Fragment>
                                                    ),
                                                    headerAttrs: { width: 180 },
                                                }, {
                                                    dataField: 'pp_purchase_price',
                                                    text: 'Rate',
                                                    type: 'number',
                                                    // eslint-disable-next-line react/display-name
                                                    formatter: (cellContent: any, product: any, rowIndex: any) => (
                                                        <React.Fragment>
                                                            <Field
                                                                name={'products[' + rowIndex + '][pp_purchase_price]'}
                                                                type="number"
                                                                step="0.01" 
                                                                prepend="$"
                                                                placeholder="Purchase Price"
                                                                required
                                                                onBlur={(e: any) => handleProductAmount(e, rowIndex)} />
                                                        </React.Fragment>
                                                    ),
                                                    headerAttrs: { width: 200 },
                                                }, {
                                                    dataField: 'pp_total_amount',
                                                    text: 'Amount',
                                                    headerAttrs: { width: 200 },
                                                    // eslint-disable-next-line react/display-name
                                                    formatter: (cellContent: any, product: any, rowIndex: any) =>
                                                        <React.Fragment>
                                                            <Field
                                                                name={'products[' + rowIndex + '][pp_total_amount]'}
                                                                type="number"
                                                                step="0.01" 
                                                                prepend="$"
                                                                placeholder=""
                                                                disabled={true} />
                                                        </React.Fragment>
                                                },

                                                // columns follow dataField and text structure
                                                {
                                                    text: "Delete",
                                                    dataField: "remove",
                                                    sort: true,
                                                    isDummyField: true,
                                                    csvExport: false,
                                                    headerStyle: {
                                                        color: 'white'
                                                    },
                                                    editable: false,
                                                    headerAttrs: { width: 50 },

                                                    // eslint-disable-next-line react/display-name
                                                    formatter: (cellContent: any, vendor: any, rowIndex: any) => (
                                                        <React.Fragment>
                                                            <i onClick={() => handleDeleteClick(rowIndex, setFieldValue)} className="mdi mdi-window-close align-middle btn btn-sm btn-soft-danger"></i>
                                                        </React.Fragment>
                                                    ),
                                                }];
                                            useEffect(() => {
                                                setFieldValue("po_date", new Date().toISOString().slice(0, 10), false)
                                            }, [])

                                            useEffect(() => {
                                                if (!isEmpty(purchaseOrderDetail) && purchaseOrderDetail?.attributes?.po_products && id) {
                                                    setGST(purchaseOrderDetail.attributes.po_gst)
                                                    const products = purchaseOrderDetail.attributes.po_products.data.map((ele: any, index: any) => {
                                                        setFieldValue('products[' + index + '][pp_product]', ele.attributes.pp_product.data.id, false)
                                                        setFieldValue('products[' + index + '][pp_ordered_quantity]', ele.attributes.pp_ordered_quantity, false)
                                                        setFieldValue('products[' + index + '][pp_purchase_price]', ele.attributes.pp_purchase_price, false)
                                                        setFieldValue('products[' + index + '][pp_total_amount]', ele.attributes.pp_total_amount, false)
                                                        return {
                                                            id: ele.id,
                                                            p_name: ele.attributes.p_name,
                                                            pp_product: ele.attributes.pp_product,
                                                            pp_ordered_quantity: ele.attributes.pp_ordered_quantity,
                                                            pp_purchase_price: ele.attributes.pp_purchase_price,
                                                            pp_total_amount: parseInt(ele.attributes.pp_total_amount)
                                                        }
                                                    })

                                                    setProducts(products)
                                                    setTimeout(() => calculateGrandTotal(), 700)
                                                    setFieldValue("po_number", purchaseOrderDetail.attributes.po_number, false)
                                                    setFieldValue("po_vendor", purchaseOrderDetail.attributes.po_vendor.data.id, false)
                                                    setFieldValue("po_ship_to", purchaseOrderDetail.attributes.po_ship_to.data.id, false)
                                                    setFieldValue("po_payment_terms", purchaseOrderDetail.attributes.po_payment_terms, false)
                                                    setFieldValue("po_date", new Date(purchaseOrderDetail.attributes.po_date).toISOString().slice(0, 10), false)
                                                    setFieldValue("po_due_date", new Date(purchaseOrderDetail.attributes.po_due_date).toISOString().slice(0, 10), false)
                                                    setFieldValue("po_order_placed_with", purchaseOrderDetail.attributes.po_order_placed_with, false)
                                                    setFieldValue("po_order_note", purchaseOrderDetail.attributes.po_order_note, false)
                                                }
                                            }, [purchaseOrderDetail])

                                            return (
                                                <>
                                                    <CardBody>
                                                        <Row className="mb-3">
                                                            <Col >
                                                                <SelectField
                                                                    className="form-group"
                                                                    label="Vendor"
                                                                    name="po_vendor"
                                                                    isMulti={false}
                                                                    placeholder={"Select Vendor"}
                                                                    required
                                                                    options={activeVendorList.map(({ id, attributes }: any) => ({ value: id, label: attributes.v_name }))}
                                                                    isDisabled={id != undefined ? true : false}
                                                                />
                                                            </Col>
                                                            <Col >
                                                                <SelectField
                                                                    className="form-group"
                                                                    label="Ship to"
                                                                    name="po_ship_to"
                                                                    isMulti={false}
                                                                    placeholder={"Select Warehouse/Location"}
                                                                    required
                                                                    options={activeWarehouses.map(({ id, attributes }: any) => ({ value: id, label: attributes.w_name }))}
                                                                    isDisabled={id != undefined ? true : false}
                                                                />
                                                            </Col>
                                                        </Row>
                                                        <Row className="mb-3">
                                                            <Col >
                                                                <Field
                                                                    name="po_payment_terms"
                                                                    // className="form-group"
                                                                    className={'form-control'}
                                                                    label="Payment Terms"
                                                                    type="text"
                                                                    placeholder="Enter Valid Payment Terms"
                                                                />
                                                            </Col>
                                                            <Col>
                                                                <DateField
                                                                    name="po_date"
                                                                    label={"Date"}
                                                                    required
                                                                    placeholder="Select Valid Date" />
                                                            </Col>
                                                        </Row>
                                                        <Row className="mb-3">
                                                            <Col>
                                                                <DateField
                                                                    name="po_due_date"
                                                                    label={"Payment Due Date"}
                                                                    placeholder="Select Valid Date" />
                                                            </Col>
                                                            <Col >
                                                                <Field
                                                                    name="po_order_placed_with"
                                                                    label="Order Placed With"
                                                                    type="text"
                                                                    placeholder="Select Valid Order Placed With"
                                                                />
                                                            </Col>
                                                        </Row>
                                                        <Row className="mb-3">
                                                            <Col >
                                                                <Field
                                                                    name="po_order_note"
                                                                    label="Order Note"
                                                                    type="text"
                                                                    placeholder="Enter Order Note" />
                                                            </Col>
                                                            <Col >
                                                            </Col>
                                                        </Row>
                                                        <Row >
                                                            <Col xs={12}>
                                                                <div className="mb-3">
                                                                    <Label htmlFor="po-file-input" className="col-md-6 col-form-label">Attach Files (Formats: jpg, jpeg, png, gif | Size: Max. 5 files of max. 2 MB each) </Label>
                                                                    <Field
                                                                        name="po_file"
                                                                        label=""
                                                                        type="file"
                                                                        placeholder="Enter Valid File"
                                                                    />
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <Card>
                                                                    <CardHeader className="justify-content-between d-flex align-items-center">
                                                                        <h4 className="card-title" >Add Product</h4>
                                                                        <i onClick={() => handleAddProduct(setFieldValue)} className="mdi mdi-plus align-right btn btn-lg btn-soft-primary mr-10"  ></i>
                                                                    </CardHeader>
                                                                    {products.length ? <CardBody>

                                                                        {/* <div className="table-responsive border"> */}
                                                                        <BootstrapTable
                                                                            keyField="id"
                                                                            data={productsStateRef.current}
                                                                            columns={columns}
                                                                            selectRow={selectRow}
                                                                            striped={true} hover={true}
                                                                        />
                                                                        {/* </div> */}

                                                                    </CardBody> : ""}
                                                                    <Row>
                                                                        <Col></Col>
                                                                        <Col>
                                                                            <div className="table-responsive border">
                                                                                <table className="table align-middle table-nowrap table-centered mb-0">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <th scope="row" colSpan={4} className="border-0 text-end">GST(5%)</th>
                                                                                            <td className="border-0 text-end">
                                                                                            <h6 className="m-0 fw-semibold">${gst || 0.000}</h6>

                                                                                            </td>   
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th scope="row" colSpan={4} className="border-0 text-end">Total</th>
                                                                                            <td className="border-0 text-end"><h5 className="m-0 fw-semibold">${poGrandTotal || 0.000}</h5></td>
                                                                                        </tr>

                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </Card>
                                                            </Col>
                                                        </Row>

                                                    </CardBody>
                                                    <CardFooter>
                                                        <div className="text-end mt-4">
                                                            <Link to="/purchase/purchase-orders" >
                                                                <Button type="button" className="btn btn-light w-sm  me-4" >Close</Button>
                                                            </Link>
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
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment >
    );
}

export default withRouter(AddEditPurchaseOrder);