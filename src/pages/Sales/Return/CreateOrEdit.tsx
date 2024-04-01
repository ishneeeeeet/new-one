import React, { useEffect, useRef, useState } from "react";
import { Col, Row, Card, CardHeader, CardFooter, CardBody, Container, Button } from "reactstrap";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import {Field, Form } from '@availity/form';
import * as yup from 'yup';
import '@availity/yup';
import { SelectField } from "@availity/select";

import {
    getInvoices as onGetInvoices,
    getActiveProducts as onGetActiveProducts,
    addSalesReturn as onAddSalesReturn
} from "../../../slices/thunks";

import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import { toast } from "react-toastify";
import { isEmpty } from "lodash";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import moment from "moment";

interface InvProps {
    history: any;
}

const CreateOrEditReturn = ({ history }: InvProps) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [products, setProducts] = useState<any[]>([]);
    const [poGrandTotal, setPOGrandTotal] = useState<any>(0)

    const productsStateRef = useRef(products);
    productsStateRef.current = products;
    const { invoices, productsList,  } = useSelector((state: any) => ({
        invoices: state.invoices.invoices,
        productsList: state.products.products,

    }));
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        dispatch(onGetInvoices());
        dispatch(onGetActiveProducts());
    }, [dispatch])

      const handleValidFormSubmit = (values: any, { setStatus, setSubmitting, resetForm, }: any) => {
        // setStatus();
        if (values?.products && values?.products.length) {
            if (id != undefined) {
                let data = Object.assign({}, values);
                data["total_amount"] = poGrandTotal;
                console.log("data == ", data)
                setSubmitting(false);
                resetForm({
                    values: initialValuesObj,
                    // you can also set the other form states here
                });
            } else {
                const productData = [...productsStateRef.current]
                let data = Object.assign({}, values);
                console.log("productData[index].ivp_returned_quantity_added)=",productData[1].ivp_returned_quantity_added)
                const validateReturnQunty = data.products.find((ele:any,index:any)=>{
                    return ((ele.ivp_returned_quantity+parseInt(ele.ivp_returned_quantity_added))>ele.ivp_quantity)
                })
                console.log("validateReturnQunty==",validateReturnQunty)
                if(isEmpty(validateReturnQunty)){
                data["total_amount"] = parseFloat(poGrandTotal)
                data["rt_date"] = moment().format("YYYY-MM-DD")
                dispatch(onAddSalesReturn(data, history))
                console.log("data == ", data)
                setSubmitting(false);
                resetForm({
                    values: initialValuesObj,
                    // you can also set the other form states here
                });
                }else{
                    toast.warn(`Please ensure that the return quantity of all products must be less than the purchase quantity.`)
                }
                
            }
        } else {
            toast.warn("Please add at least one product in invoice.")
        }
    };

    // useEffect(() => {
    //     calculateGrandTotal()
    // }, [gst])

    // const handleAddProduct = (setFieldValue: any) => {
    //     const index = products.length;
    //     const newItem = {
    //         id: products.length + 1,
    //         product: "",
    //         p_id: 0,
    //         ivp_quantity: 1,
    //         ivp_price: 0,
    //         ivp_discount: 0,
    //         ivp_amount: 0,
    //         ivp_installation: false
    //     }
    //     setProducts(products => [...products, newItem])
    //     setFieldValue('products[' + index + '][ivp_quantity]', 1, false)
    //     setFieldValue('products[' + index + '][ivp_price]', 0, false)
    //     setFieldValue('products[' + index + '][ivp_discount]', 0, false)
    //     setFieldValue('products[' + index + '][ivp_amount]', 0, false)
    //     setFieldValue('products[' + index + '][product]', "", false)
    // }

    // const handleDeleteClick = (index: any, setFieldValue: any) => {
    //     const productData = [...productsStateRef.current]
    //     productData.splice(index, 1);
    //     setFieldValue('products[' + index + '][ivp_quantity]', 1, false)
    //     setFieldValue('products[' + index + '][ivp_price]', 0, false)
    //     setFieldValue('products[' + index + '][ivp_discount]', 0, false)
    //     setFieldValue('products[' + index + '][ivp_amount]', 0, false)
    //     setFieldValue('products[' + index + '][product]', "", false)
    //     setProducts(productData)
    //     setTimeout(() => calculateGrandTotal(), 300)
    // };


    const handleProductAmount = (event: any, rowIndex: number, setFieldValue: any) => {
        const productData = [...productsStateRef.current];
        let updateData: any = productData.map((obj, index) => {
            if (index === rowIndex) {
                if (event.target.name.startsWith(`products[${rowIndex}][ivp_returned_quantity]`)) {
                    const value = event.target.value ? parseFloat(event.target.value) : 0;
                    const calVal = parseFloat(((value * obj.ivp_price)).toString());
                    setFieldValue('products[' + rowIndex + '][ivp_return_amount]', calVal, false)
                    return { ...obj, ivp_return_amount: calVal, ivp_returned_quantity: value }
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
            grandCount += x.ivp_return_amount;
        }
        setPOGrandTotal(parseFloat(grandCount.toString()).toFixed(2));
    }

    const selectRow: any = {
        mode: "checkbox",
    };

    const initialValuesObj = {
        invoice_number: "",
        total_amount: ""
    }

    const validationSchema = yup.object().shape({
        invoice_number: yup.object().required("Select Valid Invoice.")
    });
    
  

    const handleEstimateChange = (invObj:any, setFieldValue: Function) => {
        if (!isEmpty(invObj)) {
            setIsValid(true);
                const estProducts =  invObj.attributes.iv_products.data.map((elem: any) =>{
                    return ({
                        "id": elem.id,
                        "product": elem.attributes.product.data.id,
                        "ivp_price": elem.attributes.ivp_price,
                        "ivp_quantity": elem.attributes.ivp_quantity,
                        "ivp_returned_quantity_added":elem.attributes.ivp_returned_quantity||0,
                        "ivp_returned_quantity": 0, //elem.attributes.ivp_returned_quantity
                        "ivp_return_amount": 0 // elem.attributes.ivp_return_amount ||
                    })
                } )
                setProducts(estProducts)
                setFieldValue("products", estProducts)
                calculateGrandTotal()
            
        } else {
            setIsValid(false);
        }
    }

    // const handleProductChange = (e: any, index: any, setFieldValue: any) => {
    //     const pData = productsList.find((ele: any) => ele.id == e)
    //     setFieldValue('products[' + index + '][ivp_price]', pData.attributes.p_selling_price, false)
    //     const value = {
    //         target: {
    //             value: pData.attributes.p_selling_price,
    //             name: 'products[' + index + '][ivp_price]'
    //         }
    //     }
    //     handleProductAmount(value, index, setFieldValue);
    // }

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Returns | Calgary Carpet Empire</title>
                </MetaTags>
                <Container fluid>
                    <Breadcrumbs title="Sales" breadcrumbItem={"Create Return"} />
                    <Row>
                        <Col xs={12}>
                            {/* import TextualInputs */}
                            <Card>
                                <CardHeader className="d-flex flex-column align-items-end">
                                    <Link to="/sales/return" className="btn btn-sm btn-soft-secondary"> <i className="mdi mdi-window-close align-middle"></i></Link>
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
                                                                placeholder="product ID"
                                                                required
                                                            />
                                                        </React.Fragment>
                                                    ),
                                                },
                                                {
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
                                                                // onChange={(e: any) => handleProductChange(e, rowIndex, setFieldValue)}
                                                                options={productsList.map(({ id, attributes }: any) => ({ value: id, label: attributes.p_name + '-' + attributes.p_color }))}
                                                                isDisabled={true}
                                                            />
                                                          
                                                        </React.Fragment>
                                                    ),
                                                    headerAttrs: { width: 180 }
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
                                                                step="0.01"
                                                                prepend="$"
                                                                min={0.00}
                                                                required
                                                                disabled={true}
                                                                // onBlur={(e: any) => handleProductAmount(e, rowIndex, setFieldValue)}
                                                            />
                                                        </React.Fragment>
                                                    ),
                                                    headerAttrs: { width: 150 },
                                                },
                                                {
                                                    dataField: 'ivp_quantity',
                                                    text: 'Invoice Quantity',
                                                    // eslint-disable-next-line react/display-name
                                                    formatter: (cellContent: any, product: any, rowIndex: any) => (
                                                        <React.Fragment>
                                                            <Field
                                                                name={'products[' + rowIndex + '][ivp_quantity]'}
                                                                type="number"
                                                                placeholder="Quantity"
                                                                required
                                                                disabled={true}
                                                                // onBlur={(e: any) => handleProductAmount(e, rowIndex, setFieldValue)}
                                                            />
                                                        </React.Fragment>
                                                    ),
                                                    headerAttrs: { width: 120 },
                                                },
                                              
                                                {
                                                    dataField: 'ivp_returned_quantity',
                                                    text: 'Return Quantity',
                                                    headerAttrs: { width: 200 },
                                                    // eslint-disable-next-line react/display-name
                                                    formatter: (cellContent: any, product: any, rowIndex: any) =>
                                                        <React.Fragment>
                                                            <Field
                                                                name={'products[' + rowIndex + '][ivp_returned_quantity]'}
                                                                type="number"
                                                                onBlur={(e: any) => handleProductAmount(e, rowIndex, setFieldValue)}
                                                                placeholder="" 
                                                                disabled={product.ivp_quantity==product.ivp_returned_quantity_added?true:false}
                                                                />
                                                               Previously returned quantity: {product.ivp_returned_quantity_added}
                                                        </React.Fragment>
                                                },
                                                {
                                                    dataField: 'ivp_return_amount',
                                                    text: 'Amount',
                                                    headerAttrs: { width: 120 },
                                                    // eslint-disable-next-line react/display-name
                                                    formatter: (cellContent: any, product: any, rowIndex: any) =>
                                                        <React.Fragment>
                                                            <Field
                                                                name={'products[' + rowIndex + '][ivp_return_amount]'}
                                                                type="number"
                                                                step="0.01"
                                                                prepend="$"
                                                                min={0.00}
                                                                placeholder=""
                                                                disabled={true} />
                                                        </React.Fragment>
                                                },

                                                // // columns follow dataField and text structure
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
                                                //             <i onClick={() => handleDeleteClick(rowIndex, setFieldValue)} className="mdi mdi-window-close align-middle btn btn-sm btn-soft-danger"></i>
                                                //         </React.Fragment>
                                                //     ),
                                                // }
                                            ];
                                            useEffect(() => {
                                                setFieldValue("iv_date", new Date().toISOString().slice(0, 10), false)
                                                setFieldValue("iv_installation_charges", "0", false)
                                            }, [])
                                            return (
                                                <>
                                                    <Row className="mb-3 ">
                                                        <Col md={12} className="mr-10">
                                                            <SelectField
                                                                className="form-group"
                                                                label="Invoice #"
                                                                name="invoice_number"
                                                                isMulti={false}
                                                                onChange={(e) => handleEstimateChange(e, setFieldValue)}
                                                                placeholder={"Select Invoice #"}
                                                                required
                                                                options={invoices.map((ele: any) => ({ value: ele, label: ele.attributes.iv_number }))}
                                                                isDisabled={id != undefined ? true : false}
                                                            />
                                                        </Col>
                                                    </Row>
                                                    {isValid &&
                                                        <React.Fragment>
                                                            <Row>
                                                                <Col>
                                                                    <Card>
                                                                        <CardHeader className="justify-content-between d-flex align-items-center">
                                                                            <h4 className="card-title" >Invoice Products</h4>
                                                                            {/* <i onClick={() => handleAddProduct(setFieldValue)} className="mdi mdi-plus align-right btn btn-lg btn-soft-primary mr-10"  ></i> */}
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
                                                                                            {/* <tr>
                                                                                                <th scope="row" colSpan={4} className="border-0 text-end">GST</th>
                                                                                                <td className="border-0 text-end">
                                                                                                    <h6 className="m-0 fw-semibold">{gst}%</h6>
                                                                                                </td>
                                                                                            </tr> */}
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
                                                        </React.Fragment>
                                                    }

                                                    <CardFooter>
                                                        <div className="text-end">
                                                            <Button
                                                                // disabled={!isValid}
                                                                type="submit"
                                                                className="btn btn-success save-user w-sm me-4">
                                                                Save
                                                            </Button>
                                                            <Link to="/sales/return">
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

export default CreateOrEditReturn;