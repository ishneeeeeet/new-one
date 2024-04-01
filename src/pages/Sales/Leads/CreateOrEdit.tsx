import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import {
    Card,
    CardBody,
    Col,
    Container,
    Row,
    Label,
    CardHeader,
    CardFooter,
    Modal,
    ModalHeader,
    ModalBody
} from "reactstrap";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import { Form, Field } from "@availity/form";
import { SelectField } from "@availity/select";
import * as yup from 'yup';
import { get, isEmpty } from "lodash";
import { LoadingButton } from "@availity/button";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
    addLead as onAddLead,
    getActiveCustomers as onGetActiveCustomers,
    getLeadDetailsById as onGetLeadDetailsById,
    updateLead as onUpdateLead,
    addNewCustomer as onAddNewCustomer
} from "src/slices/thunks";
import { useParams } from "react-router";
import AddEditCustomer from "../Customers/addEditCustomer";


interface CreateOrEditProps {
    history: any
}

const CreateOrEdit = ({ history }: CreateOrEditProps) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const mode = (id) ? "EDIT" : "CREATE"
    const [selectedFiles, setselectedFiles] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [modal, setModal] = useState<boolean>(false);

    let defaultValues = {
        ld_customer: "",
        ld_field_rep: "",
        ld_notes: "",
        ld_address: "",
        ld_status: "PENDING",
        ld_updated_by: "User"
    };

    const validationSchema = yup.object().shape({
        ld_customer: yup.string().required("Please Select Customer."),
        ld_field_rep: yup.string().required("Please Enter Field Representative Name."),
        ld_address: yup.string().required("Please Enter Installation Address.")
    });

    const { leadDetails, customers } = useSelector((state: any) => ({
        leadDetails: state.leads.leadDetails,
        customers: state.customers.activeCustomerList
    }));



    function handleAcceptedFiles(files: any) {
        files.map((file: any) =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
                formattedSize: formatBytes(file.size),
            })
        );
        setselectedFiles(files);
    }

    const handleValidCustomerFormSubmit = async (values: any) => {
        setIsLoading(true);
        // save new customer
        dispatch(onAddNewCustomer(values));
        setIsLoading(false);
        setModal(!modal);
    };

    const handleValidFormSubmit = (values: any) => {
        console.log("====values==", values)
        const leadData = Object.assign({}, values);
        setIsLoading(true)
        if (mode === "CREATE") {
            dispatch(onAddLead(leadData, history))
            setIsLoading(false)
        } else {
            leadData.ld_number = leadDetails.attributes.ld_number
            leadData.id = leadDetails.id
            dispatch(onUpdateLead(leadData, history))
            setIsLoading(false)
        }
    };

    useEffect(() => {
        dispatch(onGetActiveCustomers())
    }, [dispatch])

    useEffect(() => {
        if (id) {
            dispatch(onGetLeadDetailsById(id))
        }
    }, [id])

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

    return (
        <React.Fragment>
            <Modal isOpen={modal} toggle={() => setModal(false)}>
                <ModalHeader toggle={() => setModal(false)} tag="h4">
                    {"Add Customer"}
                </ModalHeader>
                <ModalBody>
                    <AddEditCustomer
                        isLoading={isLoading}
                        customerEvent={{}}
                        handleValidFormSubmit={handleValidCustomerFormSubmit}
                        isEdit={false}
                        handleShow={() => setModal(false)}
                    />
                </ModalBody>
            </Modal>
            <div className="page-content">
                <MetaTags>
                    <title>Leads | Calgary Carpet Empire</title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Inventory" breadcrumbItem={mode === "CREATE" ? "Create Lead" : mode === "EDIT" ? "Edit Lead" : "View Lead"} />
                    <Row>
                        <Col lg="12">
                            <Card>
                                <Form onSubmit={(values: any, action: any) => {
                                    handleValidFormSubmit(values);
                                }}
                                    initialValues={defaultValues}
                                    validationSchema={validationSchema}>
                                    {({ setFieldValue }) => {
                                        useEffect(() => {
                                            if (mode === "EDIT" && leadDetails && !isEmpty(leadDetails)) {
                                                defaultValues = {
                                                    ...leadDetails.attributes,
                                                    id: leadDetails.id,
                                                    ld_customer: get(leadDetails, 'attributes.ld_customer.data.id', ''),
                                                }
                                                setFieldValue("ld_customer", get(leadDetails, 'attributes.ld_customer.data.id', ''))
                                                setFieldValue("ld_field_rep", leadDetails.attributes.ld_field_rep)
                                                setFieldValue("ld_address", leadDetails.attributes.ld_address)
                                                setFieldValue("ld_notes", leadDetails.attributes.ld_notes)
                                                setFieldValue("ld_notes", leadDetails.attributes.ld_notes)
                                            }
                                        }, [leadDetails])
                                        return (
                                            <>  <CardHeader className="d-flex  flex-column align-items-end">
                                                <Link to="/sales/leads" className="btn btn-sm btn-soft-secondary"> <i className="mdi mdi-window-close align-middle"></i></Link>
                                            </CardHeader>
                                                <CardBody>
                                                    <Row className="mb-3 mt-3 mt-xl-0">
                                                        <Label htmlFor="lead-customer-input" className="col-md-2 col-form-label">Customer<span className="text-danger">*</span></Label>
                                                        <Col md={9}>
                                                            <SelectField
                                                                className="form-group"
                                                                name="ld_customer"
                                                                isMulti={false}
                                                                placeholder={"Select Customer"}
                                                                required
                                                                options={customers.map(({ id, attributes }: any) => ({ value: id, label: attributes.c_name }))}
                                                            />
                                                        </Col>
                                                        <Col md={1}>
                                                            <i onClick={() => setModal(true)} className="mdi mdi-plus align-right btn btn-md btn-soft-primary mr-2"></i>
                                                        </Col>
                                                    </Row>

                                                    <Row className="mb-3">
                                                        <Label htmlFor="lead-field-rep-input" className="col-md-2 col-form-label">Field Rep<span className="text-danger">*</span></Label>
                                                        <Col md={10}>
                                                            <Field className="form-control" type="text" placeholder="Enter Field Representative Name" name="ld_field_rep" id="lead-field-rep-input" required />
                                                        </Col>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Label htmlFor="lead-address-input" className="col-md-2 col-form-label">Installation Address<span className="text-danger">*</span></Label>
                                                        <Col md={10}>
                                                            <Field className="form-control" type="textarea" placeholder="Enter Installation Address" name="ld_address" id="lead-address-input" required />
                                                        </Col>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Label htmlFor="lead-notes-input" className="col-md-2 col-form-label">Notes</Label>
                                                        <Col md={10}>
                                                            <Field className="form-control" type="textarea" placeholder="Enter Additional Notes" name="ld_notes" id="lead-notes-input" />
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <div className="mb-3">
                                                            <Label htmlFor="lead-file-input" className="col-md-4 col-form-label">Attach File(s) </Label>
                                                            <Field
                                                                name="lead-file-input"
                                                                label=""
                                                                type="file"
                                                                placeholder="Enter Valid File"
                                                            />
                                                        </div>
                                                    </Row>
                                                </CardBody>

                                                <CardFooter >
                                                    <div className="text-end mt-4">
                                                        <Link to="/sales/leads">
                                                            <button type="button" className="btn btn-light w-sm  me-4">Close</button>
                                                        </Link>
                                                        <LoadingButton block className="btn btn-success save-user w-md" disabled={isLoading} isLoading={isLoading} >
                                                            Save
                                                        </LoadingButton>
                                                    </div>
                                                </CardFooter></>)
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
