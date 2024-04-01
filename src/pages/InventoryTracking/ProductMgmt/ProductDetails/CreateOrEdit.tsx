import React, { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import Dropzone from "react-dropzone";
import { Link } from "react-router-dom";
import {
    Card,
    CardBody,
    Col,
    Row,
    Label,
    CardHeader,
    Button,
    CardFooter,
    Container,
} from "reactstrap";
import { Form, Field } from "@availity/form";
import { useDispatch, useSelector } from "react-redux";
import {
    getProductDetailsById as onGetProductDetailsById,
    addNewProduct as onAddNewProduct,
    updateProduct as onUpdateProduct,
    getVendors as onGetVendors,
    addNewVendor as onAddNewVendor,
    getCategories as onGetCategories,
    addNewCategory as onAddNewCategory,
    addNewUnit as onAddNewUnit,
    getUnits as onGetUnits
} from "../../../../slices/thunks";
import Breadcrumbs from "../../../../components/Common/Breadcrumb";
import { SelectField } from "@availity/select";
import * as yup from 'yup';
import '@availity/yup';
import { get, isEmpty } from 'lodash';
import { LoadingButton } from "@availity/button";
import { useParams } from "react-router";


const CreateOrEdit = ({ history }: any) => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const mode = (id) ? "EDIT" : "CREATE"
    
    const { categories, vendors, units, productDetails } = useSelector((state: any) => ({
        categories: state.categories.categories,
        vendors: state.vendors.vendorList,
        units: state.units.units,
        productDetails: state.products.productDetails
    }));

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [selectedFiles, setselectedFiles] = useState<any>([]);

    let defaultValues: any = {
        p_name: "",
        p_description: "",
        p_sku: "",
        p_category_id: "",
        p_vendor_id: "",
        p_unit_id: "",
        p_dimension: "",
        p_selling_price: "",
        p_upc: "",
        p_color: "",
        p_reorder_level: "",
        p_opening_stock: 1
    }


    const handleSubmit = async (values: any) => {
        setIsLoading(true)
        console.log("values === ", values)
        if (mode === "CREATE") {
            const productData = { ...values, p_status: true, p_updated_by: "User" }
            await dispatch(onAddNewProduct(productData));
        } else {
            const productData = { ...values, p_status: true, p_updated_by: "User", id: productDetails.id }
            await dispatch(onUpdateProduct(productData));
        }
        setIsLoading(false)
        history.push("/inventory/products")
    }

    useEffect(() => {
        if (id) {
            dispatch(onGetProductDetailsById(id))
        }
    }, [id])

    function handleAcceptedFiles(files: any) {
        files.map((file: any) =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
                formattedSize: formatBytes(file.size),
            })
        );
        setselectedFiles(files);
    }

    /**
     * Formats the size
     */
    function formatBytes(bytes: any, decimals = 2) {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    }

    // Handled added custom menu option
    const addNewOption = async (type: string, optionText: string, setFieldValue: any) => {
        if (type === "CATEGORIES") {
            const resp: any = await dispatch(onAddNewCategory({ pc_name: optionText, pc_description: '', pc_status: true, pc_updated_by: "user" }));
            setFieldValue('p_category_id', resp?.payload.data.id)
        } else if (type === "VENDORS") {
            const resp: any = await dispatch(onAddNewVendor({ v_name: optionText, v_description: '', v_address: '', v_status: true, v_updated_by: "user" }));
            setFieldValue('p_vendor_id', resp?.payload.data.id)
        } else if (type === "UNITS") {
            const resp: any = await dispatch(onAddNewUnit({ u_name: optionText, u_status: true, u_updated_by: "user" }));
            setFieldValue('p_unit_id', resp?.payload.data.id)
        }
    }

    const validationSchema = yup.object().shape({
        p_name: yup.string().required("Please Enter Product Title."),
        p_dimension: yup.string().required("Please Enter Product Dimension."),
        p_selling_price: yup.number().required("Please Enter Product Selling Price").min(0, "Selling Price must be greater than or equal to 0"),
        p_color: yup.string().required("Please Enter Product Color."),
        p_opening_stock: yup.number().min(1, "Please Enter at least 1 quantity."),
        p_reorder_level: yup.number().required("Please Enter Product Reorder Level.").min(0, "Product Reorder Level must be greater than or equal to 0"),
        p_category_id: yup.string().required("Please Select Product Category."),
        p_vendor_id: yup.string().required("Please Select Product Vendor."),
        p_unit_id: yup.string().required("Please Select Product Unit.")
    });

    useEffect(() => {
        dispatch(onGetVendors())
        dispatch(onGetCategories())
        dispatch(onGetUnits())
    }, [dispatch])

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Products Management | Calgary Carpet Empire</title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Inventory" breadcrumbItem={mode === "CREATE" ? "Create Product" : "Edit Product"} />
                    <Row>
                        <Col lg="12">
                            <Card>
                                <Form
                                    onSubmit={(values: any, action: any) => {
                                        handleSubmit(values)
                                    }}
                                    initialValues={defaultValues}
                                    validationSchema={validationSchema}>
                                    {({ setFieldValue }) => {
                                        useEffect(() => {
                                            if (mode === "EDIT" && productDetails && !isEmpty(productDetails)) {
                                                defaultValues = {
                                                    ...productDetails.attributes,
                                                    id: productDetails.id,
                                                    p_category_id: get(productDetails, 'attributes.p_category_id.data.id', ''),
                                                    p_unit_id: get(productDetails, 'attributes.p_unit_id.data.id', ''),
                                                    p_vendor_id: get(productDetails, 'attributes.p_vendor_id.data.id', ''),
                                                }
                                                setFieldValue("p_name", productDetails.attributes.p_name)
                                                setFieldValue("p_category_id", get(productDetails, 'attributes.p_category_id.data.id', ''))
                                                setFieldValue("p_description", productDetails.attributes.p_description)
                                                setFieldValue("p_vendor_id", get(productDetails, 'attributes.p_vendor_id.data.id', ''))
                                                setFieldValue("p_dimension", productDetails.attributes.p_dimension)
                                                setFieldValue("p_unit_id", get(productDetails, 'attributes.p_unit_id.data.id', ''))
                                                setFieldValue("p_selling_price", productDetails.attributes.p_selling_price)
                                                setFieldValue("p_color", productDetails.attributes.p_color)
                                                setFieldValue("p_reorder_level", productDetails.attributes.p_reorder_level)
                                                setFieldValue("p_opening_stock", productDetails.attributes.p_opening_stock)
                                                setFieldValue("p_opening_stock_price", productDetails.attributes.p_opening_stock_price)
                                                setFieldValue("p_sku", productDetails.attributes.p_sku)
                                                setFieldValue("p_upc", productDetails.attributes.p_upc)
                                            }
                                        }, [productDetails])
                                        return (<>
                                            <CardHeader className="d-flex  flex-column align-items-end">
                                                <Link to="/inventory/products" className="btn btn-sm btn-soft-secondary"> <i className="mdi mdi-window-close align-middle"></i></Link>
                                            </CardHeader>
                                            <CardBody>
                                                <Row>
                                                    <Col xl={6}>
                                                        <div>
                                                            <Row className="mb-3">
                                                                <Col md={12}>
                                                                    <Field className="form-control" label="Title" type="text" placeholder="Enter Product Title" name="p_name" id="product-name-input" required />
                                                                </Col>
                                                            </Row>
                                                            <Row className="mb-3">
                                                                <Col md={12}>
                                                                    <Field className="form-control" label="Description" type="text" placeholder="Enter Product Description" name="p_description" id="product-desc-input" />
                                                                </Col>
                                                            </Row>
                                                            <Row className="mb-3">
                                                                <Col md={12}>
                                                                    <Field className="form-control" label="Dimension" type="text" placeholder="Enter Product Dimension" id="product-dimension" name="p_dimension" required />
                                                                </Col>
                                                            </Row>
                                                            <Row className="mb-3">
                                                                <Col md={12}>
                                                                    <Field className="form-control" label="Selling Price" type="number" step="0.01" prepend="$" placeholder="Enter Product Selling Price" id="product-sp" name="p_selling_price" min={0} required />
                                                                </Col>
                                                            </Row>
                                                            <Row className="mb-3">
                                                                <Col md={12}>
                                                                    <Field className="form-control" label="Reorder Level" type="number" placeholder="Enter Product Reorder Level" id="product-reorder-level-input" name="p_reorder_level" min={0} required />
                                                                </Col>
                                                            </Row>
                                                            <Row className="mb-3">
                                                                <Col md={12}>
                                                                    <Label htmlFor="product-image-input">Image (Formats: jpg, jpeg, png, gif | Size: Max. 5 files of max. 2 MB each)</Label>
                                                                    <Dropzone
                                                                        onDrop={acceptedFiles => {
                                                                            handleAcceptedFiles(acceptedFiles);
                                                                        }}
                                                                    >
                                                                        {({ getRootProps, getInputProps }) => (
                                                                            <div className="dropzone">
                                                                                <div
                                                                                    className="dz-message needsclick"
                                                                                    {...getRootProps()}
                                                                                >
                                                                                    <input {...getInputProps()} />
                                                                                    <div className="mb-3">
                                                                                        <i className="display-4 text-muted uil uil-cloud-upload"></i>
                                                                                    </div>
                                                                                    <h4>Drop files here or click to upload.</h4>
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </Dropzone>
                                                                    <div className="dropzone-previews mt-3" id="file-previews-product">
                                                                        {selectedFiles.map((f: any, i: number) => {
                                                                            return (
                                                                                <Card
                                                                                    className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                                                    key={i + "-file"}
                                                                                >
                                                                                    <div className="p-2">
                                                                                        <Row className="align-items-center">
                                                                                            <Col className="col-auto">
                                                                                                <img
                                                                                                    data-dz-thumbnail=""
                                                                                                    height="80"
                                                                                                    className="avatar-sm rounded bg-light"
                                                                                                    alt={f.name}
                                                                                                    src={f.preview}
                                                                                                />
                                                                                            </Col>
                                                                                            <Col>
                                                                                                <Link
                                                                                                    to="#"
                                                                                                    className="text-muted font-weight-bold"
                                                                                                >
                                                                                                    {f.name}
                                                                                                </Link>
                                                                                                <p className="mb-0">
                                                                                                    <strong>{f.formattedSize}</strong>
                                                                                                </p>
                                                                                            </Col>
                                                                                        </Row>
                                                                                    </div>
                                                                                </Card>
                                                                            );
                                                                        })}
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Col>
                                                    <div className="col-xl-6">
                                                        <Row className="mb-3 mt-3 mt-xl-0">
                                                            <Col md={12}>
                                                                <SelectField
                                                                    label="Category"
                                                                    name="p_category_id"
                                                                    isMulti={false}
                                                                    placeholder={"Select Category"}
                                                                    required
                                                                    options={categories.map(({ id, attributes }: any) => ({ value: id, label: attributes.pc_name }))}
                                                                    creatable={true}
                                                                    onChange={(evt: any) => { if (typeof evt !== 'number') addNewOption("CATEGORIES", evt, setFieldValue) }}
                                                                />
                                                            </Col>
                                                        </Row>
                                                        <Row className="mb-3 mt-3 mt-xl-0">
                                                            <Col md={12}>
                                                                <SelectField
                                                                    label="Vendor"
                                                                    name="p_vendor_id"
                                                                    isMulti={false}
                                                                    placeholder={"Select Vendor"}
                                                                    required
                                                                    creatable={true}
                                                                    options={vendors.map(({ id, attributes }: any) => ({ value: id, label: attributes.v_name }))}
                                                                    onChange={(evt: any) => { if (typeof evt !== 'number') addNewOption("VENDORS", evt, setFieldValue) }}
                                                                />
                                                            </Col>
                                                        </Row>
                                                        <Row className="mb-3 mt-3 mt-xl-0">
                                                            <Col md={12}>
                                                                <SelectField
                                                                    label="Unit"
                                                                    name="p_unit_id"
                                                                    isMulti={false}
                                                                    placeholder={"Select Unit"}
                                                                    required
                                                                    creatable={true}
                                                                    options={units.map(({ id, attributes }: any) => ({ value: id, label: attributes.u_name }))}
                                                                    onChange={(evt: any) => { if (typeof evt !== 'number') addNewOption("UNITS", evt, setFieldValue) }}
                                                                />
                                                            </Col>
                                                        </Row>
                                                        <Row className="mb-3">
                                                            <Col md={12}>
                                                                <Field className="form-control" label="Color" type="text" placeholder="Enter Color Name" id="product-color-input" name="p_color" required />
                                                            </Col>
                                                        </Row>
                                                        <Row className="mb-3">
                                                            <Col md={12}>
                                                                <Field className="form-control" label="Opening Stock" type="number" min={1} placeholder="Enter Product Opening Stock" id="product-opening-stock-input" name="p_opening_stock" required />
                                                            </Col>
                                                        </Row>
                                                        <Row className="mb-3">
                                                            <Col md={12}>
                                                                <Field className="form-control" label="Opening Stock Price" type="number" step="0.01" min={0} prepend="$" placeholder="Enter Product Opening Stock Price" id="product-opening-stock-price-input" name="p_opening_stock_price" />
                                                            </Col>
                                                        </Row>
                                                        <Row className="mb-3">
                                                            <Col md={12}>
                                                                <Field className="form-control" label="SKU #" type="text" placeholder="Enter Product SKU#" id="product-sku-input" name="p_sku" />
                                                            </Col>
                                                        </Row>
                                                        <Row className="mb-3">
                                                            <Col md={12}>
                                                                <Field className="form-control" label="UPC #" type="text" placeholder="Enter Product UPC #" id="product-upc-input" name="p_upc" />
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Row>
                                            </CardBody>
                                            <CardFooter>
                                                <div className="text-end mt-4">
                                                    <Link to="/inventory/products">
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
