import React, { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import {
    Card,
    CardBody,
    Col,
    Container,
    Row,
    Input,
    Label,
    CardHeader,
    Button,
    CardFooter
} from "reactstrap";
import Breadcrumbs from "../../../../components/Common/Breadcrumb";
import { Form, Field } from "@availity/form";
import { SelectField } from "@availity/select";
import { get, isEmpty } from 'lodash';
import * as yup from 'yup';
import '@availity/yup';
import { useDispatch, useSelector } from "react-redux";
import {
    getActiveProducts as onGetActiveProducts,
    getProductGrpDetails as onGetProductGrpDetails,
    addNewProductGrp as onAddNewProductGrp,
    updateProductGrp as onUpdateProductGrp
} from "../../../../slices/thunks";
import { LoadingButton } from "@availity/button";
import { useParams } from "react-router";
import { Link } from "react-router-dom";



const CreateOrEdit = ({ history }: any) => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const mode = (id) ? "EDIT" : "CREATE"
    const [isLoading, setIsLoading] = useState<boolean>(false)


    let defaultValues: any = {
        g_name: "",
        g_description: "",
        g_product_ids: []
    }

    const { products, productGrpDetails } = useSelector((state: any) => ({
        products: state.products.products,
        productGrpDetails: state.productGrps.productGrpDetails
    }));

    useEffect(() => {
        dispatch(onGetActiveProducts());
    }, [dispatch]);

    useEffect(() => {
        if (id) {
            dispatch(onGetProductGrpDetails(id));
        }
    }, [id])

    const handleSubmit = async (values: any) => {
        setIsLoading(true)
        if (mode === "CREATE") {
            console.log("values === ", values)
            const productGrpData = { ...values, g_status: true, g_updated_by: "User" }
            await dispatch(onAddNewProductGrp(productGrpData));
        } else {
            console.log("values === ", values)
            const productGrpData = { ...values, g_status: true, g_updated_by: "User", id: productGrpDetails.id }
            await dispatch(onUpdateProductGrp(productGrpData));
        }
        setIsLoading(false)
        history.push("/inventory/product-groups")
    }

    const validationSchema = yup.object().shape({
        g_name: yup.string().required("Please Enter Product Group Title."),
        g_product_ids: yup.array().min(2, `Choose at least 2 Products`).required("Please Select Products."),
    });


    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Product Groups | Calgary Carpet Empire</title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Inventory" breadcrumbItem={mode === "CREATE" ? "Create Product Group" : "Edit Product Group"} />
                    <Row>
                        <Col lg={"12"}>
                            <Card>
                                <Form onSubmit={(values: any, action: any) => {
                                    handleSubmit(values)
                                }}
                                    initialValues={defaultValues}
                                    validationSchema={validationSchema}>
                                    {({ setFieldValue }) => {
                                        useEffect(() => {
                                            if (mode === "EDIT" && productGrpDetails && !isEmpty(productGrpDetails)) {
                                                defaultValues = {
                                                    ...productGrpDetails.attributes,
                                                    id: productGrpDetails.id,
                                                    g_product_ids: get(productGrpDetails, 'attributes.g_product_ids.data', []).map((elem: any) => elem.id)
                                                }

                                                setFieldValue("g_name", productGrpDetails.attributes.g_name)
                                                setFieldValue("g_product_ids", defaultValues.g_product_ids)
                                                setFieldValue("g_description", productGrpDetails.attributes.g_description)
                                            }
                                        }, [productGrpDetails])
                                        return (<>
                                            <CardHeader className="d-flex  flex-column align-items-end">
                                                <Link to="/inventory/product-groups" className="btn btn-sm btn-soft-secondary"> <i className="mdi mdi-window-close align-middle"></i></Link>
                                            </CardHeader>
                                            <CardBody>
                                                <Row>
                                                    <Row className="mb-3 mt-3 mt-xl-0">
                                                        <Col>
                                                            <Field className="form-control" type="text" label="Title" placeholder="Enter Product Group Title" id="product-grp-title-input" name="g_name" errorMessage="Enter Product Group Title" required />
                                                        </Col>
                                                    </Row>

                                                    <Row className="mb-3">
                                                        <Col>
                                                            <Field className="form-control" type="text" label="Description" placeholder="Enter Product Group Description" name="g_description" id="product-grp-Description-input" />
                                                        </Col>
                                                    </Row>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <SelectField
                                                            label="Products"
                                                            name="g_product_ids"
                                                            isMulti={true}
                                                            placeholder={"Select Products"}
                                                            required
                                                            options={products.map(({ id, attributes }: any) => ({ value: id, label: attributes.p_name }))}
                                                            clearButtonText={'Clear'}
                                                        />
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                            <CardFooter>
                                                <div className="text-end mt-4">
                                                    <Link to="/inventory/product-groups">
                                                        <button type="button" className="btn btn-light w-sm  me-4">Close</button>
                                                    </Link>
                                                    <LoadingButton block className="btn btn-success save-user w-md" disabled={isLoading} isLoading={isLoading} >
                                                        Save
                                                    </LoadingButton>
                                                </div>
                                            </CardFooter>
                                        </>)
                                    }}
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment >
    );
};

export default CreateOrEdit;
