import React, { useEffect, useRef, useState } from "react";
import { Col, Row, Card, CardHeader, CardFooter, CardBody, Container, Label, Button } from "reactstrap";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { Checkbox, CheckboxGroup, Field, Form } from '@availity/form';
import * as yup from 'yup';
import '@availity/yup';
import { SelectField } from "@availity/select";
import { DateField } from '@availity/date'

import {
    getActiveEstimates as onGetActiveEstimates,
    getActiveProducts as onGetActiveProducts,
    getActiveContractor as onGetActiveContractor,
    addInvoice as onAddInvoice
} from "../../../slices/thunks";

import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import { toast } from "react-toastify";
import { get } from "lodash";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import moment from "moment";

interface InvProps {
    history: any;
}

const CreateOrEdit = ({ history }: InvProps) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [products, setProducts] = useState<any[]>([]);
    const [poGrandTotal, setPOGrandTotal] = useState<any>(0)
    const [gst, setGST] = useState<any>(5);
    const [gstAmount, setGSTAmount] = useState<any>(0);

    const productsStateRef = useRef(products);
    productsStateRef.current = products;
    const { activeEstimates, productsList, contractorList } = useSelector((state: any) => ({
        activeEstimates: state.conversion.activeEstimates,
        productsList: state.products.products,
        contractorList: state.contractor.contractorList,

    }));
    const [isValid, setIsValid] = useState(false);

    const termsOptions = [
        { label: "On Delivery", value: "On Delivery" },
        { label: "On Installation", value: "On Installation" },
        { label: "On Invoice Generation", value: "On Invoice Generation" },
    ];

    useEffect(() => {
        dispatch(onGetActiveEstimates());
        dispatch(onGetActiveProducts());
        dispatch(onGetActiveContractor())
    }, [dispatch])


    const handleValidFormSubmit = (values: any, { setStatus, setSubmitting, resetForm }: any) => {
        setStatus();
        if (values?.products && values?.products.length) {
            if (id != undefined) {
                let data = Object.assign({}, values);
                data["iv_total_amount"] = poGrandTotal;
                // data["id"] = purchaseOrderDetail.id
                // dispatch(onUpdatePurchaseOrder(data, history))
                setSubmitting(false);
                resetForm({
                    values: initialValuesObj,
                    // you can also set the other form states here
                });
            } else {
                let data = Object.assign({}, values);
                data["iv_total_amount"] = parseFloat(poGrandTotal)
                data.products.map((prod: any) => { 
                    prod.ivp_installation = prod.ivp_installation.some((elem: any) => elem) 
                    delete prod.id
                })
                dispatch(onAddInvoice(data, history))
                resetForm({
                    values: initialValuesObj,
                    // you can also set the other form states here
                });
                setSubmitting(false);

            }

        } else {
            toast.warn("Please add at least one product in invoice.")
        }

    };

    useEffect(() => {
        calculateGrandTotal()
    }, [gst])

    const handleAddProduct = (setFieldValue: any) => {
        const index = products.length;
        const newItem = {
            id: products.length + 1,
            product: "",
            p_id: 0,
            ivp_quantity: 1,
            ivp_price: 0,
            ivp_discount: 0,
            ivp_amount: 0,
            ivp_installation: [false]
        }
        setProducts(products => [...products, newItem])
        setFieldValue('products[' + index + '][ivp_installation]', [false], false)
        setFieldValue('products[' + index + '][ivp_quantity]', 1, false)
        setFieldValue('products[' + index + '][ivp_price]', 0, false)
        setFieldValue('products[' + index + '][ivp_discount]', 0, false)
        setFieldValue('products[' + index + '][ivp_amount]', 0, false)
        setFieldValue('products[' + index + '][product]', "", false)
    }

    const handleDeleteClick = (index: any, setFieldValue: any) => {
        const productData = [...productsStateRef.current]
        productData.splice(index, 1);
        setFieldValue('products[' + index + '][ivp_quantity]', 1, false)
        setFieldValue('products[' + index + '][ivp_price]', 0, false)
        setFieldValue('products[' + index + '][ivp_discount]', 0, false)
        setFieldValue('products[' + index + '][ivp_amount]', 0, false)
        setFieldValue('products[' + index + '][product]', "", false)
        setProducts(productData)
        setTimeout(() => calculateGrandTotal(), 300)
    };


    const handleProductAmount = (event: any, rowIndex: number, setFieldValue: any) => {
        const productData = [...productsStateRef.current];
        let updateData: any = productData.map((obj, index) => {
            if (index === rowIndex) {
                if (event.target.name.startsWith(`products[${rowIndex}][ivp_price]`)) {
                    const value = event.target.value ? parseFloat(event.target.value) : 0;
                    const calVal = parseFloat(((value * obj.ivp_quantity) - obj.ivp_discount || 0).toString())
                    const newObj = { ...obj, ivp_price: value || 0 }
                    setFieldValue('products[' + rowIndex + '][ivp_amount]', calVal, false)
                    return { ...newObj, ivp_amount: calVal }
                }
                if (event.target.name.startsWith(`products[${rowIndex}][ivp_discount]`)) {
                    const value = event.target.value ? parseFloat(event.target.value) : 0;
                    const calVal = parseFloat(((obj.ivp_quantity * obj.ivp_price) - value).toString());
                    setFieldValue('products[' + rowIndex + '][ivp_amount]', calVal, false)
                    return { ...obj, ivp_amount: calVal, ivp_discount: value }
                }
                if (event.target.name.startsWith(`products[${rowIndex}][ivp_quantity]`)) {
                    const value = event.target.value ? parseFloat(event.target.value) : 0;
                    const newObj = { ...obj, ivp_quantity: value || 0 }
                    const calVal = parseFloat(((value * obj.ivp_price) - obj.ivp_discount || 0).toString());
                    setFieldValue('products[' + rowIndex + '][ivp_amount]', calVal || 0, false)
                    return { ...newObj, ivp_amount: calVal || 0, ivp_quantity: value }
                }
            }
            return { ...obj }
        })
        setProducts(updateData);
        setTimeout(() => calculateGrandTotal(), 300)
    };

    const calculateGrandTotal = () => {
        let grandCount = 0;
        const productData = [...productsStateRef.current]
        for (const x of productData) {
            console.log("==x.ivp_amount===", x.ivp_amount)
            grandCount += x.ivp_amount;
        }
        console.log("grandCount==", grandCount)
        if (gst) {
            let gstAmount = (grandCount * gst / 100);
            setGSTAmount(gstAmount.toFixed(2))
            grandCount += gstAmount
        }
        setPOGrandTotal(parseFloat(grandCount.toString()).toFixed(2));


    }
    const selectRow: any = {
        mode: "checkbox",
    };


    const defaultValues = {
        gs_status: "1"
    };

    const initialValuesObj = {
        iv_date: "",
        iv_estimate_id: "",
        iv_gst: "",
        iv_contractor: "",
        iv_installation_charges: "",
        iv_customer_instructions: "",
        iv_t_and_c: "",
        iv_expected_install_date: new Date().toISOString().slice(0, 10),
        iv_payment_terms: "",
        iv_total_amount: 0.00
    }


    const validationSchema = yup.object().shape({
        iv_date: yup.date().required('Enter valid Invoice date.'),
        iv_estimate_id: yup.string().required("Select Valid Estimate.")
    });

    const handleEstimateChange = (estId: any, setFieldValue: Function) => {
        if (estId) {
            setIsValid(true);
            const foundEstimate = activeEstimates.find((estDetails: any) => estDetails.id === estId)
            if (foundEstimate) {
                const estProducts = foundEstimate.attributes.lead_conversion_products.data.map((elem: any) => ({
                    "id": elem.id,
                    "product": elem.attributes.product.data.id,
                    "ivp_quantity": elem.attributes.lcp_quantity,
                    "ivp_price": elem.attributes.lcp_price,
                    "ivp_discount": elem.attributes.lcp_discount,
                    "ivp_installation": [elem.attributes.lcp_installation],
                    "ivp_amount": elem.attributes.lcp_amount
                }))
                setProducts(estProducts)
                setFieldValue("iv_estimate_id", foundEstimate.id)
                setFieldValue("iv_installation_charges", foundEstimate.attributes.lc_installation_charges)
                setFieldValue("iv_customer_instructions", foundEstimate.attributes.lc_customer_instruction)
                setFieldValue("iv_t_and_c", foundEstimate.attributes.lc_terms_condition)
                setFieldValue("iv_contractor", foundEstimate.attributes.contractor.data.id)
                setFieldValue("products", estProducts)
                calculateGrandTotal()
            }
        } else {
            setIsValid(false);
        }
    }

    const handleProductChange = (e: any, index: any, setFieldValue: any) => {
        const pData = productsList.find((ele: any) => ele.id == e)
        setFieldValue('products[' + index + '][ivp_price]', pData.attributes.p_selling_price, false)
        const value = {
            target: {
                value: pData.attributes.p_selling_price,
                name: 'products[' + index + '][ivp_price]'
            }
        }
        handleProductAmount(value, index, setFieldValue);
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Invoices | Calgary Carpet Empire</title>
                </MetaTags>
                <Container fluid>
                    <Breadcrumbs title="Sales" breadcrumbItem={"Create Invoice"} />
                    <Row>
                        <Col xs={12}>
                            {/* import TextualInputs */}
                            <Card>
                                <CardHeader className="d-flex flex-column align-items-end">
                                    <Link to="/sales/invoices" className="btn btn-sm btn-soft-secondary"> <i className="mdi mdi-window-close align-middle"></i></Link>
                                </CardHeader>
                                <CardBody>
                                    <Form
                                        initialValues={initialValuesObj}
                                        validationSchema={validationSchema}
                                        onSubmit={handleValidFormSubmit}>
                                        {({ setFieldValue, submitForm, resetForm }) => {
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
                                                            />
                                                        </React.Fragment>
                                                    ),
                                                },
                                                {
                                                    dataField: 'product',
                                                    text: 'Product',
                                                    // eslint-disable-next-line react/display-name
                                                    formatter: (cellContent: any, product: any, rowIndex: any) => (
                                                        <React.Fragment>
                                                            <SelectField
                                                                className="form-group"
                                                                placeholder="Select Product"
                                                                name={'products[' + rowIndex + '][product]'}
                                                                isMulti={false}
                                                                required
                                                                onChange={(e: any) => handleProductChange(e, rowIndex, setFieldValue)}
                                                                options={productsList.map(({ id, attributes }: any) => ({ value: id, label: attributes.p_name + '-' + attributes.p_color }))}
                                                            // isDisabled={id != undefined ? true : false}
                                                            />
                                                        </React.Fragment>
                                                    ),
                                                    headerAttrs: { width: 240 }
                                                },
                                                {
                                                    dataField: 'ivp_quantity',
                                                    text: 'Quantity',
                                                    // eslint-disable-next-line react/display-name
                                                    formatter: (cellContent: any, product: any, rowIndex: any) => (
                                                        <React.Fragment>
                                                            <Field
                                                                name={'products[' + rowIndex + '][ivp_quantity]'}
                                                                type="number"
                                                                placeholder="Quantity"
                                                                required
                                                                onBlur={(e: any) => handleProductAmount(e, rowIndex, setFieldValue)}
                                                            />
                                                        </React.Fragment>
                                                    ),
                                                    headerAttrs: { width: 120 },
                                                },
                                                {
                                                    dataField: 'ivp_price',
                                                    text: 'Rate',
                                                    type: 'number',
                                                    // eslint-disable-next-line react/display-name
                                                    formatter: (cellContent: any, product: any, rowIndex: any) => (
                                                        <React.Fragment>
                                                            <Field
                                                                name={'products[' + rowIndex + '][ivp_price]'}
                                                                type="number"
                                                                placeholder="Selling Price"
                                                                prepend="$"
                                                                step="0.01"
                                                                min={0.00}
                                                                required
                                                                onBlur={(e: any) => handleProductAmount(e, rowIndex, setFieldValue)}
                                                            />
                                                        </React.Fragment>
                                                    ),
                                                    headerAttrs: { width: 160 },
                                                },
                                                {
                                                    dataField: 'ivp_discount',
                                                    text: 'Discount',
                                                    headerAttrs: { width: 150 },
                                                    // eslint-disable-next-line react/display-name
                                                    formatter: (cellContent: any, product: any, rowIndex: any) =>
                                                        <React.Fragment>
                                                            <Field
                                                                name={'products[' + rowIndex + '][ivp_discount]'}
                                                                type="number"
                                                                prepend="$"
                                                                step="0.01"
                                                                min={0.00}
                                                                onBlur={(e: any) => handleProductAmount(e, rowIndex, setFieldValue)}
                                                                placeholder="" />
                                                        </React.Fragment>
                                                },
                                                {
                                                    dataField: 'ivp_installation',
                                                    text: 'Installation',
                                                    // eslint-disable-next-line react/display-name
                                                    formatter: (cellContent: any, product: any, rowIndex: any) => (
                                                        <React.Fragment>
                                                            <CheckboxGroup
                                                                name={'products[' + rowIndex + '][ivp_installation]'}>
                                                                <Checkbox
                                                                    groupName={'products[' + rowIndex + '][ivp_installation]'}
                                                                    value={true}
                                                                />
                                                            </CheckboxGroup>
                                                        </React.Fragment>
                                                    ),
                                                    headerAttrs: { width: 80 },
                                                },
                                                {
                                                    dataField: 'ivp_amount',
                                                    text: 'Amount',
                                                    headerAttrs: { width: 170 },
                                                    // eslint-disable-next-line react/display-name
                                                    formatter: (cellContent: any, product: any, rowIndex: any) =>
                                                        <React.Fragment>
                                                            <Field
                                                                name={'products[' + rowIndex + '][ivp_amount]'}
                                                                type="number"
                                                                prepend="$"
                                                                step="0.01"
                                                                min={0.00}
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
                                                    headerAttrs: { width: 10 },

                                                    // eslint-disable-next-line react/display-name
                                                    formatter: (cellContent: any, vendor: any, rowIndex: any) => (
                                                        <React.Fragment>
                                                            <i onClick={() => handleDeleteClick(rowIndex, setFieldValue)} className="mdi mdi-window-close align-middle btn btn-sm btn-soft-danger"></i>
                                                        </React.Fragment>
                                                    ),
                                                }];
                                            useEffect(() => {
                                                setFieldValue("iv_date", new Date().toISOString().slice(0, 10), false)
                                                setFieldValue("iv_installation_charges", "0", false)
                                            }, [])
                                            return (
                                                <>
                                                    <Row className="mb-3">
                                                        <Col>
                                                            <SelectField
                                                                className="form-group"
                                                                label="Estimate #"
                                                                name="iv_estimate_id"
                                                                isMulti={false}
                                                                onChange={(e) => handleEstimateChange(e, setFieldValue)}
                                                                placeholder={"Select Estimate #"}
                                                                required
                                                                options={activeEstimates.map(({ id, attributes }: any) => ({ value: id, label: attributes.lc_estimate_id }))}
                                                                isDisabled={id != undefined ? true : false}
                                                            />
                                                        </Col>
                                                        <Col>
                                                            <DateField
                                                                name="iv_date"
                                                                label={"Date"}
                                                                placeholder="Select Valid Date"
                                                                format={"DD/MM/YYYY"}
                                                            />
                                                        </Col>
                                                    </Row>
                                                    {isValid &&
                                                        <React.Fragment>
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
                                                                                striped={true}
                                                                                hover={true}
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
                                                                                                <th scope="row" colSpan={4} className="border-0 text-end">GST</th>
                                                                                                <td className="border-0 text-end">
                                                                                                    <h6 className="m-0 fw-semibold">${gstAmount}</h6>
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
                                                            <Row>
                                                                <Col >
                                                                    <div className="mb-3">
                                                                        <SelectField
                                                                            label="Contractor"
                                                                            className="form-group"
                                                                            placeholder="Select Contractor"
                                                                            name="iv_contractor"
                                                                            isMulti={false}
                                                                            options={contractorList.map(({ id, attributes }: any) => ({ value: id, label: attributes.co_name }))}
                                                                        // isDisabled={id != undefined ? true : false}
                                                                        />
                                                                    </div>
                                                                </Col>
                                                                <Col >
                                                                    <div className="mb-3">
                                                                        <Field
                                                                            label={"Installation Charges"}
                                                                            name="iv_installation_charges"
                                                                            type="number"
                                                                            prepend="$"
                                                                            step="0.01"
                                                                            min={0.00}
                                                                            placeholder="Enter Installation Charges" />
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col >
                                                                    <div className="mb-3">
                                                                        <Field
                                                                            label={"Customer Instructions"}
                                                                            name="iv_customer_instructions"
                                                                            type="textarea"
                                                                            placeholder="" />
                                                                    </div>
                                                                </Col>
                                                                <Col >
                                                                    <div className="mb-3">
                                                                        <Field
                                                                            label={"Terms & Conditions"}
                                                                            name="iv_t_and_c"
                                                                            type="textarea"
                                                                            placeholder="Enter Terms & Condition" />
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                            <Row className="mb-3">
                                                                <Col md={6}>
                                                                    <Field
                                                                        name="iv_expected_install_date"
                                                                        type="date"
                                                                        label="Expected Installation Date"
                                                                        placeholder="Select Valid Date"
                                                                    />
                                                                </Col>
                                                                <Col md={6}>
                                                                    <SelectField
                                                                        className="form-group"
                                                                        name="iv_payment_terms"
                                                                        isMulti={false}
                                                                        label={"Select Payment Terms"}
                                                                        placeholder={"Payment Terms"}
                                                                        required
                                                                        options={termsOptions.map(({ label, value }: any) => ({ value, label }))}
                                                                    />
                                                                </Col>
                                                            </Row>
                                                        </React.Fragment>
                                                    }

                                                    <CardFooter>
                                                        <div className="text-end">
                                                            <Button
                                                                // disabled={!isValid}
                                                                onClick={async () => {
                                                                    await setFieldValue('iv_drafted', true);
                                                                    submitForm();
                                                                }
                                                                }
                                                                className="btn btn-warning   save-user w-sm me-4">
                                                                Save & Draft
                                                            </Button>
                                                            <Button
                                                                // disabled={!isValid}
                                                                type="submit"
                                                                className="btn btn-success save-user w-sm me-4">
                                                                Save
                                                            </Button>
                                                            <Link to="/sales/invoices">
                                                                <Button type="button" className="btn btn-light w-md">Close</Button>
                                                            </Link>



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

export default CreateOrEdit;