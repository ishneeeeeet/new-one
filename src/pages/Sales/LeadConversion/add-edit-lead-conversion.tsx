import React, { useEffect, useRef, useState } from "react";
import { Col, Row, Card, CardHeader, CardFooter, CardBody, Container, Label, Button } from "reactstrap";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { Checkbox, CheckboxGroup, Field, Form, Input } from '@availity/form';
import * as yup from 'yup';
import '@availity/yup';
import { SelectField } from "@availity/select";
import { DateField } from '@availity/date'
import InputMask from 'react-input-mask';
import {
    getActiveLeadWithEstimated as onGetActiveLeads,
    getActiveProducts as onGetActiveProducts,
    getActiveContractor as onGetActiveContractor,
    addLeadConversion as onAddLeadConversion
} from "../../../slices/thunks";

import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import { toast } from "react-toastify";
import { get } from "lodash";

interface LCProps {
    history: any;
}

const AddEditLeadConversion = ({ history }: LCProps) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [products, setProducts] = useState<any[]>([]);
    const [poGrandTotal, setPOGrandTotal] = useState<any>(0)
    const [selectVal, setSelectVal] = useState<any>();
    const [gst, setGST] = useState<any>(0);
    const gstStateRef = useRef(gst);
    gstStateRef.current = gst;
    const selectStateRef = useRef(selectVal);
    selectStateRef.current = selectVal;

    const productsStateRef = useRef(products);
    productsStateRef.current = products;
    const { activeLeads, productsList, contractorList } = useSelector((state: any) => ({
        activeLeads: state.leads.activeLeads,
        productsList: state.products.products,
        contractorList: state.contractor.contractorList,

    }));
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        dispatch(onGetActiveLeads());
        dispatch(onGetActiveProducts());
        dispatch(onGetActiveContractor())
    }, [dispatch])

    useEffect(() => {
        if (id != undefined || id != "undefined") {
            // dispatch(onGetPODetailsById(id))

        }
    }, [id])

    const handleValidFormSubmit = (values: any, { setStatus, setSubmitting, resetForm, }: any) => {
        setStatus();
        if (values?.products && values?.products.length) {
            if (id != undefined) {
                let data = Object.assign({}, values);
                data["lc_total_amount"] = poGrandTotal;
                data["lc_gst"] = gstStateRef.current;
                // data["id"] = purchaseOrderDetail.id
                // dispatch(onUpdatePurchaseOrder(data, history))
                setSubmitting(false);
                resetForm({
                    values: initialValuesObj,
                    // you can also set the other form states here
                });
            } else {
                let data = Object.assign({}, values);
                data["lc_total_amount"] = poGrandTotal;
                data["lc_gst"] = gstStateRef.current;
                dispatch(onAddLeadConversion(data, history))
                setSubmitting(false);
                resetForm({
                    values: initialValuesObj,
                    // you can also set the other form states here
                });

            }

        } else {
            toast.warn("Please add at least one product in estimate.")
        }

    };

    const handleAddProduct = (setFieldValue: any) => {
        const index = products.length;
        const newItem = {
            id: products.length + 1,
            product: "",
            p_id: 0,
            lcp_quantity: 1,
            lcp_price: 0,
            lcp_discount: 0,
            lcp_amount: 0,
            lcp_installation: false
        }
        setProducts(products => [...products, newItem])
        setFieldValue('products[' + index + '][lcp_quantity]', 1, false)
        setFieldValue('products[' + index + '][lcp_price]', 0, false)
        setFieldValue('products[' + index + '][lcp_discount]', 0, false)
        setFieldValue('products[' + index + '][lcp_amount]', 0, false)
        setFieldValue('products[' + index + '][product]', "", false)
    }

    const handleDeleteClick = (index: any, setFieldValue: any) => {
        const productData = [...productsStateRef.current]
        productData.splice(index, 1);
        setFieldValue('products[' + index + '][lcp_quantity]', 1, false)
        setFieldValue('products[' + index + '][lcp_price]', 0, false)
        setFieldValue('products[' + index + '][lcp_discount]', 0, false)
        setFieldValue('products[' + index + '][lcp_amount]', 0, false)
        setFieldValue('products[' + index + '][product]', "", false)
        setProducts(productData)
        setTimeout(() => calculateGrandTotal(), 300)
    };


    const handleProductAmount = (event: any, rowIndex: number, setFieldValue: any) => {
        const productData = [...productsStateRef.current];
        let updateData: any = productData.map((obj, index) => {
            if (index === rowIndex) {
                if (event.target.name.startsWith(`products[${rowIndex}][lcp_price]`)) {
                    const value = event.target.value ? parseFloat(event.target.value) : 0;
                    const calVal = parseFloat(((value * obj.lcp_quantity) - obj.lcp_discount || 0).toString())
                    const newObj = { ...obj, lcp_price: value || 0 }
                    setFieldValue('products[' + rowIndex + '][lcp_amount]', calVal, false)
                    return { ...newObj, lcp_amount: calVal }
                }
                if (event.target.name.startsWith(`products[${rowIndex}][lcp_discount]`)) {
                    const value = event.target.value ? parseFloat(event.target.value) : 0;
                    const calVal = parseFloat(((obj.lcp_quantity * obj.lcp_price) - value).toString());
                    setFieldValue('products[' + rowIndex + '][lcp_amount]', calVal, false)
                    return { ...obj, lcp_amount: calVal, lcp_discount: value }
                }
                if (event.target.name.startsWith(`products[${rowIndex}][lcp_quantity]`)) {
                    const value = event.target.value ? parseFloat(event.target.value) : 0;
                    const newObj = { ...obj, lcp_quantity: value || 0 }
                    const calVal = parseFloat(((value * obj.lcp_price) - obj.lcp_discount || 0).toString());
                    setFieldValue('products[' + rowIndex + '][lcp_amount]', calVal || 0, false)
                    return { ...newObj, lcp_amount: calVal || 0, lcp_quantity: value }
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
            grandCount += x.lcp_amount;
        }
        const gstCal = (grandCount * 5 / 100)
        grandCount += gstCal;
        setGST((parseFloat(gstCal.toString())).toFixed(2));

        setPOGrandTotal(parseFloat(grandCount.toString()).toFixed(2));


    }
    const selectRow: any = {
        mode: "checkbox",
    };


    const defaultValues = {
        gs_status: "1"
    };

    const initialValuesObj = {
        lc_date: "",
        lead: "",
        lc_estimate_id: "",
        contractor: "",
        lc_installation_charges: "",
        lc_customer_instruction: "",
        lc_terms_condition: ""
    }

    const phoneNumberRules = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[123456789]\d{9}$/;

    const validationSchema = yup.object().shape({
        lc_date: yup.date().required('Enter valid estimate date.'),
        lead: yup.string().required('Select valid lead.'),
        lc_estimate_id: yup.string().required("Enter Valid Estimate id")
    });

    const handleLeadChange = (e: any) => {
        if (e) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }

    const handleProductChange = (e: any, index: any, setFieldValue: any) => {
        const pData = productsList.find((ele: any) => ele.id == e)
        setFieldValue('products[' + index + '][lcp_price]', pData.attributes.p_selling_price, false)
        const value = {
            target: {
                value: pData.attributes.p_selling_price,
                name: 'products[' + index + '][lcp_price]'
            }
        }
        handleProductAmount(value, index, setFieldValue);
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title> Lead Conversion | Calgary Carpet Empire</title>

                </MetaTags>
                <Container fluid>
                    <Row>
                        <Col xs={12}>
                            {/* import TextualInputs */}
                            <Card>
                                <CardHeader className="justify-content-between d-flex align-items-center">
                                    <h4 className="card-title">{id ? "Edit Lead Conversion" : "New Lead Conversion"}</h4>
                                    <Link to="/sales/estimates" className="btn btn-sm btn-soft-secondary"> <i className="mdi mdi-window-close align-middle"></i></Link>
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
                                                }, {
                                                    dataField: 'product',
                                                    text: 'Product with Color',
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
                                                                options={productsList.map(({ id, attributes }: any) => ({ value: id, label: attributes.p_name + "-" + attributes.p_color }))}
                                                            // isDisabled={id != undefined ? true : false}
                                                            />
                                                        </React.Fragment>
                                                    ),
                                                    headerAttrs: { width: 240 }
                                                },
                                                {
                                                    dataField: 'lcp_quantity',
                                                    text: 'Quantity',
                                                    // eslint-disable-next-line react/display-name
                                                    formatter: (cellContent: any, product: any, rowIndex: any) => (
                                                        <React.Fragment>
                                                            <Field
                                                                name={'products[' + rowIndex + '][lcp_quantity]'}
                                                                type="number"
                                                                placeholder="Quantity"
                                                                required
                                                                onBlur={(e: any) => handleProductAmount(e, rowIndex, setFieldValue)}
                                                            />
                                                        </React.Fragment>
                                                    ),
                                                    headerAttrs: { width: 100 },
                                                }, {
                                                    dataField: 'lcp_price',
                                                    text: 'Rate',
                                                    type: 'number',
                                                    // eslint-disable-next-line react/display-name
                                                    formatter: (cellContent: any, product: any, rowIndex: any) => (
                                                        <React.Fragment>
                                                            <Field
                                                                name={'products[' + rowIndex + '][lcp_price]'}
                                                                type="number"
                                                                placeholder="Selling Price"
                                                                step="0.01"
                                                                prepend="$"
                                                                min={0.00}
                                                                required
                                                                onBlur={(e: any) => handleProductAmount(e, rowIndex, setFieldValue)}
                                                            />
                                                        </React.Fragment>
                                                    ),
                                                    headerAttrs: { width: 120 },
                                                }, {
                                                    dataField: 'lcp_discount',
                                                    text: 'Discount',
                                                    headerAttrs: { width: 120 },
                                                    // eslint-disable-next-line react/display-name
                                                    formatter: (cellContent: any, product: any, rowIndex: any) =>
                                                        <React.Fragment>
                                                            <Field
                                                                name={'products[' + rowIndex + '][lcp_discount]'}
                                                                type="number"
                                                                step="0.01"
                                                                prepend="$"
                                                                min={0.00}
                                                                onBlur={(e: any) => handleProductAmount(e, rowIndex, setFieldValue)}
                                                                placeholder="" />
                                                        </React.Fragment>
                                                }, {
                                                    dataField: 'lcp_installation',
                                                    text: 'Installation',
                                                    // eslint-disable-next-line react/display-name
                                                    formatter: (cellContent: any, product: any, rowIndex: any) => (
                                                        <React.Fragment>
                                                            <CheckboxGroup
                                                                name={'products[' + rowIndex + '][lcp_installation]'}>
                                                                <Checkbox
                                                                    defaultValue={"false"}
                                                                    groupName={'products[' + rowIndex + '][lcp_installation]'}
                                                                    value={true} />
                                                            </CheckboxGroup>
                                                        </React.Fragment>
                                                    ),
                                                    headerAttrs: { width: 80 },
                                                },
                                                {
                                                    dataField: 'lcp_amount',
                                                    text: 'Amount',
                                                    headerAttrs: { width: 150 },
                                                    // eslint-disable-next-line react/display-name
                                                    formatter: (cellContent: any, product: any, rowIndex: any) =>
                                                        <React.Fragment>
                                                            <Field
                                                                name={'products[' + rowIndex + '][lcp_amount]'}
                                                                type="number"
                                                                placeholder=""
                                                                step="0.01"
                                                                prepend="$"
                                                                min={0.00}
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
                                                    headerAttrs: { width: 20 },

                                                    // eslint-disable-next-line react/display-name
                                                    formatter: (cellContent: any, vendor: any, rowIndex: any) => (
                                                        <React.Fragment>
                                                            <i onClick={() => handleDeleteClick(rowIndex, setFieldValue)} className="mdi mdi-window-close align-middle btn btn-sm btn-soft-danger"></i>
                                                        </React.Fragment>
                                                    ),
                                                }];
                                            useEffect(() => {
                                                setFieldValue("lc_date", new Date().toISOString().slice(0, 10), false)
                                                // setFieldValue("lc_gst", "0", false)
                                                setFieldValue("lc_installation_charges", "0", false)
                                            }, [])
                                            return (
                                                <>
                                                    <Row className="mb-3">
                                                        <Label
                                                            htmlFor="product-color-input"
                                                            className="col-md-3 col-form-label">
                                                            Lead #<span className="text-danger">*</span>
                                                        </Label>
                                                        <Col md={8}>
                                                            <div className="mb-3">
                                                                <SelectField
                                                                    className="form-group"
                                                                    label=""
                                                                    name="lead"
                                                                    isMulti={false}
                                                                    onChange={(e) => handleLeadChange(e)}
                                                                    placeholder={"Select Lead With Customer Name"}
                                                                    required
                                                                    options={activeLeads.map(({ id, attributes }: any) => ({ value: id, label: `${attributes.ld_number} - ${get(attributes, 'ld_customer.data.attributes.c_name', '')}` }))}
                                                                    isDisabled={id != undefined ? true : false}
                                                                />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    {isValid &&
                                                        <React.Fragment>
                                                            <Row>
                                                                <Col >
                                                                    <div className="mb-3">
                                                                        <Field
                                                                            name="lc_estimate_id"
                                                                            type="text"
                                                                            label="Estimate #"
                                                                            className={'form-control'}
                                                                            required
                                                                            placeholder="Enter Valid Estimate Number"
                                                                        />
                                                                    </div>
                                                                </Col>
                                                                <Col >
                                                                    <div className="mb-3">
                                                                        <DateField
                                                                            name="lc_date"
                                                                            label={" Date"}
                                                                            placeholder="Select Valid Date" />
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <Card>
                                                                        <CardHeader className="justify-content-between d-flex align-items-center">
                                                                            <h4 className="card-title">Add Product</h4>
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
                                                                                                <th scope="row" colSpan={4} className="border-0 text-end">GST(5%)</th>
                                                                                                <td className="border-0 text-end">
                                                                                                    <h6 className="m-0 fw-semibold">${gst || 0.000}</h6>
                                                                                                    {/* <Field
                                                                                                        name="lc_gst"
                                                                                                        type="text"
                                                                                                        tag="InputMask"
                                                                                                        placeholder="Enter GST"
                                                                                                        disabled={true}
                                                                                                    /> */}

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
                                                                            name="contractor"
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
                                                                            name="lc_installation_charges"
                                                                            type="number"
                                                                            step="0.01"
                                                                            prepend="$"
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
                                                                            name="lc_customer_instruction"
                                                                            type="textarea"
                                                                            placeholder="" />
                                                                    </div>
                                                                </Col>
                                                                <Col >
                                                                    <div className="mb-3">
                                                                        <Field
                                                                            label={"Terms & Conditions"}
                                                                            name="lc_terms_condition"
                                                                            type="textarea"
                                                                            placeholder="Enter Terms & Condition" />
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </React.Fragment>
                                                    }

                                                    <CardFooter>
                                                        <div className="text-end">
                                                            <Button
                                                                // disabled={!isValid}
                                                                onClick={async () => {
                                                                    await setFieldValue('lc_drafted', true);
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
                                                            <Link to="/sales/estimates">
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

export default AddEditLeadConversion;