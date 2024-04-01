import React, { useEffect, useRef, useState } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import {
    Card,
    CardBody,
    Col,
    Container,
    Row,
    CardHeader,
    Button,
    CardFooter
} from "reactstrap";

import Breadcrumbs from "../../../components/Common/Breadcrumb";

import { RadioGroup, Form, Radio, Field } from '@availity/form';
import * as yup from 'yup';
import '@availity/yup';
import { SelectField } from "@availity/select";
import { useDispatch, useSelector } from "react-redux";
import {
    getActiveProducts as onGetActiveProducts,
    addNewAdjustment as OnAddNewAdjustment,
} from "../../../slices/thunks";
import { LoadingButton } from "@availity/button";
import { toast } from "react-toastify";

const CreateOrEditInventoryAdjmt = () => {
    const dispatch = useDispatch();
    const initialValuesObj = {
        ad_discount: "",
        product: "",
        ad_action: "add",
        ad_p_quantity: "",
        ad_reason: ""
    }

    const [isLoading, setIsLoading] = useState(false);
     const { products, alerts, productAdjmtDetail } = useSelector((state: any) => ({
        products: state.products.products,
        alerts: state.adjustment.alerts,
        productAdjmtDetail: state.adjustment.productAdjmtDetail
    }));
    const validationSchema = yup.object().shape({
        product: yup.string().required("Select Product Name."),
        ad_action: yup.string().required("Select Adjustment Action."),
        ad_p_quantity: yup.number().required("Enter Adjustment Quantity.")
    });

    useEffect(() => {
        dispatch(onGetActiveProducts())
    }, [dispatch])

    const handleValidFormSubmit = async (values: any, action: any) => {
        const ValueData = Object.assign({}, values)
        const product = products.find(({ id }: any) => id == values.product)
        if(values.ad_action=="remove"){
            if(product.attributes.p_opening_stock<values.ad_p_quantity){
                toast.warn(`Product quantity can't be greater than product opening stock(Current Stock :-${product.attributes.p_opening_stock})`)
                return; 
            }else{
                ValueData['p_opening_stock'] = parseInt(product.attributes.p_opening_stock) - parseInt(values.ad_p_quantity)
            }
        }
        if(values.ad_action=="add"){
            ValueData['p_opening_stock'] = parseInt(product.attributes.p_opening_stock) + parseInt(values.ad_p_quantity)
        }
        setIsLoading(true)
        await dispatch(OnAddNewAdjustment(ValueData));
        await action.setSubmitting(false);
        await action.resetForm({
            values: initialValuesObj,
            // you can also set the other form states here
        });
        setIsLoading(false)
    };

    return (
        <React.Fragment>

            <div className="page-content">
                <MetaTags>
                    <title>Inventory Adjustments | Calgary Carpet Empire</title>
                </MetaTags>
                <Container fluid>

                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Inventory" breadcrumbItem={"Create Inventory Adjustments"} />
                    <Row>
                        <Col lg="12">
                            <Card>
                                <Form
                                    onSubmit={(values: any, action: any) => {
                                        handleValidFormSubmit(values, action)
                                    }}
                                    initialValues={initialValuesObj}
                                    validationSchema={validationSchema}>
                                    <CardHeader className="d-flex  flex-column align-items-end">
                                        <Link to="/inventory/inventory-adjustment">
                                            <Button color="primary" className="mb-4">
                                                Product Adjustment list
                                            </Button>
                                        </Link>
                                    </CardHeader>
                                    <CardBody>
                                        <Row className="mb-3 text-center ms-6">
                                            <Col>
                                                <div className="mb-3">
                                                    <RadioGroup inline name="ad_action" >
                                                        <Radio label="Add to inventory" value="add" />
                                                        <Radio label="Deduct from inventory" value="remove" />
                                                    </RadioGroup>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col >
                                                <SelectField
                                                    label="Product Name"
                                                    name="product"
                                                    isMulti={false}
                                                    placeholder={"Select Product"}
                                                    required
                                                    options={products.map(({ id, attributes }: any) => ({ value: id, label: attributes.p_name }))}
                                                />
                                            </Col>
                                            <Col >
                                                <div className="form-group">
                                                    <Field
                                                        name="ad_p_quantity"
                                                        type="number"
                                                        label="Product Quantity"
                                                        className={'form-control'}
                                                        required
                                                        placeholder="Enter Product Quantity"
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col >
                                                <Field
                                                    name="ad_reason"
                                                    type="text"
                                                    label="Reason"
                                                />
                                            </Col>
                                            <Col >
                                                <Field
                                                    name="ad_discount"
                                                    type="text"
                                                    label="Discount/Refund"
                                                />
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter>
                                        <div className="text-end mt-4">
                                            {/* <Button type="button" className="btn btn-light w-sm  me-4" >Close</Button> */}
                                            <LoadingButton block className="btn btn-success save-user w-md"  isLoading={isLoading} >
                                                Save
                                            </LoadingButton>
                                            {/* disabled={isLoading} isLoading={isLoading} */}
                                            {/* <Button
                                                type="submit"
                                               
                                                className="btn btn-success save-user w-md">
                                                {!isLoading && <span className="spinner-border spinner-border-sm mr-1"></span>} 
                                                 Save
                                            </Button> */}
                                        </div>
                                    </CardFooter>
                                </Form>

                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment >
    );
};

export default CreateOrEditInventoryAdjmt;
